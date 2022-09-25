import {Text, StyleSheet} from "react-native";

export default function ErrorText({text}) {
    return <Text style={styles.errortext}>{text}</Text>;
}

const styles = StyleSheet.create({
    errortext: {
        fontSize: 20,
        margin: 30,
        textAlign: "center",
        alignItems: "center"
    }
});
