import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react'
import TextField from "../components/TextField";
import ErrorText from '../components/ErrorText';
import Header from "../components/Header"
import Button from '../components/Button';
import {ip} from "../env"

async function createUser (userfirst, userlast, email, navigation, setError) {
    if (userfirst.length < 2 || userlast.length < 2){
        setError("Your first and last name must be greater than 1 character");
        return;
    }

    const response = await fetch(`http://${ip.IP_ADDRESS}:8000/createuser`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first name": userfirst,
            "last name": userlast,
            "email": email, 
        })
    });

    navigation.navigate("Home", {"first name": userfirst, "last name": userlast, "email": email})
}

export default function SignUp({route, navigation}) {
    const { email } = route.params; 
    const [userfirst, setUserfirst] = useState("");
    const [userlast, setUserlast] = useState("");
    const [error, setError] = useState("");
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                    <Header text={"Sign Up with"}/>
                    <Text style={{fontSize: 30}}>{email}</Text>

                    <Text style={styles.label}>First name</Text>
                    <TextField text={userfirst} onChangeText={setUserfirst}/>

                    <Text style={styles.label}>Last name</Text>
                    <TextField text={userlast} onChangeText={setUserlast}/>
                    <View style={{marginTop: 50}}>
                        <Button text={"Next"} onPress={()=>createUser(userfirst, userlast, email, navigation, setError)}/>
                    </View>
                    <ErrorText text={error}/>

            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    }, label: {
        fontSize: 40,
        marginTop: 30,
    }
})

