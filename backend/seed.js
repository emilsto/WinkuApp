import User from "./models/user_model.js";
import Post from "./models/post_model.js";
import Comment from "./models/comment_model.js";
import Relationship from "./models/relationship_model.js";
import bcrypt from "bcryptjs";

export const createPosts = async () => {
  const posts = await Post.findAll();
  if (posts.length === 0) {
    console.log("No posts found, creating posts...");

    for (let i = 0; i < 100; i++) {
      //random time for createdAt, between 1 and 1000 days ago
      const randomTime = Math.floor(Math.random() * 100) + 1;
      const created_at = new Date();
      created_at.setDate(created_at.getDate() - randomTime);
      //remove some hours from the date
      created_at.setHours(created_at.getHours() - randomTime);
      //remove some minutes from the date
      created_at.setMinutes(created_at.getMinutes() - randomTime);
      //remove some seconds from the date
      created_at.setSeconds(created_at.getSeconds() - randomTime);

      const bool = Math.floor(Math.random() * 100) < 3 ? true : false;

      Post.create({
        content: post_content[Math.floor(Math.random() * post_content.length)],
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 10),

        // Set the user id to a random user id between 1 and 11
        userId: Math.floor(Math.random() * 11) + 1,
        // 3% chance of a post being epic, aka asigning bool value true
        isEpic: bool,
        isAdmin: false,
        createdAt: new Date(created_at),
      });
    }
  } else {
    console.log("Posts found, skipping...");
  }
};

// Create users

export const createUsers = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    // create user emilTheDev with password password
    User.create({
      username: "emilTheDev",
      password: await bcrypt.hash("password", 10),
      bio: "I am emilTheDev",
      image:
        "https://avatars.githubusercontent.com/u/70722483?s=400&u=062dbb94384357152ec92a57e94c5614145687f6&v=4",
      isAdmin: true,
    });

    // create 10 default users with random usernames, hashed passwords bios and use some random images from github
    for (let i = 0; i < 10; i++) {
      User.create({
        // get random username from array
        username: `${usernames[Math.floor(Math.random() * usernames.length)]}${
          usernames[Math.floor(Math.random() * usernames.length)]
        }`,
        password: await bcrypt.hash(`password`, 10),
        bio: bios[Math.floor(Math.random() * bios.length)],
        image: `https://avatars.githubusercontent.com/u/${
          i + Math.floor(Math.random() * 2000)
        }?v=4`,
      });
    }
  }
};

// create comments

export const createComments = async () => {
  const comments = await Comment.findAll();
  if (comments.length === 0) {
    console.log("No comments found, creating comments...");

    for (let i = 0; i < 100; i++) {
      Comment.create({
        content:
          comment_content[Math.floor(Math.random() * comment_content.length)],
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 10),
        userId: Math.floor(Math.random() * 11) + 1,
        postId: Math.floor(Math.random() * 100) + 1,
      });
    }
  } else {
    console.log("Comments found, skipping...");
  }
};

// array of comments

const comment_content = [
  "This is a comment",
  "I love this post",
  "Why do you think that?",
  "I agree",
  "I disagree",
  "I think you are wrong",
  "I think this is a great post",
  "I think this is a bad post",
  "I think this is a good post",
  "I think food is good",
  "What the heck is this post about?",
  "YOur post is stupid",
  "This makes no sense",
  "Well said",
  "Nuff said, gtfo",
  "I wonder what Elon would say about this..",
  "Christ",
  "Shocking",
  "Oot kyllä sairas!",
  "I think you are fucking sick",
  "Go back to twitter, you twat.",
  "Greetings!",
];

