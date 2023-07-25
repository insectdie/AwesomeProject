import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       follower: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> component did Mount');
//     setTimeout(() => {
//       this.setState({
//         follower: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//     <View
//       style={{
//         marginTop: 40,
//         flexDirection: 'row',
//         backgroundColor: 'grey',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}>
//       <Text style={{backgroundColor: 'red', width: 50, height: 50}}></Text>
//       <Text
//         style={{backgroundColor: 'green', width: 50, height: 50}}></Text>
//       <Text style={{backgroundColor: 'blue', width: 50, height: 50}}></Text>
//       <Text
//         style={{backgroundColor: 'yellow', width: 50, height: 50}}></Text>
//     </View>
//     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//       <Text>Beranda</Text>
//       <Text>Video</Text>
//       <Text>Playlist</Text>
//       <Text>Beranda</Text>
//       <Text>Channel</Text>
//       <Text>Tentang</Text>
//     </View>
//     <View style={{flexDirection: 'row'}}>
//       <Image
//         style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
//         source={{
//           uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/269959681_465355918448896_8280676361460976165_n.jpg?stp=dst-jpg_e0_s150x150&cb=efdfa7ed-2e54251b&efg=eyJxZV9ncm91cHMiOiJbXCJpZ19ianBnX3Byb2ZpbGVfcGljXzA3MDUtMFwiXSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=H9p6Y6bmByMAX-5oy4V&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfA0tvU9qwVa69BSVrteN-b4FH5fpuCRPFIK8lkJwDlkLg&oe=64B9E56F&_nc_sid=10d13b',
//         }}
//       />
//       <View style={{justifyContent: 'center', paddingLeft: 10}}>
//         <Text style={{fontWeight: 'bold', fontSize: 16}}>
//           Andry Ompusunggu
//         </Text>
//         <Text>{this.state.follower} follower</Text>
//       </View>
//     </View>
//   </View>
//     );
//   }
// }

// export default FlexBox;

// const FlexBox = () {
//     // useEffect(() => {
//     //     console.log('did mount');
//     //   }, []);
// };

const FlexBox = () => {
  const [follower, setFollower] = useState(2000);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setFollower(5000);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [follower]);

  useEffect(() => {
    console.log('did update');
    setTimeout(() => {
      setFollower(5000);
    }, 2000);
  }, [follower]);

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{backgroundColor: 'red', width: 50, height: 50}} />
        <Text style={{backgroundColor: 'green', width: 50, height: 50}} />
        <Text style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <Text style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Beranda</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
          source={{
            uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/269959681_465355918448896_8280676361460976165_n.jpg?stp=dst-jpg_e0_s150x150&cb=efdfa7ed-2e54251b&efg=eyJxZV9ncm91cHMiOiJbXCJpZ19ianBnX3Byb2ZpbGVfcGljXzA3MDUtMFwiXSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=H9p6Y6bmByMAX-5oy4V&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfA0tvU9qwVa69BSVrteN-b4FH5fpuCRPFIK8lkJwDlkLg&oe=64B9E56F&_nc_sid=10d13b',
          }}
        />
        <View style={{justifyContent: 'center', paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Andry Ompusunggu
          </Text>
          <Text>{follower} follower</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
