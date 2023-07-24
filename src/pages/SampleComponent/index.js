import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import MacBook from '../../assets/images/MacBook.jpg';

const SampleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
      <Andry />
      <Text style={styles.text}>Halomoan</Text>
      <Text style={styles.text}>Ompusunggu</Text>
      <Photo />
      <TextInput style={styles.input} />
      <BoxGreen />
    </View>
  );
};

const Andry = () => {
  return <Text>Andry</Text>;
};

const Photo = () => {
  return <Image source={MacBook} style={styles.image} />;
};

class BoxGreen extends React.Component {
  render() {
    return <Text>Ini Class Component</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: '#0abde3',
  },
  text: {},
  input: {
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SampleComponent;
