import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios, * as others from 'axios';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setDataUser(json.data);
    //   });
    Axios.get('https://reqres.in/api/users/3')
      .then(result => {
        setDataUser(result.data.data);
      })
      .catch(err => console.log('err: ', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Ompusunggu',
      job: 'Investor',
    };

    Axios.post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
        setDataJob(result.data);
      })
      .catch(err => console.log('error: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanila JS</Text>
      <Button title="Get Data" onPress={getData} />

      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <Text>Response POST DATA</Text>
      <Button title="Post Data" onPress={postData} />
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20, marginTop: 40},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
