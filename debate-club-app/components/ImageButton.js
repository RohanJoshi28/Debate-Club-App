import * as ImagePicker from 'expo-image-picker'
import Button from "./Button"

export default function ImageButton({setImage, text}) {

    async function pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditing: true,
        })
        if (!result.cancelled){
            let stringResult = await result.uri.toString()
            await setImage(stringResult)
        }
    }  

    return (
        <Button text={text} onPress={()=>{pickImage()}} />
    );
}