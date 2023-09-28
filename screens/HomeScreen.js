//import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  //const navigation = useNavigation();
  
  
  return (
    <View style={styles.container}>

      {/* Título "Vehículos disponibles" */}
      <Text style={styles.title}>Música disponible</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
