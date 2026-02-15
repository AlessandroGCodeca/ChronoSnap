import { Era, FilterOption, HistoricalFigure } from "./types";

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  { 
    id: 'einstein', 
    name: 'Albert Einstein', 
    description: 'Theoretical Physicist', 
    prompt: 'Albert Einstein with his iconic wild hair and mustache', 
    icon: '🧪' 
  },
  { 
    id: 'cleopatra', 
    name: 'Cleopatra', 
    description: 'Queen of the Nile', 
    prompt: 'Queen Cleopatra wearing ancient Egyptian royal garments and jewelry', 
    icon: '👑' 
  },
  { 
    id: 'shakespeare', 
    name: 'Wm. Shakespeare', 
    description: 'The Bard', 
    prompt: 'William Shakespeare in Elizabethan attire holding a quill', 
    icon: '✒️' 
  },
  { 
    id: 'earhart', 
    name: 'Amelia Earhart', 
    description: 'Aviation Pioneer', 
    prompt: 'Amelia Earhart wearing a leather flight cap and goggles', 
    icon: '✈️' 
  },
  { 
    id: 'tesla', 
    name: 'Nikola Tesla', 
    description: 'Master of Lightning', 
    prompt: 'Nikola Tesla in a vintage suit surrounded by electrical coils and sparks', 
    icon: '⚡' 
  },
  { 
    id: 'da-vinci', 
    name: 'Leonardo da Vinci', 
    description: 'Renaissance Man', 
    prompt: 'Leonardo da Vinci holding a sketchbook with beard and renaissance robes', 
    icon: '🎨' 
  },
  { 
    id: 'marilyn', 
    name: 'Marilyn Monroe', 
    description: 'Hollywood Icon', 
    prompt: 'Marilyn Monroe in a glamorous white dress with iconic hairstyle', 
    icon: '🎬' 
  },
  { 
    id: 'napoleon', 
    name: 'Napoleon', 
    description: 'Emperor of France', 
    prompt: 'Napoleon Bonaparte in military uniform with hand in vest, on a battlefield', 
    icon: '🇫🇷' 
  },
  { 
    id: 'lincoln', 
    name: 'Abraham Lincoln', 
    description: '16th US President', 
    prompt: 'Abraham Lincoln wearing a tall stovepipe hat and suit', 
    icon: '🎩' 
  },
  { 
    id: 'joan-of-arc', 
    name: 'Joan of Arc', 
    description: 'The Maid of Orléans', 
    prompt: 'Joan of Arc in shining plate armor holding a banner', 
    icon: '⚔️' 
  },
  { 
    id: 'elvis', 
    name: 'Elvis Presley', 
    description: 'King of Rock', 
    prompt: 'Elvis Presley in a white jeweled jumpsuit holding a microphone', 
    icon: '🎸' 
  },
  { 
    id: 'mozart', 
    name: 'Mozart', 
    description: 'Musical Prodigy', 
    prompt: 'Wolfgang Amadeus Mozart in 18th century red velvet coat and powdered wig', 
    icon: '🎼' 
  },
  { 
    id: 'frida', 
    name: 'Frida Kahlo', 
    description: 'Painter', 
    prompt: 'Frida Kahlo with floral headpiece and traditional Mexican dress', 
    icon: '🌺' 
  },
  { 
    id: 'bruce-lee', 
    name: 'Bruce Lee', 
    description: 'Martial Arts Legend', 
    prompt: 'Bruce Lee in yellow jumpsuit in a fighting stance', 
    icon: '👊' 
  },
  { 
    id: 'gandhi', 
    name: 'Mahatma Gandhi', 
    description: 'Civil Rights Leader', 
    prompt: 'Mahatma Gandhi in traditional dhoti and glasses, spinning a charkha', 
    icon: '🕊️' 
  },
  { 
    id: 'curie', 
    name: 'Marie Curie', 
    description: 'Nobel Scientist', 
    prompt: 'Marie Curie in a laboratory with test tubes and scientific equipment', 
    icon: '🔬' 
  },
  { 
    id: 'mlk', 
    name: 'Martin Luther King Jr.', 
    description: 'Civil Rights Icon', 
    prompt: 'Martin Luther King Jr. in a suit giving a speech at a podium', 
    icon: '🎙️' 
  },
  { 
    id: 'elizabeth-i', 
    name: 'Queen Elizabeth I', 
    description: 'Tudor Queen', 
    prompt: 'Queen Elizabeth I in an elaborate Elizabethan gown with a high collar', 
    icon: '👸' 
  },
  { 
    id: 'van-gogh', 
    name: 'Vincent van Gogh', 
    description: 'Post-Impressionist', 
    prompt: 'Vincent van Gogh with a bandage on his ear, painting a starry night', 
    icon: '🌻' 
  },
  { 
    id: 'rosa-parks', 
    name: 'Rosa Parks', 
    description: 'Mother of Freedom', 
    prompt: 'Rosa Parks sitting on a bus looking out the window, 1950s attire', 
    icon: '🚌' 
  },
  { 
    id: 'caesar', 
    name: 'Julius Caesar', 
    description: 'Roman Dictator', 
    prompt: 'Julius Caesar in a Roman toga and laurel wreath', 
    icon: '🏛️' 
  },
  { 
    id: 'darwin', 
    name: 'Charles Darwin', 
    description: 'Evolutionary Biologist', 
    prompt: 'Charles Darwin with a long white beard holding a turtle', 
    icon: '🐢' 
  },
  { 
    id: 'churchill', 
    name: 'Winston Churchill', 
    description: 'Wartime Prime Minister', 
    prompt: 'Winston Churchill in a suit with a bow tie and a cigar', 
    icon: '✌️' 
  },
  { 
    id: 'beethoven', 
    name: 'Ludwig van Beethoven', 
    description: 'Classical Composer', 
    prompt: 'Ludwig van Beethoven with wild hair conducting music', 
    icon: '🎹' 
  },
  { 
    id: 'alexander', 
    name: 'Alexander the Great', 
    description: 'King of Macedonia', 
    prompt: 'Alexander the Great in golden armor riding a horse', 
    icon: '🐴' 
  },
  { 
    id: 'genghis', 
    name: 'Genghis Khan', 
    description: 'Mongol Emperor', 
    prompt: 'Genghis Khan in fur-lined armor holding a bow on the steppe', 
    icon: '🏹' 
  },
  { 
    id: 'victoria', 
    name: 'Queen Victoria', 
    description: 'Queen of the UK', 
    prompt: 'Queen Victoria in a black mourning dress with a small crown', 
    icon: '👑' 
  },
  { 
    id: 'tubman', 
    name: 'Harriet Tubman', 
    description: 'Abolitionist', 
    prompt: 'Harriet Tubman in 19th-century clothing holding a lantern in the woods', 
    icon: '🏮' 
  },
  { 
    id: 'armstrong', 
    name: 'Neil Armstrong', 
    description: 'First Man on Moon', 
    prompt: 'Neil Armstrong in an Apollo space suit holding a helmet', 
    icon: '🧑‍🚀' 
  },
  { 
    id: 'confucius', 
    name: 'Confucius', 
    description: 'Chinese Philosopher', 
    prompt: 'Confucius in traditional Hanfu robes holding a scroll', 
    icon: '📜' 
  },
  { 
    id: 'socrates', 
    name: 'Socrates', 
    description: 'Greek Philosopher', 
    prompt: 'Socrates in a simple Greek chiton debating in the agora', 
    icon: '🏛️' 
  },
  { 
    id: 'nightingale', 
    name: 'Florence Nightingale', 
    description: 'Lady with the Lamp', 
    prompt: 'Florence Nightingale in a nurse uniform carrying a lamp in a hospital ward', 
    icon: '⚕️' 
  },
  { 
    id: 'lovelace', 
    name: 'Ada Lovelace', 
    description: 'First Programmer', 
    prompt: 'Ada Lovelace in a Victorian dress next to a Babbage Engine', 
    icon: '💻' 
  },
  { 
    id: 'chaplin', 
    name: 'Charlie Chaplin', 
    description: 'Silent Film Star', 
    prompt: 'Charlie Chaplin as The Tramp with bowler hat and cane, black and white', 
    icon: '🎥' 
  },
  { 
    id: 'marley', 
    name: 'Bob Marley', 
    description: 'Reggae Legend', 
    prompt: 'Bob Marley with dreadlocks playing a guitar', 
    icon: '🇯🇲' 
  },
  { 
    id: 'ali', 
    name: 'Muhammad Ali', 
    description: 'The Greatest', 
    prompt: 'Muhammad Ali in boxing gloves and shorts in the ring', 
    icon: '🥊' 
  },
  { 
    id: 'mandela', 
    name: 'Nelson Mandela', 
    description: 'Anti-Apartheid Leader', 
    prompt: 'Nelson Mandela in a colorful Madiba shirt smiling', 
    icon: '🇿🇦' 
  },
  { 
    id: 'picasso', 
    name: 'Pablo Picasso', 
    description: 'Cubist Painter', 
    prompt: 'Pablo Picasso in a striped shirt holding a paintbrush', 
    icon: '🖌️' 
  },
  { 
    id: 'wright-bros', 
    name: 'Wright Brothers', 
    description: 'Aviation Pioneers', 
    prompt: 'Orville and Wilbur Wright in suits standing next to the first airplane', 
    icon: '🛫' 
  },
  { 
    id: 'newton', 
    name: 'Isaac Newton', 
    description: 'Mathematician', 
    prompt: 'Isaac Newton sitting under an apple tree holding a prism', 
    icon: '🍎' 
  },
  { 
    id: 'galileo', 
    name: 'Galileo Galilei', 
    description: 'Astronomer', 
    prompt: 'Galileo Galilei looking through a telescope at the stars', 
    icon: '🔭' 
  },
  { 
    id: 'catherine', 
    name: 'Catherine the Great', 
    description: 'Empress of Russia', 
    prompt: 'Catherine the Great in an imperial gown with a sash and crown', 
    icon: '🇷🇺' 
  },
  { 
    id: 'tut', 
    name: 'King Tut', 
    description: 'Boy King', 
    prompt: 'King Tutankhamun wearing the golden death mask and royal regalia', 
    icon: '⚱️' 
  },
  { 
    id: 'sitting-bull', 
    name: 'Sitting Bull', 
    description: 'Lakota Leader', 
    prompt: 'Sitting Bull in traditional Lakota clothing with a feather headdress', 
    icon: '🪶' 
  },
  { 
    id: 'washington', 
    name: 'George Washington', 
    description: '1st US President', 
    prompt: 'George Washington in revolutionary war general uniform crossing the Delaware', 
    icon: '🇺🇸' 
  },
  { 
    id: 'audrey', 
    name: 'Audrey Hepburn', 
    description: 'Film & Fashion Icon', 
    prompt: 'Audrey Hepburn in a little black dress with a pearl necklace and tiara', 
    icon: '👗' 
  },
  { 
    id: 'dali', 
    name: 'Salvador Dali', 
    description: 'Surrealist Artist', 
    prompt: 'Salvador Dali with his long mustache and a melting clock', 
    icon: '🕰️' 
  },
  { 
    id: 'bach', 
    name: 'J.S. Bach', 
    description: 'Baroque Composer', 
    prompt: 'Johann Sebastian Bach playing a pipe organ in a wig', 
    icon: '⛪' 
  },
  { 
    id: 'marco-polo', 
    name: 'Marco Polo', 
    description: 'Explorer', 
    prompt: 'Marco Polo in traveler clothing holding a map on the Silk Road', 
    icon: '🗺️' 
  },
  { 
    id: 'freddie-mercury', 
    name: 'Freddie Mercury', 
    description: 'Rock Legend', 
    prompt: 'Freddie Mercury with mustache in yellow jacket holding microphone stand', 
    icon: '🎤' 
  },
  { 
    id: 'david-bowie', 
    name: 'David Bowie', 
    description: 'Ziggy Stardust', 
    prompt: 'David Bowie with lightning bolt makeup and glam rock outfit', 
    icon: '⚡' 
  },
  { 
    id: 'jimi-hendrix', 
    name: 'Jimi Hendrix', 
    description: 'Guitar God', 
    prompt: 'Jimi Hendrix playing a Stratocaster with a colorful headband', 
    icon: '🎸' 
  },
  { 
    id: 'john-lennon', 
    name: 'John Lennon', 
    description: 'The Dreamer', 
    prompt: 'John Lennon with round glasses and long hair in New York', 
    icon: '☮️' 
  },
  { 
    id: 'coco-chanel', 
    name: 'Coco Chanel', 
    description: 'Fashion Icon', 
    prompt: 'Coco Chanel in a chic black suit with pearls and a hat', 
    icon: '👠' 
  },
  { 
    id: 'walt-disney', 
    name: 'Walt Disney', 
    description: 'Animator', 
    prompt: 'Walt Disney drawing Mickey Mouse with a smile', 
    icon: '🐭' 
  },
  { 
    id: 'steve-jobs', 
    name: 'Steve Jobs', 
    description: 'Tech Visionary', 
    prompt: 'Steve Jobs in a black turtleneck and jeans holding an iPhone', 
    icon: '📱' 
  },
  { 
    id: 'henry-ford', 
    name: 'Henry Ford', 
    description: 'Industrialist', 
    prompt: 'Henry Ford standing next to a Model T car', 
    icon: '🚗' 
  },
  { 
    id: 'thomas-edison', 
    name: 'Thomas Edison', 
    description: 'Inventor', 
    prompt: 'Thomas Edison holding a glowing lightbulb', 
    icon: '💡' 
  },
  { 
    id: 'ben-franklin', 
    name: 'Benjamin Franklin', 
    description: 'Founding Father', 
    prompt: 'Benjamin Franklin with spectacles holding a kite and key', 
    icon: '🪁' 
  },
  { 
    id: 'teddy-roosevelt', 
    name: 'Theodore Roosevelt', 
    description: 'Rough Rider', 
    prompt: 'Teddy Roosevelt in rough rider uniform with glasses', 
    icon: '🏞️' 
  },
  { 
    id: 'jfk', 
    name: 'John F. Kennedy', 
    description: '35th President', 
    prompt: 'John F. Kennedy in a suit smiling with a classic hairstyle', 
    icon: '🇺🇸' 
  },
  { 
    id: 'houdini', 
    name: 'Harry Houdini', 
    description: 'Escape Artist', 
    prompt: 'Harry Houdini in chains and a straitjacket', 
    icon: '🔒' 
  },
  { 
    id: 'jane-austen', 
    name: 'Jane Austen', 
    description: 'Novelist', 
    prompt: 'Jane Austen in a regency bonnet writing with a quill', 
    icon: '📖' 
  },
  { 
    id: 'mark-twain', 
    name: 'Mark Twain', 
    description: 'Humorist', 
    prompt: 'Mark Twain in a white suit with a bushy mustache smoking a pipe', 
    icon: '🚤' 
  },
  { 
    id: 'hemingway', 
    name: 'Ernest Hemingway', 
    description: 'Writer', 
    prompt: 'Ernest Hemingway with a beard and sweater at a typewriter', 
    icon: '✍️' 
  },
  { 
    id: 'poe', 
    name: 'Edgar Allan Poe', 
    description: 'Gothic Poet', 
    prompt: 'Edgar Allan Poe with a raven on his shoulder', 
    icon: '🦅' 
  },
  { 
    id: 'marie-antoinette', 
    name: 'Marie Antoinette', 
    description: 'Queen of France', 
    prompt: 'Marie Antoinette with a towering wig and elaborate gown holding cake', 
    icon: '🍰' 
  },
  { 
    id: 'henry-viii', 
    name: 'Henry VIII', 
    description: 'Tudor King', 
    prompt: 'Henry VIII in regal velvet robes with hands on hips', 
    icon: '👑' 
  },
  { 
    id: 'rasputin', 
    name: 'Rasputin', 
    description: 'Russian Mystic', 
    prompt: 'Rasputin with a long beard and intense eyes in a black robe', 
    icon: '🔮' 
  },
  { 
    id: 'sun-tzu', 
    name: 'Sun Tzu', 
    description: 'Art of War', 
    prompt: 'Sun Tzu in ancient Chinese armor holding a scroll', 
    icon: '⚔️' 
  },
  { 
    id: 'musashi', 
    name: 'Miyamoto Musashi', 
    description: 'Sword Saint', 
    prompt: 'Miyamoto Musashi with two swords and flowing hair', 
    icon: '🗡️' 
  },
  { 
    id: 'geronimo', 
    name: 'Geronimo', 
    description: 'Apache Leader', 
    prompt: 'Geronimo kneeling with a rifle in traditional clothing', 
    icon: '🏹' 
  },
  { 
    id: 'sacagawea', 
    name: 'Sacagawea', 
    description: 'Shoshone Guide', 
    prompt: 'Sacagawea carrying a baby on her back pointing the way', 
    icon: '🏔️' 
  },
  { 
    id: 'blackbeard', 
    name: 'Blackbeard', 
    description: 'Pirate Captain', 
    prompt: 'Blackbeard with smoking fuses in his beard holding a cutlass', 
    icon: '🏴‍☠️' 
  },
  { 
    id: 'leonidas', 
    name: 'Leonidas', 
    description: 'King of Sparta', 
    prompt: 'King Leonidas screaming "This is Sparta" with a spear and shield in battle', 
    icon: '🛡️' 
  },
  { 
    id: 'hannibal', 
    name: 'Hannibal Barca', 
    description: 'Carthaginian General', 
    prompt: 'Hannibal Barca riding an elephant across the snowy Alps', 
    icon: '🐘' 
  },
  { 
    id: 'spartacus', 
    name: 'Spartacus', 
    description: 'Gladiator', 
    prompt: 'Spartacus in the arena with a gladiator helmet and sword', 
    icon: '🗡️' 
  },
  { 
    id: 'charlemagne', 
    name: 'Charlemagne', 
    description: 'Father of Europe', 
    prompt: 'Charlemagne wearing the crown of the Holy Roman Empire holding a sword', 
    icon: '👑' 
  },
  { 
    id: 'saladin', 
    name: 'Saladin', 
    description: 'Sultan of Egypt', 
    prompt: 'Saladin in medieval armor and turban on horseback in the desert', 
    icon: '☪️' 
  },
  { 
    id: 'mansa-musa', 
    name: 'Mansa Musa', 
    description: 'Wealthiest King', 
    prompt: 'Mansa Musa holding a golden nugget and scepter in luxurious robes', 
    icon: '💰' 
  },
  { 
    id: 'nefertiti', 
    name: 'Queen Nefertiti', 
    description: 'Egyptian Queen', 
    prompt: 'Queen Nefertiti with her iconic tall blue crown and gold necklace', 
    icon: '🐍' 
  },
  { 
    id: 'michelangelo', 
    name: 'Michelangelo', 
    description: 'Renaissance Artist', 
    prompt: 'Michelangelo sculpting a marble statue with a chisel and hammer', 
    icon: '🗿' 
  },
  { 
    id: 'rembrandt', 
    name: 'Rembrandt', 
    description: 'Dutch Master', 
    prompt: 'Rembrandt in a self-portrait style with a beret and dramatic lighting', 
    icon: '🎨' 
  },
  { 
    id: 'monet', 
    name: 'Claude Monet', 
    description: 'Impressionist', 
    prompt: 'Claude Monet painting water lilies in his garden at Giverny', 
    icon: '🪷' 
  },
  { 
    id: 'klimt', 
    name: 'Gustav Klimt', 
    description: 'Symbolist Painter', 
    prompt: 'Gustav Klimt wearing a smock standing in front of a gold-leaf painting', 
    icon: '🖼️' 
  },
  { 
    id: 'sinatra', 
    name: 'Frank Sinatra', 
    description: 'The Voice', 
    prompt: 'Frank Sinatra in a tuxedo and fedora singing into a vintage microphone', 
    icon: '🎤' 
  },
  { 
    id: 'louis-armstrong', 
    name: 'Louis Armstrong', 
    description: 'Jazz Legend', 
    prompt: 'Louis Armstrong playing the trumpet with puffy cheeks and a handkerchief', 
    icon: '🎺' 
  },
  { 
    id: 'plato', 
    name: 'Plato', 
    description: 'Philosopher', 
    prompt: 'Plato in Greek robes pointing upwards in the Academy', 
    icon: '🏛️' 
  },
  { 
    id: 'aristotle', 
    name: 'Aristotle', 
    description: 'Philosopher', 
    prompt: 'Aristotle in Greek robes holding a scroll and walking', 
    icon: '🦉' 
  },
  { 
    id: 'nietzsche', 
    name: 'Friedrich Nietzsche', 
    description: 'Philosopher', 
    prompt: 'Friedrich Nietzsche with his massive bushy mustache looking intense', 
    icon: '🧠' 
  },
  { 
    id: 'dickens', 
    name: 'Charles Dickens', 
    description: 'Victorian Author', 
    prompt: 'Charles Dickens with a beard writing at a desk in a Victorian study', 
    icon: '📚' 
  },
  { 
    id: 'tolkien', 
    name: 'J.R.R. Tolkien', 
    description: 'Fantasy Author', 
    prompt: 'J.R.R. Tolkien smoking a pipe with a map of Middle-earth', 
    icon: '💍' 
  },
  { 
    id: 'mary-shelley', 
    name: 'Mary Shelley', 
    description: 'Sci-Fi Pioneer', 
    prompt: 'Mary Shelley writing Frankenstein during a storm', 
    icon: '🧟' 
  },
  { 
    id: 'turing', 
    name: 'Alan Turing', 
    description: 'Computer Scientist', 
    prompt: 'Alan Turing standing next to the Enigma machine with technical diagrams', 
    icon: '⚙️' 
  },
  { 
    id: 'oppenheimer', 
    name: 'J. Robert Oppenheimer', 
    description: 'Physicist', 
    prompt: 'J. Robert Oppenheimer wearing a porkpie hat and smoking a pipe', 
    icon: '☢️' 
  },
  { 
    id: 'gagarin', 
    name: 'Yuri Gagarin', 
    description: 'First in Space', 
    prompt: 'Yuri Gagarin in a Vostok spacesuit smiling with a helmet', 
    icon: '🚀' 
  },
  { 
    id: 'cousteau', 
    name: 'Jacques Cousteau', 
    description: 'Oceanographer', 
    prompt: 'Jacques Cousteau wearing a red beanie on a boat with the ocean behind', 
    icon: '🌊' 
  },
  { 
    id: 'grace-kelly', 
    name: 'Grace Kelly', 
    description: 'Princess of Monaco', 
    prompt: 'Grace Kelly in an elegant 1950s gown and pearls', 
    icon: '💎' 
  },
  { 
    id: 'james-dean', 
    name: 'James Dean', 
    description: 'Rebel', 
    prompt: 'James Dean in a red jacket and jeans leaning against a Porsche', 
    icon: '🚬' 
  },
  { 
    id: 'al-capone', 
    name: 'Al Capone', 
    description: 'Gangster', 
    prompt: 'Al Capone in a pinstripe suit smoking a cigar in Chicago', 
    icon: '🔫' 
  },
  { 
    id: 'billy-the-kid', 
    name: 'Billy the Kid', 
    description: 'Outlaw', 
    prompt: 'Billy the Kid wearing a cowboy hat and holding a rifle', 
    icon: '🌵' 
  },
  { 
    id: 'annie-oakley', 
    name: 'Annie Oakley', 
    description: 'Sharpshooter', 
    prompt: 'Annie Oakley holding a rifle and performing a trick shot', 
    icon: '🎯' 
  },
  { 
    id: 'davy-crockett', 
    name: 'Davy Crockett', 
    description: 'Frontiersman', 
    prompt: 'Davy Crockett wearing a coonskin cap in the wilderness', 
    icon: '🐻' 
  },
  { 
    id: 'babe-ruth', 
    name: 'Babe Ruth', 
    description: 'Baseball Legend', 
    prompt: 'Babe Ruth in a vintage Yankees uniform pointing his bat to the stands', 
    icon: '⚾' 
  },
  { 
    id: 'dante', 
    name: 'Dante Alighieri', 
    description: 'The Supreme Poet', 
    prompt: 'Dante Alighieri wearing a red chaperon and laurel wreath holding the Divine Comedy', 
    icon: '🔥' 
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
    prompt: 'Cinematic shot, Victorian London, 1890. The subject is wearing a tailored Victorian suit with a top hat or an elegant bustle dress with lace gloves. Background: A cobblestone street shrouded in thick fog, illuminated by the warm glow of gas streetlamps, the silhouette of Big Ben in the distance, moody atmospheric lighting, mysterious ambiance, 8k resolution, detailed texture.',
    icon: '🎩',
  },
  {
    id: 'roaring-20s',
    name: 'Roaring 20s',
    description: 'Jazz, glitz, and glamour.',
    prompt: 'Cinematic shot, New York City, 1925. The subject is dressed in lavish Great Gatsby style fashion—a tuxedo with a bowtie or a sparkling flapper dress with a feather headband. Background: An opulent Art Deco ballroom filled with golden confetti, champagne towers, crystal chandeliers, vibrant party atmosphere, sharp focus, high contrast, cinematic lighting.',
    icon: '🎷',
  },
  {
    id: 'cyberpunk-2099',
    name: 'Cyberpunk 2099',
    description: 'Neon lights and chrome.',
    prompt: 'Cinematic shot, Neo-Tokyo, 2099. The subject has subtle cybernetic implants and is wearing high-tech tactical streetwear with glowing LED accents. Background: A rainy futuristic alleyway drenched in pink and blue neon lights, flying cars zooming overhead, holographic advertisements reflecting in puddles, gritty sci-fi aesthetic, ray tracing, 8k resolution.',
    icon: '🤖',
  },
  {
    id: 'medieval-fantasy',
    name: 'Medieval Fantasy',
    description: 'Knights, dragons, and magic.',
    prompt: 'Cinematic shot, High Fantasy Realm. The subject is an epic hero clad in detailed silver plate armor with a fur cloak or flowing mage robes holding a glowing staff. Background: A majestic stone castle perched on a cliff, a dragon soaring in the distance, dramatic overcast sky, magical atmosphere, detailed textures, volumetric lighting.',
    icon: '⚔️',
  },
  {
    id: 'wild-west',
    name: 'Wild West',
    description: 'Cowboys and dusty saloons.',
    prompt: 'Cinematic shot, American Frontier, 1870. The subject is a rugged gunslinger wearing a worn leather duster, cowboy hat, bandana, and revolvers at their hip. Background: A dusty wooden boardwalk outside a saloon in a frontier town, tumbleweeds, warm afternoon sun casting long shadows, western film aesthetic, 8k resolution.',
    icon: '🤠',
  },
  {
    id: 'feudal-japan',
    name: 'Feudal Japan',
    description: 'Samurai, cherry blossoms, and honor.',
    prompt: 'Cinematic shot, Kyoto, 1600. The subject is a samurai in intricate lacquered armor with a katana or wearing a silk kimono with floral patterns. Background: A serene Zen garden with falling pink cherry blossom petals, a traditional pagoda architecture, soft diffused lighting, peaceful and elegant, photorealistic.',
    icon: '🏯',
  },
  {
    id: 'neon-80s',
    name: 'Neon 80s',
    description: 'Synthwave, arcades, and big hair.',
    prompt: 'Cinematic shot, 1985 Arcade. The subject is wearing a denim jacket with patches, neon-colored accessories, and voluminous hair. Background: A retro arcade filled with glowing CRT cabinets, neon signs, checkerboard floor, vaporwave color palette (magenta, cyan, purple), nostalgic vibe, high contrast.',
    icon: '🕹️',
  },
  {
    id: 'pirate-age',
    name: 'Pirate High Seas',
    description: 'Ships, treasure, and open seas.',
    prompt: 'Cinematic shot, Caribbean Sea, 1715. The subject is a pirate captain wearing a weathered tricorn hat, frock coat, and leather baldric. Background: The wooden deck of a galleon ship, rigging and sails billowing, turquoise ocean water, a tropical island on the horizon, bright sunlight, adventure style, highly detailed.',
    icon: '🏴‍☠️',
  },
  {
    id: 'viking-saga',
    name: 'Viking Saga',
    description: 'Furs, axes, and longships.',
    prompt: 'Cinematic shot, Norway, 800 AD. The subject is a Viking warrior wrapped in thick furs and chainmail, holding a battle axe or shield, with war paint. Background: A misty fjord with steep mountains, a Viking longship docked on the rocky shore, cold blue tones, dramatic and raw atmosphere, photorealistic.',
    icon: '🪓',
  },
  {
    id: 'renaissance-italy',
    name: 'Renaissance Italy',
    description: 'Art, velvet, and masquerades.',
    prompt: 'Cinematic shot, Venice, 1500. The subject is dressed in luxurious velvet Renaissance robes with gold embroidery and is holding an ornate masquerade mask. Background: A bridge over a Venetian canal at twilight, gondolas passing by, historic architecture, soft lantern light, romantic and mysterious, 8k resolution.',
    icon: '🎭',
  },
  {
    id: 'space-age-60s',
    name: 'Space Age 1960s',
    description: 'Retro-futurism and moon landings.',
    prompt: 'Cinematic shot, 1960s Retro-Future. The subject is wearing a sleek silver space suit with a bubble helmet and go-go boots. Background: A stylized lunar landscape with a massive Earth in the sky, retro sci-fi rocket ship, pulp fiction art style, bold colors, vintage film grain, technicolor.',
    icon: '🚀',
  },
  {
    id: 'post-apocalyptic',
    name: 'Wasteland 2050',
    description: 'Survival gear and desert ruins.',
    prompt: 'Cinematic shot, Wasteland, 2050. The subject is a survivor wearing distressed tactical gear, goggles, and a scarf, covered in dust. Background: A ruined city skyline reclaimed by desert sand, rusted metal structures, harsh sunlight, Mad Max aesthetic, gritty and realistic, highly detailed.',
    icon: '☢️',
  },
  {
    id: 'film-noir',
    name: 'Film Noir 1940s',
    description: 'Shadows, detectives, and mystery.',
    prompt: 'Cinematic shot, 1940s Film Noir. The subject is a private investigator in a trench coat and fedora, smoking a cigarette. Background: A dark city street at night, rain slicked pavement reflecting streetlights, high contrast black and white photography, dramatic shadows, venetian blind lighting effects.',
    icon: '🕵️',
  },
  {
    id: 'disco-fever',
    name: 'Disco Fever',
    description: 'Groovy moves and disco balls.',
    prompt: 'Cinematic shot, 1977 Disco Club. The subject is wearing a white bell-bottom suit or a sequined jumpsuit, striking a dance pose. Background: A multi-colored illuminated dance floor, a giant sparkling disco ball overhead, hazy atmosphere, studio 54 vibe, vibrant and energetic, soft focus.',
    icon: '💃',
  },
  {
    id: 'prehistoric',
    name: 'Prehistoric Wild',
    description: 'Cave furs and dinosaurs.',
    prompt: 'Cinematic shot, Late Cretaceous. The subject is a primitive hunter wearing rough animal pelts and holding a wooden spear. Background: A lush, dense prehistoric jungle with giant ferns, a Triceratops or T-Rex visible in the clearing, volumetric lighting, epic scale, 8k resolution.',
    icon: '🦕',
  },
  {
    id: 'roman-empire',
    name: 'Roman Empire',
    description: 'Togas, gladiator armor, and marble.',
    prompt: 'Cinematic shot, Ancient Rome, 100 AD. The subject is a Roman Senator in a white toga with a purple sash or a Gladiator in bronze armor. Background: The interior of the Colosseum or the Roman Forum, marble columns, cheering crowds, bright Mediterranean sunlight, grandeur and history, photorealistic.',
    icon: '🏛️',
  },
  {
    id: 'ww2',
    name: 'World War II',
    description: '1940s Wartime Era.',
    prompt: 'Cinematic shot, Europe, 1944. The subject is dressed in a period-accurate military uniform or 1940s civilian resistance clothing. Background: A war-torn European village street or an airfield with a Spitfire plane, desaturated color palette, gritty realism, emotional depth, cinematic lighting.',
    icon: '🎖️',
  },
  {
    id: 'ancient-greece',
    name: 'Ancient Greece',
    description: 'Philosophers and marble temples.',
    prompt: 'Cinematic shot, Athens, 400 BC. The subject is wearing a draped Greek chiton and leather sandals, wearing an olive wreath. Background: The Parthenon on the Acropolis, white marble statues, bright blue sky, deep depth of field, classical beauty, photorealistic, 8k.',
    icon: '🏺',
  },
  {
    id: 'aztec-empire',
    name: 'Aztec Empire',
    description: 'Feathers, gold, and Tenochtitlan.',
    prompt: 'Cinematic shot, Tenochtitlan, 1500. The subject is an Aztec warrior or noble wearing a headdress with vibrant quetzal feathers, jade ear spools, and gold jewelry. Background: The Templo Mayor pyramid, canals filled with boats, vibrant colors, tropical atmosphere, detailed textures.',
    icon: '☀️',
  },
  {
    id: 'tang-dynasty',
    name: 'Tang Dynasty',
    description: 'Golden age of Chinese culture.',
    prompt: 'Cinematic shot, Chang\'an, 700 AD. The subject is wearing flowing Hanfu silk robes with wide sleeves and intricate embroidery. Background: An imperial palace courtyard with red wooden pillars, paper lanterns glowing softly at dusk, traditional Chinese architecture, elegant and majestic, cinematic lighting.',
    icon: '🏮',
  },
  {
    id: 'flower-power',
    name: 'Flower Power 60s',
    description: 'Peace, love, and music.',
    prompt: 'Cinematic shot, Woodstock, 1969. The subject is a hippie wearing tie-dye, a flower crown, round sunglasses, and beads. Background: A grassy festival field, a painted VW bus, lens flare, warm sunny vibe, film grain, vintage Kodachrome look, nostalgic.',
    icon: '☮️',
  },
  {
    id: 'fifties-diner',
    name: '50s Rock n Roll',
    description: 'Milkshakes and jukeboxes.',
    prompt: 'Cinematic shot, USA, 1955. The subject is a greaser in a leather jacket and jeans or a girl in a poodle skirt and saddle shoes. Background: A retro chrome-and-neon diner interior, checkerboard floor, red vinyl booths, a jukebox, milkshake on the table, nostalgic Americana, vibrant colors.',
    icon: '🍔',
  },
  {
    id: 'french-revolution',
    name: 'French Revolution',
    description: 'Liberty, Equality, Fraternity.',
    prompt: 'Cinematic shot, Paris, 1789. The subject is a revolutionary wearing a phrygian cap, tricolor cockade, and 18th-century commoner clothes. Background: A chaotic Paris street with a barricade of furniture, smoke, French flags waving, dramatic lighting, revolutionary spirit, highly detailed.',
    icon: '🇫🇷',
  },
  {
    id: 'industrial-revolution',
    name: 'Industrial Age',
    description: 'Steam power and factories.',
    prompt: 'Cinematic shot, Industrial Era, 1850. The subject is a factory owner in a top hat and frock coat or a worker in a flat cap and suspenders, soot-stained. Background: A brick factory interior with massive steam engines, gears, brass pipes, atmospheric steam and smoke, moody lighting, steampunk vibe.',
    icon: '⚙️',
  },
  {
    id: 'maya-jungle',
    name: 'Mayan Jungle',
    description: 'Hidden temples and jade.',
    prompt: 'Cinematic shot, Mayan City, 800 AD. The subject is Maya royalty wearing jaguar skin, heavy jade jewelry, and body paint. Background: A stone step-pyramid rising out of a dense misty rainforest, shafts of sunlight piercing the canopy, mossy textures, ancient mystery, photorealistic.',
    icon: '🌿',
  },
  {
    id: 'ottoman-empire',
    name: 'Ottoman Empire',
    description: 'Bazaars and minarets.',
    prompt: 'Cinematic shot, Constantinople, 1600. The subject is wearing a rich brocade kaftan and an intricate turban. Background: The Grand Bazaar, shelves stacked with colorful spices, carpets, and mosaic lamps, warm ambient lighting, rich textures and patterns, detailed.',
    icon: '🕌',
  },
  {
    id: 'ice-age',
    name: 'Ice Age Tundra',
    description: 'Glaciers and mammoths.',
    prompt: 'Cinematic shot, Pleistocene Epoch. The subject is wrapped in heavy mammoth fur clothing with frost on their face. Background: A vast frozen tundra landscape, glaciers, a herd of woolly mammoths in the distance, aurora borealis in the night sky, cold blue tones, photorealistic.',
    icon: '❄️',
  },
  {
    id: 'ancient-babylon',
    name: 'Babylonian Gardens',
    description: 'Hanging gardens of wonder.',
    prompt: 'Cinematic shot, Babylon, 600 BC. The subject is wearing Mesopotamian royal garments with fringed fabric and gold armbands. Background: The Hanging Gardens, terraces overflowing with exotic plants and flowers, blue glazed brick walls with lion reliefs, golden desert sunlight, majestic.',
    icon: '🌴',
  },
  {
    id: 'grunge-90s',
    name: '90s Grunge',
    description: 'Flannel, angst, and rock.',
    prompt: 'Cinematic shot, Seattle, 1992. The subject is wearing a plaid flannel shirt, ripped jeans, combat boots, and messy hair. Background: A dim basement practice space with band posters, amplifiers, moody lighting, gritty texture, alternative rock aesthetic, flash photography style.',
    icon: '🎸',
  },
  {
    id: 'y2k-digital',
    name: 'Y2K Hacker',
    description: 'Digital rain and trench coats.',
    prompt: 'Cinematic shot, The Matrix inspired, 1999. The subject is wearing a long black leather trench coat and dark sunglasses. Background: A dark environment with cascading green digital code rain, computer servers, green tint color grading, cyber-thriller vibe, sharp focus.',
    icon: '💾',
  },
  {
    id: 'golden-hollywood',
    name: 'Golden Hollywood',
    description: 'Red carpets and spotlights.',
    prompt: 'Cinematic shot, Hollywood Premiere, 1935. The subject is a movie star in a silk tuxedo or a satin evening gown with fur stole. Background: A red carpet event with paparazzi flashbulbs going off, vintage movie palace marquee lights, black and white or sepia glamour photography style.',
    icon: '🎥',
  },
  {
    id: 'atlantis-lost',
    name: 'Lost Atlantis',
    description: 'Underwater kingdom of legend.',
    prompt: 'Cinematic shot, Lost City of Atlantis. The subject is an Atlantean royal wearing iridescent scale armor and bioluminescent jewelry. Background: Majestic underwater architecture made of pearl and coral, shafts of sunlight filtering down through deep blue water, schools of glowing fish, ethereal and magical, 8k resolution.',
    icon: '🧜‍♀️',
  },
  {
    id: 'solarpunk-future',
    name: 'Solarpunk Utopia',
    description: 'Green tech and bright futures.',
    prompt: 'Cinematic shot, Solarpunk Utopia, 2100. The subject is wearing futuristic organic clothing made of leaves and light-weaving fabrics. Background: A gleaming city where nature and technology merge, glass towers covered in hanging gardens, wind turbines spinning in a clear blue sky, bright and optimistic aesthetic.',
    icon: '🌱',
  },
  {
    id: 'incan-empire',
    name: 'Incan Citadel',
    description: 'High peaks of the Andes.',
    prompt: 'Cinematic shot, Machu Picchu, 1500. The subject is an Incan noble wearing a colorful tunic with geometric patterns and gold ornaments. Background: The iconic stone citadel perched high in the Andes mountains, terraced fields, llamas grazing in the mist, dramatic mountain peaks, golden hour lighting.',
    icon: '🦙',
  },
  {
    id: 'steampunk-sky',
    name: 'Steampunk Skies',
    description: 'Airships and brass gears.',
    prompt: 'Cinematic shot, Steampunk Airship, 1895. The subject is an airship captain wearing a leather aviator cap, brass goggles, and a mechanical gauntlet. Background: The deck of a flying copper dreadnought soaring above the clouds, spinning propellers, steam venting from brass pipes, adventurous and mechanical.',
    icon: '🎈',
  },
  {
    id: 'gothic-horror',
    name: 'Gothic Horror',
    description: 'Dark castles and vampires.',
    prompt: 'Cinematic shot, Gothic Horror, 1880. The subject is a vampire hunter or mysterious count in a high-collared black velvet coat holding a lantern. Background: A crumbling stone castle corridor, cobwebs, lightning flashing through a stained-glass window, dark shadows, eerie and atmospheric.',
    icon: '🦇',
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