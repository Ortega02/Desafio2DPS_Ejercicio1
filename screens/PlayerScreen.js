import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Asegúrate de importar Icon de FontAwesome

const { width, height } = Dimensions.get('window');

const PlayerScreen = ({ route }) => {
  const { songTitle, artistName, coverImage } = route.params;
  const navigation = useNavigation();

  const start = async () => {

    // Define la lista de pistas de música que quieres reproducir
    const tracks = [
        {
            id: 'trackId1',
            url: require(`../src/audio/Sparks.mp3`),
            title: songTitle,
            artist: artistName,
            //artwork: require(`./${audioPath}track1.png`)
        },
     
    ];

    // Agrega las pistas a la cola
    await TrackPlayer.add(tracks);

    // Inicia la reproducción de la primera pista
    await TrackPlayer.play();
};

// Llama a la función start para comenzar la reproducción
start();

const handlePause = async () => {
  await TrackPlayer.pause();
};

const handleStop = async () => {
  await TrackPlayer.reset();
};

const handleGoBack = () => {
  navigation.goBack();
};
  return (
    <SafeAreaView style={styles.container}>
      {/* Player UI */}
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Icon name="chevron-left" size={24} color="white"/>
      </TouchableOpacity>
      <View style={styles.playerContainer}>
        {/* Display song title, artist name, album cover, and playback controls */}
        <Image source={coverImage} style={styles.albumCover} />
        <Text style={styles.songTitle}>{songTitle}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
        {/* Add playback controls here (play, pause, skip, etc.) */}
        <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={0} // You need to calculate and update the progress value
        minimumTrackTintColor="#FFD369"
        maximumTrackTintColor="#fff"
      />
          {/* Botón de pausa */}
          <TouchableOpacity onPress={handlePause}>
          <Text>Pausa</Text>
        </TouchableOpacity>

      {/* Botón de detención (stop) */}
      <TouchableOpacity onPress={handleStop}>
        <Text>Detener</Text>
      </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  playerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumCover: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
  },
  artistName: {
    fontSize: 18,
    color: '#888888',
    marginTop: 10,
  },
  progressBar: {
    width: width - 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  // Add styles for playback controls (play, pause, skip, etc.)
});

export default PlayerScreen;
