/**
 * Contact page + contact form copy (EN/ES). Owned by the contact page; kept
 * out of utils/i18n.ts so the form and its page change together.
 * No em dashes in visible copy.
 */
export type ContactLang = "en" | "es";

export const contactStrings = {
  en: {
    meta: {
      title: "Contact Aunova | Tell us what you want to build",
      description:
        "Contact Aunova, a software development company. Tell us about your project and we will reply by email.",
    },
    title: "Tell us what you want to build",
    intro:
      "Aunova is a software development company. Share your idea, your problem or your project, and we will reply by email with how we would approach it.",
    closing: "We read every message and reply by email.",
    options: {
      call: {
        title: "Schedule a call",
        text: "Book a 30-minute call to talk through your project",
        button: "Book a call",
      },
      email: {
        title: "Email us",
        text: "Write to us directly",
      },
      linkedin: {
        title: "LinkedIn",
        text: "Follow our work",
        button: "Follow us",
      },
    },
    form: {
      email: "Work email",
      company: "Company",
      optional: "(optional)",
      message: "Tell us about your project",
      submit: "Send message",
      sending: "Sending…",
      retry: "Try again",
      error: "Something went wrong sending your message. Please try again.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Please tell us a little about your project.",
      encrypted: "Your message is encrypted in your browser before it is sent.",
      consentBefore:
        "By sending this, you agree we will use your details only to respond to your enquiry, as described in our",
      consentLink: "Privacy Policy",
      consentAfter: ".",
      successTitle: "Thank you. Your message has been sent.",
      successText:
        "It was sent securely and privately. We will reply to the email address you gave us.",
    },
  },
  es: {
    meta: {
      title: "Contactar con Aunova | Cuéntanos qué quieres construir",
      description:
        "Contacta con Aunova, una empresa de desarrollo de software. Cuéntanos tu proyecto y te responderemos por correo electrónico.",
    },
    title: "Cuéntanos qué quieres construir",
    intro:
      "Aunova es una empresa de desarrollo de software. Comparte tu idea, tu problema o tu proyecto y te responderemos por correo electrónico explicando cómo lo abordaríamos.",
    closing: "Leemos cada mensaje y respondemos por correo electrónico.",
    options: {
      call: {
        title: "Agendar una llamada",
        text: "Reserva una llamada de 30 minutos para hablar de tu proyecto",
        button: "Reservar llamada",
      },
      email: {
        title: "Escríbenos",
        text: "Envíanos un mensaje directamente",
      },
      linkedin: {
        title: "LinkedIn",
        text: "Sigue nuestro trabajo",
        button: "Síguenos",
      },
    },
    form: {
      email: "Correo electrónico de trabajo",
      company: "Empresa",
      optional: "(opcional)",
      message: "Cuéntanos sobre tu proyecto",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      retry: "Intentar de nuevo",
      error: "Algo salió mal al enviar tu mensaje. Inténtalo de nuevo.",
      emailInvalid: "Introduce una dirección de correo electrónico válida.",
      messageRequired: "Cuéntanos un poco sobre tu proyecto.",
      encrypted: "Tu mensaje se cifra en tu navegador antes de enviarse.",
      consentBefore:
        "Al enviarlo, aceptas que usaremos tus datos solo para responder a tu consulta, tal como se describe en nuestra",
      consentLink: "Política de privacidad",
      consentAfter: " (en inglés).",
      successTitle: "Gracias. Tu mensaje se ha enviado.",
      successText:
        "Se envió de forma segura y privada. Te responderemos a la dirección de correo electrónico que nos indicaste.",
    },
  },
} as const;
