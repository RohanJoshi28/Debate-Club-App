import {Text, StyleSheet} from 'react-native'

export default function Header ({text}) {
    return (
        <Text style={styles.header}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        margin: 30,
    }
})