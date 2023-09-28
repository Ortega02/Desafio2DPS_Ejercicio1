import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Asegúrate de importar Icon de FontAwesome

const AlbumDetailScreen = ({ route }) => {
  const { album, autor } = route.params;
  const navigation = useNavigation();

  // Funciones para reproducir, eliminar y agregar a favoritos.
  const playSong = (cancion) => {
    navigation.navigate("PlayerScreen", {
      albumTitle: album.titulo,
      songTitle: cancion.cancion,
      artistName: autor,
      coverImage: album.cover,
    });
  };
  

  const deleteAlbum = () => {
    // Implementa la lógica para eliminar el álbum aquí.
  };

  const addToFavorites = () => {
    // Implementa la lógica para agregar a favoritos aquí.
  };

  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Icon name="chevron-left" size={24} color="white"/>
      </TouchableOpacity>
      <Text style={styles.albumTitle}>{album.titulo}</Text>
      <Image source={album.cover} style={styles.albumCover} />
      <View style={styles.songList}>
        {album.canciones.map((cancion, index) => (
          <View key={index} style={styles.songItem}>

<View style={styles.textContainer}>
    <Text style={styles.songTitle}>{cancion.cancion}</Text>
    <Text style={styles.artistName}>{autor}</Text>
  </View>
          
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => playSong(cancion)} style={styles.button}>
  <Icon name="play" size={24} color="white" />
</TouchableOpacity>

            <TouchableOpacity onPress={deleteAlbum} style={styles.button}>
              <Icon name="ban" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={addToFavorites} style={styles.button}>
              <Icon name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: 25,
    padding: 10,
  },
  textContainer: {
    flexDirection: "column", // Apila los elementos verticalmente
  },  
  albumTitle: {
    fontFamily: "Arial",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color:"white",
  },
  albumCover: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginTop: 20,
    marginBottom: 20,
  },
  songList: {
    marginTop: 20,
  },
  songItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth:1,
    marginBottom: 10, // Espacio entre canciones
    borderBottomColor:"white",
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color:"white",
    marginRight: 140,
  },
  artistContainer: {
    alignItems: "center", // Alinea el contenido al centro (verticalmente)
  },
  
  artistName: {
    fontSize: 12,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "right", // Alinea los botones verticalmente al centro
    justifyContent: "flex-end", // Alinea los botones a la derecha
  },
  button: {
    padding: 5,
    marginRight: 10,
    // Establece los estilos para los botones (triángulo de play, prohibido y corazón).
  },
});

export default AlbumDetailScreen;
