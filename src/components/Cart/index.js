import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import cart from '../../assets/icons/cart.png';

export default function Cart(props) {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center', marginTop: 50},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    width: 24,
    height: 24,
    // borderWidth: 1,
    borderRadius: 24 / 2,
    // borderRadius: 1,
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
