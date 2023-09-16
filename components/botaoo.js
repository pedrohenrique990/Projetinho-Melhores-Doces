import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Botao() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
           Alert.alert('VER MAIS DOCES')
        }}
      >
        <Text style={styles.buttonText}>VER MAIS PLANETAS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#EF476F',
    padding: 15,
    borderRadius: 30,
    width: 300,
  },
  buttonText: {
    color: '#F7D6E0',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
