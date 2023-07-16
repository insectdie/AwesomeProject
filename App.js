import React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import MacBook from './MacBook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Styling Component</Text>
      <View style={styles.box} />
      <View style={styles.card}>
        <Image source={MacBook} style={styles.image} />
        <Text style={styles.title}>New MacBook Pro 2019</Text>
        <Text style={styles.price}>Rp. 25.000.000</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
    marginTop: 20,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 20,
    marginLeft: 20,
  },
  card: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 16,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
