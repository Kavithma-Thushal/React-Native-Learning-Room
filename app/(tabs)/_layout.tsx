import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Tabs.Screen name="profile" options={{ headerTitle: 'This is profile' }} />
      <Tabs.Screen name="gallery" options={{ headerTitle: 'This is gallery' }} />
    </Tabs>
  );
}
