// Tamanhos
import React from 'react';
import { View, Button, StyleSheet, Image, Dimensions } from 'react-native';

const Tamanhos = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Tamanhos fixos */}
      <View style={styles.fixedSection}>
        <Button title="Botão 1" onPress={() => {}} />
        <Button title="Botão 2" onPress={() => {}} />
      </View>

      {/* Tamanhos Dinâmicos com Imagem */}
      <Image
        source={{ uri: 'https://arquidiocesedecuritiba.org.br/wp-content/uploads/2025/07/kung.png' }}
        style={{
          width: screenWidth * 0.3,
          height: screenWidth * 0.3,
          resizeMode: 'contain',
          marginTop: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 40,
  },
  fixedSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
});

export default Tamanhos;

