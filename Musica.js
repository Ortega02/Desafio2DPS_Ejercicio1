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
                  },
                  {
                    cancion: "Yellow",
                    duracion: "4:26",
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
  