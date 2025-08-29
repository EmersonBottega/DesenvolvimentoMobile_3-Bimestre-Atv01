// Alinhamentos na prática
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Alignment = () => {
  const [layout, setLayout] = useState(0);

  const handleLayoutChange = () => {
    setLayout((proximo) => (proximo + 1) % 3);
  };

  let layoutStyle;
  switch (layout) {
    case 0:
      layoutStyle = styles.center;
      break;
    case 1:
      layoutStyle = styles.flexStart;
      break;
    case 2:
      layoutStyle = styles.spaceBetween;
      break;
    default:
      layoutStyle = styles.center;
  }

  return (
    <View style={styles.wrapper}>
      <View style={[styles.box, layoutStyle]}>
        <Button title="A" onPress={() => {}} />
        <Button title="B" onPress={() => {}} />
        <Button title="C" onPress={() => {}} />
      </View>
      <View style={styles.buttons}>
        <Button title="Próximo Layout" onPress={handleLayoutChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  box: {
    height: 200,
    width: '80%',
    backgroundColor: '#eee',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  buttons: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Alignment;
