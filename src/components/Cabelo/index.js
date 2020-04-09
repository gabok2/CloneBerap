import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, SafeAreaView } from 'react-native';

import api from '../../services/api';

function CustomDrawer() {
  const [cabelos, setCabelos] = useState([]);

  async function handleImage() {
    const response = await api.get('/Cabelos');

    setCabelos(response.data);
  }

  useEffect(() => {
    handleImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cabelos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ position: 'relative', right: 50 }}>
            <SafeAreaView>
              <Image
                style={{
                  marginTop: 40,
                  resizeMode: 'contain',
                  width: 200,
                  height: 200,
                }}
                source={{ uri: item.image }}
              />
            </SafeAreaView>
          </View>
        )}
      />
    </View>
  );
}

export default CustomDrawer;
