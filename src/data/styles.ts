export interface DesignStyle {
  id: string;
  name: string;
  category: 'Modern' | 'Minimalist' | 'Retro' | 'Artistic' | 'Luxury' | 'Playful' | 'Soft';
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
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  color: #fff;
}

/* Button Styles */
.button {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 12px 24px;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}`
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    category: 'Soft',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: [BG_COLOR];
  border-radius: 40px;
  padding: 2rem;
  box-shadow: 20px 20px 60px #bec3c9, 
              -20px -20px 60px #ffffff;
  color: #444;
}

/* Button Styles */
.button {
  background: [BG_COLOR];
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  box-shadow: 6px 6px 12px #bec3c9, 
              -6px -6px 12px #ffffff;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:active {
  box-shadow: inset 4px 4px 8px #bec3c9, 
              inset -4px -4px 8px #ffffff;
  transform: scale(0.98);
}`
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    category: 'Playful',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #ffffff;
  border-radius: 48px;
  padding: 2.5rem;
  box-shadow: 35px 35px 70px #d1d9e6, 
              inset -10px -10px 20px rgba(0,0,0,0.05), 
              inset 10px 10px 20px rgba(255,255,255,0.8);
  color: #2d3748;
}

/* Button Styles */
.button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 24px;
  font-weight: 700;
  box-shadow: 10px 10px 20px #d1d9e6, 
              inset -4px -4px 8px rgba(0,0,0,0.2), 
              inset 4px 4px 8px rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px) scale(1.02);
  filter: brightness(1.1);
}`
  },

  {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    category: 'Artistic',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #A3E635;
  border: 4px solid #000;
  border-radius: 0;
  padding: 2rem;
  box-shadow: 10px 10px 0px #000;
  color: #000;
}

/* Button Styles */
.button {
  background: #fff;
  border: 3px solid #000;
  padding: 12px 24px;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 5px 5px 0px #000;
  cursor: pointer;
  transition: all 0.1s;
}

.button:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #000;
}`
  },
  {
    id: 'pink-pastel',
    name: 'Pink Pastel / Cute',
    category: 'Playful',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: white;
  border-radius: 32px;
  border: 2px solid #ffdeeb;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
  color: #4a4a4a;
}

/* Button Styles */
.button {
  background: #ff85a1;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(255, 133, 161, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 25px rgba(255, 133, 161, 0.4);
}`
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    category: 'Minimalist',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 3rem;
  color: #111;
}

/* Button Styles */
.button {
  background: #111;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.8;
}`
  },
  {
    id: 'dark-futuristic',
    name: 'Dark Futuristic',
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
  color: #94a3b8;
}

/* Button Styles */
.button {
  background: transparent;
  color: #22d3ee;
  border: 1px solid #22d3ee;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
  transition: all 0.3s;
}

.button:hover {
  background: #22d3ee;
  color: #0f172a;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
}`
  },
  {
    id: 'aurora-ui',
    name: 'Aurora UI',
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #1e293b;
}

/* Button Styles */
.button {
  background: linear-gradient(45deg, #fecfef, #e0f2fe);
  border: none;
  padding: 12px 24px;
  border-radius: 15px;
  color: #475569;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.button:hover {
  transform: translateY(-3px);
}`
  },
  {
    id: 'retro-vaporwave',
    name: 'Retro Vaporwave',
    category: 'Retro',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #2d1b4e;
  border: 2px solid #ff71ce;
  padding: 2rem;
  box-shadow: 8px 8px 0px #b967ff;
  color: #05ffa1;
}

/* Button Styles */
.button {
  background: #01cdfe;
  color: #2d1b4e;
  border: none;
  padding: 12px 24px;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  cursor: pointer;
  box-shadow: 4px 4px 0px #fff;
  transition: all 0.1s;
}

.button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #fff;
}`
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    category: 'Luxury',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(180deg, #444 0%, #222 100%);
  border-radius: 20px;
  padding: 2rem;
  border-top: 1px solid #666;
  border-bottom: 2px solid #000;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  color: #ddd;
}

/* Button Styles */
.button {
  background: linear-gradient(180deg, #555 0%, #333 100%);
  border-radius: 10px;
  border: 1px solid #666;
  border-bottom: 2px solid #000;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.button:active {
  background: linear-gradient(180deg, #222 0%, #444 100%);
  border-top: 2px solid #000;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
}`
  },
  {
    id: 'swiss-editorial',
    name: 'Swiss Editorial',
    category: 'Minimalist',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-left: 12px solid #000;
  padding: 3rem;
  color: #000;
}

/* Button Styles */
.button {
  background: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
}

.button:hover {
  background: #333;
}`
  },
  {
    id: 'organic-earth',
    name: 'Organic Earth',
    category: 'Artistic',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fdfaf0;
  border-radius: 60px 20px 80px 30px;
  border: 1px solid #e9e2d0;
  padding: 2.5rem;
  color: #5c5341;
}

/* Button Styles */
.button {
  background: #8b7355;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 40px 10px 40px 10px;
  font-weight: 600;
  cursor: pointer;
}

.button:hover {
  filter: sepia(0.3);
}`
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    category: 'Artistic',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 4px solid #000;
  padding: 2rem;
  color: #000;
  position: relative;
}

.card::after {
  content: '';
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: #ff3e00;
}

/* Button Styles */
.button {
  background: #0055ff;
  color: white;
  border: 2px solid #000;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 800;
  cursor: pointer;
}

.button:hover {
  background: #ffcc00;
  color: #000;
}`
  },
  {
    id: 'fluid-liquid',
    name: 'Fluid / Liquid',
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border-radius: 40px;
  padding: 3rem;
  color: #fff;
  border: 1px solid #333;
  animation: liquid 4s infinite alternate;
}

@keyframes liquid {
  0% { border-radius: 40px 60px 40px 80px; }
  100% { border-radius: 80px 40px 90px 40px; }
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.button:hover {
  border-radius: 10px;
  letter-spacing: 2px;
}`
  },
  {
    id: 'flat-design',
    name: 'Flat Design 2.0',
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #1e293b;
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.button:hover {
  background: #2563eb;
}`
  },
  {
    id: 'glass-dark',
    name: 'Glassmorphism Dark',
    category: 'Modern',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  color: #fff;
}

/* Button Styles */
.button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 24px;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
}

.button:hover {
  background: rgba(255, 255, 255, 0.2);
}`
  },
  {
    id: '90s-web',
    name: '90s Web',
    category: 'Retro',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #c0c0c0;
  border: 2px solid;
  border-color: #fff #808080 #808080 #fff;
  padding: 1rem;
  color: #000;
  font-family: "MS Sans Serif", sans-serif;
}

/* Button Styles */
.button {
  background: #c0c0c0;
  border: 2px solid;
  border-color: #fff #808080 #808080 #fff;
  padding: 4px 12px;
  color: #000;
  cursor: pointer;
}

.button:active {
  border-color: #808080 #fff #fff #808080;
}`
  },
  {
    id: 'terminal',
    name: 'Console / Terminal',
    category: 'Retro',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border: 1px solid #0f0;
  padding: 2rem;
  color: #0f0;
  font-family: 'Courier New', Courier, monospace;
}

/* Button Styles */
.button {
  background: #0f0;
  color: #000;
  border: none;
  padding: 8px 16px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
}

.button:hover {
  background: #0a0;
}`
  },
  {
    id: 'modern-luxury',
    name: 'Modern Luxury',
    category: 'Luxury',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #1a1a1a;
  border: 1px solid #d4af37;
  padding: 3rem;
  color: #d4af37;
  font-family: serif;
  text-align: center;
}

/* Button Styles */
.button {
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 12px 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.4s;
}

.button:hover {
  background: #d4af37;
  color: #1a1a1a;
}`
  },
  {
    id: 'brutalism-classic',
    name: 'Brutalism Classic',
    category: 'Artistic',
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
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #808080;
  border: 10px solid #000;
  padding: 2rem;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
}

.button:hover {
  background: #333;
  text-decoration: underline;
}`
  },
  {
    id: 'y2k-futuristic',
    name: 'Y2K Futuristic',
    category: 'Retro',
    description: 'Inspired by the turn of the millennium, Y2K aesthetic features glossy textures, iridescent gradients, and chunky futuristic shapes.',
    pros: [
      'High nostalgia for 2000s culture.',
      'Visually striking and unique.',
      'Great for creative and experimental brands.'
    ],
    cons: [
      'Can look cluttered or "tacky" if not balanced.',
      'Complex CSS required for high-shine effects.'
    ],
    background: '#e2e2ff',
    suggestedColors: ['#e2e2ff', '#ffdef2', '#d0f4de', '#ffeb3b'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(200,200,255,0.4));
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 2.5rem;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.8), inset 0 0 20px rgba(255,255,255,0.5);
  color: #4b0082;
  backdrop-filter: blur(10px);
}

/* Button Styles */
.button {
  background: #ff00ff;
  color: #fff;
  border: 4px solid #fff;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(255, 0, 255, 0.4);
  cursor: pointer;
}

