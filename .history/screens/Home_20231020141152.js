import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <StatusBar style="auto" />
            <Button style={styles.button}
                title="Next"
                onPress={() => navigation.push('About')}
            />
            <Pressable>
                <Text>Press me</Text>
            </Pressable>
        </View>
    );
}

export default function Button(props) {
    const { onPress, title = 'Next' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: '#fff',

    }
});