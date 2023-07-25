import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.uri_gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View style={{paddingTop: 40}}>
      <Text>Materi Component Dinamis Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
          <Story
            judul="Nature"
            uri_gambar="https://yt3.ggpht.com/yti/AOXPAcWqT2fP6_8c-8vywAW1gtD-kH4tmHBYT4mOVDXHLA=s88-c-k-c0x00ffffff-no-rj"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
