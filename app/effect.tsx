import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Effect() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Number : ", number);
        return (() => { console.log("cleaned Up") });
    }, [number]);

    return (
        <View>
            <Text>{number}</Text>
            <Button title="+" onPress={() => setNumber(number + 1)} />
            <Button title="-" onPress={() => setNumber(number - 1)} />
        </View>
    );
}