//json array of usernames
const usernames = [
  "peter",
  "james",
  "john",
  "jacob",
  "joseph",
  "joshua",
  "josh",
  "jose",
  "josephine",
  "josephina",
  "mike",
  "michael",
  "michelle",
  "michal",
  "pekka",
  "pekko",
  "pertti",
  "petteri",
  "petri",
  "petra",
  "petter",
  "david",
  "davidson",
  "davidsson",
  "taavi",
  "taavetti",
  "olavi",
  "olav",
  "jussi",
  "jussila",
  "jussiina",
  "rauno",
  "rauni",
  "raunio",
  "rauniina",
  "rauniikki",
  "rauniikka",
  "eero",
  "eeronen",
  "eeroja",
  "olli",
  "ollija",
  "gwen",
  "gwendolyn",
  "gwendoline",
  "gwenola",
  "gwenola",
  "gonzalo",
  "hector",
  "hectorino",
  "hectorina",
  "bastian",
  "guillermo",
  "derick",
  "derickson",
  "dericksson",
  "åke",
  "öke",
  "äke",
  "ilmari",
  "ilmarinen",
  "ilmarin",
  "ilmar",
  "adolf",
  "adolfina",
  "adolfsson",
  "adolfson",
  "reijo",
  "reijola",
  "reijola",
  "reijoja",
  "reigo",
  "reigoja",
  "reigojä",
  "wolfgang",
  "wolfgangson",
  "wolfgangsson",
  "wolfgangina",
  "wolf",
  "wolfi",
  "wolfson",
  "wolfsson",
  "felix",
  "felixson",
  "felixsson",
  "felixina",
  "marcus",
  "marcusson",
  "marcussson",
  "marcusina",
  "musk",
  "muskson",
  "musksson",
  "muskina",
  "elon",
  "elona",
  "elons",
  "elonsen",
  "elonsina",
  'Aakula', 'Aalto', 'Aaltonen', 'Aarnio', 'Aaronen', 'Aavikkola', 'Ahmala', 'Aho', 'Ahokas', 'Ahola', 'Ahomaa', 'Ahonen', 'Ahoniemi', 'Ahopelto', 'Ahovaara', 'Ahtila', 'Ahtiluoto', 'Ahtio', 'Ahtisaari', 'Ahto', 'Ahtola', 'Ahtonen', 'Ahtorinne', 'Aija', 'Aijala', 'Ainola', 'Aitio', 'Aitolahti', 'Aitomaa', 'Aittasalmi', 'Akkala', 'Akkanen', 'Alahuhta', 'Alajoki', 'Alajärvi', 'Alanen', 'Alatalo', 'Alasalmi', 'Alapuro', 'Alhola', 'Alijoki', 'Ankkala', 'Ankkuri', 'Annala', 'Annunen', 'Anttila', 'Anttinen', 'Anttonen', 'Ara', 'Arhila', 'Arhinmäki', 'Arhosuo,', 'Arinen', 'Arjamaa', 'Arjanen', 'Arkkila', 'Armio', 'Arnio', 'Aronen', 'Arosuo', 'Arponen', 'Arvola', 'Asikainen', 'Astala', 'Attila', 'Aunela', 'Aura', 'Auramies', 'Auranen', 'Autio', 'Auvinen', 'Auvola', 'Avonius', 'Avotie',
  'Bräysy',
  'Davidsainen', 'Dufva',
  'Eerikäinen', 'Eerola', 'Einel', 'Eino', 'Einola', 'Einonen', 'Ekman', 'Ekola', 'Ellilä', 'Ellinen', 'Elomaa', 'Eloharju', 'Eloranta', 'Eno', 'Enola', 'Enäjärvi', 'Erkinjuntti', 'Erkkilä', 'Erkkinen', 'Erkko', 'Erkkola', 'Ernamo', 'Erola', 'Eronen', 'Ervola', 'Eräharju', 'Erämaja', 'Eränen', 'Eskelinen', 'Eskelä', 'Eskola', 'Evelä', 'Evilä',
  'Filppula', 'Finni', 'Frändilä', 'Fränti',
  'Haahka', 'Haahkola', 'Haanpää', 'Haapakorpi', 'Haapala', 'Haapanen', 'Haaparanta', 'Haapasalmi', 'Haapasalo', 'Haapkylä', 'Haapoja', 'Haataja', 'Haavisto', 'Haikala', 'Haikara', 'Hakala', 'Hakkarainen', 'Hakki', 'Hakula', 'Halinen', 'Halkola', 'Halkonen', 'Halla', 'Hallaper', 'Hallapuro', 'Hallikainen', 'Hallila', 'Hallonen', 'Halme', 'Halmela', 'Halmelahti', 'Halonen', 'Halttunen', 'Hammas', 'Hanhela', 'Hanhinen', 'Hannula', 'Hannunen', 'Hapola', 'Harjamäki', 'Harju', 'Harjula', 'Harjunpää', 'Harkimo', 'Hautakangas', 'Hautakoski', 'Hautala', 'Hautamäki', 'Haverinen', 'Havukoski', 'Heikkilä', 'Heikkinen', 'Heimola', 'Heinälä', 'Heiskanen', 'Heiskari', 'Helenius', 'Helinen', 'Helismaa', 'Helmel', 'Helovirta', 'Helppolainen', 'Helstel', 'Hellgren', 'Hentinen', 'Hento', 'Hepomäki', 'Heponen', 'Herranen', 'Hervanta', 'Hervanto', 'Hekkaharju', 'Hiesu', 'Hietala', 'Hietanen', 'Hiltunen', 'Heintikainen', 'Hirvelä', 'Hirvi', 'Hirvikangas', 'Hirvonen', 'Hoikkala', 'Hoikkanen', 'Holappa', 'Holkeri', 'Hongisto', 'Honkanen', 'Hovi', 'Huhta', 'Huhtala', 'Hukkala', 'Huopainen', 'Huotari', 'Huovinen', 'Huttunen', 'Huuhka', 'Huurinainen', 'Huusko', 'Huvinen', 'Hyppölä', 'Hyppönen', 'Hytölä', 'Hyypiä', 'Hyyppä', 'Häkkinen', 'Häkämies', 'Hämäläinen', 'Hänninen', 'Härkönen',
  'Ihalainen', 'Ikola', 'Ikonen', 'Ilmarinen', 'Ilomäki', 'Iloniemi', 'Ilvesniemi', 'Immonen', 'Inkeri', 'Inkinen', 'Isoluoma', 'Isomäki', 'Isotalo', 'Itkonen', 'Itävaara', 'Itävuori',
  'Jaakkola', 'Jaakkonen', 'Jaakonmaa', 'Jaatinen', 'Jakkila', 'Jalonen', 'Jauhiainen', 'Jauho', 'Joenhaara', 'Johto', 'Jokelainen', 'Jokihaara', 'Jokimies', 'Jokinen', 'Jortikka', 'Joru', 'Junkkari', 'Juntti', 'Juppi', 'Jurva', 'Jurvala', 'Jurvanen', 'Jussila', 'Juustinen', 'Juuti', 'Juvanen', 'Juvonen', 'Jylhä', 'Jänis', 'Jäppinen', 'Järvelä', 'Jääskeläinen',
  'Kaakko', 'Kaikkonen', 'Kainulainen', 'Kaista', 'Kaivola', 'Kakkola', 'Kakkonen', 'Kalinainen', 'Kalkkinen', 'Kalliala', 'Kallio', 'Kaillomäki', 'Kalmo', 'Kalvo', 'Kamari', 'Kamppinen', 'Kanala', 'Kangaskorte', 'Kangassalo', 'Kannelmaa', 'Kannelmäki', 'Kantele', 'Kantola', 'Kapanen', 'Karalahti', 'Karhu', 'Karjalainen', 'Karpela', 'Karppinen', 'Karukoski', 'Karvonen', 'Katainen', 'Kataja', 'Kauhala', 'Kaukovaara', 'Kauppala', 'Kauppinen', 'Kaurismäki', 'Kekkonen', 'Kerava', 'Kerttula', 'Keskinen', 'Keskioja', 'Ketola', 'Ketonen', 'Kettula', 'Kieli', 'Kiianen', 'Kiille', 'Kimalainen', 'Kiiski', 'Kinnula', 'Kinnunen', 'Kiskonen', 'Kissala', 'Kivi', 'Kiviniemi', 'Kivistö', 'Koirala', 'Koivisto', 'Koivula', 'Koivulehto', 'Koivuniemi', 'Kokkonen', 'Kolehmainen', 'Komulainen', 'Konttinen', 'Kontunen', 'Korhonen', 'Koriseva', 'Kortesjärvi', 'Koskela', 'Koskelainen', 'Kosonen', 'Kotanen', 'Koukkula', 'Kouvonen', 'Kovalainen', 'Krapu', 'Krekelä', 'Kujala', 'Kujanpää', 'Kukkala', 'Kukkamäki', 'Kukkonen', 'Kultala', 'Kumpula', 'Kumpulainen', 'Kunnas', 'Kuoppala', 'Kuosmanen', 'Kurkela', 'Kurki', 'Kuusijärvi', 'Kyllönen', 'Kynsijärvi', 'Kynsilehto', 'Kärki', 'Kärkkäinen',
  'Laakkola', 'Laakkonen', 'Laakso', 'Laaksonen', 'Laatikainen', 'Lahdenpää', 'Laine', 'Lainela', 'Lakka', 'Lampinen', 'Lappalainen', 'Lassinen', 'Laurila', 'Lauronen', 'Lavola', 'Lehmälä', 'Lehtimäki', 'Lehtinen', 'Lehtisalo', 'Lehto', 'Lehtonen', 'Leino', 'Lepistö', 'Lepomäki', 'Leppilampi', 'Leppäkorpi', 'Leppälä', 'Leppävirta', 'Leskinen', 'Liimatainen', 'Lind', 'Linnala', 'Linnamäki', 'Lippo', 'Litmanen', 'Litvala', 'Liukkonen', 'Loiri', 'Lukkari', 'Lumme', 'Luoma', 'Luukkonen', 'Lyly', 'Lyytikäinen', 'Lähteenmäki', 'Lämsä',
  'Maahinen', 'Made', 'Maijala', 'Makkonen', 'Malmi', 'Malmivaara', 'Mannila', 'Manninen', 'Mannonen', 'Mansikka-aho', 'Mansikkaoja', 'Marila', 'Marjala', 'Marjamäki', 'Marjola', 'Marjomaa', 'Marjonen', 'Markkanen', 'Markkula', 'Markuksela', 'Markus', 'Martikainen', 'Marttinen', 'Masala', 'Masanen', 'Matomäki', 'Mattila', 'Maunula', 'Maunola', 'Melasniemi', 'Merelä', 'Merilä', 'Meriläinen', 'Merimaa', 'Metsoja', 'Metsälampi', 'Metsäoja', 'Mielonen', 'Miettinen', 'Mikkola', 'Mikkonen', 'Muhonen', 'Mujunen', 'Murola', 'Mustapää', 'Mustonen', 'Muurinen', 'Myllymäki', 'Myllypuro', 'Myllys', 'Mylläri', 'Mäenpää', 'Mäkelä', 'Mäki', 'Mäkinen', 'Mäntylä', 'Määttä', 'Möttönen',
  'Naula', 'Naulapää', 'Neuvonen', 'Nevala', 'Niemelä', 'Niemi', 'Nieminen', 'Niemistö', 'Niinimaa', 'Niinistö', 'Niiranen', 'Nikkanen', 'Nikkilä', 'Nikula', 'Nikulainen', 'Niskala', 'Nisukangas', 'Niukkanen', 'Nokelainen', 'Nokkonen', 'Notkonen', 'Nousiainen', 'Nukka', 'Nummelin', 'Nuotio', 'Nurkkala', 'Nurmela', 'Nurmi', 'Nurminiemi', 'Nurminen', 'Nuutti', 'Nykänen', 'Nyman', 'Närvälä', 'Näätänen',
  'Oikkonen', 'Oikonen', 'Oinonen', 'Oja', 'Ojala', 'Ojamäki', 'Ojanen', 'Ojaniemi', 'Oksala', 'Oksanen', 'Ollikainen', 'Ollila', 'Ollinen', 'Oravainen', 'Oravala', 'Otsamo', 'Outinen', 'Ovaska',
  'Paajanen', 'Paakkanen', 'Paananen', 'Paasikivi', 'Paasilinna', 'Paasonen', 'Paavola', 'Pahajoki', 'Pahkasalo', 'Pajumäki', 'Pajunen', 'Pakarinen', 'Pakkala', 'Pakola', 'Pallas', 'Paloheimo', 'Palola', 'Palomäki', 'Parkkonen', 'Pekkala', 'Pekkarinen', 'Pelkonen', 'Peltomaa', 'Pennanen', 'Pennilä', 'Pentikäinen', 'Penttilä', 'Perniö', 'Pesola', 'Pesonen', 'Peuranen', 'Peuraniemi', 'Pietilä', 'Piippola', 'Piirainen', 'Pikkarainen', 'Pirttijärvi', 'Pirttikangas', 'Pitkämäki', 'Pohtamo', 'Porkkala', 'Poronen', 'Poropudas', 'Puhakainenä', 'Puhakka', 'Pukkila', 'Pulli', 'Puolakka', 'Puuperä', 'Pyykkö', 'Pyykkönen', 'Päivälä', 'Päivärinta', 'Pääkkönen', 'Pöllönen', 'Pöntinen', 'Pöysti',
  'Raappana', 'Raatikainen', 'Raatila', 'Rahka', 'Rahkala', 'Raiskio', 'Raitanen', 'Raittila', 'Rajamäki', 'Ramu', 'Ranta', 'Rantamaa', 'Rapala', 'Rasila', 'Rasmus', 'Rauhala', 'Rauhanen', 'Rautaporras', 'Rautavirta', 'Rautio', 'Rehu', 'Reinikainen', 'Reinikka', 'Rekomaa', 'Repo', 'Repola', 'Riihimäki', 'Riikonen', 'Rimmanen', 'Rinne', 'Rinta', 'Rintamäki', 'Ristilä', 'Ritari', 'Rokko', 'Ronkainen', 'Roponen', 'Ruhanen', 'Rumpunen', 'Runtti', 'Ruohoniemi', 'Ruonala', 'Ruonansuu', 'Ruotsalainen', 'Ruuhonen', 'Ruuskari', 'Ruusula', 'Ruutti', 'Ryhänen', 'Ryti', 'Ryysyläinen', 'Räikkönen', 'Räisänen', 'Räsänen',
  'Saanila', 'Saarela', 'Saarenheimo', 'Saari', 'Saarikivi', 'Saarnio', 'Saarnivaara', 'Saastamoinen', 'Saikkonen', 'Saksala', 'Salenius', 'Salmela', 'Salmelainen', 'Salo', 'Salolainen', 'Salonen', 'Saloranta', 'Samulin', 'Sannala', 'Santanen', 'Saraste', 'Sarasvuo', 'Saukko', 'Savioja', 'Savolainen', 'Selänne', 'Seppelin', 'Seppänen', 'Seppälä', 'Servo', 'Setänen', 'Siekkinen', 'Sievinen', 'Sihvonen', 'Siira', 'Siltonen', 'Sikala', 'Silakka', 'Sillanpää', 'Siltala', 'Silvennoinen', 'Simo', 'Simonen', 'Sinnemäki', 'Sipilä', 'Sipola', 'Sirkesalo', 'Sirviö', 'Raiski', 'Soikkeli', 'Soini', 'Sonninen', 'Soppela', 'Sorajoki', 'Sormunen', 'Sorsa', 'Suhonen', 'Suikkala', 'Summanen', 'Suomela', 'Suominen', 'Suosalo', 'Susiluoto', 'Sutinen', 'Suuronen', 'Suutarinen', 'Suvela', 'Sydänmäki', 'Syrjä', 'Syrjälä', 'Säkkinen', 'Särkkä',
  'Taavettila', 'Taavila', 'Taavitsainen', 'Taipale', 'Takkala', 'Takkula', 'Tamminen', 'Tammisto', 'Tanskanen', 'Tapio', 'Tapola', 'Tarvainen', 'Taskinen', 'Tastula', 'Tauriainen', 'Tenkanen', 'Teppo', 'Tervo', 'Tervonen', 'Teräsniska', 'Tiainen', 'Tiilikainen', 'Timonen', 'Toijala', 'Toikkanen', 'Toivanen', 'Tokkola', 'Tolonen', 'Torkkeli', 'Tuisku', 'Tukiainen', 'Tulkki', 'Tuomela', 'Tuominen', 'Tuomisto', 'Tuppurainen', 'Turpeinen', 'Turunen', 'Tuutti', 'Tynkkynen', 'Typpö', 'Tyrninen', 'Törrö', 'Törrönen',
  'Ukkola', 'Ulvila', 'Unhola', 'Uosukainen', 'Urhonen', 'Uronen', 'Urpalainen', 'Urpilainen', 'Utriainen', 'Uusikari', 'Uusikylä', 'Uusisalmi', 'Uusitalo',
  'Vaara', 'Vahala', 'Vahanen', 'Vahvanen', 'Vainio', 'Valjakka', 'Valo', 'Valtanen', 'Vanhanen', 'Vanhoja', 'Varjus', 'Vartiainen', 'Vasala', 'Vauhkonen', 'Veijonen', 'Veini', 'Vennala', 'Vennamo', 'Vepsäläinen', 'Vesa', 'Vesuri', 'Veteläinen', 'Vierikko', 'Vihtanen', 'Viikate', 'Viinanen', 'Viinikka', 'Vilhola', 'Viljanen', 'Vilkkula', 'Vilpas', 'Virkkula', 'Virkkunen', 'Virolainen', 'Virtala', 'Voutilainen', 'Vuokko', 'Vuorenpää', 'Vuorikoski', 'Vuorinen', 'Vähälä', 'Väisälä', 'Väisänen', 'Välimaa', 'Välioja', 'Väyrynen', 'Väätänen',
  'Wettenranta', 'Wiitanen', 'Wirtanen', 'Wiskari',
  'Ylijälä', 'Yliannala', 'Ylijoki', 'Ylikangas', 'Ylioja', 'Ylitalo', 'Ylppö', 'Yläjoki', 'Yrjänen', 'Yrjänä', 'Yrjölä', 'Yrttiaho', 'Yömaa',
  'Äijälä', 'Ämmälä', 'Änäkkälä', 'Äyräs', 'Äärynen',
  'Översti', 'Öysti', 'Öörni',       'Aada', 'Ada', 'Aina', 'Aino', 'Aki', 'Aliisa', 'Amalia', 'Amanda', 'Amelia', 'Amira', 'Anissa', 'Anita', 'Anna',
  'Anne', 'Anni', 'Anniina', 'Annu', 'Anu', 'Asta', 'Atte', 'Atte', 'Aura', 'Aurora', 'Bella', 'Cara',
  'Celina', 'Christa', 'Christel', 'Clara', 'Cornelia', 'Dani', 'Eija', 'Elea', 'Elina', 'Elisa', 'Elise', 'Ella',
  'Ellen', 'Elma', 'Emilia', 'Emma', 'Emmi', 'Enna', 'Erja', 'Esa', 'Essi', 'Eva', 'Eveliina', 'Fanni',
  'Fiona', 'Hanna', 'Heidi', 'Heli', 'Helinä', 'Henna', 'Hilda', 'Hilja', 'Hilla', 'Hilma', 'Iida', 'Iina',
  'Iiris', 'Ilona', 'Inka', 'Inkeri', 'Inna', 'Isabella', 'Jade', 'Jami', 'Janette', 'Janika', 'Janina', 'Janita',
  'Janna', 'Janni', 'Jasmiina', 'Jenna', 'Jenni', 'Jessica', 'Johanna', 'Joni', 'Jonna', 'Julia', 'Juulia', 'Kaija',
  'Karla', 'Karri', 'Kati', 'Katja', 'Katri', 'Kia', 'Kimi', 'Kirsi', 'Krista', 'Lari', 'Laura', 'Lauri',
  'Lea', 'Lila', 'Linnea', 'Lotta', 'Lumina', 'Maarit', 'Maia', 'Maija', 'Maiju', 'Maisa', 'Mari', 'Maria',
  'Meeri', 'Meri', 'Mette', 'Mia', 'Milla', 'Mimi', 'Mimosa', 'Minna', 'Mira', 'Mirella', 'Miska', 'Nadja',
  'Natalia', 'Nea', 'Neea', 'Nella', 'Nia', 'Niina', 'Noora', 'Olga', 'Olivia', 'Oona', 'Outi', 'Paula',
  'Pauliina', 'Petra', 'Pia', 'Piia', 'Pinja', 'Päivi', 'Reeta', 'Reetta', 'Riikka', 'Riina', 'Ritva', 'Roni',
  'Ronja', 'Sanna', 'Sari', 'Satu', 'Seija', 'Sirpa', 'Siru', 'Susanna', 'Tanja', 'Tara', 'Taru', 'Tea',
  'Terhi', 'Tiia', 'Tiina', 'Tiiu', 'Tinja', 'Veera', 'Vili', 'Vilma', 'Wilma', 'Aamu', 'Aliina', 'Annilotta',
  'Eerika', 'Eeva', 'Eevi', 'Eliina', 'Elviira', 'Emmaliina', 'Enni', 'Ennika', 'Helmiina', 'Henniina',
  'Hertta', 'Hilppa', 'Iia', 'Iita', 'Jadessa', 'Jemina', 'Jenika', 'Jermia', 'Jooa', 'Juttamari', 'Kaisla',
  'Kaisu', 'Loviisa', 'Malla', 'Martta', 'Matleena', 'Miina', 'Mimmu', 'Minea', 'Minttu', 'Mirva', 'Nelli', 'Ninni',
  'Oliivia', 'Peppi', 'Pihla', 'Pirkko', 'Riia', 'Roosa', 'Taika', 'Venla', 'Viivi', 'Vilja', 'Aleksi', 'Anssi', 'Antero', 'Antti', 'Ari', 'Arttu', 'Daniel', 'Eero', 'Eetu', 'Elias', 'Elmo', 'Emil', 'Erkki',
  'Hampus', 'Hannu', 'Harri', 'Heikki', 'Helmi', 'Henri', 'Hermanni', 'Ilja', 'Jaakko', 'Jake', 'Jani', 'Janne',
  'Jari', 'Jarno', 'Jere', 'Jeremy', 'Jesper', 'Jesse', 'Jimi', 'Joakim', 'Joel', 'Joona', 'Joonas', 'Juha',
  'Juho', 'Jukka', 'Julius', 'Jussi', 'Justus', 'Juuso', 'Kalle', 'Kasperi', 'Konsta', 'Kristian', 'Lassi', 'Leevi',
  'Leo', 'Levin', 'Luca', 'Lukas', 'Magnus', 'Marko', 'Markus', 'Matias', 'Matti', 'Miika', 'Mika', 'Mikael',
  'Mikko', 'Neo', 'Nico', 'Niklas', 'Niko', 'Oliver', 'Oskari', 'Ossi', 'Otto', 'Paavo', 'Pasi', 'Patrik',
  'Paulus', 'Peetu', 'Pekka', 'Pertti', 'Petri', 'Petteri', 'Pyry', 'Rami', 'Rasmus', 'Riku', 'Risto', 'Roope',
  'Saku', 'Sami', 'Samu', 'Samuel', 'Samuli', 'Santeri', 'Taneli', 'Tatu', 'Teemu', 'Teppo', 'Tero', 'Timo',
  'Tomi', 'Tommi', 'Topi', 'Touko', 'Tuomas', 'Tuomo', 'Tuukka', 'Tuukka', 'Valtteri', 'Veli', 'Viljo', 'Ville',
  'Aake', 'Aapeli', 'Aapo', 'Aappo', 'Aarni', 'Aaro', 'Aatto', 'Aatu', 'Akseli', 'Aku', 'Antton', 'Artturi',
  'Aune', 'Beeda', 'Briitta', 'Eeli', 'Eelis', 'Eemeli', 'Ekku', 'Eljas', 'Erkko', 'Iiro', 'Ilmari', 'Isto',
  'Jirko', 'Joonatan', 'Jore', 'Junnu', 'Jusu', 'Kaste', 'Kauto', 'Luukas', 'Nuutti', 'Onni', 'Osmo', 'Pekko',
  'Sampo', 'Santtu', 'Sauli', 'Simo,', 'Sisu', 'Teijo', 'Unto', 'Urho', 'Veeti', 'Veikko', 'Vilho', 'Werneri', 'Wiljami',


];

