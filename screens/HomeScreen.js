import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import musica from "../Musica"; // Asegúrate de importar tus datos aquí

const HomeScreen = () => {
  const navigation = useNavigation();

  const MAX_ALBUM_TITLE_LENGTH = 18; // Define la longitud máxima del título del álbum.

  // Función para truncar el texto del título del álbum si es muy largo.
  const truncateText = (text) => {
    if (text.length > MAX_ALBUM_TITLE_LENGTH) {
      return text.substring(0, MAX_ALBUM_TITLE_LENGTH) + "..."; // Agregar puntos suspensivos al final.
    }
    return text;
  };

  // Función para manejar la navegación a la página de detalle del álbum
  const goToAlbumDetail = (album, autor) => {
    navigation.navigate("AlbumScreen", { album, autor }); // "AlbumDetail" es el nombre de la pantalla de detalles
  };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>UDB Music</Text>
      {musica.generos.map((genero) => (
        <View key={genero.nombre}>
          {/* Título del género */}
          <Text style={styles.genreTitle}>{genero.nombre}</Text>

          {/* Lista horizontal de álbumes */}
          <FlatList
            horizontal
            data={genero.artistas}
            keyExtractor={(artista) => artista.autor}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => goToAlbumDetail(item.album[0], item.autor)} // Abre el primer álbum como ejemplo
                style={styles.albumContainer}
              >
                <Image source={item.album[0].cover} style={styles.albumCover} />
                <Text style={styles.albumTitle}>
                  {truncateText(item.album[0].titulo)} {/* Trunca el título del álbum */}
                </Text>
                <Text style={styles.artistName}>{item.autor}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontFamily: "Circular",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:"white",
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color:"white",
  },
  albumContainer: {
    marginRight: 20,
  },
  albumCover: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    marginBottom: 5,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color:"white",
  },
  artistName: {
    fontSize: 14,
    textAlign: "center",
    color:"white",
  },
});

export default HomeScreen;
