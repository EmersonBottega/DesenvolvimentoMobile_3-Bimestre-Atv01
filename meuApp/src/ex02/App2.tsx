// Contador (state)
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type State = {
  count: number;
};

export default class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="-1" onPress={() => this.setState({ count: this.state.count - 1 })} />
        <Text style={styles.text}>{this.state.count}</Text>
        <Button title="+1" onPress={() => this.setState({ count: this.state.count + 1 })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 32,
    marginHorizontal: 20,
  },
});
