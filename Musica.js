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
                    ruta: require("./src/audio/sparks.mp3"),
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
                    ruta: require("./src/audio/doiwannaknow.mp3"),
                  },
                  {
                    cancion: "I Wanna Be Yours",
                    duracion: "3:03",
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
  