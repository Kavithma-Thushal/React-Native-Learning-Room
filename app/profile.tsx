import { View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();

    return (
        <View>
            <Button
                onPress={() => router.back()}
                title="Back to Index"
                color="#841584"
            />
        </View>
    );
}
