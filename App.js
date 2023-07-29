import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {songsList} from './src/Songs';
const App = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);
  return (
    <LinearGradient
      colors={['#a34c0d', '#592804', '#241001', '#000000']}
      style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image
        source={require('./src/images/back.png')}
        style={{
          width: 24,
          height: 24,
          marginTop: 50,
          marginLeft: 20,
          tintColor: 'white',
        }}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '85%',
            height: 37,
            backgroundColor: '#704830',
            borderRadius: 3,
            flexDirection: 'row',
            paddingLeft: 15,
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/images/search.png')}
            style={{height: 18, width: 18, tintColor: 'white'}}
          />
          <Text style={{color: 'white', marginLeft: 10}}>Find In PlayList</Text>
        </View>
        <View
          style={{
            width: '15%',
            height: 37,
            backgroundColor: '#704830',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 5,
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>Sort</Text>
        </View>
      </View>

      <Image
        source={{uri: songsList[currentIndex].artwork}}
        style={{
          width: '70%',
          height: '35%',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 5,
        }}
      />
      <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
        <Image
          source={require('./src/images/spotify.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{color: 'white', fontSize: 12, marginLeft: 10}}>
          English Song
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 10}}>
        <Text style={{color: '#bababa', fontSize: 12}}>30,696 saves</Text>
        <Text style={{color: '#bababa', fontSize: 12, marginLeft: 10}}>
          4h 26m
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginTop: 10,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('./src/images/add.png')}
            style={{width: 18, height: 18}}
          />
          <Image
            source={require('./src/images/down-arrow.png')}
            style={{
              width: 18,
              height: 18,
              tintColor: '#bababa',
              marginLeft: 15,
            }}
          />
          <Image
            source={require('./src/images/option.png')}
            style={{
              width: 18,
              height: 18,
              tintColor: '#bababa',
              marginLeft: 15,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./src/images/suffle.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: '#bababa',
              marginLeft: 15,
            }}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('./src/images/suffle.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: '#bababa',
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({});
