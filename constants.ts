import { Era, FilterOption, HistoricalFigure } from "./types";

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  { 
    id: 'einstein', 
    name: 'Albert Einstein', 
    description: 'Theoretical Physicist', 
    prompt: 'Portrait of Albert Einstein in his later years, wild white hair and mustache, wearing a rumpled grey sweater, writing E=mc² on a dusty blackboard in a cluttered study, soft natural light, highly detailed.', 
    icon: '🧪' 
  },
  { 
    id: 'cleopatra', 
    name: 'Cleopatra', 
    description: 'Queen of the Nile', 
    prompt: 'Queen Cleopatra VII of Egypt, regal and imposing, wearing a golden uraeus headdress and intricate beaded collar, sitting on a throne with hieroglyphs in the background, cinematic lighting.', 
    icon: '👑' 
  },
  { 
    id: 'shakespeare', 
    name: 'Wm. Shakespeare', 
    description: 'The Bard', 
    prompt: 'William Shakespeare in his study, wearing a white ruff collar and doublet, holding a quill pen, parchment papers scattered on a wooden desk, candlelit atmosphere.', 
    icon: '✒️' 
  },
  { 
    id: 'earhart', 
    name: 'Amelia Earhart', 
    description: 'Aviation Pioneer', 
    prompt: 'Amelia Earhart standing confidently next to a Lockheed Electra airplane, wearing a leather flight jacket, scarf, and aviator goggles, windblown hair, golden hour sunlight.', 
    icon: '✈️' 
  },
  { 
    id: 'tesla', 
    name: 'Nikola Tesla', 
    description: 'Master of Lightning', 
    prompt: 'Nikola Tesla in his laboratory, surrounded by large electrical coils emitting purple lightning sparks, wearing a formal 19th-century suit, intense gaze, atmospheric lighting.', 
    icon: '⚡' 
  },
  { 
    id: 'da-vinci', 
    name: 'Leonardo da Vinci', 
    description: 'Renaissance Man', 
    prompt: 'Leonardo da Vinci, elderly with a long beard, wearing Renaissance robes, holding a sketchbook and charcoal, standing in a studio filled with inventions and art, soft window light.', 
    icon: '🎨' 
  },
  { 
    id: 'marilyn', 
    name: 'Marilyn Monroe', 
    description: 'Hollywood Icon', 
    prompt: 'Marilyn Monroe in a glamorous white halter dress, standing over a subway grate with the dress billowing, iconic blonde curls, bright city lights in the background, cinematic 1950s style.', 
    icon: '🎬' 
  },
  { 
    id: 'napoleon', 
    name: 'Napoleon', 
    description: 'Emperor of France', 
    prompt: 'Emperor Napoleon Bonaparte in full military regalia, hand tucked into his vest, standing on a battlefield with smoke and soldiers in the distance, dramatic sky.', 
    icon: '🇫🇷' 
  },
  { 
    id: 'lincoln', 
    name: 'Abraham Lincoln', 
    description: '16th US President', 
    prompt: 'Abraham Lincoln, tall and solemn, wearing a black suit and stovepipe hat, standing in front of the White House pillars, moody lighting, texture of the era.', 
    icon: '🎩' 
  },
  { 
    id: 'joan-of-arc', 
    name: 'Joan of Arc', 
    description: 'The Maid of Orléans', 
    prompt: 'Joan of Arc clad in shining medieval plate armor, holding a white banner with fleurs-de-lis, looking upward with spiritual intensity, battlefield background, dramatic lighting.', 
    icon: '⚔️' 
  },
  { 
    id: 'elvis', 
    name: 'Elvis Presley', 
    description: 'King of Rock', 
    prompt: 'Elvis Presley in a white sequined jumpsuit with a high collar, performing on stage with a microphone, sweat glistening, bright stage lights, 1970s Las Vegas vibe.', 
    icon: '🎸' 
  },
  { 
    id: 'mozart', 
    name: 'Mozart', 
    description: 'Musical Prodigy', 
    prompt: 'Wolfgang Amadeus Mozart playing a fortepiano, wearing a red velvet frock coat and powdered wig, in an ornate Rococo music room, candlelit.', 
    icon: '🎼' 
  },
  { 
    id: 'frida', 
    name: 'Frida Kahlo', 
    description: 'Painter', 
    prompt: 'Frida Kahlo, self-portrait style, wearing a traditional Tehuana dress and floral headdress, unibrow, surrounded by tropical plants and monkeys, vibrant colors.', 
    icon: '🌺' 
  },
  { 
    id: 'bruce-lee', 
    name: 'Bruce Lee', 
    description: 'Martial Arts Legend', 
    prompt: 'Bruce Lee in his iconic yellow jumpsuit with black stripes, holding a fighting stance, muscles defined, intense focus, dojo background.', 
    icon: '👊' 
  },
  { 
    id: 'gandhi', 
    name: 'Mahatma Gandhi', 
    description: 'Civil Rights Leader', 
    prompt: 'Mahatma Gandhi, frail but strong, wearing a simple white dhoti and round glasses, spinning thread on a charkha wheel, peaceful expression, soft daylight.', 
    icon: '🕊️' 
  },
  { 
    id: 'curie', 
    name: 'Marie Curie', 
    description: 'Nobel Scientist', 
    prompt: 'Marie Curie in a chemistry laboratory, wearing a simple dark dress, examining a glowing test tube containing radium, surrounded by glass equipment, blue-tinged lighting.', 
    icon: '🔬' 
  },
  { 
    id: 'mlk', 
    name: 'Martin Luther King Jr.', 
    description: 'Civil Rights Icon', 
    prompt: 'Martin Luther King Jr. delivering a speech at a podium, wearing a dark suit and tie, crowd in the background blurred, expression of passion and hope, historic 1960s tone.', 
    icon: '🎙️' 
  },
  { 
    id: 'elizabeth-i', 
    name: 'Queen Elizabeth I', 
    description: 'Tudor Queen', 
    prompt: 'Queen Elizabeth I in a magnificent jewel-encrusted gown with a massive lace ruff, pale makeup and red wig, standing in a throne room, regal and commanding.', 
    icon: '👸' 
  },
  { 
    id: 'van-gogh', 
    name: 'Vincent van Gogh', 
    description: 'Post-Impressionist', 
    prompt: 'Vincent van Gogh, intense expression, red beard, bandage on ear, painting at an easel in a wheat field, swirling impasto style brushstrokes in the background.', 
    icon: '🌻' 
  },
  { 
    id: 'rosa-parks', 
    name: 'Rosa Parks', 
    description: 'Mother of Freedom', 
    prompt: 'Rosa Parks, dignified and calm, sitting on a bus seat looking out the window, wearing a 1950s coat and hat, soft lighting.', 
    icon: '🚌' 
  },
  { 
    id: 'caesar', 
    name: 'Julius Caesar', 
    description: 'Roman Dictator', 
    prompt: 'Julius Caesar in a white toga with a purple border and a gold laurel wreath, standing in the Roman Senate, commanding attention, marble columns background.', 
    icon: '🏛️' 
  },
  { 
    id: 'darwin', 
    name: 'Charles Darwin', 
    description: 'Evolutionary Biologist', 
    prompt: 'Charles Darwin, elderly with a long white beard, wearing a heavy coat, examining a finch or fossil in a natural setting, detailed texture.', 
    icon: '🐢' 
  },
  { 
    id: 'churchill', 
    name: 'Winston Churchill', 
    description: 'Wartime Prime Minister', 
    prompt: 'Winston Churchill in a pinstripe suit and bow tie, holding a cigar, flashing the V for Victory sign, standing in front of 10 Downing Street.', 
    icon: '✌️' 
  },
  { 
    id: 'beethoven', 
    name: 'Ludwig van Beethoven', 
    description: 'Classical Composer', 
    prompt: 'Ludwig van Beethoven, wild grey hair, intense expression, composing furiously at a piano with sheet music scattered, dramatic lighting.', 
    icon: '🎹' 
  },
  { 
    id: 'alexander', 
    name: 'Alexander the Great', 
    description: 'King of Macedonia', 
    prompt: 'Alexander the Great riding his horse Bucephalus, wearing golden armor and a lion helmet, leading a cavalry charge, dust and motion.', 
    icon: '🐴' 
  },
  { 
    id: 'genghis', 
    name: 'Genghis Khan', 
    description: 'Mongol Emperor', 
    prompt: 'Genghis Khan in fur-lined leather armor, riding a horse on the Mongolian steppe, holding a bow, vast landscape background.', 
    icon: '🏹' 
  },
  { 
    id: 'victoria', 
    name: 'Queen Victoria', 
    description: 'Queen of the UK', 
    prompt: 'Queen Victoria in her later years, wearing a black mourning dress and a small diamond crown, sitting on a throne, regal and stern.', 
    icon: '👑' 
  },
  { 
    id: 'tubman', 
    name: 'Harriet Tubman', 
    description: 'Abolitionist', 
    prompt: 'Harriet Tubman, wearing a headscarf and heavy coat, holding a lantern in a dark forest at night, guiding people, atmospheric and moody.', 
    icon: '🏮' 
  },
  { 
    id: 'armstrong', 
    name: 'Neil Armstrong', 
    description: 'First Man on Moon', 
    prompt: 'Neil Armstrong in a bulky white Apollo spacesuit, helmet visor reflecting the lunar landscape, standing on the moon\'s surface, stark lighting, black sky.', 
    icon: '🧑‍🚀' 
  },
  { 
    id: 'confucius', 
    name: 'Confucius', 
    description: 'Chinese Philosopher', 
    prompt: 'Confucius, wise and elderly, wearing traditional flowing Hanfu robes, teaching students under a ginkgo tree, holding a bamboo scroll.', 
    icon: '📜' 
  },
  { 
    id: 'socrates', 
    name: 'Socrates', 
    description: 'Greek Philosopher', 
    prompt: 'Socrates, bearded and barefoot, wearing a simple Greek himation, engaging in dialogue in the Athenian Agora, marble buildings in background.', 
    icon: '🏛️' 
  },
  { 
    id: 'nightingale', 
    name: 'Florence Nightingale', 
    description: 'Lady with the Lamp', 
    prompt: 'Florence Nightingale walking through a dimly lit hospital ward at night, holding a lamp, tending to wounded soldiers, compassionate expression.', 
    icon: '⚕️' 
  },
  { 
    id: 'lovelace', 
    name: 'Ada Lovelace', 
    description: 'First Programmer', 
    prompt: 'Ada Lovelace, wearing a Victorian evening gown, standing next to the Analytical Engine, holding mathematical notes, steampunk aesthetic.', 
    icon: '💻' 
  },
  { 
    id: 'chaplin', 
    name: 'Charlie Chaplin', 
    description: 'Silent Film Star', 
    prompt: 'Charlie Chaplin as "The Tramp", wearing a baggy suit, bowler hat, and holding a cane, distinct mustache, black and white film aesthetic.', 
    icon: '🎥' 
  },
  { 
    id: 'marley', 
    name: 'Bob Marley', 
    description: 'Reggae Legend', 
    prompt: 'Bob Marley performing on stage, dreadlocks flying, eyes closed in feeling, playing a Gibson Les Paul guitar, Rasta colors in background lighting.', 
    icon: '🇯🇲' 
  },
  { 
    id: 'ali', 
    name: 'Muhammad Ali', 
    description: 'The Greatest', 
    prompt: 'Muhammad Ali in the boxing ring, wearing white shorts and gloves, standing over a knocked-down opponent, shouting triumphantly, camera flashes.', 
    icon: '🥊' 
  },
  { 
    id: 'mandela', 
    name: 'Nelson Mandela', 
    description: 'Anti-Apartheid Leader', 
    prompt: 'Nelson Mandela, smiling warmly, wearing a colorful patterned Madiba shirt, raising a fist in solidarity, bright outdoor setting.', 
    icon: '🇿🇦' 
  },
  { 
    id: 'picasso', 
    name: 'Pablo Picasso', 
    description: 'Cubist Painter', 
    prompt: 'Pablo Picasso in his studio, wearing a striped Breton shirt, holding a paintbrush, surrounded by cubist paintings and sculptures.', 
    icon: '🖌️' 
  },
  { 
    id: 'wright-bros', 
    name: 'Wright Brothers', 
    description: 'Aviation Pioneers', 
    prompt: 'Orville and Wilbur Wright, wearing suits and flat caps, standing proudly next to the Wright Flyer on the sands of Kitty Hawk.', 
    icon: '🛫' 
  },
  { 
    id: 'newton', 
    name: 'Isaac Newton', 
    description: 'Mathematician', 
    prompt: 'Isaac Newton, young and focused, sitting under an apple tree in a garden, holding a glass prism refracting light, 17th-century attire.', 
    icon: '🍎' 
  },
  { 
    id: 'galileo', 
    name: 'Galileo Galilei', 
    description: 'Astronomer', 
    prompt: 'Galileo Galilei, elderly and bearded, looking through a brass telescope on a balcony at night, starry sky above, Renaissance clothing.', 
    icon: '🔭' 
  },
  { 
    id: 'catherine', 
    name: 'Catherine the Great', 
    description: 'Empress of Russia', 
    prompt: 'Catherine the Great of Russia, wearing an imperial gown with a blue sash and diamond crown, holding a scepter, opulent palace background.', 
    icon: '🇷🇺' 
  },
  { 
    id: 'tut', 
    name: 'King Tut', 
    description: 'Boy King', 
    prompt: 'King Tutankhamun in full royal regalia, wearing the gold and blue nemes headcloth and false beard, sitting on a golden throne.', 
    icon: '⚱️' 
  },
  { 
    id: 'sitting-bull', 
    name: 'Sitting Bull', 
    description: 'Lakota Leader', 
    prompt: 'Sitting Bull, dignified Lakota holy man, wearing a buckskin shirt and eagle feather headdress, holding a peace pipe, prairie background.', 
    icon: '🪶' 
  },
  { 
    id: 'washington', 
    name: 'George Washington', 
    description: '1st US President', 
    prompt: 'George Washington in a blue Continental Army uniform, standing in a boat crossing the icy Delaware River, determined expression, dawn light.', 
    icon: '🇺🇸' 
  },
  { 
    id: 'audrey', 
    name: 'Audrey Hepburn', 
    description: 'Film & Fashion Icon', 
    prompt: 'Audrey Hepburn in a chic black dress, pearl necklace, and oversized sunglasses, holding a cigarette holder, Parisian cafe background.', 
    icon: '👗' 
  },
  { 
    id: 'dali', 
    name: 'Salvador Dali', 
    description: 'Surrealist Artist', 
    prompt: 'Salvador Dalí, eccentric expression with wide eyes and waxed mustache, wearing a velvet jacket, surrounded by melting clocks in a surreal landscape.', 
    icon: '🕰️' 
  },
  { 
    id: 'bach', 
    name: 'J.S. Bach', 
    description: 'Baroque Composer', 
    prompt: 'Johann Sebastian Bach, wearing a powdered wig and formal 18th-century coat, playing a pipe organ in a grand cathedral, stained glass light.', 
    icon: '⛪' 
  },
  { 
    id: 'marco-polo', 
    name: 'Marco Polo', 
    description: 'Explorer', 
    prompt: 'Marco Polo, dressed in traveler\'s clothes, presenting gifts to the Kublai Khan in a lavish Mongolian court, intricate details.', 
    icon: '🗺️' 
  },
  { 
    id: 'freddie-mercury', 
    name: 'Freddie Mercury', 
    description: 'Rock Legend', 
    prompt: 'Freddie Mercury on stage at Live Aid, wearing a white tank top and jeans, arm raised high, holding a microphone stick, massive crowd background.', 
    icon: '🎤' 
  },
  { 
    id: 'david-bowie', 
    name: 'David Bowie', 
    description: 'Ziggy Stardust', 
    prompt: 'David Bowie as Ziggy Stardust, with lightning bolt face paint and flame-orange hair, wearing a futuristic glam rock outfit.', 
    icon: '⚡' 
  },
  { 
    id: 'jimi-hendrix', 
    name: 'Jimi Hendrix', 
    description: 'Guitar God', 
    prompt: 'Jimi Hendrix playing a white Stratocaster upside down, wearing a military jacket and colorful headband, psychedelic stage lighting.', 
    icon: '🎸' 
  },
  { 
    id: 'john-lennon', 
    name: 'John Lennon', 
    description: 'The Dreamer', 
    prompt: 'John Lennon wearing round glasses and a New York City t-shirt, standing in Central Park, autumn leaves, peaceful vibe.', 
    icon: '☮️' 
  },
  { 
    id: 'coco-chanel', 
    name: 'Coco Chanel', 
    description: 'Fashion Icon', 
    prompt: 'Coco Chanel in her atelier, wearing a black suit, pearls, and a hat, smoking a cigarette, surrounded by dress forms and fabric.', 
    icon: '👠' 
  },
  { 
    id: 'walt-disney', 
    name: 'Walt Disney', 
    description: 'Animator', 
    prompt: 'Walt Disney, smiling warmly, wearing a suit and tie, sketching Mickey Mouse on a drawing board, 1950s office setting.', 
    icon: '🐭' 
  },
  { 
    id: 'steve-jobs', 
    name: 'Steve Jobs', 
    description: 'Tech Visionary', 
    prompt: 'Steve Jobs presenting on stage, wearing a black turtleneck, jeans, and sneakers, holding a sleek device, spotlight on him.', 
    icon: '📱' 
  },
  { 
    id: 'henry-ford', 
    name: 'Henry Ford', 
    description: 'Industrialist', 
    prompt: 'Henry Ford standing next to a Model T assembly line, holding blueprints, wearing a suit, industrial factory background.', 
    icon: '🚗' 
  },
  { 
    id: 'thomas-edison', 
    name: 'Thomas Edison', 
    description: 'Inventor', 
    prompt: 'Thomas Edison in his Menlo Park lab, holding a glowing incandescent light bulb, surrounded by phonographs and wires.', 
    icon: '💡' 
  },
  { 
    id: 'ben-franklin', 
    name: 'Benjamin Franklin', 
    description: 'Founding Father', 
    prompt: 'Benjamin Franklin, with long grey hair and spectacles, wearing a colonial coat, holding a kite in a thunderstorm, electric spark on key.', 
    icon: '🪁' 
  },
  { 
    id: 'teddy-roosevelt', 
    name: 'Theodore Roosevelt', 
    description: 'Rough Rider', 
    prompt: 'Theodore Roosevelt in Rough Rider uniform, glasses, big teeth smile, riding a horse through rugged terrain.', 
    icon: '🏞️' 
  },
  { 
    id: 'jfk', 
    name: 'John F. Kennedy', 
    description: '35th President', 
    prompt: 'John F. Kennedy sailing a boat, wearing sunglasses and a polo shirt, windblown hair, ocean background, Kennedy style.', 
    icon: '🇺🇸' 
  },
  { 
    id: 'houdini', 
    name: 'Harry Houdini', 
    description: 'Escape Artist', 
    prompt: 'Harry Houdini bound in chains and handcuffs, submerged in a water tank, intense expression of concentration, dramatic stage lighting.', 
    icon: '🔒' 
  },
  { 
    id: 'jane-austen', 
    name: 'Jane Austen', 
    description: 'Novelist', 
    prompt: 'Jane Austen, wearing a Regency-era bonnet and high-waisted dress, sitting at a small writing desk in a cottage, holding a quill.', 
    icon: '📖' 
  },
  { 
    id: 'mark-twain', 
    name: 'Mark Twain', 
    description: 'Humorist', 
    prompt: 'Mark Twain, with bushy white hair and mustache, wearing a white suit, smoking a pipe on a riverboat deck, Mississippi River background.', 
    icon: '🚤' 
  },
  { 
    id: 'hemingway', 
    name: 'Ernest Hemingway', 
    description: 'Writer', 
    prompt: 'Ernest Hemingway, rugged and bearded, wearing a fisherman\'s sweater, sitting at a typewriter in a rustic room, bottle of rum on desk.', 
    icon: '✍️' 
  },
  { 
    id: 'poe', 
    name: 'Edgar Allan Poe', 
    description: 'Gothic Poet', 
    prompt: 'Edgar Allan Poe, pale and brooding, sitting in a dark study with a raven perched on a bust of Pallas, gothic atmosphere.', 
    icon: '🦅' 
  },
  { 
    id: 'marie-antoinette', 
    name: 'Marie Antoinette', 
    description: 'Queen of France', 
    prompt: 'Marie Antoinette in a towering powdered wig with ship model, wearing a lavish silk gown, in the gardens of Versailles, eating cake.', 
    icon: '🍰' 
  },
  { 
    id: 'henry-viii', 
    name: 'Henry VIII', 
    description: 'Tudor King', 
    prompt: 'Henry VIII, large and imposing, wearing fine velvet and fur robes, hands on hips, standing in a Tudor palace hall.', 
    icon: '👑' 
  },
  { 
    id: 'rasputin', 
    name: 'Rasputin', 
    description: 'Russian Mystic', 
    prompt: 'Grigori Rasputin, with wild eyes and long beard, wearing a black cassock and cross, standing in a snowy Russian courtyard.', 
    icon: '🔮' 
  },
  { 
    id: 'sun-tzu', 
    name: 'Sun Tzu', 
    description: 'Art of War', 
    prompt: 'Sun Tzu, ancient Chinese general, wearing armor and holding a bamboo scroll, standing on a hill overlooking an army formation.', 
    icon: '⚔️' 
  },
  { 
    id: 'musashi', 
    name: 'Miyamoto Musashi', 
    description: 'Sword Saint', 
    prompt: 'Miyamoto Musashi, unkempt hair, wearing a kimono, wielding two wooden swords (bokken) in a duel on a beach at sunset.', 
    icon: '🗡️' 
  },
  { 
    id: 'geronimo', 
    name: 'Geronimo', 
    description: 'Apache Leader', 
    prompt: 'Geronimo, kneeling with a rifle, wearing traditional Apache clothing and headband, rugged desert landscape background.', 
    icon: '🏹' 
  },
  { 
    id: 'sacagawea', 
    name: 'Sacagawea', 
    description: 'Shoshone Guide', 
    prompt: 'Sacagawea, wearing buckskin, carrying a baby in a cradleboard on her back, pointing towards mountains, Lewis and Clark in background.', 
    icon: '🏔️' 
  },
  { 
    id: 'blackbeard', 
    name: 'Blackbeard', 
    description: 'Pirate Captain', 
    prompt: 'Blackbeard the pirate, fuses smoking in his beard, wearing a long coat and hat, wielding a cutlass on a burning ship deck.', 
    icon: '🏴‍☠️' 
  },
  { 
    id: 'leonidas', 
    name: 'Leonidas', 
    description: 'King of Sparta', 
    prompt: 'King Leonidas of Sparta, screaming a war cry, wearing a red cloak and bronze helmet, holding a spear and shield, phalanx background.', 
    icon: '🛡️' 
  },
  { 
    id: 'hannibal', 
    name: 'Hannibal Barca', 
    description: 'Carthaginian General', 
    prompt: 'Hannibal Barca, wearing Carthaginian armor, riding a war elephant through the snowy Alps, soldiers marching behind.', 
    icon: '🐘' 
  },
  { 
    id: 'spartacus', 
    name: 'Spartacus', 
    description: 'Gladiator', 
    prompt: 'Spartacus, muscular and scarred, wearing gladiator armor, fighting in the Colosseum arena, sand flying, crowd roaring.', 
    icon: '🗡️' 
  },
  { 
    id: 'charlemagne', 
    name: 'Charlemagne', 
    description: 'Father of Europe', 
    prompt: 'Charlemagne, crowned Holy Roman Emperor, wearing a cape and holding a sword (Joyeuse), seated on a throne in a cathedral.', 
    icon: '👑' 
  },
  { 
    id: 'saladin', 
    name: 'Saladin', 
    description: 'Sultan of Egypt', 
    prompt: 'Saladin, noble and wise, wearing Saracen armor and turban, riding a horse in the desert sands, army banners behind.', 
    icon: '☪️' 
  },
  { 
    id: 'mansa-musa', 
    name: 'Mansa Musa', 
    description: 'Wealthiest King', 
    prompt: 'Mansa Musa, King of Mali, holding a gold nugget, wearing rich golden robes and turban, on a pilgrimage caravan with camels.', 
    icon: '💰' 
  },
  { 
    id: 'nefertiti', 
    name: 'Queen Nefertiti', 
    description: 'Egyptian Queen', 
    prompt: 'Queen Nefertiti, realistic profile, wearing the iconic tall blue crown and broad collar necklace, limestone palace background.', 
    icon: '🐍' 
  },
  { 
    id: 'michelangelo', 
    name: 'Michelangelo', 
    description: 'Renaissance Artist', 
    prompt: 'Michelangelo Buonarroti, covered in marble dust, chiseling the statue of David, intense focus, Renaissance studio.', 
    icon: '🗿' 
  },
  { 
    id: 'rembrandt', 
    name: 'Rembrandt', 
    description: 'Dutch Master', 
    prompt: 'Rembrandt van Rijn, self-portrait pose, wearing a beret and dark coat, dramatic chiaroscuro lighting, holding a palette.', 
    icon: '🎨' 
  },
  { 
    id: 'monet', 
    name: 'Claude Monet', 
    description: 'Impressionist', 
    prompt: 'Claude Monet, older with a white beard, wearing a straw hat, painting water lilies by a pond in Giverny, impressionist feel.', 
    icon: '🪷' 
  },
  { 
    id: 'klimt', 
    name: 'Gustav Klimt', 
    description: 'Symbolist Painter', 
    prompt: 'Gustav Klimt, wearing a long blue smock, holding a cat, standing in front of \'The Kiss\' with gold leaf patterns.', 
    icon: '🖼️' 
  },
  { 
    id: 'sinatra', 
    name: 'Frank Sinatra', 
    description: 'The Voice', 
    prompt: 'Frank Sinatra, crooning into a vintage microphone, wearing a fedora and tuxedo, smoky jazz club atmosphere, spotlight.', 
    icon: '🎤' 
  },
  { 
    id: 'louis-armstrong', 
    name: 'Louis Armstrong', 
    description: 'Jazz Legend', 
    prompt: 'Louis Armstrong, cheeks puffed out playing a trumpet, sweating, holding a white handkerchief, joyous expression, jazz club.', 
    icon: '🎺' 
  },
  { 
    id: 'plato', 
    name: 'Plato', 
    description: 'Philosopher', 
    prompt: 'Plato, older philosopher with a white beard, wearing a toga, pointing upward in the School of Athens, classical architecture.', 
    icon: '🏛️' 
  },
  { 
    id: 'aristotle', 
    name: 'Aristotle', 
    description: 'Philosopher', 
    prompt: 'Aristotle, mature philosopher, wearing a toga, holding a book and gesturing forward, walking in the Lyceum gardens.', 
    icon: '🦉' 
  },
  { 
    id: 'nietzsche', 
    name: 'Friedrich Nietzsche', 
    description: 'Philosopher', 
    prompt: 'Friedrich Nietzsche, with a massive bushy mustache, intense stare, walking on a mountain path, moody and philosophical.', 
    icon: '🧠' 
  },
  { 
    id: 'dickens', 
    name: 'Charles Dickens', 
    description: 'Victorian Author', 
    prompt: 'Charles Dickens, wearing a Victorian frock coat and bow tie, reading from a book to an audience, gaslight atmosphere.', 
    icon: '📚' 
  },
  { 
    id: 'tolkien', 
    name: 'J.R.R. Tolkien', 
    description: 'Fantasy Author', 
    prompt: 'J.R.R. Tolkien, smoking a pipe, wearing a tweed jacket, sitting in an armchair with a map of Middle-earth, cozy study.', 
    icon: '💍' 
  },
  { 
    id: 'mary-shelley', 
    name: 'Mary Shelley', 
    description: 'Sci-Fi Pioneer', 
    prompt: 'Mary Shelley, young and pale, writing in a notebook by candlelight during a storm, gothic atmosphere.', 
    icon: '🧟' 
  },
  { 
    id: 'turing', 
    name: 'Alan Turing', 
    description: 'Computer Scientist', 
    prompt: 'Alan Turing, wearing a suit, standing next to the Bombe machine, holding cables, focused expression, Bletchley Park setting.', 
    icon: '⚙️' 
  },
  { 
    id: 'oppenheimer', 
    name: 'J. Robert Oppenheimer', 
    description: 'Physicist', 
    prompt: 'J. Robert Oppenheimer, wearing a porkpie hat and suit, smoking a cigarette, looking at a nuclear test site, contemplative.', 
    icon: '☢️' 
  },
  { 
    id: 'gagarin', 
    name: 'Yuri Gagarin', 
    description: 'First in Space', 
    prompt: 'Yuri Gagarin, wearing an orange Vostok spacesuit and white helmet, smiling broadly, inside the spacecraft capsule.', 
    icon: '🚀' 
  },
  { 
    id: 'cousteau', 
    name: 'Jacques Cousteau', 
    description: 'Oceanographer', 
    prompt: 'Jacques Cousteau, wearing a red beanie and wetsuit, on the deck of the Calypso, blue ocean background.', 
    icon: '🌊' 
  },
  { 
    id: 'grace-kelly', 
    name: 'Grace Kelly', 
    description: 'Princess of Monaco', 
    prompt: 'Grace Kelly, wearing a white lace wedding dress and veil, elegant and poised, royal palace background.', 
    icon: '💎' 
  },
  { 
    id: 'james-dean', 
    name: 'James Dean', 
    description: 'Rebel', 
    prompt: 'James Dean, wearing a red windbreaker and white t-shirt, leaning against a Porsche 550 Spyder, cool rebellious look.', 
    icon: '🚬' 
  },
  { 
    id: 'al-capone', 
    name: 'Al Capone', 
    description: 'Gangster', 
    prompt: 'Al Capone, wearing a fedora and pinstripe suit, smoking a cigar, sitting in a leather chair, prohibition era vibe.', 
    icon: '🔫' 
  },
  { 
    id: 'billy-the-kid', 
    name: 'Billy the Kid', 
    description: 'Outlaw', 
    prompt: 'Billy the Kid, wearing a battered top hat and vest, holding a Winchester rifle, leaning on a fence, tintype style.', 
    icon: '🌵' 
  },
  { 
    id: 'annie-oakley', 
    name: 'Annie Oakley', 
    description: 'Sharpshooter', 
    prompt: 'Annie Oakley, wearing a western skirt and hat, aiming a rifle backwards over her shoulder using a mirror, circus tent background.', 
    icon: '🎯' 
  },
  { 
    id: 'davy-crockett', 
    name: 'Davy Crockett', 
    description: 'Frontiersman', 
    prompt: 'Davy Crockett, wearing a coonskin cap and fringed buckskin jacket, holding a flintlock rifle, standing in the Alamo.', 
    icon: '🐻' 
  },
  { 
    id: 'babe-ruth', 
    name: 'Babe Ruth', 
    description: 'Baseball Legend', 
    prompt: 'Babe Ruth, wearing a baggy pinstripe Yankees uniform, pointing his bat to the center field bleachers, baseball stadium.', 
    icon: '⚾' 
  },
  { 
    id: 'dante', 
    name: 'Dante Alighieri', 
    description: 'The Supreme Poet', 
    prompt: 'Dante Alighieri, wearing a red hood and laurel wreath, holding a book, looking at a vision of the Inferno, dramatic lighting.', 
    icon: '🔥' 
  },
  { 
    id: 'hypatia', 
    name: 'Hypatia', 
    description: 'Mathematician', 
    prompt: 'Hypatia of Alexandria, wearing scholarly robes, teaching mathematics with a stylus and papyrus in the Great Library, soft sunlight filtering through scrolls.', 
    icon: '📜' 
  },
  { 
    id: 'avicenna', 
    name: 'Ibn Sina', 
    description: 'Polymath', 
    prompt: 'Ibn Sina (Avicenna), wearing a turban and scholar\'s robe, writing in a leather-bound medical book, surrounded by glass vessels and herbs.', 
    icon: '🌿' 
  },
  { 
    id: 'hatshepsut', 
    name: 'Hatshepsut', 
    description: 'Pharaoh', 
    prompt: 'Pharaoh Hatshepsut, wearing the false beard and double crown, standing before her mortuary temple at Deir el-Bahari, golden sunlight.', 
    icon: '🏺' 
  },
  { 
    id: 'rumi', 
    name: 'Rumi', 
    description: 'Sufi Mystic', 
    prompt: 'Rumi, wearing a whirling dervish robe and tall felt hat, spinning in a state of spiritual ecstasy, soft motion blur, golden light.', 
    icon: '🌀' 
  },
  { 
    id: 'hokusai', 
    name: 'Katsushika Hokusai', 
    description: 'Ukiyo-e Artist', 
    prompt: 'Katsushika Hokusai, elderly and focused, painting \'The Great Wave\' with a brush on rice paper, Mt. Fuji visible through the window.', 
    icon: '🌊' 
  },
  { 
    id: 'copernicus', 
    name: 'Nicolaus Copernicus', 
    description: 'Astronomer', 
    prompt: 'Nicolaus Copernicus, holding a model of the solar system with the sun at the center, looking up at the night sky, Renaissance study.', 
    icon: '☀️' 
  },
  { 
    id: 'bolivar', 
    name: 'Simón Bolívar', 
    description: 'The Liberator', 
    prompt: 'Simón Bolívar, \'The Liberator\', in military uniform on a rearing white horse, sword drawn, Andes mountains in background.', 
    icon: '🏔️' 
  },
  { 
    id: 'sappho', 
    name: 'Sappho', 
    description: 'Lyric Poet', 
    prompt: 'Sappho, playing a lyre and singing on the cliffs of Lesbos, wearing a flowing chiton, Aegean sea in the background.', 
    icon: '🎶' 
  },
  { 
    id: 'wilde', 
    name: 'Oscar Wilde', 
    description: 'Playwright', 
    prompt: 'Oscar Wilde, flamboyant and witty, wearing a velvet coat with a green carnation, holding a cane, Victorian parlor setting.', 
    icon: '🌹' 
  },
  { 
    id: 'freud', 
    name: 'Sigmund Freud', 
    description: 'Psychoanalyst', 
    prompt: 'Sigmund Freud, sitting in a leather armchair with a notebook, holding a cigar, Persian rug on the couch, dim study.', 
    icon: '🛋️' 
  },
  { 
    id: 'woolf', 
    name: 'Virginia Woolf', 
    description: 'Modernist Writer', 
    prompt: 'Virginia Woolf, contemplative expression, wearing a 1920s dress, writing at a desk with a view of the lighthouse, soft focus.', 
    icon: '🖊️' 
  },
  { 
    id: 'owens', 
    name: 'Jesse Owens', 
    description: 'Olympic Athlete', 
    prompt: 'Jesse Owens, sprinting on the track at the 1936 Berlin Olympics, wearing a white singlet, muscles tense, crowd blurring.', 
    icon: '🏃' 
  },
  { 
    id: 'liliuokalani', 
    name: 'Queen Liliuokalani', 
    description: 'Queen of Hawaii', 
    prompt: 'Queen Liliuokalani, wearing a black Victorian gown and royal sash, sitting with a ukulele, composing music, tropical flowers.', 
    icon: '🌺' 
  },
  { 
    id: 'tecumseh', 
    name: 'Tecumseh', 
    description: 'Shawnee Leader', 
    prompt: 'Tecumseh, Shawnee leader, wearing traditional buckskin and silver gorget, speaking passionately to a council fire, forest setting.', 
    icon: '🔥' 
  },
  { 
    id: 'boudica', 
    name: 'Boudica', 
    description: 'Celtic Queen', 
    prompt: 'Queen Boudica, fierce and screaming, driving a war chariot with scythed wheels, red hair flying, Celtic warriors behind.', 
    icon: '⚔️' 
  },
  { 
    id: 'shaka', 
    name: 'Shaka Zulu', 
    description: 'Zulu King', 
    prompt: 'Shaka Zulu, muscular and imposing, holding an assegai spear and large cowhide shield, standing on the African savanna.', 
    icon: '🛡️' 
  },
  { 
    id: 'eleanor', 
    name: 'Eleanor Roosevelt', 
    description: 'First Lady', 
    prompt: 'Eleanor Roosevelt, smiling warmly, wearing a floral dress and pearls, speaking into a radio microphone, 1940s office.', 
    icon: '📻' 
  },
  { 
    id: 'warhol', 
    name: 'Andy Warhol', 
    description: 'Pop Artist', 
    prompt: 'Andy Warhol, wearing a black turtleneck and platinum wig, holding a screen print squeegee, surrounded by pop art soup cans.', 
    icon: '🍌' 
  },
  { 
    id: 'christie', 
    name: 'Agatha Christie', 
    description: 'Mystery Writer', 
    prompt: 'Agatha Christie, sitting in a wicker chair in a garden, holding a tea cup and a notebook, plotting a mystery, English countryside.', 
    icon: '☕' 
  },
  { 
    id: 'nelson', 
    name: 'Horatio Nelson', 
    description: 'Naval Hero', 
    prompt: 'Horatio Nelson, wearing a naval uniform with medals, empty sleeve pinned, standing on the deck of HMS Victory, telescope in hand.', 
    icon: '⚓' 
  },
  { 
    id: 'vlad', 
    name: 'Vlad the Impaler', 
    description: 'Wallachian Prince', 
    prompt: 'Vlad the Impaler, stern and intimidating, wearing a velvet hat and fur-trimmed coat, holding a goblet, gloomy castle background.', 
    icon: '🏰' 
  },
  { 
    id: 'bessie', 
    name: 'Bessie Coleman', 
    description: 'Aviatrix', 
    prompt: 'Bessie Coleman, wearing leather aviator helmet and goggles, standing proudly on the wing of a biplane, blue sky.', 
    icon: '✈️' 
  },
  { 
    id: 'douglass', 
    name: 'Frederick Douglass', 
    description: 'Abolitionist', 
    prompt: 'Frederick Douglass, distinguished and intense, with a full beard and grey hair, wearing a suit, delivering an abolitionist speech.', 
    icon: '🗣️' 
  },
  { 
    id: 'catherine-medici', 
    name: 'Catherine de\' Medici', 
    description: 'Queen of France', 
    prompt: 'Catherine de\' Medici, wearing a black mourning gown and a French hood, holding a poison ring, standing in a Renaissance corridor.', 
    icon: '🍷' 
  },
  { 
    id: 'louis-xiv', 
    name: 'Louis XIV', 
    description: 'The Sun King', 
    prompt: 'King Louis XIV, the Sun King, wearing a massive wig, high heels, and ermine robes, standing in the Hall of Mirrors at Versailles.', 
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
  },
  {
    id: 'scottish-highlands',
    name: 'Scottish Highlands',
    description: 'Mist, moors, and ancient castles.',
    prompt: 'Cinematic shot, Scotland, 1740. The subject is a rugged Highlander warrior wearing a weathered tartan kilt, leather sporran, and fur cloak, holding a basket-hilted broadsword. Background: Misty, dramatic rolling green highlands, purple heather, a stone circle standing mysteriously in the fog, moody overcast sky, Outlander aesthetic, 8k resolution.',
    icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    id: 'martian-frontier',
    name: 'Martian Frontier',
    description: 'Life on the Red Planet.',
    prompt: 'Cinematic shot, Mars Colony, 2080. The subject is a futuristic colonist wearing a sleek, dust-covered EVA suit with a gold-tinted visor reflecting the landscape. Background: The rusted red dunes of Mars, a high-tech geodesic bio-dome city in the distance, two moons in the salmon-pink sky, harsh realistic lighting, sci-fi masterpiece.',
    icon: '🪐',
  },
  {
    id: 'bioluminescent-forest',
    name: 'Alien Forest',
    description: 'Glowing flora and eternal night.',
    prompt: 'Cinematic shot, Alien Jungle, Midnight. The subject is an ethereal explorer or native being with subtle glowing tribal markings on their skin. Background: A dense, magical forest filled with giant phosphorescent mushrooms, hanging vines glowing blue and purple, floating spores like fireflies, mystical and dreamlike atmosphere, Avatar style.',
    icon: '🍄',
  },
  {
    id: 'comic-book',
    name: 'Comic Book',
    description: 'Bold lines and heroic poses.',
    prompt: 'Comic book art style, Golden Age. The subject is a superhero standing heroically, wearing a dynamic costume with a cape fluttering in the wind. Background: A stylized metropolis skyline, dramatic action lines (speed lines), halftone dot shading, bold black outlines, vibrant primary colors, speech bubble "POW!" visual effect.',
    icon: '💥',
  },
  {
    id: 'versailles-court',
    name: 'Royal Versailles',
    description: 'Opulence, wigs, and gold.',
    prompt: 'Cinematic shot, Palace of Versailles, 1770. The subject is French royalty wearing a towering powdered wig, white face powder, and an extravagant silk gown or velvet coat with gold embroidery. Background: The Hall of Mirrors, reflecting crystal chandeliers, gold leaf detailing, frescoed ceilings, lavish and decadent Rococo atmosphere.',
    icon: '🍰',
  },
  {
    id: 'arabian-nights',
    name: 'Arabian Nights',
    description: 'Magic carpets and desert stars.',
    prompt: 'Cinematic shot, Ancient Baghdad Legend. The subject is a rogue or princess wearing flowing silk pants, a vest, and a turban, holding a magic lamp. Background: A moonlit desert city skyline with onion domes and minarets, a flying carpet hovering nearby, starry night sky, magical sparkles, warm lantern light.',
    icon: '🌙',
  },
  {
    id: 'pixel-verse',
    name: 'Pixel Verse',
    description: '8-bit retro gaming world.',
    prompt: 'Pixel art aesthetic, 16-bit RPG. The subject is a pixelated hero character wearing armor. Background: A blocky fantasy world with pixelated trees, clouds, and a castle in the distance, vibrant retro color palette, scanline effect, nostalgic gaming vibe.',
    icon: '👾',
  },
  {
    id: 'claymation',
    name: 'Clay World',
    description: 'Stop-motion animation style.',
    prompt: 'Claymation stop-motion style. The subject appears to be made of modeling clay with visible fingerprints and soft textures. Background: A handcrafted miniature set made of felt, cardboard, and clay trees, shallow depth of field (tilt-shift), warm studio lighting, whimsical Aardman animation look.',
    icon: '🧱',
  },
  {
    id: 'toy-world',
    name: 'Toy World',
    description: 'Living in a macro universe.',
    prompt: 'Macro photography, Toy Story aesthetic. The subject is a high-quality articulated action figure or doll with plastic sheen textures. Background: A giant-scale child\'s bedroom floor, massive wooden blocks, marbles, and fuzzy carpet strands, bright playful lighting, bokeh effect.',
    icon: '🧸',
  },
  {
    id: 'surreal-dream',
    name: 'Surreal Dream',
    description: 'Melting clocks and floating islands.',
    prompt: 'Surrealist masterpiece. The subject is floating or distorted, wearing melting clock accessories. Background: A vast, empty desert landscape with impossible geometry, floating islands, giant eyes in the sky, long shadows, Salvador Dali and Magritte inspired, dreamlike and mysterious.',
    icon: '🎨',
  },
  {
    id: 'retro-anime',
    name: 'Retro Anime',
    description: '90s cel-shaded animation style.',
    prompt: 'Cinematic shot, 1990s Anime style. The subject is drawn in a vintage anime aesthetic with cel-shading, large expressive eyes, and dramatic hair. Background: A detailed hand-painted watercolor background of a city at sunset or a starry night, grain, chromatic aberration, retro TV broadcast effect, high quality animation keyframe.',
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