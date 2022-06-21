import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function Home({navigation}) {
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>Debate Manager</Text>
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
        marginTop: 30,
        
    }
})

