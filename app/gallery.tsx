import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Button, Image, StyleSheet } from "react-native";
import { User, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/FirebaseConfig";

export default function Gallery() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const storageRef = ref(storage, `images/${Date.now()}`);
      await uploadBytes(storageRef, blob);
      alert("Image uploaded successfully!");
    } catch (error) {
      alert("Error uploading image:", error.message);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload" onPress={uploadImage}></Button>
    </View>
  );
}
