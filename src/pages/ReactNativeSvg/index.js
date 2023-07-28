import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IllustrationMyApp from '../../assets/images/test.svg';

export default function ReactNativeSvg() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi menggunakan File SVG didalam React Native
      </Text>
      {/* <IllustrationMyApp width={244} height={125} /> */}
    </View>
  );
}

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
