import 'react-native-gesture-handler';

import React from 'react';
import ContextProvider from './src/components/Context/image';

import Routes from './routes';

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
