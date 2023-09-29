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
const { width, height } = Dimensions.get('window');

const PlayerScreen = ({ route }) => {
  const { songTitle, artistName, coverImage } = route.params;

  useEffect(() => {
    const setupAndPlaySong = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
          id: 'mySong', // Unique ID for the song
          url: `../src/audio/${songTitle}.mp3`, // Path to the song file
          title: songTitle,
          artist: artistName,
          artwork: coverImage,
        });
        await TrackPlayer.play();
      } catch (error) {
        console.error('Error playing the song:', error);
      }
    };

    setupAndPlaySong();

    return () => {
      TrackPlayer.destroy();
    };
  }, [songTitle, artistName, coverImage]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Player UI */}
      <View style={styles.playerContainer}>
        {/* Display song title, artist name, album cover, and playback controls */}
        <Image source={coverImage} style={styles.albumCover} />
        <Text style={styles.songTitle}>{songTitle}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
        {/* Add playback controls here (play, pause, skip, etc.) */}
      </View>
      {/* Progress bar */}
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={0} // You need to calculate and update the progress value
        minimumTrackTintColor="#FFD369"
        maximumTrackTintColor="#fff"
      />
      {/* Playback controls */}
      {/* Add playback controls here (play, pause, skip, etc.) */}
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
