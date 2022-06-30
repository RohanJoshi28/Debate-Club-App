import {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ImageButton from "../components/ImageButton"
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function TeamPage({route, navigation}) {
    const { team_name, team_code } = route.params;
    const [image, setImage] = useState(null)
    return (
        <LinearGradient colors={['#f22213', '#f57e07']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={styles.header}>{team_name}</Text>
                        <Text style={styles.codetext}>The join code is {team_code}</Text>
                        <ImageButton text={"Upload map"} setImage={setImage}/>
                    </View>
                    <View style={{flex: 1, overflow: 'hidden'}}>
                        <ReactNativeZoomableView
                            maxZoom={1.5}
                            minZoom={0.5}
                            zoomStep={0.5}
                            initialZoom={1}
                            bindToBorders={true}
                            doubleTapZoomToCenter={true}
                            style={{
                                padding: 10,
                                flex: 1,
                                overflow: 'hidden'
                        }}>
                            <View style={{margin: 30}}>
                                {image ? <Image source={{uri: image}} style={{width: 350, height: 350, resizeMode: 'contain'}}/>: null}
                            </View>
                        </ReactNativeZoomableView>
                    </View>
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

