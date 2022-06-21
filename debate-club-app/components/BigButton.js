import {Text, TouchableOpacity, StyleSheet} from "react-native"

export default function BigButton({text, navigation, nextScreen}) {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate(nextScreen)}}>
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