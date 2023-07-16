import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import MacBook from './MacBook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View style={{paddingTop: 70, paddingLeft: 20}}>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'grey',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={MacBook}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          New MacBook Pro 2019
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 16}}>Rp. 25.000.000</Text>
        <Text style={{fontSize:12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
        <View style={{backgroundColor: '#6FCF97',
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20
            }}>
          <Text style={{fontSize: 14, 
              fontWeight: '600', 
              color: 'white', 
              textAlign: 'center'}}>BELI</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
    marginTop: 20,
  },
});

const SampleComponent = () => {
  return (
    <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Andry />
      <Text>Halomoan</Text>
      <Text>Ompusunggu</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
    </View>
  );
};

const Andry = () => {
  return <Text>Andry</Text>;
};

const Photo = () => {
  return <Image
    source= {MacBook}
    style={{width:100, height:100}} />;
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Class Component</Text>;
  }
}

export default App;
