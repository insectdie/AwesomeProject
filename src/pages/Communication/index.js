import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Komunikasi Antar Komponen</Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    paddingTop: 40,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleSection: {
    marginBottom: 20,
  },
});
