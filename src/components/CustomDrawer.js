import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import api from '../services/api';
import { useImage } from './Context/image';

function CustomDrawer() {
  const [imagems, setImagems] = useState([]);
  const [cabelos, setCabelos] = useState([]);

  const { activeImage, setActiveImage, setCabelo, cabelo } = useImage();

  async function handleCabelo() {
    const response = await api.get('/Cabelos');

    setCabelos(response.data);
  }

  useEffect(() => {
    handleCabelo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleImage() {
    const response = await api.get('/Imagens');

    setImagems(response.data);
  }

  useEffect(() => {
    handleImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function boneco(id) {
    const datad = imagems.find((a) => a.id === id);
    setActiveImage(datad);
  }

  function cabelo1(id) {
    const datad = cabelos.find((a) => a.id === id);

    setCabelo(datad);
  }

  function bonecos() {
    return (
      <>
        <FlatList
          data={imagems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View
              style={{
                position: 'relative',
                borderColor: '#111',
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}
            >
              <SafeAreaView>
                <TouchableOpacity
                  style={{
                    borderColor:
                      item.id === activeImage.id ? activeImage.color : null,
                    borderTopWidth: item.id === activeImage.id ? 2 : null,
                    borderBottomWidth: item.id === activeImage.id ? 2 : null,
                    borderLeftWidth: item.id === activeImage.id ? 2 : null,
                    borderRightWidth: item.id === activeImage.id ? 2 : null,
                  }}
                  onPress={() => {
                    boneco(item.id);
                  }}
                >
                  <Image
                    style={{
                      position: 'relative',
                      right: 30,

                      resizeMode: 'contain',
                      width: 150,
                      height: 150,
                    }}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>
              </SafeAreaView>
            </View>
          )}
        />
      </>
    );
  }

  function cabeloss() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cabelos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              position: 'relative',
              flex: 1,

              borderColor: '#111',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          >
            <SafeAreaView>
              <TouchableOpacity
                style={{
                  padding: 20,
                  borderColor: item.id === cabelo.id ? cabelo.color : null,
                  borderTopWidth: item.id === cabelo.id ? 2 : null,
                  borderBottomWidth: item.id === cabelo.id ? 2 : null,
                  borderLeftWidth: item.id === cabelo.id ? 2 : null,
                  borderRightWidth: item.id === cabelo.id ? 2 : null,
                }}
                onPress={() => {
                  cabelo1(item.id);
                }}
              >
                <Image
                  style={{
                    position: 'relative',

                    resizeMode: 'contain',
                    width: 50,
                    height: 50,
                  }}
                  source={{ uri: item.cabeloMenor }}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        )}
      />
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={bonecos}
        ListFooterComponent={cabeloss}
      />
    </SafeAreaView>
  );
}

export default CustomDrawer;
