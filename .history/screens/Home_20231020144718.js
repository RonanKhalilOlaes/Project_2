import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Pressable
                style={styles.button}
                title="Next"
                onPress={() => navigation.push('About')}
            >
                <Text style={styles.text}>Next</Text>
            </Pressable>
        </View>
    );
}

// export default function Button(props) {
//     const { onPress, title = 'Next' } = props;
//     return (
//         <Pressable style={styles.button} onPress={onPress}>
//             <Text style={styles.text}>{title}</Text>
//         </Pressable>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 55,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#4F4F4F',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    }
});
