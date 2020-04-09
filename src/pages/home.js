import React from 'react';
import { View, Image } from 'react-native';

import boneco from '../assets/male-midle01.png';
import { useImage } from '../components/Context/image';

function Home() {
  const { activeImage, cabelo } = useImage();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{
          position: 'relative',
          top: 300,
          width: 350,
          height: 350,
          resizeMode: 'contain',
        }}
        source={boneco}
      />

      <Image
        source={{ uri: activeImage.image }}
        style={{
          position: 'relative',

          bottom: 50,
          width: 350,
          height: 350,
          resizeMode: 'contain',
        }}
      />

      <Image
        source={{ uri: cabelo.image }}
        style={{
          position: 'relative',
          bottom: 400,

          width: 350,
          height: 350,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}

export default Home;
