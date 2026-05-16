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
  }
];


