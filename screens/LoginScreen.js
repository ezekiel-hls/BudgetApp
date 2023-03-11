import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Touchable,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const LoginScreen = () => {
    const [email, setUsername] = useState("");
    const [password, setPaswword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Signed up with email ", user.email);
            })
            .catch((error) => alert(error.message));
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with email ", user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    placeholder="password"
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPaswword(text)}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        width: "60%",
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    buttonContainer: {
        width: "60%",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#444444",
        width: "100%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#FFFFFF",
    },
});
