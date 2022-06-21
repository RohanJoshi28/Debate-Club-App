import {Text, SafeAreaView, TextInput, StyleSheet} from 'react-native'
import {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import BigButton from "../components/BigButton"
import {ip} from "../env"

async function sendRequestToCreateTeam(team_name, setTeamCreated) {
    const response = await fetch(`http://${ip.IP_ADDRESS}:8000/createteam`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_name: team_name
        })
    });
    const text = await response.text()
    if (!(response.status==409)){
        setTeamCreated(true)
    }

    return text
}

export default function CreateTeam ({navigation}) {
    const [text, onChangeText] = useState("")
    const [resText, setResText] = useState("")
    const [teamCreated, setTeamCreated] = useState(false)
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Team Name</Text>
                <TextInput value={text} onChangeText={onChangeText} style={styles.input}/>
                { !teamCreated ?
                <BigButton text={"Submit"} navigation={navigation} nextScreen={null} onPress={async ()=>{setResText(await sendRequestToCreateTeam(text, setTeamCreated))}}/> : null
                }
                <Text style={styles.errortext}>{resText}</Text>
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
    },
    errortext: {
        fontSize: 20,
        margin: 30,
        textAlign: 'center',
        alignItems: 'center',
    }
});