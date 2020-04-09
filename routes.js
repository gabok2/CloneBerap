import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Custom from './src/components/CustomDrawer';

import HomeScreen from './src/pages/home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        overlayColor="0"
        drawerStyle={{
          width: 90,
        }}
        drawerContent={(props) => <Custom {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
