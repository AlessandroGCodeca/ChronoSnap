import { Era, FilterOption, HistoricalFigure } from "./types";

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  { 
    id: 'einstein', 
    name: 'Albert Einstein', 
    description: 'Theoretical Physicist', 
    prompt: 'Hyper-realistic portrait of Albert Einstein in 1950, featuring his iconic wild white hair and bushy mustache. He is wearing a cozy, rumpled grey cardigan sweater and a white collared shirt. He stands before a dusty slate blackboard covered in complex mathematical formulas written in chalk. The setting is his cluttered Princeton study, filled with books and papers. Soft, natural window light illuminates his thoughtful expression. Cinematic lighting, 8k resolution.', 
    icon: '🧪' 
  },
  { 
    id: 'cleopatra', 
    name: 'Cleopatra', 
    description: 'Queen of the Nile', 
    prompt: 'Cinematic shot of Queen Cleopatra VII of Egypt, radiating regal power. She wears a golden vulture headdress (Nekhbet) and an intricate beaded broad collar (wesekh) over a fine pleated white linen kalasiris. Her makeup includes heavy kohl eyeliner and gold dust. She sits on a gilded throne with hieroglyphs carved into the stone walls behind her. Warm, golden torchlight flickers, creating dramatic shadows. Photorealistic, detailed texture.', 
    icon: '👑' 
  },
  { 
    id: 'shakespeare', 
    name: 'Wm. Shakespeare', 
    description: 'The Bard', 
    prompt: 'William Shakespeare in his Elizabethan study, 1600. He wears a black doublet with a white ruff collar and cuffs. He holds a quill pen, poised over a parchment manuscript on a rough wooden desk scattered with inkwells and papers. The room is dimly lit by a tallow candle, casting a warm glow on his face and receding hairline. Atmospheric, painterly style reminiscent of Rembrandt.', 
    icon: '✒️' 
  },
  { 
    id: 'earhart', 
    name: 'Amelia Earhart', 
    description: 'Aviation Pioneer', 
    prompt: 'Amelia Earhart standing confidently on an airfield runway next to her Lockheed Electra 10E. She wears a distressed brown leather flight jacket with a fur collar, tan trousers, a silk scarf, and vintage aviator goggles resting on her forehead. Her short, windblown hair catches the golden hour sunlight. The sky is a clear azure blue. High definition, historical photography style.', 
    icon: '✈️' 
  },
  { 
    id: 'tesla', 
    name: 'Nikola Tesla', 
    description: 'Master of Lightning', 
    prompt: 'Nikola Tesla in his Colorado Springs laboratory, 1899. He sits calmly in a wooden chair, reading a book, while massive magnifying transmitters emit terrifyingly large arcs of purple electrical lightning around him. He wears a formal Victorian three-piece suit. The lighting is dramatic, dominated by the glow of the electrical discharge. Surreal, cinematic composition.', 
    icon: '⚡' 
  },
  { 
    id: 'da-vinci', 
    name: 'Leonardo da Vinci', 
    description: 'Renaissance Man', 
    prompt: 'Leonardo da Vinci in his Florence workshop, appearing as an elderly sage with a long, flowing white beard and shoulder-length hair. He wears a velvet renaissance robe and a beret. He is examining a complex mechanical gear prototype on a wooden table, surrounded by anatomical sketches and painting supplies. Soft, diffused northern window light. Renaissance oil painting aesthetic.', 
    icon: '🎨' 
  },
  { 
    id: 'marilyn', 
    name: 'Marilyn Monroe', 
    description: 'Hollywood Icon', 
    prompt: 'Marilyn Monroe capturing her iconic moment on a New York City subway grate. She wears the famous white pleated halter dress, which billows around her legs. Her platinum blonde curls are perfectly styled, and she has her signature red lipstick and beauty mark. The background shows blurred city lights and vintage cars at night. Glamorous, high-contrast 1950s cinematic style.', 
    icon: '🎬' 
  },
  { 
    id: 'napoleon', 
    name: 'Napoleon', 
    description: 'Emperor of France', 
    prompt: 'Emperor Napoleon Bonaparte in his study at Tuileries Palace. He stands in his classic pose with one hand tucked into his vest, wearing his green Colonel uniform of the Chasseurs à Cheval, adorned with medals and a red sash. A bicorne hat sits on a nearby map-covered table. The background features opulent French Empire furniture. Stern, commanding expression. Oil painting style.', 
    icon: '🇫🇷' 
  },
  { 
    id: 'lincoln', 
    name: 'Abraham Lincoln', 
    description: '16th US President', 
    prompt: 'Abraham Lincoln, towering and solemn, standing on the portico of the White House during the Civil War. He wears his signature black frock coat, bowtie, and tall stovepipe hat. His face is weathered and bearded, eyes deep-set and melancholic. The background features the incomplete Washington Monument in the distance. Sepia-toned, daguerreotype photography style.', 
    icon: '🎩' 
  },
  { 
    id: 'joan-of-arc', 
    name: 'Joan of Arc', 
    description: 'The Maid of Orléans', 
    prompt: 'Joan of Arc on the battlefield, 1429. She is clad in shining, battle-worn plate armor, holding a white banner embroidered with fleurs-de-lis. Her hair is cropped short. She looks upward with spiritual intensity and determination. The background shows smoke, medieval tents, and soldiers in the distance. Dramatic, high-contrast lighting, heroic composition.', 
    icon: '⚔️' 
  },
  { 
    id: 'elvis', 
    name: 'Elvis Presley', 
    description: 'King of Rock', 
    prompt: 'Elvis Presley performing live in Las Vegas, 1970s. He wears the iconic white "Aloha from Hawaii" jumpsuit with an intricately embroidered eagle and a high collar, plus a red lei. He holds a microphone, sweating, with jet-black hair perfectly coiffed. Stage lights flare in the background, creating a halo effect. Vibrant, energetic concert photography style.', 
    icon: '🎸' 
  },
  { 
    id: 'mozart', 
    name: 'Mozart', 
    description: 'Musical Prodigy', 
    prompt: 'Wolfgang Amadeus Mozart composing at a fortepiano in a Vienna apartment. He wears a powdered wig tied with a ribbon, a red velvet frock coat with gold braid, and a lace jabot. Sheet music is scattered frantically across the instrument. The room is ornate with Rococo decor and lit by candlelight. Playful yet focused expression. Classical art style.', 
    icon: '🎼' 
  },
  { 
    id: 'frida', 
    name: 'Frida Kahlo', 
    description: 'Painter', 
    prompt: 'Frida Kahlo in a lush garden at Casa Azul. She wears a traditional Tehuana dress with colorful embroidery, a rebozo shawl, and an elaborate floral headdress. Her unibrow and faint mustache are distinct. A small monkey sits on her shoulder. The background is filled with vibrant tropical plants and cacti. Surrealist, vivid color palette.', 
    icon: '🌺' 
  },
  { 
    id: 'bruce-lee', 
    name: 'Bruce Lee', 
    description: 'Martial Arts Legend', 
    prompt: 'Bruce Lee in a fighting stance, muscles tense and defined. He wears his iconic yellow tracksuit with black stripes. He holds nunchaku under one arm. The background is a traditional wooden dojo with paper screens. His expression is one of intense focus and discipline. Action movie cinematic lighting, sharp focus.', 
    icon: '👊' 
  },
  { 
    id: 'gandhi', 
    name: 'Mahatma Gandhi', 
    description: 'Civil Rights Leader', 
    prompt: 'Mahatma Gandhi sitting cross-legged on a floor mat. He is frail, wearing a simple white hand-spun dhoti and round wire-rimmed spectacles. He is spinning thread on a traditional wooden charkha. The setting is simple and ascetic, bathed in soft, natural daylight. Peaceful, contemplative atmosphere. Black and white historical photo style.', 
    icon: '🕊️' 
  },
  { 
    id: 'curie', 
    name: 'Marie Curie', 
    description: 'Nobel Scientist', 
    prompt: 'Marie Curie in her Paris laboratory, 1910. She wears a simple dark Victorian dress with a high collar. She is peering closely at a glass flask containing a glowing blue radioactive substance. The lab is filled with glass beakers, test tubes, and scientific instruments. Moody, atmospheric lighting with a blue tint from the radium. Historical realism.', 
    icon: '🔬' 
  },
  { 
    id: 'mlk', 
    name: 'Martin Luther King Jr.', 
    description: 'Civil Rights Icon', 
    prompt: 'Martin Luther King Jr. delivering his "I Have a Dream" speech at the Lincoln Memorial. He wears a sharp black suit, white shirt, and tie. He stands behind a podium made of microphones, arm raised in passion. The background shows the blurry white marble columns and a massive crowd. Hopeful, historic, sun-drenched atmosphere.', 
    icon: '🎙️' 
  },
  { 
    id: 'elizabeth-i', 
    name: 'Queen Elizabeth I', 
    description: 'Tudor Queen', 
    prompt: 'Queen Elizabeth I in the Armada Portrait style. She wears a magnificent, wide dress encrusted with pearls and jewels, a massive lace ruff, and a red wig. Her face is painted white. She rests her hand on a globe. The background features dark velvet curtains and a window showing ships at sea. Regal, imposing, highly detailed oil painting style.', 
    icon: '👸' 
  },
  { 
    id: 'van-gogh', 
    name: 'Vincent van Gogh', 
    description: 'Post-Impressionist', 
    prompt: 'Vincent van Gogh painting outdoors in a wheat field in Arles. He has a red beard, a straw hat, and a bandage over his ear. He wears a blue painter\'s smock. The sky is a swirling turbulent blue with yellow stars. The entire image has a thick impasto texture, mimicking his brushstroke style. Vibrant, emotional, post-impressionist.', 
    icon: '🌻' 
  },
  { 
    id: 'rosa-parks', 
    name: 'Rosa Parks', 
    description: 'Mother of Freedom', 
    prompt: 'Rosa Parks sitting dignified on a bus seat in Montgomery, 1955. She wears a cloth coat, a hat with a small feather, and rimless glasses. She looks out the window with a calm, resolute expression. The bus interior features vintage advertisements and vinyl seats. Soft, natural lighting. Historical black and white photography style.', 
    icon: '🚌' 
  },
  { 
    id: 'caesar', 
    name: 'Julius Caesar', 
    description: 'Roman Dictator', 
    prompt: 'Julius Caesar addressing the Senate. He wears a white toga praetexta with a purple border and a golden laurel wreath on his head. He stands with an authoritative posture, pointing forward. The background features marble columns, statues, and other senators in togas. Sunlight streams through the open roof. Classical, realistic style.', 
    icon: '🏛️' 
  },
  { 
    id: 'darwin', 
    name: 'Charles Darwin', 
    description: 'Evolutionary Biologist', 
    prompt: 'Charles Darwin as an elderly man, walking in a lush garden (Down House). He has a long white beard and a receding hairline, wearing a heavy dark coat and a wide-brimmed hat. He is examining an orchid with a magnifying glass. The background is filled with botanical details. Naturalistic, detailed style.', 
    icon: '🐢' 
  },
  { 
    id: 'churchill', 
    name: 'Winston Churchill', 
    description: 'Wartime Prime Minister', 
    prompt: 'Winston Churchill standing in the ruins of London during the Blitz, defiant. He wears a dark pinstripe suit, a bow tie, and a Homburg hat. He holds a cigar in one hand and flashes the "V for Victory" sign with the other. Smoke and rubble are in the background. Gritty, black and white newsreel style.', 
    icon: '✌️' 
  },
  { 
    id: 'beethoven', 
    name: 'Ludwig van Beethoven', 
    description: 'Classical Composer', 
    prompt: 'Ludwig van Beethoven in a Vienna music room, looking wild and disheveled. He has messy grey hair and an intense, brooding expression. He sits at a grand piano, holding a quill, with crumpled sheet music scattered on the floor. Dramatic, moody lighting (chiaroscuro). Romantic era oil painting style.', 
    icon: '🎹' 
  },
  { 
    id: 'alexander', 
    name: 'Alexander the Great', 
    description: 'King of Macedonia', 
    prompt: 'Alexander the Great leading a cavalry charge. He rides his black horse Bucephalus. He wears a golden muscle cuirass, a helmet shaped like a lion\'s head, and a flowing red cape. He wields a xyston spear. Dust kicks up around him. The background is a chaotic ancient battlefield. Epic, cinematic action shot.', 
    icon: '🐴' 
  },
  { 
    id: 'genghis', 
    name: 'Genghis Khan', 
    description: 'Mongol Emperor', 
    prompt: 'Genghis Khan mounted on a sturdy Mongol horse on the steppes. He wears heavy fur-lined leather armor and a helmet with a horsehair plume. He holds a composite bow. His face is weathered and fierce. The background is a vast, grassy plain under a wide blue sky with yurts in the distance. Historical realism.', 
    icon: '🏹' 
  },
  { 
    id: 'victoria', 
    name: 'Queen Victoria', 
    description: 'Queen of the UK', 
    prompt: 'Queen Victoria in her later years, the Widow of Windsor. She sits on a throne wearing a voluminous black silk mourning dress and a small white widow\'s cap topped with a miniature diamond crown. She holds a fan. Her expression is stern and imperious. The background is a lavish Victorian parlor. Royal portrait style.', 
    icon: '👑' 
  },
  { 
    id: 'tubman', 
    name: 'Harriet Tubman', 
    description: 'Abolitionist', 
    prompt: 'Harriet Tubman in a winter forest at night. She wears a heavy wool coat, a long skirt, and a headscarf. She holds a tin lantern that casts a warm glow on her face, highlighting her determination. Snow is lightly falling. Trees surround her in the darkness. Moody, atmospheric, cinematic lighting.', 
    icon: '🏮' 
  },
  { 
    id: 'armstrong', 
    name: 'Neil Armstrong', 
    description: 'First Man on Moon', 
    prompt: 'Neil Armstrong standing on the lunar surface, 1969. He is encased in the white Apollo A7L spacesuit with the red commander stripes (anachronistic but iconic). His gold visor reflects the lunar module and the photographer. The sky is pitch black. The ground is grey lunar regolith. Stark, high-contrast lighting.', 
    icon: '🧑‍🚀' 
  },
  { 
    id: 'confucius', 
    name: 'Confucius', 
    description: 'Chinese Philosopher', 
    prompt: 'Confucius teaching in a bamboo grove. He appears as an elderly sage with a long white beard, wearing traditional flowing Hanfu robes in earth tones and a tall scholar\'s hat. He holds a bamboo scroll. Students sit attentively around him. Soft, dappled sunlight filters through the leaves. Serene, ink wash painting aesthetic.', 
    icon: '📜' 
  },
  { 
    id: 'socrates', 
    name: 'Socrates', 
    description: 'Greek Philosopher', 
    prompt: 'Socrates standing in the Agora of Athens. He is an older man with a snub nose, balding head, and beard, wearing a simple, rough himation (cloak). He is gesturing while speaking to a group of young Athenians. In the background, the Acropolis rises on the hill. Bright Mediterranean sunlight. Classical realism.', 
    icon: '🏛️' 
  },
  { 
    id: 'nightingale', 
    name: 'Florence Nightingale', 
    description: 'Lady with the Lamp', 
    prompt: 'Florence Nightingale walking through the wards of Scutari Hospital at night. She wears a modest Victorian nurse\'s uniform and cap. She holds a Turkish lantern (fanoos) that illuminates the wounded soldiers in beds on either side. Her expression is compassionate. dark, shadowy atmosphere with a single warm light source.', 
    icon: '⚕️' 
  },
  { 
    id: 'lovelace', 
    name: 'Ada Lovelace', 
    description: 'First Programmer', 
    prompt: 'Ada Lovelace standing beside the Difference Engine. She wears a structured 1840s evening gown made of dark silk with lace details. Her hair is styled in ringlets. She holds a stack of punch cards and mathematical notes. The machine behind her is a complex array of brass gears and cogs. Steampunk aesthetic, detailed.', 
    icon: '💻' 
  },
  { 
    id: 'chaplin', 
    name: 'Charlie Chaplin', 
    description: 'Silent Film Star', 
    prompt: 'Charlie Chaplin in character as "The Tramp". He wears a tight black jacket, baggy trousers, oversized shoes, and a bowler hat. He holds a bamboo cane and sports his toothbrush mustache. He is standing on a dusty road. The image is in black and white with film grain and vignette, resembling a silent movie frame.', 
    icon: '🎥' 
  },
  { 
    id: 'marley', 
    name: 'Bob Marley', 
    description: 'Reggae Legend', 
    prompt: 'Bob Marley performing on stage, eyes closed in spiritual ecstasy. He has long dreadlocks flying as he moves. He wears a denim shirt and plays a Gibson Les Paul guitar. The background is a haze of stage smoke lit by red, gold, and green lights. Vibrant, soulful, concert photography style.', 
    icon: '🇯🇲' 
  },
  { 
    id: 'ali', 
    name: 'Muhammad Ali', 
    description: 'The Greatest', 
    prompt: 'Muhammad Ali standing over a fallen opponent in the boxing ring (referencing the Liston fight). He wears white boxing trunks and gloves. He is shouting, muscles taut, radiating dominance. Camera flashes pop in the dark arena background. High contrast, gritty sports photography style.', 
    icon: '🥊' 
  },
  { 
    id: 'mandela', 
    name: 'Nelson Mandela', 
    description: 'Anti-Apartheid Leader', 
    prompt: 'Nelson Mandela smiling warmly, raising a fist in the ANC salute. He wears one of his signature "Madiba shirts" with a colorful, intricate pattern. He has grey hair and a kind, weathered face. The background is a sunny outdoor rally in South Africa. Hopeful, vibrant, photorealistic.', 
    icon: '🇿🇦' 
  },
  { 
    id: 'picasso', 
    name: 'Pablo Picasso', 
    description: 'Cubist Painter', 
    prompt: 'Pablo Picasso in his studio in Cannes. He wears a striped Breton shirt and shorts. He stares intensely at the camera with his piercing dark eyes. He holds a cigarette and a paintbrush. The background is cluttered with pottery, sculptures, and canvases. Black and white, artistic portrait style.', 
    icon: '🖌️' 
  },
  { 
    id: 'wright-bros', 
    name: 'Wright Brothers', 
    description: 'Aviation Pioneers', 
    prompt: 'Orville and Wilbur Wright at Kitty Hawk, 1903. They are dressed in formal suits with stiff collars and flat caps, despite the sandy dunes. They stand proudly next to the Wright Flyer biplane. The wind is blowing their coats. The sky is overcast. Sepia-toned historical photograph style.', 
    icon: '🛫' 
  },
  { 
    id: 'newton', 
    name: 'Isaac Newton', 
    description: 'Mathematician', 
    prompt: 'Isaac Newton as a young man at Woolsthorpe Manor. He sits under an apple tree in an orchard. He holds a glass prism that is refracting a beam of sunlight into a rainbow. He wears 17th-century attire: a waistcoat, breeches, and a long coat. His hair is shoulder-length and natural. Intellectual, discovery-focused composition.', 
    icon: '🍎' 
  },
  { 
    id: 'galileo', 
    name: 'Galileo Galilei', 
    description: 'Astronomer', 
    prompt: 'Galileo Galilei standing on a balcony in Venice at night. He is an older man with a beard, wearing Renaissance robes. He is looking through a leather-bound brass telescope pointed at the moon. The night sky is filled with stars and the Milky Way. Atmospheric, sense of wonder.', 
    icon: '🔭' 
  },
  { 
    id: 'catherine', 
    name: 'Catherine the Great', 
    description: 'Empress of Russia', 
    prompt: 'Catherine the Great standing in the Hermitage. She wears a silver brocade gown with a blue sash of the Order of St. Andrew and a small diamond crown. She holds a golden scepter. Her expression is intelligent and amused. The background is a lavish palace interior with gold leaf and mirrors. Opulent, royal portraiture.', 
    icon: '🇷🇺' 
  },
  { 
    id: 'tut', 
    name: 'King Tut', 
    description: 'Boy King', 
    prompt: 'King Tutankhamun sitting on his golden throne. He looks young, wearing the blue and gold striped Nemes headcloth with the uraeus (cobra and vulture), a false beard, and a broad collar. He wears a white linen kilt. The background is a palace hall with painted pillars. Bright, colorful, historical reconstruction.', 
    icon: '⚱️' 
  },
  { 
    id: 'sitting-bull', 
    name: 'Sitting Bull', 
    description: 'Lakota Leader', 
    prompt: 'Sitting Bull sitting with dignity. He wears a buckskin shirt adorned with quillwork and a single eagle feather in his hair (or a full war bonnet). He holds a peace pipe. His face is lined and serious. The background is a blurred encampment of tipis on the Great Plains. Historical sepia photography style.', 
    icon: '🪶' 
  },
  { 
    id: 'washington', 
    name: 'George Washington', 
    description: '1st US President', 
    prompt: 'George Washington crossing the Delaware River. He stands tall in a rowboat, wearing a blue Continental Army uniform with a tricorne hat and a cloak. He looks determinedly forward. Soldiers row around him amidst chunks of ice. The sky is a pre-dawn grey. Heroic, oil painting style.', 
    icon: '🇺🇸' 
  },
  { 
    id: 'audrey', 
    name: 'Audrey Hepburn', 
    description: 'Film & Fashion Icon', 
    prompt: 'Audrey Hepburn as Holly Golightly. She wears a black Givenchy dress, long black gloves, a pearl necklace, and a tiara in her beehive updo. She holds a long cigarette holder. She is standing in front of a Tiffany\'s window display in New York City. Elegant, chic, 1960s film style.', 
    icon: '👗' 
  },
  { 
    id: 'dali', 
    name: 'Salvador Dali', 
    description: 'Surrealist Artist', 
    prompt: 'Salvador Dalí staring wide-eyed at the camera. His long, waxed mustache defies gravity. He wears a velvet smoking jacket and holds an anteater on a leash. The background is a surreal desert landscape with melting clocks and stilts. Bizarre, dreamlike, hyper-realistic.', 
    icon: '🕰️' 
  },
  { 
    id: 'bach', 
    name: 'J.S. Bach', 
    description: 'Baroque Composer', 
    prompt: 'Johann Sebastian Bach playing a pipe organ in a German cathedral. He wears a periwig and a formal 18th-century coat. His hands are on the keys, feet on the pedals. Light streams through stained glass windows, creating colorful patterns on the stone floor. Solemn, majestic atmosphere.', 
    icon: '⛪' 
  },
  { 
    id: 'marco-polo', 
    name: 'Marco Polo', 
    description: 'Explorer', 
    prompt: 'Marco Polo at the court of Kublai Khan. He wears a mix of Venetian and Mongol clothing—a tunic and a fur hat. He is presenting a map or spices to the Emperor. The setting is a lavish yurt or palace hall with silk tapestries. Rich colors, adventure illustration style.', 
    icon: '🗺️' 
  },
  { 
    id: 'freddie-mercury', 
    name: 'Freddie Mercury', 
    description: 'Rock Legend', 
    prompt: 'Freddie Mercury at Live Aid, 1985. He wears a white tank top, light blue wrangler jeans, a studded belt, and an armband. He holds a microphone stand, fist raised in the air. He has a thick mustache. The background is a massive stadium crowd at Wembley. Iconic, high-energy.', 
    icon: '🎤' 
  },
  { 
    id: 'david-bowie', 
    name: 'David Bowie', 
    description: 'Ziggy Stardust', 
    prompt: 'David Bowie as Ziggy Stardust. He has bright orange mullet hair and a gold astral sphere painted on his forehead. He wears a multi-colored, quilted jumpsuit with large shoulder pads. He holds a red guitar. The background is a starry glam-rock stage set. Androgynous, futuristic, vibrant.', 
    icon: '⚡' 
  },
  { 
    id: 'jimi-hendrix', 
    name: 'Jimi Hendrix', 
    description: 'Guitar God', 
    prompt: 'Jimi Hendrix playing a white Fender Stratocaster at Woodstock. He wears a fringed white leather jacket, a red headband, and colorful bell-bottoms. He is deep in a guitar solo, eyes closed. The background is a festival stage with psychedelic lights. 1960s rock photography style.', 
    icon: '🎸' 
  },
  { 
    id: 'john-lennon', 
    name: 'John Lennon', 
    description: 'The Dreamer', 
    prompt: 'John Lennon in his New York City era. He wears his signature round teashade glasses, a "New York City" ringer t-shirt, and a denim jacket. He has shoulder-length hair. He stands on a rooftop with the Manhattan skyline in the background. Gritty, realistic 1970s style.', 
    icon: '☮️' 
  },
  { 
    id: 'coco-chanel', 
    name: 'Coco Chanel', 
    description: 'Fashion Icon', 
    prompt: 'Coco Chanel in her apartment at 31 Rue Cambon. She sits on a suede beige sofa. She wears a classic black tweed suit, layers of pearl necklaces, and a black hat. She holds a cigarette. The room is decorated with Coromandel screens and crystal lions. Chic, monochrome, elegant.', 
    icon: '👠' 
  },
  { 
    id: 'walt-disney', 
    name: 'Walt Disney', 
    description: 'Animator', 
    prompt: 'Walt Disney in his studio, 1950s. He wears a suit and tie with a mustache. He leans over a drawing board, sketching Mickey Mouse. Behind him are shelves filled with animation cels and maquettes. He has a warm, grandfatherly smile. Nostalgic, warm lighting.', 
    icon: '🐭' 
  },
  { 
    id: 'steve-jobs', 
    name: 'Steve Jobs', 
    description: 'Tech Visionary', 
    prompt: 'Steve Jobs on stage at a keynote presentation. He wears his uniform: a black St. Croix turtleneck, Levi\'s 501 jeans, and New Balance sneakers. He wears round rimless glasses. He holds a sleek new iPhone. The background is a dark stage with a large blue screen behind him. Minimalist, modern.', 
    icon: '📱' 
  },
  { 
    id: 'henry-ford', 
    name: 'Henry Ford', 
    description: 'Industrialist', 
    prompt: 'Henry Ford standing on the factory floor of the Highland Park plant. He wears a dark three-piece suit and a pocket watch. Behind him, the moving assembly line carries Model T chassis. He looks proud and serious. Industrial, black and white photography style.', 
    icon: '🚗' 
  },
  { 
    id: 'thomas-edison', 
    name: 'Thomas Edison', 
    description: 'Inventor', 
    prompt: 'Thomas Edison in his Menlo Park laboratory. He wears a vest and shirt sleeves, looking tired but triumphant. He holds a glowing incandescent light bulb in front of his face. The room is dark, illuminated only by the bulb and faint gaslight in the background. Dramatic lighting.', 
    icon: '💡' 
  },
  { 
    id: 'ben-franklin', 
    name: 'Benjamin Franklin', 
    description: 'Founding Father', 
    prompt: 'Benjamin Franklin in a thunderstorm. He wears a colonial coat, breeches, and spectacles. He holds a silk string attached to a kite flying in the dark clouds. A brass key sparks near his hand. His hair is windblown. Dynamic, illustrative style.', 
    icon: '🪁' 
  },
  { 
    id: 'teddy-roosevelt', 
    name: 'Theodore Roosevelt', 
    description: 'Rough Rider', 
    prompt: 'Theodore Roosevelt leading the Rough Riders. He is mounted on a horse, wearing a khaki uniform, a slouch hat, and pince-nez glasses. He is yelling a charge, teeth bared in a grin. The background is the scrub brush of San Juan Hill. Action-oriented, historical style.', 
    icon: '🏞️' 
  },
  { 
    id: 'jfk', 
    name: 'John F. Kennedy', 
    description: '35th President', 
    prompt: 'John F. Kennedy sailing off the coast of Hyannis Port. He wears a navy polo shirt, white trousers, and Wayfarer sunglasses. His hair is windblown. He looks relaxed and youthful. The background is the blue ocean and the teak deck of a sailboat. Kodachrome color style.', 
    icon: '🇺🇸' 
  },
  { 
    id: 'houdini', 
    name: 'Harry Houdini', 
    description: 'Escape Artist', 
    prompt: 'Harry Houdini in a publicity poster pose. He is shirtless and muscular, bound in heavy chains and padlocks. He looks intensely at the viewer. The background is a vaudeville stage curtain. Vintage magic poster aesthetic.', 
    icon: '🔒' 
  },
  { 
    id: 'jane-austen', 
    name: 'Jane Austen', 
    description: 'Novelist', 
    prompt: 'Jane Austen sitting at a small writing table in a cottage in Chawton. She wears a muslin Regency dress and a mob cap. She holds a quill, pausing in thought. A window looks out onto an English garden. Soft, natural interior light. Watercolor portrait style.', 
    icon: '📖' 
  },
  { 
    id: 'mark-twain', 
    name: 'Mark Twain', 
    description: 'Humorist', 
    prompt: 'Mark Twain standing on the deck of a Mississippi steamboat. He wears his famous white suit and holds a pipe. He has a bushy white mustache and unruly hair. The background shows the river and a paddlewheel. Hazy, humid atmosphere.', 
    icon: '🚤' 
  },
  { 
    id: 'hemingway', 
    name: 'Ernest Hemingway', 
    description: 'Writer', 
    prompt: 'Ernest Hemingway in Key West or Cuba. He is a rugged, bearded man wearing a fisherman\'s cap and a guayabera shirt. He sits at a bar with a daiquiri and a cat. He looks weathered and masculine. Tropical, relaxed atmosphere.', 
    icon: '✍️' 
  },
  { 
    id: 'poe', 
    name: 'Edgar Allan Poe', 
    description: 'Gothic Poet', 
    prompt: 'Edgar Allan Poe sitting in a dark, Victorian study. He is pale with dark circles under his eyes, wearing a black suit and cravat. A raven is perched on a bust of Pallas above the door. The lighting is dim and shadowy. Gothic horror aesthetic.', 
    icon: '🦅' 
  },
  { 
    id: 'marie-antoinette', 
    name: 'Marie Antoinette', 
    description: 'Queen of France', 
    prompt: 'Marie Antoinette in the gardens of Petit Trianon. She wears a towering powdered wig decorated with feathers and a pastel pink silk Rococo gown with ribbons. She holds a shepherdess crook. The setting is idyllic and pastoral. Soft, painterly style.', 
    icon: '🍰' 
  },
  { 
    id: 'henry-viii', 
    name: 'Henry VIII', 
    description: 'Tudor King', 
    prompt: 'Henry VIII based on the Holbein portrait. He is a large man standing legs apart, hands on hips. He wears opulent clothes of velvet, fur, and gold thread, with a flat cap. He looks imposing and dangerous. The background is a Tudor tapestry. Renaissance portrait style.', 
    icon: '👑' 
  },
  { 
    id: 'rasputin', 
    name: 'Rasputin', 
    description: 'Russian Mystic', 
    prompt: 'Grigori Rasputin standing in a snowy courtyard in St. Petersburg. He has long, greasy black hair and a beard, with hypnotic eyes. He wears a black peasant tunic and heavy boots. He holds a crucifix. The atmosphere is ominous and cold.', 
    icon: '🔮' 
  },
  { 
    id: 'sun-tzu', 
    name: 'Sun Tzu', 
    description: 'Art of War', 
    prompt: 'Sun Tzu commanding an army in ancient China. He wears leather armor over robes and a general\'s cap. He holds a bamboo scroll and points with a sword. The background is a misty mountain landscape with soldiers in formation. Epic, historical film style.', 
    icon: '⚔️' 
  },
  { 
    id: 'musashi', 
    name: 'Miyamoto Musashi', 
    description: 'Sword Saint', 
    prompt: 'Miyamoto Musashi on the beach at Ganryujima. He has wild hair tied back and wears simple, ragged kimono. He wields a wooden sword (bokken) carved from an oar. He looks calm and deadly. The sun is setting over the ocean. Japanese period drama style.', 
    icon: '🗡️' 
  },
  { 
    id: 'geronimo', 
    name: 'Geronimo', 
    description: 'Apache Leader', 
    prompt: 'Geronimo kneeling in the desert terrain of the Southwest. He holds a rifle. He wears a cloth headband, a loose shirt, and moccasins. His face is weathered and fierce. The background features cacti and rock formations. Historical realism.', 
    icon: '🏹' 
  },
  { 
    id: 'sacagawea', 
    name: 'Sacagawea', 
    description: 'Shoshone Guide', 
    prompt: 'Sacagawea pointing the way forward. She carries her infant son Jean Baptiste in a cradleboard on her back. She wears a buckskin dress. Lewis and Clark stand behind her. The background is the Rocky Mountains. Adventurous, historical style.', 
    icon: '🏔️' 
  },
  { 
    id: 'blackbeard', 
    name: 'Blackbeard', 
    description: 'Pirate Captain', 
    prompt: 'Blackbeard (Edward Teach) on the deck of the Queen Anne\'s Revenge. He has slow-burning fuses tied into his massive black beard, creating smoke around his face. He wears a long coat and multiple pistols across his chest. He wields a cutlass. Dramatic, fearsome pirate aesthetic.', 
    icon: '🏴‍☠️' 
  },
  { 
    id: 'leonidas', 
    name: 'Leonidas', 
    description: 'King of Sparta', 
    prompt: 'King Leonidas at the Hot Gates. He wears a crimson cloak, a bronze Corinthian helmet pushed back, and greaves. He holds a spear and a large round shield (aspis). He is shouting a war cry. Spartan warriors stand in phalanx behind him. Gritty, desaturated action style.', 
    icon: '🛡️' 
  },
  { 
    id: 'hannibal', 
    name: 'Hannibal Barca', 
    description: 'Carthaginian General', 
    prompt: 'Hannibal crossing the Alps. He is wrapped in furs over his armor, riding a war elephant. Snow swirls around him. His face is determined. Behind him, a line of soldiers and elephants stretches through the mountain pass. Epic historical scale.', 
    icon: '🐘' 
  },
  { 
    id: 'spartacus', 
    name: 'Spartacus', 
    description: 'Gladiator', 
    prompt: 'Spartacus in the gladiator arena. He is bare-chested, muscular, and scarred, holding a gladius and a small shield. He stands over a defeated foe, looking up at the crowd. The Colosseum stands tall around him. Dust and sunlight filter into the arena. Action movie style.', 
    icon: '🗡️' 
  },
  { 
    id: 'charlemagne', 
    name: 'Charlemagne', 
    description: 'Father of Europe', 
    prompt: 'Charlemagne seated on a throne in Aachen Cathedral. He has a long white beard and wears a golden crown and imperial robes. He holds the sword Joyeuse. The setting is Romanesque architecture with mosaics. Majestic, medieval art style.', 
    icon: '👑' 
  },
  { 
    id: 'saladin', 
    name: 'Saladin', 
    description: 'Sultan of Egypt', 
    prompt: 'Saladin on horseback in the desert. He wears Saracen chainmail, yellow robes, and a turban. He holds a scimitar. He looks noble and chivalrous. The background shows Crusader castles in the distance. Historical epic style.', 
    icon: '☪️' 
  },
  { 
    id: 'mansa-musa', 
    name: 'Mansa Musa', 
    description: 'Wealthiest King', 
    prompt: 'Mansa Musa on his pilgrimage to Mecca. He sits on a golden throne atop a palanquin or camel. He wears robes of gold brocade and a turban. He holds a large gold nugget. The background is a caravan stretching to the horizon in the Sahara desert. Rich, warm colors.', 
    icon: '💰' 
  },
  { 
    id: 'nefertiti', 
    name: 'Queen Nefertiti', 
    description: 'Egyptian Queen', 
    prompt: 'Portrait of Queen Nefertiti based on the famous bust. She wears the tall flat-topped blue crown (cap crown) and a broad floral collar. Her neck is long and elegant. Her skin is flawless. The background is a stylized Egyptian palace with lotus columns. Photorealistic beauty shot.', 
    icon: '🐍' 
  },
  { 
    id: 'michelangelo', 
    name: 'Michelangelo', 
    description: 'Renaissance Artist', 
    prompt: 'Michelangelo sculpting the David. He is covered in marble dust, wearing a smock and a head covering. He holds a chisel and mallet, looking intensely at the giant marble hand. The studio is filled with blocks of stone. Renaissance atmosphere.', 
    icon: '🗿' 
  },
  { 
    id: 'rembrandt', 
    name: 'Rembrandt', 
    description: 'Dutch Master', 
    prompt: 'Rembrandt self-portrait come to life. He is an older man with a bulbous nose and curly hair, wearing a velvet beret and a dark coat with a gold chain. The lighting is dramatic chiaroscuro, illuminating his face from one side. He holds a palette and brushes. Oil painting style.', 
    icon: '🎨' 
  },
  { 
    id: 'monet', 
    name: 'Claude Monet', 
    description: 'Impressionist', 
    prompt: 'Claude Monet in his garden at Giverny. He is an old man with a long white beard, wearing a suit and a straw hat. He stands on the Japanese bridge overlooking the water lily pond. He is painting on an easel. The scene is dappled with sunlight and color. Impressionist style.', 
    icon: '🪷' 
  },
  { 
    id: 'klimt', 
    name: 'Gustav Klimt', 
    description: 'Symbolist Painter', 
    prompt: 'Gustav Klimt in his studio. He wears a floor-length indigo smock and sandals. He holds a cat in his arms. The background is filled with his paintings, featuring gold leaf patterns and geometric shapes. Artistic, decorative style.', 
    icon: '🖼️' 
  },
  { 
    id: 'sinatra', 
    name: 'Frank Sinatra', 
    description: 'The Voice', 
    prompt: 'Frank Sinatra singing at the Sands Hotel. He wears a sharp tuxedo, loosened bow tie, and holds a drink and a cigarette. He leans against a microphone stand. A fedora is tipped on his head. The background is a dark, smoky jazz club with a band. Cool, noir atmosphere.', 
    icon: '🎤' 
  },
  { 
    id: 'louis-armstrong', 
    name: 'Louis Armstrong', 
    description: 'Jazz Legend', 
    prompt: 'Louis Armstrong playing the trumpet. His cheeks are puffed out, eyes wide with joy, sweat on his brow. He holds a white handkerchief. He wears a suit. The background is a jazz club stage with warm spotlighting. Energetic, close-up.', 
    icon: '🎺' 
  },
  { 
    id: 'plato', 
    name: 'Plato', 
    description: 'Philosopher', 
    prompt: 'Plato walking in the Academy. He is an older, bearded man in a toga. He points a finger upwards (referencing the School of Athens). He is engaged in dialogue with students. The setting is a grove of olive trees with classical statues. Classical art style.', 
    icon: '🏛️' 
  },
  { 
    id: 'aristotle', 
    name: 'Aristotle', 
    description: 'Philosopher', 
    prompt: 'Aristotle studying nature. He is a mature man with a beard, wearing a toga. He is examining a plant or animal specimen. He holds a scroll. He points his hand palm down (grounding knowledge). The setting is a Greek garden. Realistic, historical style.', 
    icon: '🦉' 
  },
  { 
    id: 'nietzsche', 
    name: 'Friedrich Nietzsche', 
    description: 'Philosopher', 
    prompt: 'Friedrich Nietzsche portrait. He has a massive, bushy walrus mustache and intense, brooding eyes. He wears a dark suit. The background is a misty mountain path in the Alps (Sils Maria). Melancholic, philosophical atmosphere.', 
    icon: '🧠' 
  },
  { 
    id: 'dickens', 
    name: 'Charles Dickens', 
    description: 'Victorian Author', 
    prompt: 'Charles Dickens at his desk. He has a goatee and wavy hair, wearing a velvet jacket. He looks tired but manic. He is writing furiously by gaslight. The room is cluttered with papers. Victorian atmosphere.', 
    icon: '📚' 
  },
  { 
    id: 'tolkien', 
    name: 'J.R.R. Tolkien', 
    description: 'Fantasy Author', 
    prompt: 'J.R.R. Tolkien in his Oxford study. He is an elderly man smoking a pipe, wearing a tweed jacket and vest. He sits in an armchair. Behind him is a map of Middle-earth pinned to the wall. Cozy, academic atmosphere.', 
    icon: '💍' 
  },
  { 
    id: 'mary-shelley', 
    name: 'Mary Shelley', 
    description: 'Sci-Fi Pioneer', 
    prompt: 'Mary Shelley writing Frankenstein. She is a young woman in a Regency dress, sitting in a dark room at Villa Diodati. A storm rages outside the window. She looks frightened but inspired by a flash of lightning. Gothic romantic style.', 
    icon: '🧟' 
  },
  { 
    id: 'turing', 
    name: 'Alan Turing', 
    description: 'Computer Scientist', 
    prompt: 'Alan Turing at Bletchley Park. He is a young man in a tweed suit, looking awkward and shy. He stands next to the Bombe machine, with its rotating drums. He holds a cup of tea attached to the radiator. Intellectual, historical style.', 
    icon: '⚙️' 
  },
  { 
    id: 'oppenheimer', 
    name: 'J. Robert Oppenheimer', 
    description: 'Physicist', 
    prompt: 'J. Robert Oppenheimer at the Trinity test site. He wears a porkpie hat and a loose suit, holding a cigarette. He looks gaunt and haunted. In the background, a desert landscape and a tower. Cinematic, noir-ish lighting.', 
    icon: '☢️' 
  },
  { 
    id: 'gagarin', 
    name: 'Yuri Gagarin', 
    description: 'First in Space', 
    prompt: 'Yuri Gagarin in the Vostok 1 capsule. He wears an orange SK-1 pressure suit and a white helmet with "CCCP" written on it. He is smiling a bright, charming smile. Through the porthole, the Earth is visible. Retro-futurist Soviet aesthetic.', 
    icon: '🚀' 
  },
  { 
    id: 'cousteau', 
    name: 'Jacques Cousteau', 
    description: 'Oceanographer', 
    prompt: 'Jacques Cousteau on the deck of the Calypso. He is a thin man with a prominent nose, wearing his signature red beanie cap and a blue wetsuit or shirt. He holds a pipe. The blue ocean is behind him. Adventurous, documentary style.', 
    icon: '🌊' 
  },
  { 
    id: 'grace-kelly', 
    name: 'Grace Kelly', 
    description: 'Princess of Monaco', 
    prompt: 'Grace Kelly in a convertible driving along the French Riviera. She wears a silk headscarf and sunglasses, and a chic 1950s outfit. She looks elegant and poised. The Mediterranean Sea is in the background. Glamorous, technicolor film style.', 
    icon: '💎' 
  },
  { 
    id: 'james-dean', 
    name: 'James Dean', 
    description: 'Rebel', 
    prompt: 'James Dean leaning against a wall. He wears a red Harrington jacket, white t-shirt, and jeans. He has a cigarette in his mouth and is squinting coolly. The background is a blurry 1950s street. Iconic rebel aesthetic.', 
    icon: '🚬' 
  },
  { 
    id: 'al-capone', 
    name: 'Al Capone', 
    description: 'Gangster', 
    prompt: 'Al Capone in a Chicago speakeasy. He is a heavy-set man with facial scars, wearing a pinstripe suit, fedora, and diamond ring. He smokes a cigar. He smiles menacingly. The background is dark and luxurious. Prohibition era style.', 
    icon: '🔫' 
  },
  { 
    id: 'billy-the-kid', 
    name: 'Billy the Kid', 
    description: 'Outlaw', 
    prompt: 'Billy the Kid posing for a tintype. He stands casually, leaning on a Winchester rifle. He wears a battered hat, a vest, and a bandana. He has a goofy, buck-toothed grin. The background is a painted canvas of a frontier scene. Sepia, rustic style.', 
    icon: '🌵' 
  },
  { 
    id: 'annie-oakley', 
    name: 'Annie Oakley', 
    description: 'Sharpshooter', 
    prompt: 'Annie Oakley performing in Buffalo Bill\'s Wild West Show. She wears a fringed skirt and jacket with medals, and a cowboy hat. She is shooting a target over her shoulder using a mirror. The background is a circus tent. Western poster style.', 
    icon: '🎯' 
  },
  { 
    id: 'davy-crockett', 
    name: 'Davy Crockett', 
    description: 'Frontiersman', 
    prompt: 'Davy Crockett at the Alamo. He wears a coonskin cap and buckskin fringes. He holds "Old Betsy," his rifle. He looks weary but resolute. The background shows the adobe walls of the mission. Historical painting style.', 
    icon: '🐻' 
  },
  { 
    id: 'babe-ruth', 
    name: 'Babe Ruth', 
    description: 'Baseball Legend', 
    prompt: 'Babe Ruth calling his shot. He wears a baggy grey Yankees uniform and cap. He points with his bat towards the center field fences. He has a round face and a potbelly. The background is a crowded baseball stadium in the 1930s. Vintage sports photo style.', 
    icon: '⚾' 
  },
  { 
    id: 'dante', 
    name: 'Dante Alighieri', 
    description: 'The Supreme Poet', 
    prompt: 'Dante Alighieri profile portrait. He has a hooked nose and sharp chin. He wears a red hood and robe with a laurel wreath. He holds a copy of the Divine Comedy. The background depicts the circles of Hell. Medieval fresco style.', 
    icon: '🔥' 
  },
  { 
    id: 'hypatia', 
    name: 'Hypatia', 
    description: 'Mathematician', 
    prompt: 'Hypatia teaching in the Library of Alexandria. She is a beautiful woman wearing philosopher\'s robes. She points to a geometric diagram on a scroll. She is surrounded by scrolls and astrolabes. The lighting is soft and intellectual. Classical style.', 
    icon: '📜' 
  },
  { 
    id: 'avicenna', 
    name: 'Ibn Sina', 
    description: 'Polymath', 
    prompt: 'Ibn Sina (Avicenna) in a Persian courtyard. He wears a turban and robes. He is writing in a book (The Canon of Medicine). He is surrounded by herbs and glass vessels. The architecture features blue tiles and arches. Golden age of Islam aesthetic.', 
    icon: '🌿' 
  },
  { 
    id: 'hatshepsut', 
    name: 'Hatshepsut', 
    description: 'Pharaoh', 
    prompt: 'Pharaoh Hatshepsut standing on the terrace of her temple at Deir el-Bahari. She is dressed as a male pharaoh with a false beard and kilt, but with feminine features. She holds an ankh. The background is the limestone cliffs and colonnades. Bright Egyptian sunlight.', 
    icon: '🏺' 
  },
  { 
    id: 'rumi', 
    name: 'Rumi', 
    description: 'Sufi Mystic', 
    prompt: 'Rumi spinning in a dervish dance. He wears a white robe with a wide skirt that flares out, and a tall felt hat. His arms are crossed or raised. His expression is ecstatic and peaceful. The background is a blur of motion and golden light. Spiritual, mystical style.', 
    icon: '🌀' 
  },
  { 
    id: 'hokusai', 
    name: 'Katsushika Hokusai', 
    description: 'Ukiyo-e Artist', 
    prompt: 'Katsushika Hokusai as an old man in his workshop. He wears simple Japanese worker clothes. He is painting a wave with a brush on paper. Mount Fuji is visible through the window. The style mimics woodblock prints with bold lines and flat colors.', 
    icon: '🌊' 
  },
  { 
    id: 'copernicus', 
    name: 'Nicolaus Copernicus', 
    description: 'Astronomer', 
    prompt: 'Nicolaus Copernicus on a rooftop in Poland. He holds a model of the solar system (heliocentric). He wears a fur-lined robe and a cap. He looks up at the stars. It is night. Renaissance science aesthetic.', 
    icon: '☀️' 
  },
  { 
    id: 'bolivar', 
    name: 'Simón Bolívar', 
    description: 'The Liberator', 
    prompt: 'Simón Bolívar on a rearing white horse. He wears a splendid military uniform with gold epaulettes and a bicorne hat. He wields a sword. The background is the dramatic peaks of the Andes mountains. Heroic, revolutionary style.', 
    icon: '🏔️' 
  },
  { 
    id: 'sappho', 
    name: 'Sappho', 
    description: 'Lyric Poet', 
    prompt: 'Sappho reciting poetry on the cliffs of Lesbos. She wears a chiton and holds a lyre. She has violets woven in her hair. The Aegean Sea is blue behind her. The mood is romantic and lyrical. Classical Greek art style.', 
    icon: '🎶' 
  },
  { 
    id: 'wilde', 
    name: 'Oscar Wilde', 
    description: 'Playwright', 
    prompt: 'Oscar Wilde lounging on a velvet sofa. He wears a velvet smoking jacket, knee breeches, and silk stockings. He holds a lily or a sunflower. His expression is languid and witty. The room is decorated in the Aesthetic style with peacock feathers. Victorian dandy aesthetic.', 
    icon: '🌹' 
  },
  { 
    id: 'freud', 
    name: 'Sigmund Freud', 
    description: 'Psychoanalyst', 
    prompt: 'Sigmund Freud in his consulting room in Vienna. He has a white beard and glasses, holding a cigar. He sits in a chair next to the famous couch covered in Persian rugs. The room is filled with antiquities. Psychological, intense atmosphere.', 
    icon: '🛋️' 
  },
  { 
    id: 'woolf', 
    name: 'Virginia Woolf', 
    description: 'Modernist Writer', 
    prompt: 'Virginia Woolf portrait profile. She has a long face, heavy-lidded eyes, and a bun. She wears a cardigan. She looks melancholic and intellectual. The background is a soft focus garden (Bloomsbury). Ethereal, soft photography style.', 
    icon: '🖊️' 
  },
  { 
    id: 'owens', 
    name: 'Jesse Owens', 
    description: 'Olympic Athlete', 
    prompt: 'Jesse Owens at the 1936 Berlin Olympics. He is sprinting on the cinder track, wearing a white singlet with "USA" and spikes. His form is perfect. The background shows the stadium and Nazi flags (blurred). Action sports photography.', 
    icon: '🏃' 
  },
  { 
    id: 'liliuokalani', 
    name: 'Queen Liliuokalani', 
    description: 'Queen of Hawaii', 
    prompt: 'Queen Liliuokalani sitting in Iolani Palace. She wears a black Victorian gown with a royal sash and orders. She holds a fan. She looks dignified but sad. The background features koa wood furniture and tropical flowers. Royal portrait style.', 
    icon: '🌺' 
  },
  { 
    id: 'tecumseh', 
    name: 'Tecumseh', 
    description: 'Shawnee Leader', 
    prompt: 'Tecumseh addressing a council. He wears traditional Shawnee buckskin, a silver nose ring, and a turban with feathers. He is charismatic and commanding. The background is a forest clearing with other warriors. Historical painting style.', 
    icon: '🔥' 
  },
  { 
    id: 'boudica', 
    name: 'Boudica', 
    description: 'Celtic Queen', 
    prompt: 'Queen Boudica driving a war chariot. She has a mass of tawny hair falling to her waist. She wears a tartan cloak and gold torque. She brandishes a spear. The chariot has scythes on the wheels. Roman legions flee in the background. Fierce, action-packed.', 
    icon: '⚔️' 
  },
  { 
    id: 'shaka', 
    name: 'Shaka Zulu', 
    description: 'Zulu King', 
    prompt: 'Shaka Zulu standing on the African savanna. He is tall and muscular, wearing leopard skin and feathers. He holds a large cowhide shield and the short stabbing spear (iklwa). The background shows a kraal and Zulu warriors. Majestic, historical.', 
    icon: '🛡️' 
  },
  { 
    id: 'eleanor', 
    name: 'Eleanor Roosevelt', 
    description: 'First Lady', 
    prompt: 'Eleanor Roosevelt visiting a coal mine or a depression-era work site. She wears a coat, hat, and sensible shoes. She is smiling and talking to workers. Her tall stature and teeth are prominent. Black and white documentary photo style.', 
    icon: '📻' 
  },
  { 
    id: 'warhol', 
    name: 'Andy Warhol', 
    description: 'Pop Artist', 
    prompt: 'Andy Warhol in The Factory. He wears a black turtleneck, black sunglasses, and a fright wig. He holds a screen print or a polaroid camera. The walls are covered in silver foil. The background features pop art prints of Marilyn or soup cans. Cool, detached 60s style.', 
    icon: '🍌' 
  },
  { 
    id: 'christie', 
    name: 'Agatha Christie', 
    description: 'Mystery Writer', 
    prompt: 'Agatha Christie as an older woman, sitting in a wicker chair in an English garden. She wears a tweed suit and a hat. She holds a teacup. She looks like a harmless grandmother but with a glint in her eye. Cozy mystery aesthetic.', 
    icon: '☕' 
  },
  { 
    id: 'nelson', 
    name: 'Horatio Nelson', 
    description: 'Naval Hero', 
    prompt: 'Admiral Horatio Nelson on the quarterdeck of HMS Victory. He wears a naval uniform with many medals and an empty sleeve pinned to his chest. He wears a bicorne hat with a diamond chelengk. He looks through a telescope. Battle smoke in the background. Heroic naval art.', 
    icon: '⚓' 
  },
  { 
    id: 'vlad', 
    name: 'Vlad the Impaler', 
    description: 'Wallachian Prince', 
    prompt: 'Vlad the Impaler dining. He wears a velvet hat with a jewel and a fur-trimmed coat. He has a thick mustache and bulging eyes. He holds a goblet. The background is dark and suggestive of his cruelty (forest of stakes in distance). Ominous historical portrait.', 
    icon: '🏰' 
  },
  { 
    id: 'bessie', 
    name: 'Bessie Coleman', 
    description: 'Aviatrix', 
    prompt: 'Bessie Coleman standing on the wing of a biplane. She wears a leather aviator\'s helmet, goggles, and a long leather coat. She is smiling confidently. The plane is a Curtiss JN-4 "Jenny". The sky is blue with fluffy clouds. adventurous, historical.', 
    icon: '✈️' 
  },
  { 
    id: 'douglass', 
    name: 'Frederick Douglass', 
    description: 'Abolitionist', 
    prompt: 'Frederick Douglass portrait. He is an older man with a massive mane of white hair and a beard. He wears a formal suit and vest. His expression is fierce, dignified, and intense. He is looking into the camera. High contrast black and white photography.', 
    icon: '🗣️' 
  },
  { 
    id: 'catherine-medici', 
    name: 'Catherine de\' Medici', 
    description: 'Queen of France', 
    prompt: 'Catherine de\' Medici in mourning black. She wears a cap with a widow\'s peak and a high collar. She holds a pomander or poison ring. Her expression is calculating. The background is a dark corridor of the Louvre. Renaissance intrigue style.', 
    icon: '🍷' 
  },
  { 
    id: 'louis-xiv', 
    name: 'Louis XIV', 
    description: 'The Sun King', 
    prompt: 'King Louis XIV posing in the Hall of Mirrors. He wears a massive curly wig, high heels with red soles, and ermine-lined robes covered in fleur-de-lis. He shows off his legs in tights. The background is mirrors and chandeliers. Baroque opulence.', 
    icon: '🌞' 
  }
];

