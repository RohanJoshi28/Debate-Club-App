import {useEffect, useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {SafeAreaView} from 'react-native'
import Header from "../components/Header"
import GoogleButton from "../components/GoogleButton"
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {ip} from "../env"

WebBrowser.maybeCompleteAuthSession();

async function navigateEmail(navigation, email){
    let userFoundResponse = await fetch(`http://${ip.IP_ADDRESS}:8000/getuser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            email: email
        })
    })
    if (userFoundResponse.status==200){
        user = userFoundResponse.json();
        navigation.navigate("Home", {first_name: user.first_name, last_name: user.last_name, email: email});
    } else {
        navigation.navigate("SignUp", {email: email})
    }
}

async function getUserEmail(authentication){
    let userEmailResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });

    userEmailResponse = await userEmailResponse.json()

    let email = await userEmailResponse.email;
    return email; 
}

export default function Login ({navigation}) {
    const [isSuccess, setSuccess] = useState(false);
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '331367533072-fcvdb9pm501cgb0ipl96mur1fm06lj11.apps.googleusercontent.com',
        iosClientId: '331367533072-anmncoj0i2i015ohomf33hsmuc6u081o.apps.googleusercontent.com',
        androidClientId: '331367533072-fbohp9nh3e1mdfvc5h4rhs98ohhdsutd.apps.googleusercontent.com',
    });

    useEffect(() => {
        async function navigateLogin(){
            if (response?.type === 'success') {
                setSuccess(true);
                const { authentication } = response;

                let email = await getUserEmail(authentication);
                await navigateEmail(navigation, email);
            }
        }  
        navigateLogin(); 
      }, [response]);

    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <Header text={"Login with google"}/>
                <GoogleButton style={{marginTop: "auto", marginBottom: "auto"}} onPress={()=>(promptAsync())} disabled={isSuccess}/>
            </SafeAreaView>
        </LinearGradient>
    )
}