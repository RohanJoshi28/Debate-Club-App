import * as React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

const BUTTON_HEIGHT = 40;
const TEXT_WIDTH = 240;
const LOGO_WIDTH = BUTTON_HEIGHT - 5;
const BUTTON_WIDTH = TEXT_WIDTH + LOGO_WIDTH;

export default function GoogleButton({onPress, disabled = false}) {
    return (
        <View
            style={{
                textAlign: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30%"
            }}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onPress();
                }}
                disabled={disabled}
            >
                <View style={{marginLeft: 10}}>
                    <Image
                        source={{uri: "https://developers.google.com/static/identity/images/g-logo.png"}}
                        style={{width: LOGO_WIDTH, height: LOGO_WIDTH}}
                    />
                </View>
                <View style={styles.buttonTextBox}>
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        flexDirection: "row",
        height: BUTTON_HEIGHT,
        backgroundColor: "white",
        width: BUTTON_WIDTH
    },
    buttonTextBox: {
        width: TEXT_WIDTH,
        height: BUTTON_HEIGHT,
        backgroundColor: "white"
    },
    buttonText: {
        fontSize: 25,
        margin: 5,
        marginLeft: 15
    }
});
