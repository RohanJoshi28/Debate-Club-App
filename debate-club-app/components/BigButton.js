import {Text, TouchableOpacity, StyleSheet} from "react-native"

function navigate(navigation, nextScreen){
    if (nextScreen==null){
        return 
    }
    navigation.navigate(nextScreen)
}

export default function BigButton({text, navigation, nextScreen, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{if (onPress) {onPress()}; navigate(navigation, nextScreen)}}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 200, 
        marginTop: 10,
        backgroundColor: "#f7cf02",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
    }
})