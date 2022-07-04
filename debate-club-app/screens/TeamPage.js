import {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ImageButton from "../components/ImageButton"
import ZoomImage from "../components/ZoomImage"

export default function TeamPage({route, navigation}) {
    const { team_name, team_code } = route.params;
    const [image, setImage] = useState(null)
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={styles.header}>{team_name}</Text>
                        <Text style={styles.codetext}>The join code is {team_code}</Text>
                        <ImageButton text={"Upload map"} team_code={team_code} setImage={setImage}/>
                    </View>
                    <ZoomImage uri={image}/>
            </SafeAreaView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    header: {
        fontSize: 40,
        margin: 20,
    },
    codetext: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    uploadedImage: {
        marginTop: 30,
        height: undefined, 
        width: 200,
    }
})

