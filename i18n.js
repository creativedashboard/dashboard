// Bilingual content for Creative Dashboard
window.I18N = {
  es: {
    nav: { product: "Producto", how: "Demo", price: "Precio", faq: "FAQ", cta: "Conseguirlo" },
    hero: {
      pre: "",
      tagline: "Tus ideas merecen más que quedarse en borradores.",
      h1a: "NO",
      h1b: "MATES",
      h1c: "LA IDEA.",
      fullline: "NO <span style=\"color:#E63329\">MATES</span> LA IDEA.",
      sub: "El dashboard donde tus ideas dejan de perderse. Captúralas, organízalas y desarróllalas con IA.",
      cta: "CONSEGUIRLO AHORA",
      micro: "",
      sticker: "edición 2025",
      strip: ["ORGANIZA", "PLANEA", "DESARROLLA", "CALENDARIZA", "CREA", "EJECUTA"]
    },
    problem: {
      kicker: "PROBLEMA / 001",
      h2: '¿POR QUÉ SE <span style="color:var(--red)">MUEREN TUS IDEAS</span>?',
      h1a: "TUS IDEAS",
      h1b: "SE MUEREN.",
      cards: [
        "Las anotas en notas que nunca vuelves a abrir.",
        "Pierdes el link de inspiración y la idea muere con él.",
        "El primer paso intimida y la dejas para 'mañana'."
      ],
      strike: "mañana"
    },
    solution: {
      kicker: "SOLUCIÓN",
      transition: "HASTA AHORA.",
      callout: "NO MATES LA IDEA.",
      lede: "DE IDEAS SUELTAS A CONTENIDO REAL.",
      ledePart1: "DE IDEAS SUELTAS A",
      ledePart2: "Contenido Real.",
      features: [
        { tag: "", title: "CAPTURA IDEAS CUANDO NACEN", body: "Guarda referencias, pensamientos, links o conceptos antes de que desaparezcan." },
        { tag: "", title: "CADA CLIENTE TIENE CONTEXTO", body: "Organiza ideas según marca, tono, plataforma y estilo de contenido." },
        { tag: "", title: "CONVIERTE IDEAS EN CONTENIDO", body: "Genera hooks, guiones, copies y prompts usando IA conectada a tu workflow creativo." },
        { tag: "", title: "TODO SIGUE CONECTADO", body: "Ideas, campañas, tendencias y calendario trabajando dentro del mismo sistema." }
      ],
      m1Title: "Nueva idea", m1Save: "Guardar",
      m2Title: "Clientes", m2New: "+ Nuevo cliente",
      m2c1: "Cliente A", m2c2: "Cliente B", m2c3: "Cliente C",
      m2t1: "Tono: Cercano", m2p1: "Plataformas: IG, TikTok", m2s1: "Estilo: Educativo",
      m2t2: "Tono: Profesional", m2p2: "Plataformas: IG, LinkedIn",
      m2t3: "Tono: Divertido", m2p3: "Plataformas: IB, TikTok",
      m3label: "Idea seleccionada", m3generate: "GENERAR CONTENIDO",
      m3tab2: "Guión", m3use: "Usar en guion",
      m3ai: "¿Sabías que las marcas que cuentan historias reales conectan 3x más que las que solo venden? Te cuento cómo hacerlo en 3 pasos",
      m4clients: "Clientes", m4campaigns: "Campañas", m4calendar: "Calendario",
      mockExample: "Idea para reel sobre storytelling de marca",
      mockExampleRich: "Idea para reel sobre <strong>storytelling de marca</strong>"
    },
    demo: {
      kicker: "DEMO / EN VIVO",
      title: "MIRA EL DASHBOARD / EN ACCIÓN.",
      lede: "Captura, organiza, desarrolla. Todo desde la misma vista.",
      labels: ["BANCO DE IDEAS", "GESTIÓN DE CLIENTES", "GENERADOR DE PROMPTS"]
    },
    pricing: {
      kicker: "PRECIO / 3 FORMAS DE ENTRAR",
      title: "ELIGE / TU MEJOR OPCIÓN:",
      t1: "ELIGE",
      t2: "TU MEJOR OPCIÓN:",
      currency: "USD",
      includes: "INCLUYE",
      where: "Disponible en",
      hot: "Hotmart",
      gum: "Gumroad",
      tiers: [
        {
          tag: "EARLY ACCESS",
          price: "15",
          unit: "CERRADO",
          desc: "Gracias a quienes llegaron primero.",
          list: [],
          cta: "AGOTADO",
          closed: true
        },
        {
          tag: "PRO",
          price: "23",
          unit: "PAGO ÚNICO · ACCESO DE POR VIDA",
          desc: "Para quien ya tiene su Claude o ChatGPT y solo necesita organización.",
          list: [
            "Banco de ideas y clientes",
            "Generador de prompts",
            "Briefings con calendario",
            "Planner semanal",
            "Radar de tendencias",
            "Sincronización en la nube"
          ],
          footnote: "→ Generas el prompt aquí, lo llevas a tu IA.",
          cta: "CONSEGUIRLO POR $23"
        },
        {
          tag: "FLEX · ⭐ MÁS POPULAR",
          price: "9",
          unit: "AL MES · CANCELA CUANDO QUIERAS",
          desc: "Todo trabajando en un solo lugar, sin saltar entre apps.",
          list: [
            "Todo lo del plan Pro",
            "Claude integrado en el dashboard",
            "10 prompts al día sin salir de la app",
            "Tus datos se conservan aunque pauses la suscripción"
          ],
          footnote: "→ Por menos que un café al mes.",
          cta: "EMPEZAR POR $9 / MES"
        }
      ]
    },
    testimonials: {
      kicker: "PRENSA / LO QUE DICEN",
      title: "CREADORES USANDO MEJOR SUS IDEAS",
      t1: "CREADORES",
      t2: "USANDO MEJOR",
      t3: "SUS IDEAS.",
      items: [
        { quote: "Pasé de tener 400 notas sueltas a un sistema. Real.", name: "Lucía M.", handle: "@luciacreates", role: "Creadora · 120k" },
        { quote: "El prompt de hook me ahorra dos horas por reel. No exagero.", name: "Diego R.", handle: "@diego.makes", role: "Editor · 45k" },
        { quote: "Por fin dejé de pagar tres apps que hacían lo mismo a medias.", name: "Ana T.", handle: "@anatorres", role: "Estratega · 220k" }
      ]
    },
    faq: {
      kicker: "PREGUNTAS / FAQ",
      title: "DUDAS / RAZONABLES.",
      items: [
        { q: "¿Cuál es diferencia entre el Pro y Flex?", a: "PRO: Pagas una sola vez $23 USD y tienes acceso de por vida. Puedes generar prompts dentro de la plataforma, pero las respuestas no se generan ahí: copias el prompt y lo usas en ChatGPT o Claude.<br><br>FLEX: Pagas $9 USD al mes e incluye todo lo del PRO, pero además puedes generar hasta 10 respuestas diarias con Claude directamente dentro de Creative Dashboard." },
        { q: "¿Cómo accedo después de comprar?", a: "Recibes un correo con tu acceso al dashboard en menos de 5 minutos después de realizar tu compra en Gumroad." },
        { q: "¿Necesito conocimientos técnicos?", a: "Cero. Si sabés escribir un \"hola\", sabes usar el dashboard. Los prompts de IA son botones, no comandos." },
        { q: "¿Hay devoluciones?", a: "Debido a que Creative Dashboard es un producto digital con acceso inmediato a la plataforma y sus herramientas, actualmente no manejamos devoluciones una vez realizada la compra.<br><br>Te recomendamos revisar bien las características de cada plan antes de comprar. Si tienes cualquier duda antes de adquirir acceso, puedes contactarnos y con gusto te ayudamos.<br><br><br>Si tienes preguntas previas, escríbenos y te respondemos en menos de 24h." }
      ]
    },
    footer: {
      tagline: "Don't Kill the Idea",
      links: ["Producto", "FAQ", "Soporte", "Términos", "Privacidad"],
      social: ["Instagram", "Twitter/X", "TikTok"],
      copy: "© 2025 Creative Dashboard. Todos los derechos reservados.",
      lang: "Idioma"
    }
  },
  en: {
    nav: { product: "Product", how: "Demo", price: "Pricing", faq: "FAQ", cta: "Get it" },
    hero: {
      pre: "",
      tagline: "Your ideas deserve more than sitting in drafts.",
      h1a: "DON'T",
      h1b: "KILL",
      h1c: "THE IDEA.",
      fullline: "DON'T <span style=\"color:#E63329\">KILL</span> THE IDEA.",
      sub: "The dashboard where your ideas stop getting lost. Capture, organize, and develop them with AI.",
      cta: "GET IT NOW",
      micro: "",
      sticker: "2025 edition",
      strip: ["ORGANIZE", "PLAN", "DEVELOP", "SCHEDULE", "CREATE", "EXECUTE"]
    },
    problem: {
      kicker: "PROBLEM / 001",
      h2: 'WHY DO YOUR <span style="color:var(--red)">IDEAS DIE</span>?',
      h1a: "YOUR IDEAS",
      h1b: "ARE DYING.",
      cards: [
        "You jot them in notes you never reopen.",
        "You lose the inspo link and the idea dies with it.",
        "The first step intimidates you and you push it to 'tomorrow'."
      ],
      strike: "tomorrow"
    },
    solution: {
      kicker: "SOLUTION",
      transition: "UNTIL NOW.",
      callout: "DON'T KILL THE IDEA.",
      lede: "FROM SCATTERED IDEAS TO REAL CONTENT.",
      ledePart1: "FROM SCATTERED IDEAS TO",
      ledePart2: "Real Content.",
      features: [
        { tag: "", title: "CAPTURE IDEAS WHEN THEY HAPPEN", body: "Save references, thoughts, links or concepts before they disappear." },
        { tag: "", title: "EVERY CLIENT HAS CONTEXT", body: "Organize ideas by brand, tone, platform and content style." },
        { tag: "", title: "TURN IDEAS INTO CONTENT", body: "Generate hooks, scripts, copy and prompts using AI connected to your creative workflow." },
        { tag: "", title: "EVERYTHING STAYS CONNECTED", body: "Ideas, campaigns, trends and calendar all working inside the same system." }
      ],
      m1Title: "New idea", m1Save: "Save",
      m2Title: "Clients", m2New: "+ New client",
      m2c1: "Client A", m2c2: "Client B", m2c3: "Client C",
      m2t1: "Tone: Friendly", m2p1: "Platforms: IG, TikTok", m2s1: "Style: Educational",
      m2t2: "Tone: Professional", m2p2: "Platforms: IG, LinkedIn",
      m2t3: "Tone: Fun", m2p3: "Platforms: IB, TikTok",
      m3label: "Selected idea", m3generate: "GENERATE CONTENT",
      m3tab2: "Script", m3use: "Use in script",
      m3ai: "Did you know brands that tell real stories connect 3x more than those that just sell? Here's how to do it in 3 steps",
      m4clients: "Clients", m4campaigns: "Campaigns", m4calendar: "Calendar",
      mockExample: "Idea for a reel about brand storytelling",
      mockExampleRich: "Idea for a reel about <strong>brand storytelling</strong>"
    },
    demo: {
      kicker: "DEMO / LIVE",
      title: "SEE THE DASHBOARD / IN ACTION.",
      lede: "Capture, organize, develop. All from the same view.",
      labels: ["IDEA BANK", "CLIENT MANAGEMENT", "PROMPT GENERATOR"]
    },
    pricing: {
      kicker: "PRICING / 3 WAYS IN",
      title: "PICK / YOUR BEST OPTION:",
      t1: "PICK",
      t2: "YOUR BEST OPTION:",
      currency: "USD",
      includes: "INCLUDES",
      where: "Available on",
      hot: "Hotmart",
      gum: "Gumroad",
      tiers: [
        {
          tag: "EARLY ACCESS",
          price: "15",
          unit: "CLOSED",
          desc: "Thanks to everyone who got here first.",
          list: [],
          cta: "SOLD OUT",
          closed: true
        },
        {
          tag: "PRO",
          price: "23",
          unit: "ONE-TIME · LIFETIME ACCESS",
          desc: "For those who already have their Claude or ChatGPT and just need organization.",
          list: [
            "Idea & client bank",
            "Prompt generator",
            "Briefings with calendar",
            "Weekly planner",
            "Trend radar",
            "Cloud sync"
          ],
          footnote: "→ Generate the prompt here, take it to your AI.",
          cta: "GET IT FOR $23"
        },
        {
          tag: "FLEX · ⭐ MOST POPULAR",
          price: "9",
          unit: "PER MONTH · CANCEL ANYTIME",
          desc: "Everything working in one place, no app-hopping.",
          list: [
            "Everything in Pro",
            "Claude built into the dashboard",
            "10 prompts a day without leaving the app",
            "Your data is kept even if you pause the subscription"
          ],
          footnote: "→ Less than a coffee per month.",
          cta: "START AT $9 / MO"
        }
      ]
    },
    testimonials: {
      kicker: "PRESS / WHAT THEY SAY",
      title: "CREATORS USING THEIR IDEAS BETTER.",
      t1: "CREATORS",
      t2: "USING THEIR IDEAS",
      t3: "BETTER.",
      items: [
        { quote: "Went from 400 loose notes to an actual system. Real talk.", name: "Lucía M.", handle: "@luciacreates", role: "Creator · 120k" },
        { quote: "The hook prompt saves me two hours per reel. No exaggeration.", name: "Diego R.", handle: "@diego.makes", role: "Editor · 45k" },
        { quote: "Finally stopped paying for three apps that did the same thing badly.", name: "Ana T.", handle: "@anatorres", role: "Strategist · 220k" }
      ]
    },
    faq: {
      kicker: "QUESTIONS / FAQ",
      title: "REASONABLE / DOUBTS.",
      items: [
        { q: "What's the difference between Pro and Flex?", a: "PRO: You pay $23 USD once and get lifetime access. You can generate prompts inside the platform, but answers aren't generated there: copy the prompt and use it in ChatGPT or Claude.<br><br>FLEX: You pay $9 USD per month and it includes everything in PRO, plus you can generate up to 10 daily answers with Claude directly inside Creative Dashboard." },
        { q: "How do I access after buying?", a: "You'll receive an email with your dashboard access in less than 5 minutes after completing your purchase on Gumroad." },
        { q: "Do I need technical skills?", a: "Zero. If you can write a \"hi\", you can use the dashboard. AI prompts are buttons, not commands." },
        { q: "Are there refunds?", a: "Because Creative Dashboard is a digital product with immediate access to the platform and its tools, we currently don't issue refunds once the purchase is complete.<br><br>We recommend reviewing each plan's features carefully before buying. If you have any doubts before getting access, you can contact us and we'll gladly help.<br><br><br>If you have questions before buying, write us and we'll reply within 24h." }
      ]
    },
    footer: {
      tagline: "Don't Kill the Idea",
      links: ["Product", "FAQ", "Support", "Terms", "Privacy"],
      social: ["Instagram", "Twitter/X", "TikTok"],
      copy: "© 2025 Creative Dashboard. All rights reserved.",
      lang: "Language"
    }
  }
};
