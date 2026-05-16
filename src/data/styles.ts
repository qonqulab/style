export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  background: string; // CSS background for the preview area
  suggestedColors: string[]; // List of colors for the client to choose from
  cssCode: string; // The CSS code for this style
}


export const stylesData: DesignStyle[] = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Glassmorphism is a design trend that mimics the appearance of frosted glass. It uses transparency, blur, and a subtle border to create depth and hierarchy.',
    pros: [
      'Creates a clear sense of depth and hierarchy.',
      'Looks modern, premium, and sophisticated.',
      'Allows content to feel integrated with the background.',
      'High visual appeal and interaction quality.'
    ],
    cons: [
      'Can be heavy on system resources (GPU blur calculation).',
      'Accessibility issues: Contrast can be tricky with different backgrounds.',
      'Requires careful execution to avoid looking cluttered.'
    ],
    background: '#667eea',
    suggestedColors: ['#667eea', '#764ba2', '#ff9a9e', '#a1c4fd'],
    cssCode: `.card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}`
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    description: 'Neumorphism (New Skeuomorphism) is a style that uses soft shadows—both inner and outer—to create objects that appear to be extruded from the background.',
    pros: [
      'Extremely clean and minimalist aesthetic.',
      'Provides a unique, tactile feel to digital elements.',
      'Great for soft, calming user interfaces.',
      'Creates a very consistent visual language.'
    ],
    cons: [
      'Major accessibility concerns due to low contrast.',
      'Hard to define clear boundaries for elements.',
      'Can look "mushy" on low-resolution screens.'
    ],
    background: '#e0e5ec',
    suggestedColors: ['#e0e5ec', '#f0f4f8', '#dee2e6', '#d1d9e6'],
    cssCode: `.card {
  background: #e0e5ec;
  border-radius: 40px;
  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
}`
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    description: 'Claymorphism is a 3D-like design style that uses soft inner shadows and large border-radii to make elements look like they are made of clay.',
    pros: [
      'Very friendly, approachable, and playful.',
      'Works exceptionally well with 3D illustrations.',
      'Adds a sense of fun to apps and websites.',
      'Easier to achieve good contrast than Neumorphism.'
    ],
    cons: [
      'Can look unprofessional or "childish" in serious contexts.',
      'Takes up more visual space due to large shadows/radii.'
    ],
    background: '#f0f4f8',
    suggestedColors: ['#f0f4f8', '#e8f0fe', '#f3f0ff', '#e6fffa'],
    cssCode: `.card {
  background: #ffffff;
  border-radius: 48px;
  box-shadow: 35px 35px 70px #d1d9e6, 
              inset -10px -10px 20px rgba(0,0,0,0.05), 
              inset 10px 10px 20px rgba(255,255,255,0.8);
}`
  },

  {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    description: 'Neo-Brutalism takes the raw energy of traditional Brutalism and adds modern refinements like bold borders and high-contrast colors.',
    pros: [
      'Extremely high impact and memorable.',
      'Communicates honesty, transparency, and raw power.',
      'Excellent accessibility due to high contrast.'
    ],
    cons: [
      'Can be visually exhausting for users.',
      'Polarizing—people either love it or hate it.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00'],
    cssCode: `.card {
  background: #A3E635;
  border: 4px solid #000;
  box-shadow: 10px 10px 0px #000;
}`
  },
  {
    id: 'pink-pastel',
    name: 'Pink Pastel / Cute',
    description: 'The Cute/Pink Pastel style focuses on soft hues, rounded corners, and playful micro-interactions.',
    pros: [
      'Creates a very positive, comforting emotional response.',
      'Highly effective for lifestyle, beauty, and creative niches.',
      'Visually calming and pleasant for long sessions.'
    ],
    cons: [
      'Can be seen as niche or gender-specific.',
      'Risk of looking too "sweet" or lacking authority.'
    ],
    background: '#fff0f3',
    suggestedColors: ['#fff0f3', '#ffe3e8', '#ffccd5', '#ffb3c1'],
    cssCode: `.card {
  background: white;
  border-radius: 32px;
  border: 2px solid #ffdeeb;
  box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
}`
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Minimalism is about reducing a design to its most essential elements using ample whitespace and high-quality typography.',
    pros: [
      'Fastest loading times and best performance.',
      'Highest level of readability and user focus.',
      'Timeless aesthetic.'
    ],
    cons: [
      'Can feel "cold" or "empty" if not executed perfectly.',
      'Requires extremely good typography.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#fcfcfc', '#f5f5f5', '#fafafa'],
    cssCode: `.card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 4px;
}`
  },
  {
    id: 'dark-futuristic',
    name: 'Dark Futuristic',
    description: 'Dark Futuristic style uses dark backgrounds with vibrant neon accents and glow effects.',
    pros: [
      'Creates a very premium and "pro" atmosphere.',
      'Excellent for highlighting specific information with glow.',
      'Reduces eye strain in low-light environments.'
    ],
    cons: [
      'Accessibility: Neon on dark can be hard for some users.',
      'Can feel overwhelming for professional corporate sites.'
    ],
    background: '#0a0a0c',
    suggestedColors: ['#0a0a0c', '#0f172a', '#1e1b4b', '#020617'],
    cssCode: `.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
}`
  },
  {
    id: 'aurora-ui',
    name: 'Aurora UI',
    description: 'Aurora UI uses soft, organic, and colorful blurred backgrounds that resemble the Northern Lights.',
    pros: [
      'Extremely beautiful and modern.',
      'Adds life and movement to static pages.',
      'Creates a unique brand identity.'
    ],
    cons: [
      'Can be difficult to implement with pure CSS.',
      'Text legibility can be an issue.'
    ],
    background: '#fecfef',
    suggestedColors: ['#fecfef', '#e0f2fe', '#fef3c7', '#dcfce7'],
    cssCode: `.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}`
  },
  {
    id: 'retro-vaporwave',
    name: 'Retro Vaporwave',
    description: 'Vaporwave is an artistic style featuring neon pinks and cyans, glitch art, and lo-fi textures.',
    pros: [
      'Unique, artistic, and highly memorable.',
      'Triggers strong nostalgia.',
      'Allows for experimental and bold layouts.'
    ],
    cons: [
      'Very niche appeal.',
      'Can be visually cluttered.'
    ],
    background: '#2d1b4e',
    suggestedColors: ['#2d1b4e', '#3a0ca3', '#7209b7', '#f72585'],
    cssCode: `.card {
  background: #2d1b4e;
  border: 2px solid #ff71ce;
  box-shadow: 8px 8px 0px #b967ff;
}`
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    description: 'Skeuomorphism mimics real-world textures, materials, and lighting.',
    pros: [
      'Highly intuitive interaction.',
      'Conveys craftsmanship.',
      'Adds a rich, tactile dimension.'
    ],
    cons: [
      'Extremely difficult and time-consuming to design.',
      'Can feel "dated" quickly.'
    ],
    background: '#333333',
    suggestedColors: ['#333333', '#444444', '#222222', '#555555'],
    cssCode: `.card {
  background: linear-gradient(180deg, #444 0%, #222 100%);
  border-radius: 20px;
  border-top: 1px solid #666;
  border-bottom: 2px solid #000;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}`
  },
  {
    id: 'swiss-editorial',
    name: 'Swiss Editorial',
    description: 'Based on the International Typographic Style, focusing on grids and sans-serif typography.',
    pros: [
      'Incredible clarity and information hierarchy.',
      'Commands authority and professionalism.',
      'Logical and structured approach.'
    ],
    cons: [
      'Can feel rigid or "dry".',
      'Requires very high-quality content.'
    ],
    background: '#f4f4f4',
    suggestedColors: ['#f4f4f4', '#ffffff', '#e5e5e5', '#d4d4d4'],
    cssCode: `.card {
  background: #fff;
  border-left: 12px solid #000;
  padding-left: 2.5rem;
}`
  },
  {
    id: 'organic-earth',
    name: 'Organic Earth',
    description: 'Organic Earth style focuses on natural shapes and earth-toned color palettes.',
    pros: [
      'Calming and grounding.',
      'Effective for sustainable brands.',
      'Feels more "human".'
    ],
    cons: [
      'Harder to maintain grid alignment.',
      'Requires high-quality organic textures.'
    ],
    background: '#fcfaf2',
    suggestedColors: ['#fcfaf2', '#f5f5dc', '#e9edc9', '#fefae0'],
    cssCode: `.card {
  background: #fdfaf0;
  border-radius: 60px 20px 80px 30px;
  border: 1px solid #e9e2d0;
}`
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    description: 'Inspired by the German design school, using primary colors and basic geometric shapes.',
    pros: [
      'Timeless and artistic aesthetic.',
      'Strong structural foundation.',
      'High contrast and clarity.'
    ],
    cons: [
      'Can feel cold or overly rigid.',
      'Limited color palette.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#ff3e00', '#0055ff', '#ffcc00'],
    cssCode: `.card {
  background: #fff;
  border: 4px solid #000;
}`
  },
  {
    id: 'fluid-liquid',
    name: 'Fluid / Liquid',
    description: 'Fluid design uses organic, moving shapes and smooth transitions.',
    pros: [
      'Extremely engaging.',
      'Feels futuristic and cutting-edge.',
      'Great for storytelling.'
    ],
    cons: [
      'Heavy on CPU/GPU.',
      'Can be distracting.'
    ],
    background: '#000000',
    suggestedColors: ['#000000', '#1a1a1a', '#0a0a0a', '#111111'],
    cssCode: `.card {
  background: #000;
  border-radius: 40px;
  animation: liquid 4s infinite alternate;
}`
  },
  {
    id: 'flat-design',
    name: 'Flat Design 2.0',
    description: 'Flat Design 2.0 adds subtle gradients and shadows to improve usability.',
    pros: [
      'Extremely versatile.',
      'Excellent performance.',
      'Clean and professional.'
    ],
    cons: [
      'Can look "generic".',
      'Risk of lacking identity.'
    ],
    background: '#f8fafc',
    suggestedColors: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1'],
    cssCode: `.card {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`
  },
  {
    id: 'glass-dark',
    name: 'Glassmorphism Dark',
    description: 'A darker, moodier version of glassmorphism.',
    pros: [
      'Very premium and sophisticated.',
      'Great for entertainment sites.',
      'Easier on the eyes.'
    ],
    cons: [
      'Contrast challenges.',
      'Requires dark backgrounds.'
    ],
    background: '#000000',
    suggestedColors: ['#000000', '#111111', '#0a0a0a', '#1a1a1a'],
    cssCode: `.card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}`
  },
  {
    id: '90s-web',
    name: '90s Web',
    description: 'Nostalgic early web style.',
    pros: [
      'High nostalgia.',
      'Distinct personality.',
      'Lightweight.'
    ],
    cons: [
      'Objectively "ugly".',
      'Poor accessibility.'
    ],
    background: '#000080',
    suggestedColors: ['#000080', '#008080', '#c0c0c0', '#ffffff'],
    cssCode: `.card {
  background: #c0c0c0;
  border: 2px solid;
  border-color: #fff #808080 #808080 #fff;
}`
  },
  {
    id: 'terminal',
    name: 'Console / Terminal',
    description: 'Inspired by command-line interfaces.',
    pros: [
      'No distractions.',
      'Great for dev tools.',
      'High readability.'
    ],
    cons: [
      'Visually sparse.',
      'Not for general consumers.'
    ],
    background: '#0c0c0c',
    suggestedColors: ['#0c0c0c', '#000000', '#1a1a1a', '#050505'],
    cssCode: `.card {
  background: #000;
  border: 1px solid #333;
  color: #0f0;
  font-family: monospace;
}`
  },
  {
    id: 'modern-luxury',
    name: 'Modern Luxury',
    description: 'Focuses on high-end serif typography and gold accents.',
    pros: [
      'Communicates wealth and quality.',
      'Timeless elegance.',
      'Great for fashion.'
    ],
    cons: [
      'Can feel "snobby".',
      'Requires high-quality assets.'
    ],
    background: '#1a1a1a',
    suggestedColors: ['#1a1a1a', '#000000', '#2a2a2a', '#111111'],
    cssCode: `.card {
  background: #1a1a1a;
  border: 1px solid #333;
  color: #d4af37;
  font-family: serif;
}`
  },
  {
    id: 'brutalism-classic',
    name: 'Brutalism Classic',
    description: 'Raw, unrefined Brutalism.',
    pros: [
      'Honest and anti-establishment.',
      'Unforgettable.',
      'Forces focus on content.'
    ],
    cons: [
      'Can feel hostile.',
      'Difficult for mainstream apps.'
    ],
    background: '#808080',
    suggestedColors: ['#808080', '#707070', '#909090', '#606060'],
    cssCode: `.card {
  background: #808080;
  border: 10px solid #555;
  font-weight: 900;
}`
  }
];
