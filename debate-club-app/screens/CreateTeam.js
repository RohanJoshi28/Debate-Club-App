import {Text, SafeAreaView, TextInput, StyleSheet} from 'react-native'
import {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import BigButton from "../components/BigButton"

export default function CreateTeam ({navigation}) {
    const [text, onChangeText] = useState("")
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Team Name</Text>
                <TextInput value={text} onChangeText={onChangeText} style={styles.input}/>
                <BigButton text={"Submit"} navigation={navigation} nextScreen={"Home"}/>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 300,
      height: 60,
      fontSize: 30,
    },
    header: {
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        alignItems: 'center',
    }
});