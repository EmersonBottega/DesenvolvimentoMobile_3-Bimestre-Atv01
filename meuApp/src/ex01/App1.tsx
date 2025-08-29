// Saudação com Props
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type GreetingProps = {
  name: string;
  tamanho?: number;
};

class Greeting extends React.Component<GreetingProps> {
  render() {
    const { name, tamanho = 24 } = this.props;
    return <Text style={[styles.text, { fontSize: tamanho }]}>Olá, {name}!</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Greeting;