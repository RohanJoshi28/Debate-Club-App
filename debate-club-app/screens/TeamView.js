import {SafeAreaView, StyleSheet} from 'react-native'
import Header from "../components/Header"
import ZoomImage from "../components/ZoomImage"
import {LinearGradient} from 'expo-linear-gradient'
import {useState} from 'react'
import {ip} from "../env"

async function getImage(team_codee, setImage) {
    const response = await fetch(`http://${ip.IP_ADDRESS}:8000/viewimage`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_code: team_code,
        })
    });
    const base64_img = await response.text()
    const uri = `data:image/jpeg;base64,${base64_img}`
    setImage(uri)
}

export default function TeamView ( {route, navigation} ) {
    const {team_code} = route.params; 
    const [image, setImage] = useState(null)
    getImage(team_code, setImage)
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Header text={"Team map"}/>
                {image ?
                <ZoomImage uri={image}/>
                :
                null
                }

            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

