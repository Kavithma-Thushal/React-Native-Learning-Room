import { router } from 'expo-router';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function DetailsScreen() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button
  onPress={() => router.back()}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<FlatList
        data={DATA}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
