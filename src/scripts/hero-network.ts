/**
 * Living node network for the home hero, drawn with OGL (WebGL).
 *
 * Decorative and progressive: the hero is complete with its static image.
 * Nodes drift slowly; nearby nodes link up, and light pulses hop from node to
 * node along those links, forming short chains. Rendering runs only while the
 * hero is on screen and the tab is visible, and stops when the user switches
 * to reduced motion or the WebGL context is lost.
 */
import { Geometry, Mesh, Program, Renderer, Transform } from "ogl";

interface NetworkNode {
  /** Resting position, as a fraction of the canvas size. */
  baseX: number;
  baseY: number;
  /** Slow drift around the resting position (CSS px, radians per second). */
  ampX: number;
  ampY: number;
  freqX: number;
  freqY: number;
  phaseX: number;
  phaseY: number;
  /** Point size in CSS px. */
  size: number;
  /** Resting glow (hubs glow a little) and the glow left by a passing pulse. */
  glow: number;
  heat: number;
  x: number;
  y: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  duration: number;
  hops: number;
}

const MAX_NODES = 96;
const MAX_PULSES = 6;
const MAX_EDGES = 480;
const MAX_HOPS = 7;
/** Pulse travel speed in CSS px per second. */
const PULSE_SPEED = 170;

// Brand palette on dark: sand nodes, warm light for pulses, ember links.
const NODE_COLOR = [0.91, 0.8, 0.76];
const PULSE_COLOR = [1, 0.87, 0.72];
const LINK_COLOR = [0.86, 0.47, 0.39];

const POINT_VERTEX = /* glsl */ `
attribute vec2 position;
attribute float aSize;
attribute float aHeat;
uniform float uDpr;
varying float vHeat;
void main() {
  vHeat = aHeat;
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = aSize * uDpr;
}`;

const POINT_FRAGMENT = /* glsl */ `
precision mediump float;
uniform vec3 uCool;
uniform vec3 uHot;
varying float vHeat;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  float alpha = a * a * mix(0.5, 1.0, vHeat);
  gl_FragColor = vec4(mix(uCool, uHot, vHeat) * alpha, alpha);
}`;

