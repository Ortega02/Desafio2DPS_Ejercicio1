import React, { useEffect, useState } from 'react';
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
      },
    ];

    // Agrega las pistas a la cola
    await TrackPlayer.add(tracks);

    // Inicia la reproducción de la primera pista
    await TrackPlayer.play();
  };


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
        <Icon name="chevron-left" size={24} color="white" />
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
          maximumValue={1} // Usar duration en lugar de 1
          value={0} // Usar position para reflejar el progreso
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#fff"
        />

        <View style={styles.controlButtons}>
          <TouchableOpacity /*onPress={handlePrevious}*/>
            <Icon name="step-backward" size={24} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePause}>
            <Icon name="pause" size={24} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStop}>
            <Icon name="stop" size={24} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity /*onPress={handleNext}*/>
            <Icon name="step-forward" size={24} color="#888888" />
          </TouchableOpacity>
        </View>
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
  timeControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40,
    marginTop: 10,
  },
  durationText: {
    color: '#888888',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40,
    marginTop: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default PlayerScreen;
