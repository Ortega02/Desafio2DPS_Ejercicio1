import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Sound from 'react-native-sound';

const PlayerScreen = ({ route }) => {
  const { albumTitle, songTitle, artistName, coverImage } = route.params;
  
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Configurar el objeto Sound para la canción seleccionada
    const soundFile = new Sound(songTitle, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('No se pudo cargar el archivo de audio', error);
        return;
      }
      setSound(soundFile);
    });

    return () => {
      // Detener y liberar el recurso de audio cuando el componente se desmonte
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, [songTitle]);

  const playSong = () => {
    if (sound) {
      sound.play();
    }
  };

  // Resto de tu código

  return (
    <View style={styles.container}>
      <Image source={coverImage} style={styles.albumCover} />
      <Text style={styles.songTitle}>{songTitle}</Text>
      <Text style={styles.artistName}>{artistName}</Text>
      <TouchableOpacity onPress={playSong} style={styles.playButton}>
        <Text style={styles.playButtonText}>Reproducir</Text>
      </TouchableOpacity>
      {/* Agrega otros controles de reproducción de música aquí */}
    </View>
  );
};

// Resto de tu código

export default PlayerScreen;
