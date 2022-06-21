import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import BigButton from "../components/BigButton"

export default function Home({navigation}) {
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>Debate Manager</Text>
                    <BigButton text={"Create team"} navigation={navigation} nextScreen={"CreateTeam"}/>
            </SafeAreaView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    header: {
        fontSize: 40,
        margin: 30,
    }
})

