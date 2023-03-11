import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        signOut(auth)
            .then((userCredentials) => {
                navigation.navigate("Login");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container} behavior="padding">
            <View>
                <Text>Email: {auth.currentUser?.email}</Text>
                <Text>Verified: {auth.currentUser?.emailVerified}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
