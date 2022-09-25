import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import CreateTeam from "./screens/CreateTeam";
import TeamPage from "./screens/TeamPage";
import TeamView from "./screens/TeamView";
import EnterCode from "./screens/EnterCode";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="CreateTeam" component={CreateTeam} />
                    <Stack.Screen name="TeamPage" component={TeamPage} />
                    <Stack.Screen name="TeamView" component={TeamView} />
                    <Stack.Screen name="EnterCode" component={EnterCode} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