const LINK_VERTEX = /* glsl */ `
attribute vec2 position;
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const LINK_FRAGMENT = /* glsl */ `
precision mediump float;
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor * vAlpha, vAlpha);
}`;

const smoothstep = (t: number) => t * t * (3 - 2 * t);
/** One key per unordered node pair, shared by the writer (pulses) and the reader (links). */
const edgeKey = (a: number, b: number) => (a < b ? a * MAX_NODES + b : b * MAX_NODES + a);

function createNodes(count: number): NetworkNode[] {
  return Array.from({ length: count }, () => {
    const hub = Math.random() < 0.14;
    return {
      // Denser towards the right, away from the headline
      baseX: 0.14 + 0.86 * Math.pow(Math.random(), 0.62),
      baseY: 0.04 + 0.92 * Math.random(),
      ampX: 8 + Math.random() * 26,
      ampY: 6 + Math.random() * 20,
      freqX: 0.05 + Math.random() * 0.12,
      freqY: 0.05 + Math.random() * 0.12,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      size: hub ? 5 + Math.random() * 1.5 : 2 + Math.random() * 2,
      glow: hub ? 0.35 : 0,
      heat: 0,
      x: 0,
      y: 0,
    };
  });
}

export function mountHeroNetwork(hero: HTMLElement, canvas: HTMLCanvasElement): void {
  let renderer: Renderer;
  try {
    renderer = new Renderer({
      canvas,
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
      depth: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      powerPreference: "low-power",
    });
  } catch {
    // No WebGL context could be created: the static hero image stays.
    return;
  }

  const gl = renderer.gl;
  gl.clearColor(0, 0, 0, 0);

  const linkProgram = new Program(gl, {
    vertex: LINK_VERTEX,
    fragment: LINK_FRAGMENT,
    uniforms: { uColor: { value: LINK_COLOR } },
    depthTest: false,
    depthWrite: false,
  });
  const pointProgram = new Program(gl, {
    vertex: POINT_VERTEX,
    fragment: POINT_FRAGMENT,
    uniforms: {
      uDpr: { value: renderer.dpr },
      uCool: { value: NODE_COLOR },
      uHot: { value: PULSE_COLOR },
    },
    depthTest: false,
    depthWrite: false,
  });
  // Additive light on a transparent canvas (premultiplied colour)
  linkProgram.setBlendFunc(gl.ONE, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  pointProgram.setBlendFunc(gl.ONE, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const linkPositions = new Float32Array(MAX_EDGES * 4);
  const linkAlphas = new Float32Array(MAX_EDGES * 2);
  const linkGeometry = new Geometry(gl, {
    position: { size: 2, data: linkPositions, usage: gl.DYNAMIC_DRAW },
    aAlpha: { size: 1, data: linkAlphas, usage: gl.DYNAMIC_DRAW },
  });

  const pointCapacity = MAX_NODES + MAX_PULSES;
  const pointPositions = new Float32Array(pointCapacity * 2);
  const pointSizes = new Float32Array(pointCapacity);
  const pointHeat = new Float32Array(pointCapacity);
  const pointGeometry = new Geometry(gl, {
    position: { size: 2, data: pointPositions, usage: gl.DYNAMIC_DRAW },
    aSize: { size: 1, data: pointSizes, usage: gl.DYNAMIC_DRAW },
    aHeat: { size: 1, data: pointHeat, usage: gl.DYNAMIC_DRAW },
  });

  const scene = new Transform();
  new Mesh(gl, { mode: gl.LINES, geometry: linkGeometry, program: linkProgram }).setParent(scene);
  new Mesh(gl, {
    mode: gl.POINTS,
    geometry: pointGeometry,
    program: pointProgram,
    renderOrder: 1,
  }).setParent(scene);

  let width = 1;
  let height = 1;
  let linkDistance = 120;
  let nodes: NetworkNode[] = [];
  const pulses: Pulse[] = [];
  const edgeHeat = new Map<number, number>();
  let time = 0;
  let spawnIn = 0.4;

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height);
    // Link reach and node count scale with the hero area, within sane bounds
    linkDistance = Math.min(200, Math.max(90, Math.sqrt(width * height) * 0.17));
    const target = Math.round(Math.min(MAX_NODES, Math.max(26, (width * height) / 15000)));
    if (Math.abs(target - nodes.length) > nodes.length * 0.25) {
      nodes = createNodes(target);
      pulses.length = 0;
      edgeHeat.clear();
    }
  };

  /** A random node linked to `index` (other than `exclude`), or -1. */
  const pickNeighbour = (index: number, exclude: number): number => {
    const origin = nodes[index];
    const limit = linkDistance * linkDistance;
    let choice = -1;
    let seen = 0;
    for (let j = 0; j < nodes.length; j++) {
      if (j === index || j === exclude) continue;
      const dx = nodes[j].x - origin.x;
      const dy = nodes[j].y - origin.y;
      if (dx * dx + dy * dy > limit) continue;
      seen += 1;
      if (Math.random() * seen < 1) choice = j;
    }
    return choice;
  };

  const hopDuration = (from: number, to: number) =>
    Math.max(
      0.35,
      Math.hypot(nodes[to].x - nodes[from].x, nodes[to].y - nodes[from].y) / PULSE_SPEED,
    );

  const step = (dt: number) => {
    for (const node of nodes) {
      node.x = node.baseX * width + node.ampX * Math.sin(time * node.freqX + node.phaseX);
      node.y = node.baseY * height + node.ampY * Math.cos(time * node.freqY + node.phaseY);
      node.heat = Math.max(0, node.heat - dt * 0.9);
    }
    edgeHeat.forEach((value, key) => {
      const next = value - dt * 0.8;
      if (next > 0) edgeHeat.set(key, next);
      else edgeHeat.delete(key);
    });

    spawnIn -= dt;
    if (spawnIn <= 0 && pulses.length < MAX_PULSES && nodes.length > 1) {
      spawnIn = 0.7 + Math.random() * 0.9;
      const from = Math.floor(Math.random() * nodes.length);
      const to = pickNeighbour(from, -1);
      if (to >= 0) {
        nodes[from].heat = 1;
        pulses.push({ from, to, progress: 0, duration: hopDuration(from, to), hops: 0 });
      }
    }

    for (let i = pulses.length - 1; i >= 0; i--) {
      const pulse = pulses[i];
      pulse.progress += dt / pulse.duration;
      if (pulse.progress < 1) continue;
      // Arrived: light the node and the link, then hop on along the chain
      nodes[pulse.to].heat = 1;
      edgeHeat.set(edgeKey(pulse.from, pulse.to), 1);
      const next = pulse.hops < MAX_HOPS ? pickNeighbour(pulse.to, pulse.from) : -1;
      if (next < 0) {
        pulses.splice(i, 1);
        continue;
      }
      pulse.from = pulse.to;
      pulse.to = next;
      pulse.progress = 0;
      pulse.hops += 1;
      pulse.duration = hopDuration(pulse.from, pulse.to);
    }
  };

  const toClipX = (x: number) => (x / width) * 2 - 1;
  const toClipY = (y: number) => 1 - (y / height) * 2;

  const draw = () => {
    // Links between nearby nodes, fading with distance, brighter where a pulse passed
    const limit = linkDistance * linkDistance;
    let edges = 0;
    for (let i = 0; i < nodes.length && edges < MAX_EDGES; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length && edges < MAX_EDGES; j++) {
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared > limit) continue;
        const closeness = 1 - Math.sqrt(distanceSquared) / linkDistance;
        const alpha = closeness * closeness * 0.42 + (edgeHeat.get(edgeKey(i, j)) ?? 0) * 0.5;
        const p = edges * 4;
        linkPositions[p] = toClipX(a.x);
        linkPositions[p + 1] = toClipY(a.y);
        linkPositions[p + 2] = toClipX(b.x);
        linkPositions[p + 3] = toClipY(b.y);
        linkAlphas[edges * 2] = alpha;
        linkAlphas[edges * 2 + 1] = alpha;
        edges += 1;
      }
    }

    // Nodes, then the pulses travelling along the chains
    let count = 0;
    for (const node of nodes) {
      pointPositions[count * 2] = toClipX(node.x);
      pointPositions[count * 2 + 1] = toClipY(node.y);
      pointSizes[count] = node.size;
      pointHeat[count] = Math.max(node.glow, node.heat);
      count += 1;
    }
    for (const pulse of pulses) {
      const a = nodes[pulse.from];
      const b = nodes[pulse.to];
      const t = smoothstep(Math.min(pulse.progress, 1));
      pointPositions[count * 2] = toClipX(a.x + (b.x - a.x) * t);
      pointPositions[count * 2 + 1] = toClipY(a.y + (b.y - a.y) * t);
      pointSizes[count] = 7;
      pointHeat[count] = 1;
      count += 1;
    }

    linkGeometry.attributes.position.needsUpdate = true;
    linkGeometry.attributes.aAlpha.needsUpdate = true;
    linkGeometry.setDrawRange(0, edges * 2);
    pointGeometry.attributes.position.needsUpdate = true;
    pointGeometry.attributes.aSize.needsUpdate = true;
    pointGeometry.attributes.aHeat.needsUpdate = true;
    pointGeometry.setDrawRange(0, count);
    pointProgram.uniforms.uDpr.value = renderer.dpr;
    renderer.render({ scene });
  };

  // Run only while it can be seen
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let onScreen = false;
  let contextLost = false;
  let running = false;
  let frameId = 0;
  let lastFrame = 0;

  const frame = (now: number) => {
    const dt = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    time += dt;
    step(dt);
    draw();
    hero.classList.add("is-live");
    frameId = requestAnimationFrame(frame);
  };

  const update = () => {
    const shouldRun =
      onScreen && document.visibilityState === "visible" && !reducedMotion.matches && !contextLost;
    if (shouldRun && !running) {
      running = true;
      lastFrame = performance.now();
      frameId = requestAnimationFrame(frame);
    } else if (!shouldRun && running) {
      running = false;
      cancelAnimationFrame(frameId);
    }
  };

  resize();
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    update();
  }).observe(hero);
  document.addEventListener("visibilitychange", update);
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) hero.classList.remove("is-live");
    update();
  });
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    contextLost = true;
    hero.classList.remove("is-live");
    update();
  });
}
