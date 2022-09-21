import {Text, SafeAreaView, StyleSheet} from "react-native";
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import TextField from "../components/TextField";
import NavButton from "../components/NavButton";
import ErrorText from "../components/ErrorText";
import {url} from "../env";

async function sendRequestToCreateTeam(team_name, setTeamCreated) {
    const response = await fetch(`${url.url}/createteam`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            team_name: team_name
        })
    });
    const text = await response.text();
    if (!(response.status == 409)) {
        setTeamCreated(true);
    }

    return text;
}

export default function CreateTeam({navigation}) {
    const [text, onChangeText] = useState("");
    const [resText, setResText] = useState("");
    const [teamCreated, setTeamCreated] = useState(false);
    return (
        <LinearGradient colors={["#f22213", "#f57e07"]} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Team Name</Text>
                <TextField text={text} onChangeText={onChangeText} />
                {!teamCreated ? (
                    <NavButton
                        text={"Submit"}
                        navigation={navigation}
                        nextScreen={null}
                        onPress={async () => {
                            setResText(await sendRequestToCreateTeam(text, setTeamCreated));
                        }}
                    />
                ) : null}
                <ErrorText text={resText} />
                {teamCreated ? (
                    <NavButton
                        text={"Next"}
                        navigation={navigation}
                        nextScreen={"TeamPage"}
                        context={{team_name: text, team_code: resText.slice(-8)}}
                    />
                ) : null}
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    header: {
        fontSize: 40,
        margin: 30,
        textAlign: "center",
        alignItems: "center"
    }
});
