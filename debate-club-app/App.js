import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import CreateTeam from "./screens/CreateTeam"
import TeamPage from "./screens/TeamPage"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
              />
              <Stack.Screen
                name="CreateTeam"
                component={CreateTeam}
              />
              <Stack.Screen
                name="TeamPage"
                component={TeamPage}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
