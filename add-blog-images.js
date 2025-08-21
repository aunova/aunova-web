import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, 'src/content/blog/en');

// Map blog posts to their images
const imageMap = {
  'blockchain-enhanced-e-cmr-logistics.mdx': '/images/blog/e-cmr.webp',
  'blockchain-gaming-revolution-aunova.mdx': '/images/blog/blockchain-gaming.webp',
  'blockchain-logistics-madrid-fair-insights.mdx': '/images/blog/logistics-automation-madrid.webp',
  'blockchain-payment-revolution-supply-chain.mdx': '/images/blog/blockchain-payment-solution.webp',
  'blockchain-revolutionizing-logistics.mdx': '/images/blog/blockchain-logistics-2.webp',
  'blockchain-revolution-mobile-gaming.mdx': '/images/blog/mobile-gaming-revolution.webp',
  'blockchain-technology-trends-2023.mdx': '/images/blog/blockchain-trends.webp',
  'blockchain-unity-gaming-integration.mdx': '/images/blog/unity-blockchain.webp',
  'introducing-aunova-zk-ai-solutions.mdx': '/images/blog/introducing-aunova.webp',
  'unveiling-aunova-net-your-bridge-to-blockchain-excellence.mdx': '/images/blog/introducing-aunova.webp'
};

Object.entries(imageMap).forEach(([filename, imagePath]) => {
  const filePath = path.join(blogDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if image already exists
  if (content.includes('image:')) {
    console.log(`Image already exists in ${filename}`);
    return;
  }
  
  // Add image field after author
  content = content.replace(
    /author: "Aunova Team"/,
    `author: "Aunova Team"\nimage: "${imagePath}"`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Added image to ${filename}`);
});

console.log('Done!');
