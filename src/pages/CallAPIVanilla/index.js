import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const CallAPIVanilla = () => {
  useEffect(() => {
    //Call Api Method Get
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => console.log(json));

    //Call API Method POST
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    console.log('data object: ', dataForAPI);
    console.log('data stringfy: ', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json);
      });
  }, []);
  return (
    <View>
      <Text>Call API dengan Vanila JS</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({});
