// Music.js

const musica = {
    generos: [
      {
        nombre: "Rock Alternativo",
        artistas: [
          {
            autor: "Coldplay",
            album: [
              {
                titulo: "Parachutes",
                cover: require("./src/img/parachutes.png"),
                canciones: [
                  {
                    cancion: "Sparks",
                    duracion: "3:47",
                    //definir ruta para cuando se quiere usar el reproductor con más de una cancion que reproduzca 
                    ruta: require("./src/audio/Sparks.mp3"),
                  },
                  {
                    cancion: "Yellow",
                    duracion: "4:26",
                  },
                  {
                    cancion: "Trouble",
                    duracion: "4:33",
                  },
                  {
                    cancion: "Dont Panic",
                    duracion: "2:16",
                  },
                  {
                    cancion: "Shiver",
                    duracion: "5:04",
                  },
                  {
                    cancion: "Spies",
                    duracion: "5:18",
                  },
                  
                  {
                    cancion: "Parachutes",
                    duracion: "0:46",
                  },
                  {
                    cancion: "High Speed",
                    duracion: "4:16",
                  },
                  {
                    cancion: "We Never Change",
                    duracion: "4:09",
                  },
                  {
                    cancion: "Everything's Not Lost",
                    duracion: "7:16",
                  },
                  // Aqui van más canciones
                ],
              },
             
              // Más albums
            ],
          },
          {
            autor: "Red Hot Chili Peppers",
            album: [
              {
                titulo: "Californication",
                cover: require("./src/img/californication.jpg"),
                canciones: [
                  {
                    cancion: "Scar Tissue",
                    duracion: "3:35",
                  },
                  {
                    cancion: "Californication",
                    duracion: "5:29",
                  },
                  {
                    cancion: "Otherside",
                    duracion: "4:15",
                  },
                  {
                    cancion: "Road Trippin",
                    duracion: "3:24",
                  },
                  {
                    cancion: "Around The World",
                    duracion: "3:58",
                  },
                  {
                    cancion: "Parallel Universe",
                    duracion: "4:29",
                  },
                  {
                    cancion: "Easily",
                    duracion: "3:51",
                  },
                  {
                    cancion: "This Velvet Glove",
                    duracion: "3:45",
                  },
                  {
                    cancion: "Get on Top",
                    duracion: "3:18",
                  },
                  {
                    cancion: "Porcelain",
                    duracion: "2:43",
                  },
                ],
              },
            ],
          },
          {
            autor: "Gorillaz",
            album: [
              {
                titulo: "Plastic Beach",
                cover: require("./src/img/gorillaz.jpg"),
                canciones: [
                  {
                    cancion: "On Melancholy Hill",
                    duracion: "3:53",
                  },
                  {
                    cancion: "Rhinestone Eyes",
                    duracion: "3:20",
                  },
                  {
                    cancion: "Empire Ants",
                    duracion: "4:43",
                  },
                  {
                    cancion: "Stylo",
                    duracion: "4:30",
                  },
                  {
                    cancion: "Superfast Jellyfish",
                    duracion: "2:54",
                  },
                  {
                    cancion: "Broken",
                    duracion: "3:17",
                  },
                  {
                    cancion: "Some Kind of Nature",
                    duracion: "2:59",
                  },
                  {
                    cancion: "Glitter Freeze",
                    duracion: "4:03",
                  },
                  {
                    cancion: "Sweepstakes",
                    duracion: "5:20",
                  },
                  {
                    cancion: "White Flag",
                    duracion: "3:43",
                  },
                ],
              },
            ],
          },
          {
            autor: "Pink Floyd",
            album: [
              {
                titulo: "The Wall",
                cover: require("./src/img/wall.png"),
                canciones: [
                  {
                    cancion: "In The Flesh",
                    duracion: "3:18",
                  },
                  {
                    cancion: "The Thin Ice",
                    duracion: "2:26",
                  },
                  {
                    cancion: "The Happiest Day Of Our Lives",
                    duracion: "1:50",
                  },
                  {
                    cancion: "Mother",
                    duracion: "5:34",
                  },
                  {
                    cancion: "Goodbye Blue Sky",
                    duracion: "2:47",
                  },
                  {
                    cancion: "Empty Spaces",
                    duracion: "2:07",
                  },
                  {
                    cancion: "Young Lust",
                    duracion: "3:29",
                  },
                  {
                    cancion: "Goodbye Cruel; World",
                    duracion: "1:13",
                  },
                  {
                    cancion: "One Of My Turns",
                    duracion: "3:36",
                  },
                  {
                    cancion: "Dont Leave Me Now",
                    duracion: "4:15",
                  },
                ],
              },
            ],
          },
          {
            autor: "Green Day",
            album: [
              {
                titulo: "Dookie",
                cover: require("./src/img/dookie.jpg"),
                canciones: [
                  {
                    cancion: "Burnout",
                    duracion: "2:07",
                  },
                  {
                    cancion: "Having A Blast",
                    duracion: "2:44",
                  },
                  {
                    cancion: "Chump",
                    duracion: "2:54",
                  },
                  {
                    cancion: "Longview",
                    duracion: "3:53",
                  },
                  {
                    cancion: "Welcome To Paradise",
                    duracion: "3:44",
                  },
                  {
                    cancion: "Pulling Teeth",
                    duracion: "2:30",
                  },
                  {
                    cancion: "Basket Case",
                    duracion: "3:01",
                  },
                  {
                    cancion: "She",
                    duracion: "2:14",
                  },
                  {
                    cancion: "Sassafras Roots",
                    duracion: "2:37",
                  },
                  {
                    cancion: "When I Come Around",
                    duracion: "2:58",
                  },
                ],
              },
            ],
          },
          {
            autor: "The White Stripes",
            album: [
              {
                titulo: "Elephant",
                cover: require("./src/img/elephant.png"),
                canciones: [
                  {
                    cancion: "Seven Nation Army",
                    duracion: "3:52",
                  },
                  {
                    cancion: "Black Math",
                    duracion: "3:03",
                  },
                  {
                    cancion: "In The Cold Night",
                    duracion: "3;43",
                  },
                  {
                    cancion: "Ball And Biscuit",
                    duracion: "7:18",
                  },
                  {
                    cancion: "Little Acorns",
                    duracion: "4:09",
                  },
                  {
                    cancion: "Hypnotize",
                    duracion: "1:48",
                  },
                  {
                    cancion: "The Air Near My Fingers",
                    duracion: "3:40",
                  },
                  {
                    cancion: "There's No Home For You There",
                    duracion: "3;43",
                  },
                  {
                    cancion: "Girl You Have No Faith In Medicine",
                    duracion: "3:17",
                  },
                  {
                    cancion: "it's True That We Love One Another ",
                    duracion: "3:39",
                  },
                ],
              },
            ],
          },
          {
            autor: "Pearl Jam",
            album: [
              {
                titulo: "Vitalogy",
                cover: require("./src/img/vitalogy.jpg"),
                canciones: [
                  {
                    cancion: "Last Exit",
                    duracion: "2:55",
                  },
                  {
                    cancion: "Spin The Black Circle",
                    duracion: "2:47",
                  },
                  {
                    cancion: "Not For You",
                    duracion: "5:52",
                  },
                  {
                    cancion: "Tremor Christ",
                    duracion: "4:10",
                  },
                  {
                    cancion: "Nothingman",
                    duracion: "4:34",
                  },
                  {
                    cancion: "Whipping",
                    duracion: "2:34",
                  },
                  {
                    cancion: "Pry, To",
                    duracion: "1:01",
                  },
                  {
                    cancion: "Corduroy",
                    duracion: "4:37",
                  },
                  {
                    cancion: "Bugs",
                    duracion: "2:44",
                  },
                  {
                    cancion: "Better Man",
                    duracion: "4:28",
                  },
                ],
              },
            ],
          },
          {
            autor: "Foo Fighters",
            album: [
              {
                titulo: " Wasting Light",
                cover: require("./src/img/wasting.jpg"),
                canciones: [
                  {
                    cancion: "Bridge Burning",
                    duracion: "4:46",
                  },
                  {
                    cancion: "Rope",
                    duracion: "4:19",
                  },
                  {
                    cancion: "Dear Rosemary",
                    duracion: "4:26",
                  },
                  {
                    cancion: "White Limo",
                    duracion: "3:22",
                  },
                  {
                    cancion: "Arlandria",
                    duracion: "4:27",
                  },
                  {
                    cancion: "These Days",
                    duracion: "4:58",
                  },
                  {
                    cancion: "Back & Forth",
                    duracion: "3:51",
                  },
                  {
                    cancion: "A Matter Of Time",
                    duracion: "4:36",
                  },
                  {
                    cancion: "Miss The Misery",
                    duracion: "4:31",
                  },
                  {
                    cancion: "Walk",
                    duracion: "4:15",
                  },
                ],
              },
            ],
          },
          {
            autor: "The Killers",
            album: [
              {
                titulo: "Hot Fuse",
                cover: require("./src/img/hot.png"),
                canciones: [
                  {
                    cancion: "Jenny Was A Friend Of Mine",
                    duracion: "4:03",
                  },
                  {
                    cancion: "Mr.Brightside",
                    duracion: "3:42",
                  },
                  {
                    cancion: "Smile Like You Mean It",
                    duracion: "3:54",
                  },
                  {
                    cancion: "Somebody Told Me",
                    duracion: "3:17",
                  },
                  {
                    cancion: "All These Things That I've Done",
                    duracion: "5:01",
                  },
                  {
                    cancion: "Andy, You're A Star",
                    duracion: "3:14",
                  },
                  {
                    cancion: "On Top",
                    duracion: "4:18",
                  },
                  {
                    cancion: "Change Your Mind",
                    duracion: "3:12",
                  },
                  {
                    cancion: "Believe Me Natalie",
                    duracion: "5:05",
                  },
                  {
                    cancion: "Midnight Show",
                    duracion: "4:03",
                  },
                ],
              },
            ],
          },
          {
            autor: "Radiohead",
            album: [
              {
                titulo: "The Bends",
                cover: require("./src/img/radio.png"),
                canciones: [
                  {
                    cancion: "Planet Telex",
                    duracion: "4:19",
                  },
                  {
                    cancion: "The Bends",
                    duracion: "4:06",
                  },
                  {
                    cancion: "High And Dry",
                    duracion: "4:17",
                  },
                  {
                    cancion: "Fake Plastic Trees",
                    duracion: "4:50",
                  },
                  {
                    cancion: "Bones",
                    duracion: "3:09",
                  },
                  {
                    cancion: "(Nice Dream)",
                    duracion: "3:53",
                  },
                  {
                    cancion: "Just",
                    duracion: "3:54",
                  },
                  {
                    cancion: "My Iron Lung",
                    duracion: "4:36",
                  },
                  {
                    cancion: "Black Star",
                    duracion: "4:07",
                  },
                  {
                    cancion: "Sulk",
                    duracion: "3:42",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        nombre: "Indie",
        artistas: [
          {
            autor: "Artic Monkeys",
            album: [
              {
                titulo: "AM",
                cover: require("./src/img/am.jpg"),
                canciones: [
                  {
                    cancion: "Do I Wanna Know",
                    duracion: "4:32", 
                  },
                  {
                    cancion: "I Wanna Be Yours",
                    duracion: "3:03",
                  },
                  {
                    cancion: "R U Mine?",
                    duracion: "3:21",
                  },
                  {
                    cancion: "Arabella",
                    duracion: "3:27",
                  },
                  {
                    cancion: "Snap Out Of It",
                    duracion: "3:13",
                  },
                  {
                    cancion: "Knee Socks",
                    duracion: "3:03",
                  },
                  {
                    cancion: "I Want It All",
                    duracion: "3:05",
                  },
                  {
                    cancion: "One For The Road",
                    duracion: "3:26",
                  },
                  {
                    cancion: "Mad Sounds",
                    duracion: "3:35",
                  },
                  {
                    cancion: "Fireside",
                    duracion: "3:01",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Oasis",
            album: [
              {
                titulo: "(Whats The Story) Morning Glory?",
                cover: require("./src/img/oasis.jpg"),
                canciones: [
                  {
                    cancion: "Wonderwall",
                    duracion: "3:35",
                  },
                  {
                    cancion: "Dont Look Back In Anger",
                    duracion: "4:49",
                  },
                  {
                    cancion: "She's Electric",
                    duracion: "3:40",
                  },
                  {
                    cancion: "Hello",
                    duracion: "3:23",
                  },
                  {
                    cancion: "Roll With It",
                    duracion: "4:00",
                  },
                  {
                    cancion: "Hey Now",
                    duracion: "5:41",
                  },
                  {
                    cancion: "Some Might Stay",
                    duracion: "5:27",
                  },
                  {
                    cancion: "Cast No Shadow",
                    duracion: "4:54",
                  },
                  {
                    cancion: "Morning Glory",
                    duracion: "5:03",
                  },
                  {
                    cancion: "Champagne Supernova",
                    duracion: "7:31",
                  },
                ],
              },
            ],
          },
          {
            autor: "Nirvana",
            album: [
              {
                titulo: "Never Mind",
                cover: require("./src/img/never.jpg"),
                canciones: [
                  {
                    cancion: "Smells Like Teen Spirit",
                    duracion: "5:01",
                  },
                  {
                    cancion: "Come As You Are",
                    duracion: "3:38",
                  },
                  {
                    cancion: "In Bloom",
                    duracion: "4:15",
                  },
                  {
                    cancion: "Breed",
                    duracion: "3:04",
                  },
                  {
                    cancion: "Lithium",
                    duracion: "4:17",
                  },
                  {
                    cancion: "Polly",
                    duracion: "2:53",
                  },
                  {
                    cancion: "Territorial Pissings",
                    duracion: "2:22",
                  },
                  {
                    cancion: "Drain You",
                    duracion: "3:43",
                  },
                  {
                    cancion: "Lounge Act",
                    duracion: "2:36",
                  },
                  {
                    cancion: "Stay Away",
                    duracion: "3:31",
                  },
                ],
              },
            ],
          },
          {
            autor: "The Strokes",
            album: [
              {
                titulo: "Is This It",
                cover: require("./src/img/strokes.png"),
                canciones: [
                  {
                    cancion: "Is This It",
                    duracion: "2:31",
                  },
                  {
                    cancion: "Last Nite",
                    duracion: "3:13",
                  },
                  {
                    cancion: "The Modern Age",
                    duracion: "3:28",
                  },
                  {
                    cancion: "Soma",
                    duracion: "2:33",
                  },
                  {
                    cancion: "Barely Legal",
                    duracion: "3:54",
                  },
                  {
                    cancion: "Someday",
                    duracion: "3:03",
                  },
                  {
                    cancion: "Alone Together",
                    duracion: "3:08",
                  },
                  {
                    cancion: "Hard To Explain",
                    duracion: "3:44",
                  },
                  {
                    cancion: "New York City Cops",
                    duracion: "3:30",
                  },
                  {
                    cancion: "Trying Your Luck",
                    duracion: "3:22",
                  },
                ],
              },
            ],
          },
          {
            autor: "The Stone Roses",
            album: [
              {
                titulo: "Second Coming",
                cover: require("./src/img/stones.jpg"),
                canciones: [
                  {
                    cancion: "Breaking Into Heaven",
                    duracion: "11:19",
                  },
                  {
                    cancion: "Driving South",
                    duracion: "5:09",
                  },
                  {
                    cancion: "Ten Storey Love Song",
                    duracion: "4:29",
                  },
                  {
                    cancion: "Daybreak",
                    duracion: "6:33",
                  },
                  {
                    cancion: "Your Star Will Shine",
                    duracion: "2:55",
                  },
                  {
                    cancion: "Straight To The Man",
                    duracion: "3:13",
                  },
                  {
                    cancion: "Begging You",
                    duracion: "4:53",
                  },
                  {
                    cancion: "Tightrope",
                    duracion: "4:24",
                  },
                  {
                    cancion: "Good Times",
                    duracion: "5:40",
                  },
                  {
                    cancion: "Tears",
                    duracion: "6:50",
                  },
                ],
              },
            ],
          },
          {
            autor: "The Smiths",
            album: [
              {
                titulo: "The Smiths",
                cover: require("./src/img/smiths.jpg"),
                canciones: [
                  {
                    cancion: "Reel Around The Fountain",
                    duracion: "5:59",
                  },
                  {
                    cancion: "You've Got Everything Now",
                    duracion: "3:59",
                  },
                  {
                    cancion: "Miserable Lie",
                    duracion: "4:27",
                  },
                  {
                    cancion: "Pretty Girls Make Graves",
                    duracion: "3:43",
                  },
                  {
                    cancion: "This Charming Man",
                    duracion: "2:42",
                  },
                  {
                    cancion: "Still Ill",
                    duracion: "3:21",
                  },
                  {
                    cancion: "Hand In The Glove",
                    duracion: "3:22",
                  },
                  {
                    cancion: "What Difference Does It Make",
                    duracion: "3:49",
                  },
                  {
                    cancion: "I Dont Owe You Anything",
                    duracion: "4:04",
                  },
                  {
                    cancion: "Suffer Little Children",
                    duracion: "5:30",
                  },
                ],
              },
            ],
          },
          {
            autor: "Pavement",
            album: [
              {
                titulo: "Terror Twilight",
                cover: require("./src/img/terror.jpg"),
                canciones: [
                  {
                    cancion: "Spit On A Stranger",
                    duracion: "3:04",
                  },
                  {
                    cancion: "Folk Jam",
                    duracion: "3:34",
                  },
                  {
                    cancion: "You Are A Light",
                    duracion: "3:54",
                  },
                  {
                    cancion: "Cream Of Gold",
                    duracion: "3:47",
                  },
                  {
                    cancion: "Major Leagues",
                    duracion: "3:24",
                  },
                  {
                    cancion: "Platform Blues",
                    duracion: "4:42",
                  },
                  {
                    cancion: "Ann Dont Cry",
                    duracion: "4:09",
                  },
                  {
                    cancion: "Billie",
                    duracion: "3:44",
                  },
                  {
                    cancion: "Speak,See,Remember",
                    duracion: "4:19",
                  },
                  {
                    cancion: "The Hexx",
                    duracion: "3:03",
                  },
                ],
              },
            ],
          },
          {
            autor: "Modest Mouse",
            album: [
              {
                titulo: "The Moon & Antartica",
                cover: require("./src/img/moon.jpg"),
                canciones: [
                  {
                    cancion: "3rd Planet",
                    duracion: "3:58",
                  },
                  {
                    cancion: "Gravity Rides Everything",
                    duracion: "4:19",
                  },
                  {
                    cancion: "Dark Center Of The Universe",
                    duracion: "5:02",
                  },
                  {
                    cancion: "Perfect Disguise",
                    duracion: "2:32",
                  },
                  {
                    cancion: "Tiny Cities Made Of Ashes",
                    duracion: "3:14",
                  },
                  {
                    cancion: "A Differnt City",
                    duracion: "3:03",
                  },
                  {
                    cancion: "The Cold Part",
                    duracion: "5:00",
                  },
                  {
                    cancion: "Alone Down There",
                    duracion: "2:21",
                  },
                  {
                    cancion: "The Stars Are Projectors",
                    duracion: "8:45",
                  },
                  {
                    cancion: "Paper Thin Walls",
                    duracion: "3:01",
                  },
                ],
              },
            ],
          },
          {
            autor: "Radiohead",
            album: [
              {
                titulo: "In Rainbows",
                cover: require("./src/img/rainbows.jpg"),
                canciones: [
                  {
                    cancion: "15 Step",
                    duracion: "3:57",
                  },
                  {
                    cancion: "Bodysnatchers",
                    duracion: "4:02",
                  },
                  {
                    cancion: "Nude",
                    duracion: "4:15",
                  },
                  {
                    cancion: "Weird Fishes/Arpeggi",
                    duracion: "5:18",
                  },
                  {
                    cancion: "All I Need",
                    duracion: "3:48",
                  },
                  {
                    cancion: "Faust Arp",
                    duracion: "2:09",
                  },
                  {
                    cancion: "Reckoner",
                    duracion: "4:50",
                  },
                  {
                    cancion: "House Of Cards",
                    duracion: "5:28",
                  },
                  {
                    cancion: "Jigwasw Falling Into Place",
                    duracion: "4:08",
                  },
                  {
                    cancion: "Videotape",
                    duracion: "4:39",
                  },
                ],
              },
            ],
          },
          {
            autor: "Pixies",
            album: [
              {
                titulo: "Beneath The Eyrie",
                cover: require("./src/img/pixies.jpg"),
                canciones: [
                  {
                    cancion: "On Graveyard Hill",
                    duracion: "3:25",
                  },
                  {
                    cancion: "Catfish Kate",
                    duracion: "3:08",
                  },
                  {
                    cancion: "This Is My Fate",
                    duracion: "3:20",
                  },
                  {
                    cancion: "Ready For Love",
                    duracion: "2:33",
                  },
                  {
                    cancion: "Silver Bullet",
                    duracion: "3:44",
                  },
                  {
                    cancion: "Long Rider",
                    duracion: "3:32",
                  },
                  {
                    cancion: "Los Surfers Muertos",
                    duracion: "2:54",
                  },
                  {
                    cancion: "St.Nazaire",
                    duracion: "2:27",
                  },
                  {
                    cancion: "Bird Of Prey",
                    duracion: "2:37",
                  },
                  {
                    cancion: "Daniel Boone",
                    duracion: "4:52",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        nombre: "Hip Hop/Rap",
        artistas: [
          {
            autor: "Post Malone",
            album: [
              {
                titulo: "Beerbongs & Bentleys",
                cover: require("./src/img/beerbongs.png"),
                canciones: [
                  {
                    cancion: "Rockstar",
                    duracion: "3:38",
                  },
                  {
                    cancion: "Better Now",
                    duracion: "3:51", 
                  },
                  {
                    cancion: "Psycho",
                    duracion: "3:41",
                  },
                  {
                    cancion: "Paranoid",
                    duracion: "3:41",
                  },
                  {
                    cancion: "Spoil My Night",
                    duracion: "3:14",
                  },
                  {
                    cancion: "Rich & Sad",
                    duracion: "3:26",
                  },
                  {
                    cancion: "Zach And Codeine",
                    duracion: "3:24",
                  },
                  {
                    cancion: "Taking Shots",
                    duracion: "3:36",
                  },
                  {
                    cancion: "Over Now",
                    duracion: "4:06",
                  },
                  {
                    cancion: "Ball For Me",
                    duracion: "3:26",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Travis Scott",
            album: [
              {
                titulo: "Astroworld",
                cover: require("./src/img/astroworld.jpg"),
                canciones: [
                  {
                    cancion: "Sicko Mode",
                    duracion: "5:12", 
                  },
                  {
                    cancion: "Butterfly Effect",
                    duracion: "3:10",
                  },
                  {
                    cancion: "Stargazing",
                    duracion: "4:30",
                  },
                  {
                    cancion: "Carousel",
                    duracion: "3:00",
                  },
                  {
                    cancion: "R.I.P Screw",
                    duracion: "3:05",
                  },
                  {
                    cancion: "Stop Trying To Be God",
                    duracion: "5:38",
                  },
                  {
                    cancion: "No Bystanders",
                    duracion: "3:38",
                  },
                  {
                    cancion: "Skeletons",
                    duracion: "2:25",
                  },
                  {
                    cancion: "Wake Up",
                    duracion: "3:51",
                  },
                  {
                    cancion: "Astrothunder",
                    duracion: "2:22",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Kendrick Lamar",
            album: [
              {
                titulo: "Mr. Morale & the Big Steppers",
                cover: require("./src/img/morales.jpg"),
                canciones: [
                  {
                    cancion: "United In Grief",
                    duracion: "4:15", 
                  },
                  {
                    cancion: "N95",
                    duracion: "3:15",
                  },
                  {
                    cancion: "Worldwide Steppers",
                    duracion: "3:23",
                  },
                  {
                    cancion: "Die Hard",
                    duracion: "3:59",
                  },
                  {
                    cancion: "Father Time",
                    duracion: "3:42",
                  },
                  {
                    cancion: "Rich",
                    duracion: "1:43",
                  },
                  {
                    cancion: "Rich Spirit",
                    duracion: "3:22",
                  },
                  {
                    cancion: "We Cry Together",
                    duracion: "5:41",
                  },
                  {
                    cancion: "Purple Harts",
                    duracion: "5:29",
                  },
                  {
                    cancion: "Count Me Out",
                    duracion: "4:43",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Drake",
            album: [
              {
                titulo: "Views",
                cover: require("./src/img/views.jpg"),
                canciones: [
                  {
                    cancion: "One Dance",
                    duracion: "2:53", 
                  },
                  {
                    cancion: "Hotline Bling",
                    duracion: "4:27",
                  },
                  {
                    cancion: "Keep The Family Close",
                    duracion: "5:28",
                  },
                  {
                    cancion: "9",
                    duracion: "4:15",
                  },
                  {
                    cancion: "U With Me?",
                    duracion: "4:57",
                  },
                  {
                    cancion: "Feel No Ways",
                    duracion: "4:00",
                  },
                  {
                    cancion: "Hype",
                    duracion: "3:29",
                  },
                  {
                    cancion: "Weston Road Flows",
                    duracion: "4:13",
                  },
                  {
                    cancion: "Redemption",
                    duracion: "5:33",
                  },
                  {
                    cancion: "With You",
                    duracion: "3:15",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Kanye West",
            album: [
              {
                titulo: "Graduation",
                cover: require("./src/img/graduation.jpg"),
                canciones: [
                  {
                    cancion: "Stronger",
                    duracion: "5:11", 
                  },
                  {
                    cancion: "Flashing Lights",
                    duracion: "3:57",
                  },
                  {
                    cancion: "Good Morning",
                    duracion: "3:15",
                  },
                  {
                    cancion: "Champion",
                    duracion: "2:47",
                  },
                  {
                    cancion: "I Wonder",
                    duracion: "4:03",
                  },
                  {
                    cancion: "Good Life",
                    duracion: "3:27",
                  },
                  {
                    cancion: "Cant Tell Me Nothing",
                    duracion: "4:31",
                  },
                  {
                    cancion: "Barry Bonds",
                    duracion: "3:24",
                  },
                  {
                    cancion: "Drunk And Hot Girls",
                    duracion: "5:13",
                  },
                  {
                    cancion: "Everything Im Am",
                    duracion: "3:47",
                  },
                ],
              },
             
            ],
          },
          
          {
            autor: "Eminem",
            album: [
              {
                titulo: "The Eminem Show",
                cover: require("./src/img/eminem.jpg"),
                canciones: [
                  {
                    cancion: "Without Me",
                    duracion: "4:50", 
                  },
                  {
                    cancion: "Till I Colapse",
                    duracion: "4:57",
                  },
                  {
                    cancion: "White America",
                    duracion: "5:24",
                  },
                  {
                    cancion: "Business",
                    duracion: "4:11",
                  },
                  {
                    cancion: "Cleanin Out My Closet",
                    duracion: "4:57",
                  },
                  {
                    cancion: "Square Dance",
                    duracion: "5:23",
                  },
                  {
                    cancion: "Soldier",
                    duracion: "3:46",
                  },
                  {
                    cancion: "Say Goodbye Hollywood",
                    duracion: "4:32",
                  },
                  {
                    cancion: "Drips",
                    duracion: "4:45",
                  },
                  {
                    cancion: "Sing For The Moment",
                    duracion: "5:39",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "50 Cent",
            album: [
              {
                titulo: "get rich or die tryin'",
                cover: require("./src/img/50.jpeg"),
                canciones: [
                  {
                    cancion: "In Da Club",
                    duracion: "3:13",
                  },
                  {
                    cancion: "21 Questions",
                    duracion: "3:44",
                  },
                  {
                    cancion: "What Up Gangsta",
                    duracion: "2:59",
                  },
                  {
                    cancion: "Patiently Waiting",
                    duracion: "4:48",
                  },
                  {
                    cancion: "Many Men",
                    duracion: "4:16",
                  },
                  {
                    cancion: "High All Time",
                    duracion: "4:29",
                  },
                  {
                    cancion: "Heat",
                    duracion: "4:14",
                  },
                  {
                    cancion: "If I Cant",
                    duracion: "3:16",
                  },
                  {
                    cancion: "Blood Hound",
                    duracion: "4:00",
                  },
                  {
                    cancion: "Back Down",
                    duracion: "4:03",
                  },
                ],
              },
            ],
          },
          {
            autor: "Dr Dre",
            album: [
              {
                titulo: "2001",
                cover: require("./src/img/dr.jpg"),
                canciones: [
                  {
                    cancion: "Still D.R.E.",
                    duracion: "4:30",
                  },
                  {
                    cancion: "The Next Episode",
                    duracion: "2:41",
                  },
                  {
                    cancion: "The Watcher",
                    duracion: "3:26",
                  },
                  {
                    cancion: "Big Egos",
                    duracion: "3:58",
                  },
                  {
                    cancion: "Xxplosive",
                    duracion: "3:35",
                  },
                  {
                    cancion: "Whats The Difference",
                    duracion: "4:04",
                  },
                  {
                    cancion: "Light Speed",
                    duracion: "2:40",
                  },
                  {
                    cancion: "Forgot About Dre",
                    duracion: "3:42",
                  },
                  {
                    cancion: "Lets Get High",
                    duracion: "2:27",
                  },
                  {
                    cancion: "Housewife",
                    duracion: "4:02",
                  },
                ],
              },
            ],
          },
          {
            autor: "Ice Cube",
            album: [
              {
                titulo: "Raw Footage",
                cover: require("./src/img/raw.jpg"),
                canciones: [
                  {
                    cancion: "Gangsta Rap Made Me Do It",
                    duracion: "4:41", 
                  },
                  {
                    cancion: "Hood Mentality",
                    duracion: "5:11",
                  },
                  {
                    cancion: "I Got My Locks On",
                    duracion: "3:43",
                  },
                  {
                    cancion: "It Takes A Nation",
                    duracion: "3:26",
                  },
                  {
                    cancion: "Why Me?",
                    duracion: "4:00",
                  },
                  {
                    cancion: "Cold Places",
                    duracion: "4:12",
                  },
                  {
                    cancion: "Jack N The Box",
                    duracion: "4:22",
                  },
                  {
                    cancion: "Do Ya Thang",
                    duracion: "4:04",
                  },
                  {
                    cancion: "Thank God",
                    duracion: "5:28",
                  },
                  {
                    cancion: "Here He Come",
                    duracion: "4:32",
                  },
                ],
              },
             
            ],
          },
          {
            autor: "Jay Z",
            album: [
              {
                titulo: "Watch The Throne",
                cover: require("./src/img/throne.jpg"),
                canciones: [
                  {
                    cancion: "No Church In The Wild",
                    duracion: "4:32", 
                  },
                  {
                    cancion: "lift Off",
                    duracion: "4:26",
                  },
                  {
                    cancion: "Otis",
                    duracion: "2:58",
                  },
                  {
                    cancion: "Gotta Have It",
                    duracion: "2:20",
                  },
                  {
                    cancion: "New Day",
                    duracion: "4:32",
                  },
                  {
                    cancion: "Welcome To The Jungle",
                    duracion: "2:54",
                  },
                  {
                    cancion: "Who Gon Stop Me",
                    duracion: "4:16",
                  },
                  {
                    cancion: "Made In America",
                    duracion: "4:52",
                  },
                  {
                    cancion: "Why I Love You",
                    duracion: "3:21",
                  },
                  {
                    cancion: "Ni**as In Paris",
                    duracion: "3:39",
                  },
                ],
              },
             
            ],
          },

        ],
      },
      // Más generos
    ],
  };
  
  export default musica;
  