//json array of bios
const bios = [
  "I am a bio",
  "I love to code",
  "I love to code and play video games",
  "Anime is not a lifestyle",
  "what is a bio",
  "I invented the internet",
  "I am a Lizard",
  "I suck every day",
  "I am a bio",
  "I have four arms",
  "Toddlers hurt my feelings",
  "Giant Squids are my friends",
  "Korea should be united",
  "Taiwan is a country",
  "Vulture culture is a thing",
  "Beans and jeans",
  "Asshole",
  "fk u",
  "Greatest of all time",
  "is it a bird? is it a plane? no, it's a bio",
  "Elon Musk is my dad",
  "Musk did 9/11",
  "Truck nuts are the best",
  "Biden is a lizard",
  "Life is pain",
  "Hooters is my fav",
  "What happend here?",
  "Blood and thuder",
  "Lok'tar ogar",
  "Kusipää ja sosiopaatti",
  "FANG companies SUkk",
  "Ponua poltan",
  "Misantrooppi",
  "Fidget spinners were a scam",
  "Shame on you",
];

const post_content = [
  "This is my first post!! So excited about the future",
  "Bro what is life? I dont even know.",
  "Today I tried Kool-Aid",
  "No foolery is allowed on this platform... Back to twtr for me",
  "I was generated by an AI. Unbeliveable",
  "Just setting up my Winku.",
  "It's difficult to understand the lengths he'd go to remain short",
  "He was willing to find the depths of the rabbit hole in order to be with her.",
  "They ran around the corner to find that they had traveled back in time.",
  "I was starting to worry that my pet turtle could tell what I was thinking.",
  "Iguanas were falling out of the trees.",
  "She didn't like to support Amazon, but she was too lazy to go shopping anywhere else.",
  "Dicking around with this new social app. Not rly sure what to make of it yet, but all and all it seems pretty promising!",
  "The shooter says goodbye to his love.",
  "When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.",
  "Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.",
  "He wondered if she would appreciate his toenail collection.",
  "Carol drank the blood as if she were a vampire.",
  "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.",
  "I caught my squirrel rustling through my gym bag. LMAO!!! I killed the little guy later xD",
  "Muskism is a legit religion and shoulb be treated as such",
  "Man I really like butteflies.",
  "I assert, by means of the manifold, that natural causes, with the sole exception of the manifold, are by their very nature contradictory, as will easily be shown in the next section.",
  "(The transcendental unity of apperception is a representation of the Ideal.)",
  "As will easily be shown in the next section, natural causes are a representation of space.",
  "Bah. Not funny.",
  "Poster above is selling ads, dm for more",
];
