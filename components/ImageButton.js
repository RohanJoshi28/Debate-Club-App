import * as ImagePicker from "expo-image-picker";
import Button from "./Button";
import {ip} from "../env";
import * as ImageManipulator from "expo-image-manipulator";

async function sendRequestToSetImage(team_code, base64_image) {
    const response = await fetch(`http://${ip.IP_ADDRESS}:8000/setimage`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            team_code: team_code,
            base64_image: base64_image
        })
    });
}

export default function ImageButton({setImage, text, team_code}) {
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            base64: true
        });
        if (!result.cancelled) {
            let stringResult = await result.uri.toString();
            const compressed_img = await ImageManipulator.manipulateAsync(stringResult, [], {
                compress: 0.01,
                base64: true
            });
            const compressed_img_uri = await compressed_img.uri;
            const base64_image = await compressed_img.base64;
            console.log(base64_image.length);
            await sendRequestToSetImage(team_code, base64_image);
            await setImage(compressed_img_uri);
        }
    }

    return (
        <Button
            text={text}
            onPress={() => {
                pickImage();
            }}
        />
    );
}
