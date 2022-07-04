import TextField from "../components/TextField"
import Header from "../components/Header"
import Button from "../components/Button"
import ErrorText from "../components/ErrorText"
import {SafeAreaView, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useState} from 'react'
import {ip} from "../env"

async function onPress (team_code, navigation) {
    const response = await fetch(`http://${ip.IP_ADDRESS}:8000/teamname`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_code: team_code,
        })
    });
    if (response.status==404){
        navigation.navigate("EnterCode", {errorMsg: "Team code was not found"})
    } else if (response.status==500) {
        navigation.navigate("EnterCode", {errorMsg: "Team code must be a number"})
        console.log("HELLO")
    } else {
        navigation.navigate("TeamView", {team_code: team_code})
    }
}

export default function EnterCode ({route, navigation}) {
    const [errorMsg, setErrorMsg] = useState(null)
    const [text, onChangeText] = useState("")

    if (typeof route.params =="object"){
        const msg = route.params.errorMsg;
        if (msg!=errorMsg){
            setErrorMsg(msg);
        }
    }

    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Header text={"Enter team code"}/>
                <TextField text={text} onChangeText={onChangeText} />
                { errorMsg ? 
                <ErrorText text={errorMsg}/>
                : null
                }
                <Button text={"Submit"} onPress={()=>onPress(text, navigation)}/>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    }
}) 