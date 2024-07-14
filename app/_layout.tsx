import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Tabs.Screen name="profile" options={{ headerTitle: 'Profile' }} />
      <Tabs.Screen name="gallery" options={{ headerTitle: 'Gallery' }} />
    </Tabs>
  );
}
