import {StyleSheet, SafeAreaView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import NavButton from "../components/NavButton";
import Header from "../components/Header";

export default function Home({navigation}) {
    return (
        <LinearGradient colors={["#f22213", "#f57e07"]} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Header text={"Debate Manager"} />
                <NavButton text={"Create team"} navigation={navigation} nextScreen={"CreateTeam"} />
                <NavButton text={"View team"} navigation={navigation} nextScreen={"EnterCode"} />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});
