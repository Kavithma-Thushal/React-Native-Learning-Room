import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Ustate() {
    const [number, setNumber] = useState(0);

    return (
        <View>
            <Text>{number}</Text>
            <Button title="+" onPress={() => setNumber(number + 1)} />
            <Button title="-" onPress={() => setNumber(number - 1)} />
        </View>
    );
}
