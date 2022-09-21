import {TextInput, StyleSheet} from "react-native";

export default function TextField({text, onChangeText}) {
    return <TextInput value={text} onChangeText={onChangeText} style={styles.input} />;
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        height: 60,
        fontSize: 30
    }
});