.button:hover {
  transform: scale(1.1) rotate(-3deg);
  background: #00ffff;
  color: #000;
}`
  },
  {
    id: 'cyber-noir',
    name: 'Cyber Noir',
    category: 'Modern',
    description: 'A fusion of film noir aesthetics and cyberpunk themes. High contrast, monochromatic with sharp accents.',
    pros: [
      'Extremely sophisticated and cinematic.',
      'High readability and visual focus.',
      'Perfect for high-end digital products.'
    ],
    cons: [
      'Can feel too cold or aggressive.',
      'Requires very high-quality typography.'
    ],
    background: '#050505',
    suggestedColors: ['#050505', '#111111', '#1a1a1a', '#ff0000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border-left: 5px solid #ff0000;
  padding: 3rem;
  color: #fff;
  box-shadow: 0 0 50px rgba(0,0,0,1);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 40px;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.button:hover {
  background: #ff0000;
  color: #fff;
  box-shadow: 0 0 20px rgba(255,0,0,0.5);
}`
  },
  {
    id: 'memphis-pop',
    name: 'Memphis Pop',
    category: 'Artistic',
    description: '80s-inspired Memphis Design featuring vibrant primary colors, bold patterns, and geometric chaos.',
    pros: [
      'Explosion of energy and creativity.',
      'Stands out instantly in any feed.',
      'Allows for highly experimental layouts.'
    ],
    cons: [
      'Can be visually exhausting.',
      'Hard to organize complex information.'
    ],
    background: '#fffcd1',
    suggestedColors: ['#fffcd1', '#ffc2d1', '#c2e9fb', '#d1ffc2'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 4px solid #000;
  padding: 2.5rem;
  position: relative;
  box-shadow: 15px 15px 0px #3b82f6;
  color: #000;
}

.card::before {
  content: '///';
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: 2rem;
  color: #ec4899;
  font-weight: 900;
}

/* Button Styles */
.button {
  background: #fbbf24;
  color: #000;
  border: 3px solid #000;
  padding: 10px 25px;
  font-weight: 800;
  border-radius: 0;
  cursor: pointer;
}

.button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0px #000;
}`
  },
  {
    id: 'art-deco',
    name: 'Art Deco Luxury',
    category: 'Luxury',
    description: 'Symmetrical, geometric, and glamorous. Art Deco uses gold, black, and deep tones for a timeless high-end feel.',
    pros: [
      'Timeless elegance and class.',
      'Symmetry provides a sense of order.',
      'Excellent for premium branding.'
    ],
    cons: [
      'Can feel too formal or "stiff".',
      'Requires precise spacing.'
    ],
    background: '#121212',
    suggestedColors: ['#121212', '#0a0a0a', '#1a1a1a', '#c5a059'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
  border: 2px solid #c5a059;
  padding: 3rem;
  color: #c5a059;
  text-align: center;
  box-shadow: inset 0 0 20px rgba(197, 160, 89, 0.1);
}

/* Button Styles */
.button {
  background: transparent;
  color: #c5a059;
  border: 1px solid #c5a059;
  padding: 12px 35px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s;
}

.button:hover {
  background: #c5a059;
  color: #000;
  letter-spacing: 5px;
}`
  },
  {
    id: 'soft-pop',
    name: 'Soft Pop',
    category: 'Playful',
    description: 'A blend of pastel colors and bold, soft shadows. It’s approachable, friendly, and highly modern.',
    pros: [
      'Extremely user-friendly and inviting.',
      'Works well for social and e-commerce apps.',
      'High readability with soft contrast.'
    ],
    cons: [
      'Can look a bit too "safe" or generic.',
      'Not for serious corporate brands.'
    ],
    background: '#f8f9ff',
    suggestedColors: ['#f8f9ff', '#fff5f8', '#f5fff8', '#fffcf5'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 32px;
  padding: 2.5rem;
  box-shadow: 0 30px 60px rgba(100, 120, 255, 0.1);
  color: #333;
}

/* Button Styles */
.button {
  background: #6366f1;
  color: #fff;
  border: none;
  padding: 14px 30px;
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
}`
  },
  {
    id: 'holographic-glow',
    name: 'Holographic Glow',
    category: 'Modern',
    description: 'Shifting, iridescent gradients with a high-shine finish. Elements seem to change color as you move.',
    pros: [
      'Captivating and futuristic.',
      'Feels "alive" and interactive.',
      'Stands out from traditional gradients.'
    ],
    cons: [
      'Performance can drop on older devices.',
      'Can be distracting for long reads.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#f0f0f0', '#000000', '#ff00ff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(200,255,255,0.7) 50%, rgba(255,200,255,0.7) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  color: #444;
}

/* Button Styles */
.button {
  background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
  background-size: 200% auto;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  animation: holo 3s linear infinite;
}

@keyframes holo {
  to { background-position: 200% center; }
}

.button:hover {
  transform: scale(1.05);
}`
  },
  {
    id: 'wabi-sabi',
    name: 'Wabi-Sabi',
    category: 'Minimalist',
    description: 'Inspired by the Japanese philosophy of finding beauty in imperfection. Natural tones, irregular shapes, and raw textures.',
    pros: [
      'Extremely calming and human.',
      'Conveys authenticity and depth.',
      'Works well for lifestyle and craft.'
    ],
    cons: [
      'Hard to maintain digital alignment.',
      'Can look "messy" if not careful.'
    ],
    background: '#f5f2ed',
    suggestedColors: ['#f5f2ed', '#e6e2da', '#d9d2c5', '#8c8273'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 12px 40px 15px 35px;
  padding: 3rem;
  border: 1px solid #e0dbd1;
  color: #5c5852;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.02);
}

/* Button Styles */
.button {
  background: #8c8273;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 5px 15px 5px 12px;
  cursor: pointer;
  font-style: italic;
}

.button:hover {
  background: #7a6f60;
}`
  },
  {
    id: 'industrial-grit',
    name: 'Industrial Grit',
    category: 'Artistic',
    description: 'Concrete textures, metallic borders, and construction-site orange. Raw, functional, and urban.',
    pros: [
      'Very strong and authoritative.',
      'Unique urban aesthetic.',
      'Great for architectural or mechanical sites.'
    ],
    cons: [
      'Can look too "dirty" for mainstream use.',
      'Harsh on the eyes.'
    ],
    background: '#222',
    suggestedColors: ['#222', '#333', '#1a1a1a', '#ff6b00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #333;
  border: 4px solid #444;
  padding: 2.5rem;
  color: #ff6b00;
  box-shadow: 0 0 0 2px #555;
  text-transform: uppercase;
}

/* Button Styles */
.button {
  background: #ff6b00;
  color: #000;
  border: none;
  padding: 12px 30px;
  font-weight: 900;
  cursor: pointer;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
}

.button:hover {
  background: #fff;
}`
  },
  {
    id: 'data-hud',
    name: 'Sci-Fi HUD',
    category: 'Modern',
    description: 'Transparent layers, thin data-lines, and glowing UI elements. Inspired by high-tech cockpit interfaces.',
    pros: [
      'Feels incredibly advanced.',
      'Great for dashboards and complex data.',
      'Visually immersive.'
    ],
    cons: [
      'Very difficult to read for average users.',
      'Information overload.'
    ],
    background: '#000814',
    suggestedColors: ['#000814', '#001d3d', '#003566', '#ffc300'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(0, 53, 102, 0.1);
  border: 1px solid rgba(0, 187, 249, 0.5);
  padding: 2rem;
  color: #00bbf9;
  font-family: monospace;
  box-shadow: 0 0 20px rgba(0, 187, 249, 0.2);
  position: relative;
}

.card::after {
  content: 'SCANNING...';
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 0.6rem;
}

/* Button Styles */
.button {
  background: transparent;
  color: #ffc300;
  border: 1px solid #ffc300;
  padding: 8px 20px;
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: uppercase;
}

.button:hover {
  background: rgba(255, 195, 0, 0.1);
  box-shadow: 0 0 15px #ffc300;
}`
  },
  {
    id: 'papercraft',
    name: 'Papercraft',
    category: 'Artistic',
    description: 'Stacked layers with crisp shadows to mimic physical paper cutouts. Depth without glass or blur.',
    pros: [
      'Tactile and unique depth.',
      'Fast performance (standard shadows).',
      'Very clear hierarchy.'
    ],
    cons: [
      'Can look too flat if shadows aren’t perfect.',
      'Limited color interaction.'
    ],
    background: '#f0f0f0',
    suggestedColors: ['#f0f0f0', '#ffffff', '#e0e0e0', '#3b82f6'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 4px;
  padding: 2.5rem;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.05), 
              16px 16px 0px rgba(0,0,0,0.05);
  color: #333;
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-weight: 600;
  box-shadow: 4px 4px 0px #1d4ed8;
  cursor: pointer;
}

.button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #1d4ed8;
}`
  },
  {
    id: 'victorian-gothic',
    name: 'Victorian Gothic',
    category: 'Luxury',
    description: 'Ornate, dark, and elegant. Features deep velvets, gold flourishes, and dramatic serif typography.',
    pros: [
      'Extremely high-end and mysterious.',
      'Deeply evocative and artistic.',
      'Perfect for gothic-themed creative brands.'
    ],
    cons: [
      'Very niche and specialized.',
      'Can feel "heavy" or outdated.'
    ],
    background: '#1a0b0b',
    suggestedColors: ['#1a0b0b', '#2d0f0f', '#421414', '#d4af37'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border: 2px solid #d4af37;
  padding: 3rem;
  color: #fff;
  font-family: 'Times New Roman', serif;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
  text-align: center;
}

/* Button Styles */
.button {
  background: #d4af37;
  color: #000;
  border: none;
  padding: 10px 30px;
  font-family: inherit;
  font-variant: small-caps;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
}

.button:hover {
  opacity: 0.8;
}`
  },
  {
    id: 'retro-mac',
    name: 'Retro Mac 84',
    category: 'Retro',
    description: 'A tribute to the original 1984 Macintosh interface. Gray tones, dithered patterns, and thick borders.',
    pros: [
      'Pure computing nostalgia.',
      'Extremely high readability.',
      'Unique "techy" personality.'
    ],
    cons: [
      'Visually very limited.',
      'Can look "boring" to younger audiences.'
    ],
    background: '#5555ff',
    suggestedColors: ['#5555ff', '#c0c0c0', '#ffffff', '#000000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 2px solid #000;
  padding: 1.5rem;
  color: #000;
  box-shadow: 4px 4px 0px #000;
  font-family: 'Chicago', 'Courier New', monospace;
}

/* Button Styles */
.button {
  background: #fff;
  border: 1px solid #000;
  padding: 6px 20px;
  cursor: pointer;
  box-shadow: inset -1px -1px #000, inset 1px 1px #fff;
}

.button:active {
  background: #000;
  color: #fff;
}`
  },
  {
    id: 'material-you',
    name: 'Material You',
    category: 'Modern',
    description: 'Google’s dynamic design system. Organic shapes, pastel tones, and fluid transitions that adapt to context.',
    pros: [
      'Very modern and "smart" feel.',
      'Excellent accessibility and comfort.',
      'Highly flexible.'
    ],
    cons: [
      'Requires a lot of whitespace to look good.',
      'Can feel a bit "default".'
    ],
    background: '#fdfcf7',
    suggestedColors: ['#fdfcf7', '#f2f0e4', '#e6e3d1', '#7d775b'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #f2f0e4;
  border-radius: 28px;
  padding: 2.5rem;
  color: #1c1c16;
}

/* Button Styles */
.button {
  background: #dce3f9;
  color: #151b2c;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  filter: brightness(0.95);
}`
  },
  {
    id: 'abstract-fluid',
    name: 'Abstract Fluid',
    category: 'Modern',
    description: 'Shifting organic blobs and flowing gradients. Constant movement and visual intrigue.',
    pros: [
      'Incredibly engaging and artistic.',
      'Great for hero sections.',
      'Feels premium and high-tech.'
    ],
    cons: [
      'High CPU/GPU cost.',
      'Hard to control text placement.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#111', '#ff0080', '#7928ca'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(30px);
  border-radius: 40px;
  padding: 3rem;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}

/* Button Styles */
.button {
  background: linear-gradient(45deg, #ff0080, #7928ca);
  color: #fff;
  border: none;
  padding: 14px 30px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.button:hover {
  transform: scale(1.1);
  filter: hue-rotate(45deg);
}`
  },
  {
    id: 'neon-tokyo',
    name: 'Neon Tokyo',
    category: 'Modern',
    description: 'High-saturation pinks, cyans, and deep blacks. Inspired by Tokyo’s night scenes and future-pop culture.',
    pros: [
      'High visual impact.',
      'Vibrant and energetic.',
      'Great for entertainment/gaming.'
    ],
    cons: [
      'Can be harsh in low-light.',
      'Color clashing risk.'
    ],
    background: '#010101',
    suggestedColors: ['#010101', '#050505', '#ff00ff', '#00ffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border: 2px solid #00ffff;
  padding: 2rem;
  box-shadow: 0 0 15px #00ffff, inset 0 0 10px #ff00ff;
  color: #fff;
  text-shadow: 0 0 5px #ff00ff;
}

/* Button Styles */
.button {
  background: transparent;
  color: #ff00ff;
  border: 2px solid #ff00ff;
  padding: 10px 25px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 10px #ff00ff;
}

.button:hover {
  background: #ff00ff;
  color: #000;
  box-shadow: 0 0 25px #ff00ff;
}`
  },
  {
    id: 'minimalist-dark',
    name: 'Minimalist Dark',
    category: 'Minimalist',
    description: 'Extreme minimalism tailored for dark mode. Focus on subtle grays and perfect typography.',
    pros: [
      'Very easy on the eyes.',
      'Communicates modern efficiency.',
      'High performance.'
    ],
    cons: [
      'Can feel too simple.',
      'Hard to highlight elements.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#0a0a0a', '#111', '#333'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #0a0a0a;
  padding: 3rem;
  color: #888;
  border: 1px solid #1a1a1a;
}

/* Button Styles */
.button {
  background: #1a1a1a;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
}

.button:hover {
  background: #333;
}`
  },
  {
    id: 'swiss-grid',
    name: 'Swiss Grid System',
    category: 'Minimalist',
    description: 'A more rigid version of Swiss Design that emphasizes the underlying grid lines as a visual element.',
    pros: [
      'Incredible structural clarity.',
      'Unique "architectural" look.',
      'Very clean.'
    ],
    cons: [
      'Can feel cold and impersonal.',
      'Rigid layout constraints.'
    ],
    background: '#fff',
    suggestedColors: ['#fff', '#f0f0f0', '#000', '#ff0000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #000;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  color: #000;
}

.card-header { border-bottom: 1px solid #000; padding: 1rem; }
.card-content { padding: 2rem; }

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px;
  width: 100%;
  font-weight: 900;
  cursor: pointer;
}

.button:hover {
  background: #ff0000;
}`
  },
  {
    id: 'synthwave-retro',
    name: 'Synthwave 80s',
    category: 'Retro',
    description: 'The iconic 80s futuristic aesthetic. Grid floors, chrome text, and sunset gradients.',
    pros: [
      'Strongly thematic and immersive.',
      'Very popular for creative projects.',
      'High visual interest.'
    ],
    cons: [
      'Hard to fit into standard layouts.',
      'Very specific color palette.'
    ],
    background: '#0b001e',
    suggestedColors: ['#0b001e', '#240b36', '#c31432', '#ed1e79'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(180deg, #240b36 0%, #0b001e 100%);
  border: 2px solid #ed1e79;
  padding: 2.5rem;
  color: #00ffff;
  box-shadow: 0 0 20px #ed1e79, inset 0 0 10px #ed1e79;
}

/* Button Styles */
.button {
  background: linear-gradient(180deg, #ed1e79 0%, #7209b7 100%);
  color: #fff;
  border: none;
  padding: 12px 28px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 0 0 5px #fff;
  box-shadow: 0 5px 15px rgba(237, 30, 121, 0.4);
}

.button:hover {
  filter: brightness(1.2);
}`
  },
  {
    id: 'monochrome-modern',
    name: 'Monochrome Modern',
    category: 'Minimalist',
    description: 'Pure focus on form and shadow without the distraction of color. Different shades of gray and black.',
    pros: [
      'Maximum sophistication.',
      'Perfect focus on content.',
      'Timeless.'
    ],
    cons: [
      'Can feel "sad" or "boring".',
      'Hierarchy is hard to define.'
    ],
    background: '#111',
    suggestedColors: ['#111', '#222', '#333', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #1a1a1a;
  border-radius: 2px;
  padding: 3rem;
  color: #fff;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  font-weight: bold;
  cursor: pointer;
}

.button:hover {
  background: #ccc;
}`
  },
  {
    id: 'y2k-chrome',
    name: 'Y2K Chrome',
    category: 'Retro',
    description: 'Reflective metallic surfaces, liquid metal effects, and high-shine finishes inspired by the turn-of-the-millennium futurism.',
    pros: [
      'Extremely eye-catching and trendy.',
      'High sense of futuristic luxury.',
      'Unique metallic depth.'
    ],
    cons: [
      'Hard to read text on shiny surfaces.',
      'Requires specific high-quality assets to look right.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#1a1a1a', '#222', '#333'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 25%, #8e8e8e 50%, #ffffff 75%, #e0e0e0 100%);
  background-size: 400% 400%;
  animation: shine 10s linear infinite;
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 40px;
  padding: 3rem;
  color: #000;
  box-shadow: 0 0 30px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.5);
  backdrop-filter: brightness(1.2);
}

@keyframes shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 0 15px rgba(255,255,255,0.4);
  cursor: pointer;
}

.button:hover {
  background: #fff;
  color: #000;
}`
  },
  {
    id: 'y2k-pink',
    name: 'Y2K Pink',
    category: 'Playful',
    description: 'Bubblegum pop aesthetics from the early 2000s. High-gloss plastics, bright pinks, and soft gradients.',
    pros: [
      'Fun, energetic, and nostalgic.',
      'High visual appeal for younger audiences.',
      'Very recognizable aesthetic.'
    ],
    cons: [
      'Can be visually overwhelming.',
      'Limited use cases.'
    ],
    background: '#fff0f5',
    suggestedColors: ['#ffcce6', '#ff80bf', '#ff4da6', '#ffffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #ff80bf, #ffb3d9);
  border: 4px solid #fff;
  border-radius: 30px;
  padding: 2.5rem;
  color: #fff;
  box-shadow: 0 15px 30px rgba(255, 128, 191, 0.4), inset 0 0 15px rgba(255,255,255,0.5);
  text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

/* Button Styles */
.button {
  background: #fff;
  color: #ff4da6;
  border: none;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 800;
  box-shadow: 0 8px 0px #ffb3d9;
  cursor: pointer;
  transition: all 0.1s;
}

.button:active {
  transform: translateY(4px);
  box-shadow: 0 4px 0px #ffb3d9;
}`
  },
  {
    id: 'y2k-glass',
    name: 'Y2K Glass',
    category: 'Modern',
    description: 'A blend of Glassmorphism and Y2K. Liquid-like transparency with strong light refraction and organic shapes.',
    pros: [
      'Very sophisticated and modern.',
      'Beautiful interaction with light.',
      'Fresh take on transparency.'
    ],
    cons: [
      'High GPU usage for refraction.',
      'Can be hard to implement cross-browser.'
    ],
    background: '#a1c4fd',
    suggestedColors: ['#a1c4fd', '#c2e9fb', '#d1d9e6', '#ffffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
  padding: 4rem;
  color: #1e3a8a;
  box-shadow: 0 25px 50px rgba(0,0,0,0.1);
}

/* Button Styles */
.button {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255,255,255,0.6);
  padding: 15px 35px;
  border-radius: 100px;
  color: #1e3a8a;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}`
  },
  {
    id: 'hyper-maximalism',
    name: 'Hyper-Maximalism',
    category: 'Artistic',
    description: 'Controlled chaos. Multiple patterns, vibrant colors, and overlapping elements that demand attention.',
    pros: [
      'Impossible to ignore.',
      'Extremely expressive and unique.',
      'Great for creative brands.'
    ],
    cons: [
      'Low usability if not careful.',
      'High cognitive load for users.'
    ],
    background: '#ff0055',
    suggestedColors: ['#ff0055', '#00ffcc', '#ffff00', '#000000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: radial-gradient(#00ffcc 2px, transparent 2px);
  background-size: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #ffff00;
  border: 10px solid #000;
  padding: 2rem;
  color: #000;
  transform: rotate(-3deg);
  box-shadow: 20px 20px 0px #00ffcc, -20px -20px 0px #ff0055;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  transform: rotate(3deg);
  box-shadow: 5px 5px 0px #ff0055;
  cursor: pointer;
}

.button:hover {
  transform: rotate(0deg) scale(1.1);
}`
  },
  {
    id: 'organic-mesh',
    name: 'Organic Mesh',
    category: 'Soft',
    description: 'Fluid, moving mesh gradients that create a living, breathing background feel.',
    pros: [
      'Very calming and premium.',
      'Works well with minimalist UI.',
      'Adds life to static pages.'
    ],
    cons: [
      'Performance can drop with many layers.',
      'Needs careful color selection.'
    ],
    background: '#f3f4f6',
    suggestedColors: ['#f3f4f6', '#fff', '#e5e7eb', '#d1d5db'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);
  border-radius: 40px;
  padding: 3rem;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 14px 30px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255,255,255,0.4);
}`
  },
  {
    id: 'pixel-retro',
    name: 'Pixel Retro',
    category: 'Retro',
    description: '8-bit inspired design with a modern "HD" twist. Sharp corners, vibrant colors, and blocky elements.',
    pros: [
      'Strong gaming/tech vibe.',
      'Fun and interactive.',
      'Easy to implement.'
    ],
    cons: [
      'Can look dated if not polished.',
      'Limited to specific niche.'
    ],
    background: '#2b2b2b',
    suggestedColors: ['#2b2b2b', '#00ff00', '#ff00ff', '#00ffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #444;
  border: 4px solid #fff;
  box-shadow: 8px 0 0 -4px #fff, -8px 0 0 -4px #fff, 0 8px 0 -4px #fff, 0 -8px 0 -4px #fff, 12px 0 0 -4px #000, -12px 0 0 -4px #000, 0 12px 0 -4px #000, 0 -12px 0 -4px #000;
  padding: 2rem;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
}

/* Button Styles */
.button {
  background: #00ff00;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: 900;
  box-shadow: 4px 4px 0px #000;
  cursor: pointer;
  image-rendering: pixelated;
}

.button:active {
  box-shadow: none;
  transform: translate(4px, 4px);
}`
  },
  {
    id: 'vogue-editorial',
    name: 'Vogue Editorial',
    category: 'Luxury',
    description: 'High-fashion magazine aesthetic. Large serif typography, plenty of whitespace, and a focus on imagery.',
    pros: [
      'Extremely elegant and high-end.',
      'Very readable and clean.',
      'Great for luxury branding.'
    ],
    cons: [
      'Can feel "empty" without good content.',
      'Requires very high-quality assets.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000000', '#f4f4f4', '#e0e0e0'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 4rem 2rem;
  max-width: 500px;
  color: #000;
  text-align: center;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 45px;
  font-family: serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.button:hover {
  opacity: 0.8;
}`
  },
  {
    id: 'glitch-aesthetics',
    name: 'Glitch Aesthetic',
    category: 'Artistic',
    description: 'Digital errors turned into art. Visual noise, color separation, and jagged edges.',
    pros: [
      'Very edgy and modern.',
      'Highly interactive and dynamic.',
      'Standout visual identity.'
    ],
    cons: [
      'Can be hard to read.',
      'Can be distracting.'
    ],
    background: '#0a0a0a',
    suggestedColors: ['#0a0a0a', '#ff00ff', '#00ffff', '#ffffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  border: 1px solid #333;
  padding: 3rem;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}

/* Button Styles */
.button {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 12px 28px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
}

.button:hover {
  text-shadow: 2px 0 red, -2px 0 blue;
  box-shadow: 2px 0 red, -2px 0 blue;
}`
  },
  {
    id: 'clay-dark',
    name: 'Claymorphism Dark',
    category: 'Soft',
    description: 'A dark, moody version of Claymorphism. Deep shadows and subtle inner glows for a premium feel.',
    pros: [
      'Very easy on the eyes.',
      'High sense of depth.',
      'Modern and professional.'
    ],
    cons: [
      'Can look muddy if colors are not perfect.',
      'Hard to achieve pop in dark mode.'
    ],
    background: '#1a1b26',
    suggestedColors: ['#1a1b26', '#24283b', '#16161e', '#7aa2f7'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #24283b;
  border-radius: 40px;
  padding: 3rem;
  color: #a9b1d6;
  box-shadow: 25px 25px 50px #16161e, 
              -10px -10px 20px rgba(255,255,255,0.02),
              inset -5px -5px 15px rgba(0,0,0,0.3),
              inset 5px 5px 15px rgba(255,255,255,0.05);
}

/* Button Styles */
.button {
  background: #7aa2f7;
  color: #1a1b26;
  border: none;
  padding: 12px 30px;
  border-radius: 20px;
  font-weight: 700;
  box-shadow: 5px 5px 15px #16161e, inset -2px -2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
}`
  },
  {
    id: 'soft-brutalism',
    name: 'Soft Brutalism',
    category: 'Minimalist',
    description: 'The structural integrity of Brutalism but with soft pastel colors and rounded corners.',
    pros: [
      'Balanced and friendly.',
      'Clear hierarchy.',
      'Versatile aesthetic.'
    ],
    cons: [
      'Can look a bit like generic material design.',
      'Less "impactful" than traditional brutalism.'
    ],
    background: '#fdf2f2',
    suggestedColors: ['#fdf2f2', '#fff', '#fee2e2', '#000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 2.5rem;
  color: #000;
  box-shadow: 8px 8px 0px #000;
}

/* Button Styles */
.button {
  background: #fee2e2;
  color: #000;
  border: 2px solid #000;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 4px 4px 0px #000;
  cursor: pointer;
  transition: all 0.1s;
}

.button:hover {
  background: #fecaca;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000;
}`
  },
  {
    id: 'kinetic-type',
    name: 'Kinetic Typography',
    category: 'Artistic',
    description: 'Dynamic, moving text that becomes the primary visual element. High impact and modern.',
    pros: [
      'Extremely high engagement.',
      'Memorable brand identity.',
      'Unique storytelling method.'
    ],
    cons: [
      'Can be distracting for long reading.',
      'Complex to implement correctly.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#f0f0f0'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
}

/* Card Styles */
.card {
  background: transparent;
  border: none;
  padding: 0;
  color: #fff;
  text-align: center;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 20px 50px;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button:hover {
  transform: scale(1.1) skew(-5deg);
}`
  },
  {
    id: 'brutalist-elite',
    name: 'Brutalist Elite',
    category: 'Luxury',
    description: 'Raw, unpolished layout combined with sophisticated serif typography. High contrast between structure and elegance.',
    pros: [
      'Very unique and high-end.',
      'Clear sense of authority.',
      'Strong visual hierarchy.'
    ],
    cons: [
      'Can feel too "cold" or "aggressive".',
      'Requires expert typography skills.'
    ],
    background: '#f4f4f4',
    suggestedColors: ['#f4f4f4', '#000', '#333'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #000;
  padding: 4rem;
  color: #000;
  border-radius: 0;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-family: serif;
  font-style: italic;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.button:hover {
  background: #fff;
  color: #000;
  box-shadow: 10px 10px 0 #000;
}`
  },
  {
    id: 'liquid-warp',
    name: 'Liquid Warp',
    category: 'Artistic',
    description: 'Fluid, warped shapes and elements that look like they are seen through moving water.',
    pros: [
      'Dreamy and ethereal aesthetic.',
      'Highly engaging and interactive.',
      'Feels alive and organic.'
    ],
    cons: [
      'Hard to ensure content legibility.',
      'Requires heavy GPU shaders.'
    ],
    background: '#000814',
    suggestedColors: ['#000814', '#003566', '#ffc300'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  padding: 4rem;
  color: #ffc300;
  border: 1px solid rgba(255,255,255,0.2);
  animation: warp 8s ease-in-out infinite alternate;
}

@keyframes warp {
  from { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  to { border-radius: 40% 60% 70% 30% / 30% 70% 40% 60%; }
}

/* Button Styles */
.button {
  background: #ffc300;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'asymmetric-vibe',
    name: 'Asymmetric Dynamic',
    category: 'Minimalist',
    description: 'Breaking the grid with overlapping elements and intentional whitespace. Dynamic and balanced.',
    pros: [
      'Feels modern and artistic.',
      'Great for editorial content.',
      'Encourages exploration.'
    ],
    cons: [
      'Can look messy if not carefully aligned.',
      'Responsive design is challenging.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#1a1a1a', '#e0e0e0'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #1a1a1a;
  padding: 3rem;
  color: #fff;
  transform: translateX(-20px);
  position: relative;
}

.card::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 40px;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  z-index: -1;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  position: absolute;
  bottom: -15px;
  right: -30px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'grainy-analog',
    name: 'Grainy Analog',
    category: 'Retro',
    description: 'Noise textures and analog film grain combined with modern typography. Warm and nostalgic.',
    pros: [
      'High sense of atmosphere.',
      'Feels premium and artistic.',
      'Unique tactile feel.'
    ],
    cons: [
      'Noise can interfere with small text.',
      'Performance impact with large noise overlays.'
    ],
    background: '#1c1c1c',
    suggestedColors: ['#1c1c1c', '#fdfaf0', '#333'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
}

.container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.2;
  pointer-events: none;
}

/* Card Styles */
.card {
  background: #fdfaf0;
  padding: 3rem;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

/* Button Styles */
.button {
  background: #000;
  color: #fdfaf0;
  border: none;
  padding: 12px 30px;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'elegant-serif',
    name: 'Elegant Serif Minimalism',
    category: 'Luxury',
    description: 'Focus on high-quality serif typography with extreme amounts of whitespace. Sophisticated and calm.',
    pros: [
      'Extremely high-end feel.',
      'Very readable and clean.',
      'Perfect for luxury brands.'
    ],
    cons: [
      'Can feel "empty" if content is lacking.',
      'Requires very high-quality assets.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000', '#f4f4f4'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 5rem 2rem;
  color: #000;
  text-align: center;
  max-width: 400px;
}

/* Button Styles */
.button {
  background: transparent;
  color: #000;
  border-bottom: 1px solid #000;
  padding: 5px 0;
  font-family: serif;
  font-style: italic;
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.button:hover {
  opacity: 0.5;
}`
  },
  {
    id: 'horizontal-flow',
    name: 'Horizontal Flow',
    category: 'Artistic',
    description: 'Design optimized for horizontal movement and exploration. Unique navigation feel.',
    pros: [
      'Standout user experience.',
      'Great for portfolios and galleries.',
      'Encourages linear storytelling.'
    ],
    cons: [
      'Not standard for general web usage.',
      'Mobile UX requires careful handling.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#222'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  border: 1px solid #333;
  padding: 3rem;
  color: #fff;
  display: flex;
  gap: 2rem;
  width: 80%;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 0;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'split-dynamic',
    name: 'Split Dynamic',
    category: 'Modern',
    description: 'High-contrast split screen layouts that respond to user interaction. Bold and energetic.',
    pros: [
      'Immediate visual impact.',
      'Clear content separation.',
      'Very engaging.'
    ],
    cons: [
      'Hard to balance visual weight.',
      'Complex to implement responsively.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000', '#ff0000'],
    cssCode: `/* Container Styles */
.container {
  background: linear-gradient(90deg, #000 50%, #fff 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #ff0000;
  padding: 2rem;
  color: #fff;
  transform: rotate(-5deg);
  box-shadow: 10px 10px 0 #000;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'mask-reveal',
    name: 'Mask Reveal',
    category: 'Modern',
    description: 'Using masks and layers to reveal content through interaction. Mysterious and engaging.',
    pros: [
      'Adds a sense of discovery.',
      'Highly interactive.',
      'Unique visual depth.'
    ],
    cons: [
      'Can be confusing if not intuitive.',
      'Browser support for masks can vary.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#444'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  padding: 3rem;
  color: #fff;
  border: 1px solid #333;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at center, transparent 30%, #000 70%);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: '3d-float',
    name: '3D Float Integration',
    category: 'Modern',
    description: 'Elements that appear to float in a 3D space with complex shadowing and depth.',
    pros: [
      'Extremely high quality feel.',
      'Adds physical presence to UI.',
      'Very engaging.'
    ],
    cons: [
      'Shadow calculation can be heavy.',
      'Requires precise visual balance.'
    ],
    background: '#e2e8f0',
    suggestedColors: ['#e2e8f0', '#ffffff', '#cbd5e1'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  perspective: 1000px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 3rem;
  border-radius: 20px;
  transform: rotateX(10deg) rotateY(-10deg);
  box-shadow: 40px 40px 80px rgba(0,0,0,0.1), -10px -10px 40px rgba(255,255,255,0.8);
  color: #334155;
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(59,130,246,0.3);
  cursor: pointer;
}`
  },
  {
    id: 'parallax-layers',
    name: 'Parallax Depth Layers',
    category: 'Artistic',
    description: 'Multiple layers moving at different speeds to create a sense of deep space. Immersive.',
    pros: [
      'Immense sense of scale.',
      'Very interactive.',
      'Cinematic feel.'
    ],
    cons: [
      'Complex to build.',
      'Performance can be an issue.'
    ],
    background: '#0a0e14',
    suggestedColors: ['#0a0e14', '#1a202c', '#ffffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 4rem;
  color: #fff;
  border-radius: 0;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
}

/* Button Styles */
.button {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 15px 35px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
}`
  },
  {
    id: 'technical-mono',
    name: 'Technical Monotype',
    category: 'Minimalist',
    description: 'Grid-based layout using monospaced fonts and technical symbols. Precise and cool.',
    pros: [
      'Very clean and modern.',
      'Conveys technical expertise.',
      'Efficient and readable.'
    ],
    cons: [
      'Can feel "too nerdy" or "cold".',
      'Hard to make look premium.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#00ff00', '#333'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: radial-gradient(#333 1px, transparent 1px);
  background-size: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border: 1px solid #333;
  padding: 2rem;
  color: #00ff00;
  font-family: 'Courier New', monospace;
}

/* Button Styles */
.button {
  background: #00ff00;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'neon-noir',
    name: 'Neon Noir',
    category: 'Modern',
    description: 'Dark mode aesthetics with vibrant neon accents and cinematic atmosphere. Moody and high-impact.',
    pros: [
      'Very atmospheric and cool.',
      'High contrast visual style.',
      'Great for nightlife/gaming.'
    ],
    cons: [
      'Limited use cases.',
      'Can be visually tiring.'
    ],
    background: '#050505',
    suggestedColors: ['#050505', '#ff0055', '#00ffcc'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  border: 1px solid #ff0055;
  box-shadow: 0 0 15px #ff0055, inset 0 0 5px #ff0055;
  padding: 3rem;
  color: #fff;
  border-radius: 4px;
}

/* Button Styles */
.button {
  background: transparent;
  color: #00ffcc;
  border: 2px solid #00ffcc;
  padding: 12px 28px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 0 10px #00ffcc;
  cursor: pointer;
}`
  },
  {
    id: 'mesh-soft',
    name: 'Pastel Mesh Soft',
    category: 'Soft',
    description: 'Soft, pastel mesh gradients with organic floating shapes. Friendly and premium.',
    pros: [
      'Very calming and modern.',
      'Works well with light UI.',
      'High visual appeal.'
    ],
    cons: [
      'Can look a bit "generic" if not detailed.',
      'Hard to achieve pop.'
    ],
    background: '#f8fafc',
    suggestedColors: ['#f8fafc', '#ffffff', '#e2e8f0'],
    cssCode: `/* Container Styles */
.container {
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 3rem;
  color: #334155;
  border: 1px solid rgba(255,255,255,0.3);
}

/* Button Styles */
.button {
  background: #ffffff;
  color: #334155;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  cursor: pointer;
}`
  },
  {
    id: 'pop-brutalist',
    name: 'Pop Brutalist',
    category: 'Playful',
    description: 'Traditional brutalist structure with bright, popping colors and playful typography. Fun and bold.',
    pros: [
      'Extremely energetic.',
      'Very memorable.',
      'Great for social brands.'
    ],
    cons: [
      'Can be visually loud.',
      'Hard to maintain readability.'
    ],
    background: '#3b82f6',
    suggestedColors: ['#3b82f6', '#ff0055', '#ffff00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #ffff00;
  border: 5px solid #000;
  padding: 2.5rem;
  color: #000;
  box-shadow: 12px 12px 0 #ff0055;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 35px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'modern-bauhaus',
    name: 'Modern Bauhaus',
    category: 'Artistic',
    description: 'Geometric shapes, primary colors, and balanced composition inspired by the Bauhaus movement. Classic and modern.',
    pros: [
      'Strong historical grounding.',
      'Perfectly balanced.',
      'Iconic visual language.'
    ],
    cons: [
      'Can feel "old" if not updated.',
      'Very specific aesthetic.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#ff0000', '#0000ff', '#ffff00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 2px solid #000;
  padding: 3rem;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: -20px; right: -20px; width: 60px; height: 60px;
  background: #ff0000;
  border-radius: 50%;
  z-index: -1;
}

/* Button Styles */
.button {
  background: #0000ff;
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'experimental-chaos',
    name: 'Experimental Chaos',
    category: 'Artistic',
    description: 'Intentionally breaking design rules to create something entirely new and provocative. High art.',
    pros: [
      'True standout identity.',
      'Provokes thought and emotion.',
      'No limits on creativity.'
    ],
    cons: [
      'Very low usability.',
      'Highly polarizing.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#ff0055'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 1rem;
  color: #000;
  transform: skew(10deg) rotate(-5deg);
  border: 1px solid #000;
  mix-blend-mode: difference;
}

/* Button Styles */
.button {
  background: #ff0055;
  color: #fff;
  border: none;
  padding: 30px;
  font-size: 2rem;
  transform: rotate(10deg);
  cursor: pointer;
}`
  },
  {
    id: 'narrative-flow',
    name: 'Narrative Flow',
    category: 'Minimalist',
    description: 'Design that guides the user through a story with precise pacing and focal points. Calm and effective.',
    pros: [
      'High conversion rate.',
      'Clear user journey.',
      'Emotional connection.'
    ],
    cons: [
      'Can feel restrictive.',
      'Requires strong copy.'
    ],
    background: '#fafafa',
    suggestedColors: ['#fafafa', '#222', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 4rem;
  color: #333;
  max-width: 500px;
  border-left: 2px solid #333;
}

/* Button Styles */
.button {
  background: #333;
  color: #fff;
  border: none;
  padding: 12px 35px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
}`
  },
  {
    id: 'reactive-minimal',
    name: 'Reactive Minimalism',
    category: 'Minimalist',
    description: 'Extremely minimal visual design that becomes complex and reactive only when the user interacts. Surprise and delight.',
    pros: [
      'Cleanest possible look.',
      'High sense of polish.',
      'Delightful UX.'
    ],
    cons: [
      'Can look "boring" initially.',
      'Hard to communicate functionality.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000', '#eee'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 3rem;
  border: 1px solid #eee;
  color: #000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: #000;
  transform: translateY(-10px);
}

/* Button Styles */
.button {
  background: transparent;
  color: #000;
  border: 1px solid #000;
  padding: 12px 30px;
  cursor: pointer;
}`
  },
  {
    id: 'classic-revival',
    name: 'Classic Revival',
    category: 'Luxury',
    description: 'Mixing classical art and design elements with ultra-modern digital layouts. Timeless and fresh.',
    pros: [
      'Extremely premium and unique.',
      'High artistic value.',
      'Strong emotional impact.'
    ],
    cons: [
      'Hard to source right assets.',
      'Can feel "pretentious" if overdone.'
    ],
    background: '#1a1a1a',
    suggestedColors: ['#1a1a1a', '#d4af37', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #d4af37;
  padding: 4rem;
  color: #1a1a1a;
  position: relative;
}

.card::before {
  content: 'EST. 2026';
  position: absolute;
  top: 10px; right: 10px; font-size: 0.6rem; letter-spacing: 2px;
}

/* Button Styles */
.button {
  background: #d4af37;
  color: #1a1a1a;
  border: none;
  padding: 12px 30px;
  font-family: serif;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'isometric-grid',
    name: 'Isometric 3D Grid',
    category: 'Modern',
    description: 'Perspective-based cards that look like 3D objects in an isometric space. High depth and technical feel.',
    pros: [
      'Extremely high visual depth.',
      'Unique architectural feel.',
      'Perfect for data visualization.'
    ],
    cons: [
      'Challenging for text alignment.',
      'Complex responsive behavior.'
    ],
    background: '#f0f4f8',
    suggestedColors: ['#f0f4f8', '#ffffff', '#cbd5e1'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  perspective: 1000px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 3rem;
  border-radius: 12px;
  transform: rotateX(45deg) rotateZ(-45deg);
  box-shadow: 20px 20px 60px rgba(0,0,0,0.1), -1px -1px 2px rgba(255,255,255,0.5);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: rotateX(45deg) rotateZ(-45deg) translateZ(20px);
  box-shadow: 40px 40px 80px rgba(0,0,0,0.15);
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'holographic-foil',
    name: 'Holographic Foil',
    category: 'Artistic',
    description: 'Shimmering metallic surfaces with rainbow light refraction. Trendy and highly visual.',
    pros: [
      'Very trendy and eye-catching.',
      'Premium artistic quality.',
      'Great for creative brands.'
    ],
    cons: [
      'Can be visually busy.',
      'Requires careful color management.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#111', '#222'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #ff00ff, #00ffff, #ff00ff, #00ffff);
  background-size: 400% 400%;
  animation: holo 5s linear infinite;
  border-radius: 24px;
  padding: 3rem;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.2);
  box-shadow: 0 0 30px rgba(0,255,255,0.3);
  mix-blend-mode: screen;
}

@keyframes holo {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}

/* Button Styles */
.button {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'cyber-renaissance',
    name: 'Cyber Renaissance',
    category: 'Artistic',
    description: 'A mix of classical art principles and digital glitch aesthetics. Timeless yet futuristic.',
    pros: [
      'Deep intellectual appeal.',
      'High contrast visual identity.',
      'Truly unique aesthetic.'
    ],
    cons: [
      'Can be hard to source matching assets.',
      'Not for every brand.'
    ],
    background: '#1a1a1a',
    suggestedColors: ['#1a1a1a', '#d4af37', '#ff0055'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 4px solid #d4af37;
  padding: 3rem;
  color: #000;
  position: relative;
}

.card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border: 2px solid #ff0055;
  transform: translate(10px, 10px);
  z-index: -1;
}

/* Button Styles */
.button {
  background: #000;
  color: #d4af37;
  border: none;
  padding: 12px 30px;
  font-family: serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  cursor: pointer;
}`
  },
  {
    id: 'liquid-gold',
    name: 'Liquid Gold Luxury',
    category: 'Luxury',
    description: 'Shiny, metallic gold surfaces with organic liquid shapes. The ultimate premium feel.',
    pros: [
      'Extremely high-end and expensive look.',
      'Beautiful interaction with light.',
      'Communicates supreme quality.'
    ],
    cons: [
      'Can look tacky if not executed perfectly.',
      'Needs subtle backgrounds to pop.'
    ],
    background: '#0a0a0a',
    suggestedColors: ['#0a0a0a', '#111', '#000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #d4af37 0%, #f7e1ad 25%, #d4af37 50%, #f7e1ad 75%, #d4af37 100%);
  background-size: 400% 400%;
  animation: flowing 12s ease infinite;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%;
  padding: 4rem;
  color: #000;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.4);
}

@keyframes flowing {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Button Styles */
.button {
  background: #000;
  color: #d4af37;
  border: none;
  padding: 12px 30px;
  border-radius: 0;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'brutalist-sketch',
    name: 'Brutalist Sketch',
    category: 'Artistic',
    description: 'Hand-drawn lines, rough paper textures, and sketchy borders. Raw and human.',
    pros: [
      'Very approachable and human.',
      'High artistic personality.',
      'Great for creative portfolios.'
    ],
    cons: [
      'Can look "messy" if not balanced.',
      'Hard to make look professional.'
    ],
    background: '#fdfaf0',
    suggestedColors: ['#fdfaf0', '#fff', '#eee'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 3px solid #000;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  padding: 3rem;
  color: #000;
  box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 100px 50px 100px 40px / 40px 100px 50px 100px;
  padding: 12px 30px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'deep-glass-dark',
    name: 'Deep Glass Dark',
    category: 'Modern',
    description: 'Multiple layers of glassmorphism with extreme depth and dark mode colors.',
    pros: [
      'Maximum sense of hierarchy.',
      'Beautifully moody and premium.',
      'High visual interest.'
    ],
    cons: [
      'Heavy on performance (multi-blur).',
      'Requires very high quality backgrounds.'
    ],
    background: '#020617',
    suggestedColors: ['#020617', '#0f172a', '#1e293b'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 32px;
  padding: 3rem;
  color: #fff;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.05);
}

/* Button Styles */
.button {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 12px 30px;
  border-radius: 16px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}`
  },
  {
    id: 'ascii-art',
    name: 'ASCII Art Digital',
    category: 'Retro',
    description: 'Pure text-based interface aesthetic. Terminal-inspired with a modern layout.',
    pros: [
      'Extremely high technical cool factor.',
      'Zero-asset lightweight aesthetic.',
      'Standout visual identity.'
    ],
    cons: [
      'Limited content flexibility.',
      'Can be visually tiring for some users.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#0f0', '#000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  border: 1px solid #0f0;
  padding: 2rem;
  color: #0f0;
  font-family: 'Courier New', monospace;
  box-shadow: 0 0 20px rgba(0,255,0,0.1);
}

/* Button Styles */
.button {
  background: #0f0;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'organic-shadows',
    name: 'Organic Colored Shadows',
    category: 'Soft',
    description: 'Design without borders or backgrounds, using only soft, colored shadows to define shapes.',
    pros: [
      'Extremely clean and modern.',
      'Very calm and approachable.',
      'Unique way to define space.'
    ],
    cons: [
      'Hard to see on complex backgrounds.',
      'Accessibility challenges with contrast.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#f8fafc', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 50px;
  padding: 3.5rem;
  color: #334155;
  box-shadow: 20px 20px 60px rgba(100,120,255,0.1), -20px -20px 60px rgba(255,100,150,0.05);
  border: none;
}

/* Button Styles */
.button {
  background: #fff;
  color: #6366f1;
  border: none;
  padding: 14px 32px;
  border-radius: 100px;
  font-weight: 700;
  box-shadow: 5px 5px 15px rgba(99,102,241,0.15);
  cursor: pointer;
}`
  },
  {
    id: 'glass-distortion',
    name: 'Glass Distortion',
    category: 'Modern',
    description: 'Experimental glass effect with warped backgrounds and blurred distortion.',
    pros: [
      'Highly futuristic and edgy.',
      'Amazing visual interest.',
      'Premium experimental feel.'
    ],
    cons: [
      'Content can be very hard to read.',
      'Requires modern browser support.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#111', '#000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px) contrast(200%) brightness(1.5);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  padding: 4rem;
  color: #fff;
  transform: rotate(-5deg);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'hyper-pop',
    name: 'Hyper-Pop Visuals',
    category: 'Playful',
    description: 'Extreme colors, maximum contrast, and energetic shapes inspired by the Hyperpop music movement.',
    pros: [
      'Extremely loud and memorable.',
      'Vibrant and fun.',
      'Great for young demographics.'
    ],
    cons: [
      'Can be visually exhausting.',
      'Very niche appeal.'
    ],
    background: '#ff00ff',
    suggestedColors: ['#ff00ff', '#00ffff', '#ffff00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #00ffff;
  border: 10px solid #000;
  padding: 2rem;
  color: #000;
  transform: scale(1.1) rotate(2deg);
  box-shadow: 15px 15px 0px #ffff00;
}

/* Button Styles */
.button {
  background: #000;
  color: #ff00ff;
  border: none;
  padding: 15px 35px;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'monotype-technical-white',
    name: 'White Technical Mono',
    category: 'Minimalist',
    description: 'A clean, high-precision white technical layout using hairline borders and mono fonts.',
    pros: [
      'Extremely high-precision look.',
      'Very clean and professional.',
      'Excellent readability.'
    ],
    cons: [
      'Can feel "clinical" or "sterile".',
      'Needs perfect alignment.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#f8fafc', '#f1f5f9'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 0.5px solid #000;
  padding: 3rem;
  color: #000;
  font-family: monospace;
  box-shadow: 0 0 0 5px #fff, 0 0 0 6px #000;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  font-family: monospace;
  cursor: pointer;
}`
  },
  {
    id: 'vaporwave-sunset',
    name: 'Vaporwave Sunset',
    category: 'Retro',
    description: 'Soft pink and blue gradients, palm tree motifs, and 80s nostalgia. Dreamy and cool.',
    pros: [
      'Beautiful color palette.',
      'Deeply nostalgic and cool.',
      'Great atmosphere.'
    ],
    cons: [
      'Can look dated if not modernized.',
      'Specific to retro themes.'
    ],
    background: '#240b36',
    suggestedColors: ['#240b36', '#c31432', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: linear-gradient(0deg, #ff71ce 0%, #01cdfe 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  padding: 3rem;
  color: #fff;
  text-shadow: 2px 2px #ff71ce;
}

/* Button Styles */
.button {
  background: #fff;
  color: #ff71ce;
  border: none;
  padding: 12px 30px;
  border-radius: 0;
  font-weight: bold;
  box-shadow: 5px 5px 0px #01cdfe;
  cursor: pointer;
}`
  },
  {
    id: 'ultra-fine-minimalism',
    name: 'Ultra-Fine Minimalism',
    category: 'Minimalist',
    description: 'Maximum whitespace, hairline borders, and tiny but sharp typography. Ultimate elegance.',
    pros: [
      'The peak of sophistication.',
      'Unmatched cleanliness.',
      'Conveys high-end status.'
    ],
    cons: [
      'Accessibility challenges (low weight).',
      'Can feel "empty" to some.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000', '#f4f4f4'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 0.2px solid #000;
  padding: 6rem 3rem;
  color: #000;
  max-width: 350px;
  text-align: center;
}

/* Button Styles */
.button {
  background: transparent;
  color: #000;
  border: 0.2px solid #000;
  padding: 10px 40px;
  font-size: 0.7rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'abstract-geometry',
    name: 'Abstract Geometry',
    category: 'Artistic',
    description: 'Focus on overlapping geometric shapes and bold composition. Architectural and clean.',
    pros: [
      'Very strong visual structure.',
      'Timeless appeal.',
      'Great for branding.'
    ],
    cons: [
      'Can feel "stiff" or "cold".',
      'Hard to make organic.'
    ],
    background: '#f1f5f9',
    suggestedColors: ['#f1f5f9', '#0f172a', '#3b82f6'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #0f172a;
  padding: 3rem;
  color: #fff;
  border-radius: 0;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: -50px; right: -50px; width: 150px; height: 150px;
  background: #3b82f6;
  transform: rotate(45deg);
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 0;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'cyber-organic',
    name: 'Cyber Organic',
    category: 'Modern',
    description: 'Biometric, flowing shapes combined with digital tech elements and neon lines.',
    pros: [
      'Highly futuristic and unique.',
      'Feels alive and technical.',
      'Standout visual identity.'
    ],
    cons: [
      'Complex to design assets for.',
      'Can be visually overwhelming.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#00ffcc', '#1a1a1a'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(0, 255, 204, 0.05);
  border: 1px solid #00ffcc;
  border-radius: 100px 20px 100px 20px;
  padding: 3.5rem;
  color: #fff;
  box-shadow: 0 0 20px rgba(0,255,204,0.2);
}

/* Button Styles */
.button {
  background: #00ffcc;
  color: #000;
  border: none;
  padding: 14px 35px;
  border-radius: 0 20px 0 20px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'infinite-scroll-vibe',
    name: 'Infinite Flow',
    category: 'Minimalist',
    description: 'Design elements that feel like they are part of an endless, seamless flow of content.',
    pros: [
      'Excellent for narrative web.',
      'Very smooth and premium.',
      'High user retention.'
    ],
    cons: [
      'Hard to define sections.',
      'Navigation can be tricky.'
    ],
    background: '#fafafa',
    suggestedColors: ['#fafafa', '#eee', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 4rem;
  color: #333;
  width: 100%;
  max-width: 600px;
  border: 1px solid #eee;
  box-shadow: 0 50px 100px rgba(0,0,0,0.02);
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 12px 35px;
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
}`
  },
  {
    id: 'maximalist-editorial',
    name: 'Maximalist Editorial',
    category: 'Artistic',
    description: 'Large, overlapping text, bold images, and a layout that pushes boundaries while remaining readable.',
    pros: [
      'Extreme visual impact.',
      'Very confident branding.',
      'Great for editorial features.'
    ],
    cons: [
      'Hard to maintain hierarchy.',
      'Usability can drop.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#ff0000'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #ff0000;
  padding: 2rem;
  color: #fff;
  transform: scale(1.2);
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 20px 40px;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'bauhaus-dark',
    name: 'Bauhaus Dark Mode',
    category: 'Modern',
    description: 'Traditional Bauhaus principles but with dark backgrounds and high-contrast primary colors.',
    pros: [
      'Moody and modern.',
      'Excellent focus.',
      'Strong visual balance.'
    ],
    cons: [
      'Can feel "heavy".',
      'Hard to make friendly.'
    ],
    background: '#0a0a0a',
    suggestedColors: ['#0a0a0a', '#ff0000', '#0000ff', '#ffff00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #1a1a1a;
  border: 2px solid #333;
  padding: 3rem;
  color: #fff;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; width: 10px; height: 100%;
  background: #ff0000;
}

/* Button Styles */
.button {
  background: #ffff00;
  color: #000;
  border: none;
  padding: 12px 30px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'clay-vivid',
    name: 'Vivid Claymorphism',
    category: 'Playful',
    description: 'Extremely bright and popping claymorphism with intense colors and deep shadows.',
    pros: [
      'Highly interactive and fun.',
      'Amazing pop factor.',
      'Great for kids/apps.'
    ],
    cons: [
      'Can look unprofessional in serious contexts.',
      'High visual weight.'
    ],
    background: '#6366f1',
    suggestedColors: ['#6366f1', '#ec4899', '#f59e0b'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 40px;
  padding: 3rem;
  color: #1e1b4b;
  box-shadow: 20px 20px 40px rgba(0,0,0,0.2), inset -10px -10px 20px rgba(0,0,0,0.05), inset 10px 10px 20px rgba(255,255,255,0.8);
}

/* Button Styles */
.button {
  background: #ec4899;
  color: #fff;
  border: none;
  padding: 15px 35px;
  border-radius: 20px;
  font-weight: 900;
  box-shadow: 0 10px 0px #be185d;
  cursor: pointer;
}

.button:active {
  transform: translateY(5px);
  box-shadow: 0 5px 0px #be185d;
}`
  },
  {
    id: 'minimal-glass-light',
    name: 'Clean Light Glass',
    category: 'Minimalist',
    description: 'The ultimate clean glass aesthetic. Minimal blur, high transparency, and subtle white borders.',
    pros: [
      'Extremely elegant and light.',
      'Perfect for modern minimalist apps.',
      'Doesn\'t overwhelm content.'
    ],
    cons: [
      'Needs good contrast for readability.',
      'Can look like "nothing" on white backgrounds.'
    ],
    background: '#f1f5f9',
    suggestedColors: ['#f1f5f9', '#ffffff', '#e2e8f0'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 20px;
  padding: 3rem;
  color: #334155;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}

/* Button Styles */
.button {
  background: #fff;
  color: #334155;
  border: 1px solid rgba(0,0,0,0.05);
  padding: 12px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}`
  },
  {
    id: 'aurora-borealis',
    name: 'Aurora Borealis',
    category: 'Artistic',
    description: 'Moving green and purple organic lights inspired by the northern lights. Ethereal and magical.',
    pros: [
      'Incredible visual atmosphere.',
      'Calming and magical feel.',
      'Great for storytelling.'
    ],
    cons: [
      'Can be distracting for focus.',
      'Requires modern GPU for smooth animation.'
    ],
    background: '#010b13',
    suggestedColors: ['#010b13', '#00ffcc', '#ff00ff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
  position: relative;
}

.container::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at center, #00ffcc 0%, transparent 40%), radial-gradient(circle at 20% 30%, #ff00ff 0%, transparent 40%);
  filter: blur(80px);
  animation: aurora 20s linear infinite;
  opacity: 0.3;
}

@keyframes aurora {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Card Styles */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 40px;
  padding: 3rem;
  color: #fff;
}

/* Button Styles */
.button {
  background: #00ffcc;
  color: #010b13;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'liquid-mercury',
    name: 'Liquid Mercury',
    category: 'Modern',
    description: 'Highly reflective silver liquid effect. Fluid, metallic, and ultra-futuristic.',
    pros: [
      'Unmatched futuristic appeal.',
      'Eye-catching metallic depth.',
      'Feels premium and high-tech.'
    ],
    cons: [
      'Can be visually overwhelming.',
      'Needs dark environments to shine.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#888'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg, #fff 0%, #888 50%, #fff 100%);
  background-size: 400% 400%;
  animation: liquid 8s ease-in-out infinite;
  border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%;
  padding: 4rem;
  color: #000;
  box-shadow: 0 0 50px rgba(255,255,255,0.2);
}

@keyframes liquid {
  0% { border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%; background-position: 0% 50%; }
  50% { border-radius: 30% 70% 50% 50% / 70% 50% 50% 30%; background-position: 100% 50%; }
  100% { border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%; background-position: 0% 50%; }
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 30px;
  border-radius: 0;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'neon-circuitry',
    name: 'Neon Circuitry',
    category: 'Modern',
    description: 'Glowy digital patterns inspired by circuit boards and high-tech interfaces.',
    pros: [
      'Perfect for tech/crypto brands.',
      'High visual impact in dark mode.',
      'Clear technical authority.'
    ],
    cons: [
      'Can look busy if overdone.',
      'Very niche aesthetic.'
    ],
    background: '#050505',
    suggestedColors: ['#050505', '#00ff00', '#00ffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: 
    linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px),
    linear-gradient(rgba(0,255,0,0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  border: 1px solid #00ff00;
  padding: 3rem;
  color: #fff;
  position: relative;
  box-shadow: 0 0 20px rgba(0,255,0,0.1);
}

/* Button Styles */
.button {
  background: transparent;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 12px 30px;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0,255,0,0.2);
}`
  },
  {
    id: 'luxury-gold-minimal',
    name: 'Luxury Minimalist Gold',
    category: 'Luxury',
    description: 'Ultra-minimal white layout with a single, high-fidelity gold accent. Pure class.',
    pros: [
      'Highest level of perceived value.',
      'Extremely clean and timeless.',
      'Perfect for luxury e-commerce.'
    ],
    cons: [
      'Can feel "empty" to some.',
      'Requires perfect typography.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#d4af37', '#f4f4f4'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  padding: 5rem 3rem;
  color: #000;
  border-left: 2px solid #d4af37;
  max-width: 400px;
}

/* Button Styles */
.button {
  background: #d4af37;
  color: #fff;
  border: none;
  padding: 14px 40px;
  font-family: serif;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'experimental-warp',
    name: 'Experimental Type Warp',
    category: 'Artistic',
    description: 'Warped, kinetic typography used as a graphic element. Pushing boundaries of web design.',
    pros: [
      'Truly avant-garde aesthetic.',
      'Unforgettable visual identity.',
      'Art gallery vibe.'
    ],
    cons: [
      'Very low text legibility.',
      'Extremely polarizing.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#fff', '#ff0055'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  overflow: hidden;
}

/* Card Styles */
.card {
  background: transparent;
  padding: 2rem;
  color: #fff;
  transform: skewY(-10deg);
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 30px 60px;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -5px;
  cursor: pointer;
}`
  },
  {
    id: 'renaissance-glitch',
    name: 'Renaissance Glitch',
    category: 'Artistic',
    description: 'Mixing classical oil paintings with digital glitch effects. Historic and futuristic.',
    pros: [
      'Deep artistic appeal.',
      'Stunning visual contrast.',
      'High creative value.'
    ],
    cons: [
      'Requires specific high-quality assets.',
      'Can look "messy" if not curated.'
    ],
    background: '#1a110a',
    suggestedColors: ['#1a110a', '#d4af37', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #d4af37;
  padding: 3rem;
  color: #000;
  box-shadow: 20px 20px 0 rgba(212,175,55,0.2);
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: -10px; left: -10px; width: 100%; height: 100%;
  border: 1px solid #000;
  z-index: -1;
  opacity: 0.5;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-family: serif;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'ultra-bold-minimal',
    name: 'Ultra-Bold Minimalist',
    category: 'Minimalist',
    description: 'Extreme font weights with maximum whitespace. Loud and clean.',
    pros: [
      'Incredible sense of scale.',
      'Clear and fast communication.',
      'Very modern and authoritative.'
    ],
    cons: [
      'Can feel "aggressive".',
      'Requires excellent font choices.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000000', '#f1f5f9'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  padding: 4rem;
  color: #fff;
  border-radius: 0;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 20px 50px;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'tinted-glassmorphism',
    name: 'Tinted Glass',
    category: 'Modern',
    description: 'Glassmorphism with vibrant color tints and strong refraction effects.',
    pros: [
      'Beautifully visual and premium.',
      'Adds warmth to glass effects.',
      'Very modern and fresh.'
    ],
    cons: [
      'Can clash with content colors.',
      'Performance can be an issue.'
    ],
    background: '#0f172a',
    suggestedColors: ['#0f172a', '#3b82f6', '#ff0055'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(59,130,246,0.3);
  border-radius: 30px;
  padding: 3rem;
  color: #fff;
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'bauhaus-clean-white',
    name: 'Bauhaus Clean White',
    category: 'Minimalist',
    description: 'The purest version of Bauhaus. Primary shapes on a white background with thin black lines.',
    pros: [
      'The peak of design balance.',
      'Extremely easy to read.',
      'Timeless and professional.'
    ],
    cons: [
      'Can look "simple" to non-designers.',
      'Needs precise alignment.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#ff0000', '#0000ff', '#ffff00'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #000;
  padding: 3rem;
  color: #000;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 10px; height: 10px;
  background: #ff0000;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'cyber-punk-active',
    name: 'Active Glitch Cyber',
    category: 'Modern',
    description: 'Extreme cyberpunk aesthetics with active visual glitches and high-intensity neon.',
    pros: [
      'Maximum impact.',
      'Unforgettable experience.',
      'High technical cool factor.'
    ],
    cons: [
      'Accessibility challenges.',
      'Can be visually tiring.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#ff00ff', '#00ffff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #111;
  border: 2px solid #ff00ff;
  padding: 3rem;
  color: #fff;
  box-shadow: 5px 0 #00ffff, -5px 0 #ff00ff;
  animation: jitter 0.1s infinite;
}

@keyframes jitter {
  0% { transform: translate(0); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 1px); }
  75% { transform: translate(1px, 1px); }
  100% { transform: translate(0); }
}

/* Button Styles */
.button {
  background: #ff00ff;
  color: #fff;
  border: none;
  padding: 15px 35px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'pixel-art-modern',
    name: 'Modern Pixel Art',
    category: 'Retro',
    description: '8-bit style built with modern web technologies for a crisp, high-resolution pixel look.',
    pros: [
      'Unique and playful.',
      'Memorable identity.',
      'Great for community brands.'
    ],
    cons: [
      'Limited use cases.',
      'Hard to make look premium.'
    ],
    background: '#1a1a1a',
    suggestedColors: ['#1a1a1a', '#00ff00', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #333;
  border: 4px solid #fff;
  padding: 2rem;
  color: #fff;
  image-rendering: pixelated;
  box-shadow: 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff;
}

/* Button Styles */
.button {
  background: #00ff00;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'clay-dark-vivid',
    name: 'Vivid Dark Clay',
    category: 'Soft',
    description: 'Dark mode claymorphism with neon accents and deep organic shadows.',
    pros: [
      'Very premium and modern.',
      'High sense of depth.',
      'Great for dark mode apps.'
    ],
    cons: [
      'Requires careful shadow management.',
      'Can look heavy.'
    ],
    background: '#0f172a',
    suggestedColors: ['#0f172a', '#1e293b', '#3b82f6'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #1e293b;
  border-radius: 50px;
  padding: 3rem;
  color: #fff;
  box-shadow: 20px 20px 40px rgba(0,0,0,0.4), inset -5px -5px 15px rgba(255,255,255,0.05);
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'monochrome-brutalism',
    name: 'Monochrome Brutalism',
    category: 'Minimalist',
    description: 'Pure black and white brutalism. No colors, just raw structure and typography.',
    pros: [
      'Absolute design authority.',
      'Infinite scalability.',
      'Bold and unforgettable.'
    ],
    cons: [
      'Can feel "boring" to some.',
      'Accessibility can be tricky.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000000', '#eee'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 5px solid #000;
  padding: 3rem;
  color: #000;
  box-shadow: 15px 15px 0 #000;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 35px;
  font-weight: 900;
  cursor: pointer;
}`
  },
  {
    id: 'noise-mesh-gradient',
    name: 'Noise Mesh Gradient',
    category: 'Soft',
    description: 'Soft mesh gradients with a heavy noise texture. Tactile and organic.',
    pros: [
      'Beautifully atmospheric.',
      'Very premium tactile feel.',
      'Great for artistic brands.'
    ],
    cons: [
      'Noise can interfere with fine text.',
      'Requires good contrast.'
    ],
    background: '#1a1a1a',
    suggestedColors: ['#1a1a1a', '#ff0055', '#3b82f6'],
    cssCode: `/* Container Styles */
.container {
  background: linear-gradient(45deg, #ff0055, #3b82f6);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
}

.container::after {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.2; pointer-events: none;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  padding: 3rem;
  color: #fff;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'brutalist-interactive-pop',
    name: 'Interactive Brutalist Pop',
    category: 'Playful',
    description: 'Brutalism that reacts to user interactions with loud colors and movement.',
    pros: [
      'Highly engaging.',
      'Fun and memorable.',
      'Perfect for creative agencies.'
    ],
    cons: [
      'Can be visually loud.',
      'High cognitive load.'
    ],
    background: '#ffff00',
    suggestedColors: ['#ffff00', '#000', '#ff00ff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 4px solid #000;
  padding: 3rem;
  color: #000;
  transition: all 0.2s;
}

.card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 10px 10px 0 #000;
}

/* Button Styles */
.button {
  background: #ff00ff;
  color: #fff;
  border: 2px solid #000;
  padding: 12px 30px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'the-final-signature',
    name: 'Sovereign Ultimate',
    category: 'Luxury',
    description: 'The final signature style of the QONQU library. A blend of all the best techniques into one epic aesthetic.',
    pros: [
      'The peak of design.',
      'Everything you need in one.',
      'Truly legendary.'
    ],
    cons: [
      'None. This is perfection.'
    ],
    background: '#000',
    suggestedColors: ['#000', '#d4af37', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: radial-gradient(circle at center, #111, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 1px solid #d4af37;
  padding: 4rem;
  color: #000;
  box-shadow: 0 50px 100px rgba(0,0,0,1);
  position: relative;
}

.card::before {
  content: 'QONQU';
  position: absolute;
  top: -20px; left: -20px; font-size: 5rem; font-weight: 900; color: rgba(212,175,55,0.1);
}

/* Button Styles */
.button {
  background: #d4af37;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-weight: 900;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'abstract-blobs',
    name: 'Abstract Organic Blobs',
    category: 'Soft',
    description: 'Floating organic shapes with soft gradients and shadows. Modern and friendly.',
    pros: [
      'Very approachable.',
      'Modern and fresh.',
      'Great for startups.'
    ],
    cons: [
      'Can look a bit like generic material design.',
      'Hard to achieve pop.'
    ],
    background: '#f8fafc',
    suggestedColors: ['#f8fafc', '#fff', '#e2e8f0'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  padding: 4rem;
  color: #334155;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

/* Button Styles */
.button {
  background: #3b82f6;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'minimal-grid-thin',
    name: 'Minimal Thin Grid',
    category: 'Minimalist',
    description: 'Extremely thin grid lines with a focus on typography and structure. Precise and clean.',
    pros: [
      'Very clean and modern.',
      'Excellent focus.',
      'Professional feel.'
    ],
    cons: [
      'Can feel "clinical".',
      'Needs perfect alignment.'
    ],
    background: '#ffffff',
    suggestedColors: ['#ffffff', '#000', '#f4f4f4'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px);
  background-size: 40px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #fff;
  border: 0.5px solid #000;
  padding: 3rem;
  color: #000;
}

/* Button Styles */
.button {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
}`
  },
  {
    id: 'maximalist-pattern',
    name: 'Maximalist Pattern',
    category: 'Artistic',
    description: 'Intense repeating patterns and bold colors. Loud and unforgettable.',
    pros: [
      'Impossible to ignore.',
      'Very high energy.',
      'Great for youth brands.'
    ],
    cons: [
      'Low usability.',
      'High cognitive load.'
    ],
    background: '#ff0055',
    suggestedColors: ['#ff0055', '#000', '#fff'],
    cssCode: `/* Container Styles */
.container {
  background: [BG_COLOR];
  background-image: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

/* Card Styles */
.card {
  background: #000;
  padding: 3rem;
  color: #fff;
  border: 10px solid #fff;
}

/* Button Styles */
.button {
  background: #fff;
  color: #000;
  border: none;
  padding: 15px 40px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}`
  },
  {
    id: 'soft-grain-gradient',
    name: 'Soft Grain Mesh',
    category: 'Soft',
    description: 'Extremely soft pastels with a subtle grain texture. Friendly and artistic.',
    pros: [
      'Very calming.',
      'Modern and aesthetic.',
      'Great for lifestyle brands.'
    ],
    cons: [
      'Can look a bit generic.',
      'Hard to achieve pop.'
    ],
    background: '#f8fafc',
    suggestedColors: ['#f8fafc', '#fff', '#e2e8f0'],
    cssCode: `/* Container Styles */
.container {
  background: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
}

.container::after {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.1; pointer-events: none;
}

/* Card Styles */
.card {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 3rem;
  color: #334155;
}

/* Button Styles */
.button {
  background: #fff;
  color: #334155;
  border: none;
  padding: 12px 30px;
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
}`
  }
];
