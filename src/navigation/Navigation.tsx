import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {default as React} from 'react';
import LandingScreen from '../views/landingScreen';

const Stack = createNativeStackNavigator();

const SongNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Find Lyrics" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return <SongNavigation />;
}