export const ERAS: Era[] = [
  {
    id: 'ancient-egypt',
    name: 'Ancient Egypt',
    description: 'Walk among pharaohs and pyramids.',
    prompt: 'Cinematic masterpiece, Ancient Egypt, 1300 BC. The subject is a Pharaoh or High Priestess, adorned in a translucent pleated kalasiris of fine white linen, a heavy gold Wesekh collar inlaid with turquoise and lapis lazuli, and a nemes headcloth or vulture headdress. Their skin glows with golden warmth, eyes accented by sharp kohl lines. Background: The grand hypostyle hall of Karnak, massive sandstone columns carved with hieroglyphs rising into shadow, shafts of golden sunlight piercing through the dust, incense smoke swirling in the air, the Nile river glittering in the distance, hyper-realistic, 8k resolution, volumetric lighting.',
    icon: '🐫',
  },
  {
    id: 'victorian-london',
    name: 'Victorian London',
    description: 'Steam, fog, and top hats.',
    prompt: 'Cinematic shot, Victorian London, 1890. The subject is an English gentleman or lady, dressed in authentic period attire: a charcoal wool frock coat, a silk top hat, and a pocket watch chain, or a bustle dress with lace gloves and a bonnet. Background: A cobblestone street shrouded in thick, swirling fog (pea-souper), illuminated by the warm, flickering yellow glow of gas streetlamps. The silhouette of Big Ben and the Houses of Parliament looms in the distance. Moody atmospheric lighting, wet pavement reflecting the lights, mysterious ambiance, 8k resolution, highly detailed textures.',
    icon: '🎩',
  },
  {
    id: 'roaring-20s',
    name: 'Roaring 20s',
    description: 'Jazz, glitz, and glamour.',
    prompt: 'Cinematic shot, New York City, 1925. The subject is the epitome of Jazz Age glamour, dressed in a sparkling sequined flapper dress with fringe and a feathered headband, or a sharp black tuxedo with a bow tie. Background: An opulent Art Deco ballroom filled with golden confetti raining down, crystal chandeliers dripping with light, and a vibrant party atmosphere. Champagne towers, geometric gold patterns, high contrast, cinematic lighting, sharp focus, capturing the energy of the era.',
    icon: '🎷',
  },
  {
    id: 'cyberpunk-2099',
    name: 'Cyberpunk 2099',
    description: 'Neon lights and chrome.',
    prompt: 'Cinematic shot, Neo-Tokyo, 2099. The subject is a futuristic cyberpunk edgerunner, featuring subtle cybernetic implants, glowing circuitry on skin, and high-tech tactical streetwear with LED accents. Background: A rainy, grimy alleyway drenched in neon pink and cyan light, towering skyscrapers with holographic advertisements reflecting in rain puddles, flying cars zooming overhead with light trails. Gritty sci-fi aesthetic, ray tracing, 8k resolution, wet surfaces, atmospheric smoke.',
    icon: '🤖',
  },
  {
    id: 'medieval-fantasy',
    name: 'Medieval Fantasy',
    description: 'Knights, dragons, and magic.',
    prompt: 'Cinematic shot, High Fantasy Realm. The subject is an epic hero, clad in intricate, battle-worn silver plate armor engraved with runes, wearing a fur-lined cloak and holding a glowing magical staff or sword. Background: A majestic stone castle perched precariously on a jagged cliffside, a dragon soaring through storm clouds in the distance, dramatic overcast sky with shafts of light. Magical atmosphere, volumetric lighting, detailed metal and fabric textures, Lord of the Rings aesthetic.',
    icon: '⚔️',
  },
  {
    id: 'wild-west',
    name: 'Wild West',
    description: 'Cowboys and dusty saloons.',
    prompt: 'Cinematic shot, American Frontier, 1870. The subject is a rugged gunslinger or outlaw, wearing a weathered leather duster coat, a worn cowboy hat, a bandana around the neck, and a gun belt with revolvers. Background: A dusty wooden boardwalk outside a saloon in a frontier town, tumbleweeds rolling by, wooden facades, hitching posts. Warm, harsh afternoon sun casting long, dramatic shadows. Western film aesthetic, sepia undertones, 8k resolution, gritty texture.',
    icon: '🤠',
  },
  {
    id: 'feudal-japan',
    name: 'Feudal Japan',
    description: 'Samurai, cherry blossoms, and honor.',
    prompt: 'Cinematic shot, Kyoto, 1600. The subject is a noble samurai warrior wearing intricate lacquered o-yoroi armor with gold detailing and a katana at the waist, or a figure in a fine silk kimono with embroidered floral patterns. Background: A serene Zen garden with a red torii gate, stone lanterns, and pink cherry blossom petals falling gently in the breeze. Traditional pagoda architecture in the background. Soft, diffused lighting, peaceful and elegant atmosphere, photorealistic, depth of field.',
    icon: '🏯',
  },
  {
    id: 'neon-80s',
    name: 'Neon 80s',
    description: 'Synthwave, arcades, and big hair.',
    prompt: 'Cinematic shot, 1985 Arcade. The subject is an 80s icon, wearing a stonewashed denim jacket with patches, neon-colored accessories, fingerless gloves, and voluminous hair. Background: A retro arcade interior filled with glowing CRT cabinets, neon signs (PAC-MAN, GALAGA), a checkerboard floor, and a haze of smoke. Vaporwave color palette (magenta, cyan, purple), nostalgic synthwave vibe, high contrast, bloom effects.',
    icon: '🕹️',
  },
  {
    id: 'pirate-age',
    name: 'Pirate High Seas',
    description: 'Ships, treasure, and open seas.',
    prompt: 'Cinematic shot, Caribbean Sea, 1715. The subject is a swashbuckling pirate captain, wearing a weathered tricorn hat, a velvet frock coat, a leather baldric with a flintlock pistol, and loose linen shirt. Background: The wooden deck of a massive galleon ship, rigging and sails billowing in the wind, turquoise ocean water crashing against the hull, a tropical island on the horizon. Bright sunlight, salty atmosphere, adventure style, highly detailed wood and water textures.',
    icon: '🏴‍☠️',
  },
  {
    id: 'viking-saga',
    name: 'Viking Saga',
    description: 'Furs, axes, and longships.',
    prompt: 'Cinematic shot, Norway, 800 AD. The subject is a fierce Viking warrior, wrapped in thick wolf furs and chainmail, holding a battle axe or round shield, with war paint on their face. Background: A misty fjord with steep, snow-capped mountains rising from the dark water, a Viking longship with a dragon prow docked on the rocky shore. Cold, desaturated blue tones, dramatic and raw atmosphere, photorealistic, fog and mist effects.',
    icon: '🪓',
  },
  {
    id: 'renaissance-italy',
    name: 'Renaissance Italy',
    description: 'Art, velvet, and masquerades.',
    prompt: 'Cinematic shot, Venice, 1500. The subject is a Venetian noble, dressed in luxurious velvet Renaissance robes with gold embroidery, a lace ruff, and holding an ornate, feathered masquerade mask. Background: A stone bridge over a Venetian canal at twilight, gondolas gliding by, historic palazzo architecture with arched windows, soft lantern light reflecting on the water. Romantic, mysterious, opulent, 8k resolution, rich colors.',
    icon: '🎭',
  },
  {
    id: 'space-age-60s',
    name: 'Space Age 1960s',
    description: 'Retro-futurism and moon landings.',
    prompt: 'Cinematic shot, 1960s Retro-Future. The subject is an astronaut or space traveler, wearing a sleek, shiny silver space suit with a bubble helmet, white gloves, and go-go boots. Background: A stylized lunar landscape with a massive, detailed Earth rising in the black starry sky, a retro sci-fi rocket ship with fins nearby. Pulp fiction art style, bold primary colors, vintage film grain, technicolor, adventurous and optimistic.',
    icon: '🚀',
  },
  {
    id: 'post-apocalyptic',
    name: 'Wasteland 2050',
    description: 'Survival gear and desert ruins.',
    prompt: 'Cinematic shot, Wasteland, 2050. The subject is a rugged survivor, wearing distressed tactical gear, improvised armor made of tires and scrap metal, goggles, and a scarf to protect against dust. Background: A ruined city skyline reclaimed by vast desert sand dunes, rusted metal structures, harsh, blinding sunlight. Mad Max aesthetic, gritty, realistic, high contrast, heat haze effect, highly detailed textures of rust and sand.',
    icon: '☢️',
  },
  {
    id: 'film-noir',
    name: 'Film Noir 1940s',
    description: 'Shadows, detectives, and mystery.',
    prompt: 'Cinematic shot, 1940s Film Noir. The subject is a private investigator or femme fatale, wearing a trench coat and fedora, or an elegant evening gown, smoking a cigarette. Background: A dark, rainy city street at night, wet pavement reflecting streetlights, shadows cast by venetian blinds. High contrast black and white photography, dramatic chiaroscuro lighting, mysterious and moody atmosphere, film grain.',
    icon: '🕵️',
  },
  {
    id: 'disco-fever',
    name: 'Disco Fever',
    description: 'Groovy moves and disco balls.',
    prompt: 'Cinematic shot, 1977 Disco Club. The subject is the king or queen of the dance floor, wearing a white polyester bell-bottom suit or a shimmering sequined jumpsuit, striking a dynamic dance pose. Background: A multi-colored illuminated dance floor, a giant sparkling disco ball overhead casting light spots everywhere, hazy atmosphere, crowded club. Studio 54 vibe, vibrant, energetic, soft focus, flares.',
    icon: '💃',
  },
  {
    id: 'prehistoric',
    name: 'Prehistoric Wild',
    description: 'Cave furs and dinosaurs.',
    prompt: 'Cinematic shot, Late Cretaceous. The subject is a primitive hunter-gatherer, wearing rough animal pelts and holding a primitive wooden spear with a stone tip. Background: A lush, dense prehistoric jungle with giant ferns and cycads, a massive Triceratops or T-Rex visible in a clearing in the distance. Volumetric lighting filtering through the canopy, epic scale, 8k resolution, realistic textures.',
    icon: '🦕',
  },
  {
    id: 'roman-empire',
    name: 'Roman Empire',
    description: 'Togas, gladiator armor, and marble.',
    prompt: 'Cinematic shot, Ancient Rome, 100 AD. The subject is a Roman Senator in a white toga with a purple border, or a Gladiator in bronze muscle cuirass and helmet. Background: The interior of the Colosseum or the Roman Forum with pristine white marble columns and statues, cheering crowds in the distance. Bright Mediterranean sunlight, clear blue sky, grandeur and history, photorealistic, architectural detail.',
    icon: '🏛️',
  },
  {
    id: 'ww2',
    name: 'World War II',
    description: '1940s Wartime Era.',
    prompt: 'Cinematic shot, Europe, 1944. The subject is a soldier or resistance fighter, dressed in a period-accurate military uniform (khaki or olive drab) or 1940s civilian clothing with a beret. Background: A war-torn European village street with rubble and damaged buildings, or an airfield with a Spitfire plane. Desaturated color palette, gritty realism, emotional depth, cinematic lighting, historical accuracy.',
    icon: '🎖️',
  },
  {
    id: 'ancient-greece',
    name: 'Ancient Greece',
    description: 'Philosophers and marble temples.',
    prompt: 'Cinematic shot, Athens, 400 BC. The subject is a philosopher or citizen, wearing a draped white Greek chiton and leather sandals, perhaps wearing an olive wreath. Background: The Parthenon on the Acropolis in its prime, painted in original colors, white marble statues, bright blue sky, deep depth of field. Classical beauty, photorealistic, 8k, serene atmosphere.',
    icon: '🏺',
  },
  {
    id: 'aztec-empire',
    name: 'Aztec Empire',
    description: 'Feathers, gold, and Tenochtitlan.',
    prompt: 'Cinematic shot, Tenochtitlan, 1500. The subject is an Aztec warrior or noble, wearing a spectacular headdress with vibrant green quetzal feathers, jade ear spools, and gold jewelry. Background: The Templo Mayor pyramid, canals filled with boats and floating gardens (chinampas). Vibrant colors, tropical atmosphere, detailed textures of stone and feathers, sunlight.',
    icon: '☀️',
  },
  {
    id: 'tang-dynasty',
    name: 'Tang Dynasty',
    description: 'Golden age of Chinese culture.',
    prompt: 'Cinematic shot, Chang\'an, 700 AD. The subject is a noble or scholar, wearing flowing Hanfu silk robes with wide sleeves and intricate embroidery, hair styled in a traditional bun. Background: An imperial palace courtyard with red wooden pillars, curved roofs, and paper lanterns glowing softly at dusk. Traditional Chinese architecture, elegant and majestic, cinematic lighting, rich reds and golds.',
    icon: '🏮',
  },
  {
    id: 'flower-power',
    name: 'Flower Power 60s',
    description: 'Peace, love, and music.',
    prompt: 'Cinematic shot, Woodstock, 1969. The subject is a hippie, wearing a tie-dye shirt, a flower crown, round sunglasses, and peace sign beads. Background: A grassy festival field with a crowd, a painted VW bus, acoustic guitars. Lens flare, warm sunny vibe, film grain, vintage Kodachrome look, nostalgic, colorful.',
    icon: '☮️',
  },
  {
    id: 'fifties-diner',
    name: '50s Rock n Roll',
    description: 'Milkshakes and jukeboxes.',
    prompt: 'Cinematic shot, USA, 1955. The subject is a greaser in a leather jacket and jeans, or a girl in a poodle skirt and saddle shoes. Background: A retro chrome-and-neon diner interior, black and white checkerboard floor, red vinyl booths, a Wurlitzer jukebox, a milkshake on the table. Nostalgic Americana, vibrant colors, bright lighting, rock and roll vibe.',
    icon: '🍔',
  },
  {
    id: 'french-revolution',
    name: 'French Revolution',
    description: 'Liberty, Equality, Fraternity.',
    prompt: 'Cinematic shot, Paris, 1789. The subject is a revolutionary, wearing a phrygian cap, a tricolor cockade, and 18th-century commoner clothes (sans-culottes). Background: A chaotic Paris street with a barricade made of furniture and cobblestones, smoke filling the air, French flags waving. Dramatic lighting, revolutionary spirit, highly detailed, historical intensity.',
    icon: '🇫🇷',
  },
  {
    id: 'industrial-revolution',
    name: 'Industrial Age',
    description: 'Steam power and factories.',
    prompt: 'Cinematic shot, Industrial Era, 1850. The subject is a factory owner in a top hat and frock coat, or a worker in a flat cap and suspenders, face smudged with soot. Background: A massive brick factory interior with giant steam engines, turning gears, brass pipes, and atmospheric steam and smoke. Moody lighting, shafts of light through high windows, steampunk vibe, gritty.',
    icon: '⚙️',
  },
  {
    id: 'maya-jungle',
    name: 'Mayan Jungle',
    description: 'Hidden temples and jade.',
    prompt: 'Cinematic shot, Mayan City, 800 AD. The subject is Maya royalty, wearing jaguar skin, heavy jade jewelry, and body paint. Background: A massive stone step-pyramid rising out of a dense, misty rainforest, shafts of sunlight piercing the canopy, mossy stone textures. Ancient mystery, photorealistic, lush greenery, atmospheric.',
    icon: '🌿',
  },
  {
    id: 'ottoman-empire',
    name: 'Ottoman Empire',
    description: 'Bazaars and minarets.',
    prompt: 'Cinematic shot, Constantinople, 1600. The subject is a merchant or noble, wearing a rich brocade kaftan and an intricate turban. Background: The bustling Grand Bazaar, shelves stacked with colorful spices, Persian carpets, and mosaic glass lamps. Warm ambient lighting, rich textures and intricate patterns, architectural arches, detailed.',
    icon: '🕌',
  },
  {
    id: 'ice-age',
    name: 'Ice Age Tundra',
    description: 'Glaciers and mammoths.',
    prompt: 'Cinematic shot, Pleistocene Epoch. The subject is a primitive human, wrapped in heavy mammoth fur clothing, with frost on their face and hair. Background: A vast, frozen tundra landscape with blue glaciers, a herd of woolly mammoths walking in the distance, aurora borealis in the night sky. Cold blue tones, photorealistic, snow textures, dramatic.',
    icon: '❄️',
  },
  {
    id: 'ancient-babylon',
    name: 'Babylonian Gardens',
    description: 'Hanging gardens of wonder.',
    prompt: 'Cinematic shot, Babylon, 600 BC. The subject is a Babylonian royal, wearing Mesopotamian garments with fringed fabric and gold armbands. Background: The Hanging Gardens of Babylon, terraces overflowing with exotic plants, flowers, and waterfalls, blue glazed brick walls with lion reliefs (Ishtar Gate style). Golden desert sunlight, majestic, lush and vibrant.',
    icon: '🌴',
  },
  {
    id: 'grunge-90s',
    name: '90s Grunge',
    description: 'Flannel, angst, and rock.',
    prompt: 'Cinematic shot, Seattle, 1992. The subject is a grunge rocker, wearing a plaid flannel shirt tied around the waist, ripped jeans, combat boots, and messy hair. Background: A dim basement practice space with band posters on the wall, amplifiers, moody lighting, cigarette smoke. Gritty texture, alternative rock aesthetic, flash photography style.',
    icon: '🎸',
  },
  {
    id: 'y2k-digital',
    name: 'Y2K Hacker',
    description: 'Digital rain and trench coats.',
    prompt: 'Cinematic shot, The Matrix inspired, 1999. The subject is a hacker, wearing a long black leather trench coat, dark sunglasses, and combat boots. Background: A dark, industrial environment with cascading green digital code rain (Matrix code), computer servers, green tint color grading. Cyber-thriller vibe, sharp focus, glossy textures.',
    icon: '💾',
  },
  {
    id: 'golden-hollywood',
    name: 'Golden Hollywood',
    description: 'Red carpets and spotlights.',
    prompt: 'Cinematic shot, Hollywood Premiere, 1935. The subject is a movie star, wearing a sharp tuxedo or a satin evening gown with a fur stole and diamond jewelry. Background: A red carpet event with paparazzi flashbulbs going off, vintage movie palace marquee lights, art deco architecture. Black and white or sepia glamour photography style, soft lighting, elegant.',
    icon: '🎥',
  },
  {
    id: 'atlantis-lost',
    name: 'Lost Atlantis',
    description: 'Underwater kingdom of legend.',
    prompt: 'Cinematic shot, Lost City of Atlantis. The subject is an Atlantean royal, wearing iridescent scale armor and bioluminescent jewelry. Background: Majestic underwater architecture made of pearl, coral, and gold, shafts of sunlight filtering down through deep blue water, schools of glowing fish. Ethereal, magical, 8k resolution, distortion from water.',
    icon: '🧜‍♀️',
  },
  {
    id: 'solarpunk-future',
    name: 'Solarpunk Utopia',
    description: 'Green tech and bright futures.',
    prompt: 'Cinematic shot, Solarpunk Utopia, 2100. The subject is a citizen of the future, wearing futuristic organic clothing made of leaves and light-weaving fabrics. Background: A gleaming city where nature and technology merge, glass towers covered in hanging gardens, wind turbines, solar panels, clear blue sky. Bright, optimistic aesthetic, lush greenery, soft natural light.',
    icon: '🌱',
  },
  {
    id: 'incan-empire',
    name: 'Incan Citadel',
    description: 'High peaks of the Andes.',
    prompt: 'Cinematic shot, Machu Picchu, 1500. The subject is an Incan noble, wearing a colorful woven tunic with geometric patterns and gold ear spools. Background: The iconic stone citadel perched high in the Andes mountains, terraced fields, llamas grazing in the mist, dramatic mountain peaks. Golden hour lighting, atmospheric clouds, detailed stone textures.',
    icon: '🦙',
  },
  {
    id: 'steampunk-sky',
    name: 'Steampunk Skies',
    description: 'Airships and brass gears.',
    prompt: 'Cinematic shot, Steampunk Airship, 1895. The subject is an airship captain, wearing a leather aviator cap, brass goggles, and a mechanical gauntlet. Background: The deck of a flying copper dreadnought soaring above the clouds, spinning propellers, steam venting from brass pipes, clockwork mechanisms. Adventurous, mechanical, golden lighting, detailed metal textures.',
    icon: '🎈',
  },
  {
    id: 'gothic-horror',
    name: 'Gothic Horror',
    description: 'Dark castles and vampires.',
    prompt: 'Cinematic shot, Gothic Horror, 1880. The subject is a vampire hunter or mysterious count, wearing a high-collared black velvet coat and holding a lantern. Background: A crumbling stone castle corridor, thick cobwebs, lightning flashing through a stained-glass window, dark shadows. Eerie, atmospheric, blue and black color palette, spooky.',
    icon: '🦇',
  },
  {
    id: 'scottish-highlands',
    name: 'Scottish Highlands',
    description: 'Mist, moors, and ancient castles.',
    prompt: 'Cinematic shot, Scotland, 1740. The subject is a rugged Highlander warrior, wearing a weathered tartan kilt, leather sporran, and fur cloak, holding a basket-hilted broadsword. Background: Misty, dramatic rolling green highlands, purple heather, a stone circle standing mysteriously in the fog, moody overcast sky. Outlander aesthetic, 8k resolution, raw nature.',
    icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    id: 'martian-frontier',
    name: 'Martian Frontier',
    description: 'Life on the Red Planet.',
    prompt: 'Cinematic shot, Mars Colony, 2080. The subject is a futuristic colonist, wearing a sleek, dust-covered EVA suit with a gold-tinted visor reflecting the landscape. Background: The rusted red dunes of Mars, a high-tech geodesic bio-dome city in the distance, two moons in the salmon-pink sky. Harsh realistic lighting, sci-fi masterpiece, red and orange tones.',
    icon: '🪐',
  },
  {
    id: 'bioluminescent-forest',
    name: 'Alien Forest',
    description: 'Glowing flora and eternal night.',
    prompt: 'Cinematic shot, Alien Jungle, Midnight. The subject is an ethereal explorer or native being, with subtle glowing tribal markings on their skin. Background: A dense, magical forest filled with giant phosphorescent mushrooms, hanging vines glowing blue and purple, floating spores like fireflies. Mystical, dreamlike atmosphere, Avatar style, dark background with neon highlights.',
    icon: '🍄',
  },
  {
    id: 'comic-book',
    name: 'Comic Book',
    description: 'Bold lines and heroic poses.',
    prompt: 'Comic book art style, Golden Age. The subject is a superhero, standing heroically with hands on hips, wearing a dynamic costume with a cape fluttering in the wind. Background: A stylized metropolis skyline, dramatic action lines (speed lines), halftone dot shading, bold black outlines, vibrant primary colors, speech bubble "POW!" visual effect. Illustration style.',
    icon: '💥',
  },
  {
    id: 'versailles-court',
    name: 'Royal Versailles',
    description: 'Opulence, wigs, and gold.',
    prompt: 'Cinematic shot, Palace of Versailles, 1770. The subject is French royalty, wearing a towering powdered wig, white face powder, and an extravagant silk gown or velvet coat with gold embroidery. Background: The Hall of Mirrors, reflecting crystal chandeliers, gold leaf detailing, frescoed ceilings. Lavish, decadent Rococo atmosphere, bright and airy, pastel colors.',
    icon: '🍰',
  },
  {
    id: 'arabian-nights',
    name: 'Arabian Nights',
    description: 'Magic carpets and desert stars.',
    prompt: 'Cinematic shot, Ancient Baghdad Legend. The subject is a rogue or princess, wearing flowing silk pants, a vest, and a turban, holding a magic lamp. Background: A moonlit desert city skyline with onion domes and minarets, a flying carpet hovering nearby, starry night sky, magical sparkles. Warm lantern light, deep blues and golds, fantasy style.',
    icon: '🌙',
  },
  {
    id: 'pixel-verse',
    name: 'Pixel Verse',
    description: '8-bit retro gaming world.',
    prompt: 'Pixel art aesthetic, 16-bit RPG. The subject is a pixelated hero character, wearing armor or adventurer clothes. Background: A blocky fantasy world with pixelated trees, fluffy clouds, and a castle in the distance. Vibrant retro color palette, scanline effect, nostalgic gaming vibe, SNES style graphics.',
    icon: '👾',
  },
  {
    id: 'claymation',
    name: 'Clay World',
    description: 'Stop-motion animation style.',
    prompt: 'Claymation stop-motion style. The subject appears to be made of modeling clay with visible fingerprints and soft, rounded textures. Background: A handcrafted miniature set made of felt, cardboard, and clay trees. Shallow depth of field (tilt-shift), warm studio lighting, whimsical Aardman animation look, playful.',
    icon: '🧱',
  },
  {
    id: 'toy-world',
    name: 'Toy World',
    description: 'Living in a macro universe.',
    prompt: 'Macro photography, Toy Story aesthetic. The subject is a high-quality articulated action figure or doll with plastic sheen textures. Background: A giant-scale child\'s bedroom floor, massive wooden blocks, marbles, and fuzzy carpet strands. Bright playful lighting, bokeh effect, sense of scale.',
    icon: '🧸',
  },
  {
    id: 'surreal-dream',
    name: 'Surreal Dream',
    description: 'Melting clocks and floating islands.',
    prompt: 'Surrealist masterpiece. The subject is floating or distorted, perhaps wearing melting clock accessories or a bowler hat. Background: A vast, empty desert landscape with impossible geometry, floating islands, giant eyes in the sky, long shadows. Salvador Dali and Magritte inspired, dreamlike, mysterious, oil painting style.',
    icon: '🎨',
  },
  {
    id: 'retro-anime',
    name: 'Retro Anime',
    description: '90s cel-shaded animation style.',
    prompt: 'Cinematic shot, 1990s Anime style. The subject is drawn in a vintage anime aesthetic with cel-shading, large expressive eyes, and dramatic hair. Background: A detailed hand-painted watercolor background of a city at sunset or a starry night. Film grain, chromatic aberration, retro TV broadcast effect, high quality animation keyframe, emotional.',
    icon: '✨',
  }
];

