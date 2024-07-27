import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Image, Button, Alert } from 'react-native';

export default function Index() {

  const router = useRouter();

  const [customerName, setCustomerName] = useState('');

  const saveCustomer = () => {
    Alert.alert(customerName);
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: "#FF0000",
    },
    img: {
      width: 100,
      height: 100,
    },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <View>
      <Text style={styles.text}>Customer Management</Text>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>

      <TextInput
        style={styles.input}
        placeholder='Customer Name'
        value={customerName}
        onChangeText={setCustomerName}
      />

      <Button title="Save" onPress={saveCustomer} />

      <Button
        onPress={() => router.push('/profile')}
        title="View Profile"
        color="#841584"
      />
    </View>
  );
}
