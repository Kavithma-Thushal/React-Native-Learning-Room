import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { auth } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (user) alert("SignUp Successfully...!");
    } catch (error: any) {
      console.log(error);
      alert("SignUp Failed : " + error.message);
    }
  };

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) alert("SignIn Successfully...!");
    } catch (error: any) {
      console.log(error);
      alert("SignIn Failed : " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={signUp} />
        <Button title="Sign In" onPress={signIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
