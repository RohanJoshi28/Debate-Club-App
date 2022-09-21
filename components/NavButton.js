import Button from "./Button";

function navigate(navigation, nextScreen, context) {
    if (nextScreen == null) {
        return;
    }
    navigation.navigate(nextScreen, context);
}

export default function NavButton({text, navigation, nextScreen, onPress, context}) {
    return (
        <Button
            onPress={() => {
                if (onPress) {
                    onPress();
                }
                navigate(navigation, nextScreen, context);
            }}
            text={text}
        />
    );
}
