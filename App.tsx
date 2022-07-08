import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
