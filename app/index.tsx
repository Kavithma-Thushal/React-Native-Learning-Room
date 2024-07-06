import { View, Text, StyleSheet, TextInput, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Index() {

  const [customerName, setCustomerName] = useState('')

  const saveCustomer = () => {
    Alert.alert(` ${customerName}`)
  }

  const styles = StyleSheet.create({
    nametext: {
      fontSize: 23,
      color: "#FF0000"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
  });

  return (
    <View>
      <Text style={styles.nametext}>Customer Management</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder='Customer Name'
        value={customerName}
        onChangeText={setCustomerName}
      />
      <Button
        title="Save"
        onPress={saveCustomer}
      />
    </View>
  )
}