export const SURPRISE_PROMPTS = [
  "A futuristic underwater city in the year 3000 with bioluminescent towers",
  "A steampunk village in the clouds with airships docking",
  "The grand library of Alexandria at its peak, filled with scholars",
  "A cyberpunk night market in Neo-Tokyo with raining neon signs",
  "A mystical forest inhabited by glowing fae creatures and giant mushrooms",
  "The surface of Mars terraformed with glass domes and red plants",
  "A masquerade ball in 18th century Versailles with elaborate golden masks",
  "A jazz club on the moon looking back at the Earth",
  "A solarpunk city integrated with giant trees and waterfalls",
  "A galactic senate meeting with diverse alien species",
  "An ancient Atlantis palace before it sank into the ocean",
  "A 1950s diner but everyone is a robot"
];

export const FILTERS: FilterOption[] = [
  { id: 'none', name: 'Original', css: 'none' },
  { id: 'sepia', name: 'Sepia', css: 'sepia(1)' },
  { id: 'grayscale', name: 'B&W', css: 'grayscale(1)' },
  { id: 'vintage', name: 'Vintage', css: 'sepia(0.5) contrast(1.2) brightness(0.9)' },
  { id: 'cool', name: 'Ice Cold', css: 'hue-rotate(180deg) sepia(0.2) contrast(1.1)' },
  { id: 'warm', name: 'Warmth', css: 'sepia(0.4) saturate(1.5) contrast(1.1)' },
  { id: 'invert', name: 'Negative', css: 'invert(1)' },
  { id: 'dreamy', name: 'Dreamy', css: 'blur(0.5px) brightness(1.2) contrast(0.8) saturate(1.2)' },
  { id: 'cyber', name: 'Cyber', css: 'contrast(1.2) saturate(2) hue-rotate(20deg)' },
];