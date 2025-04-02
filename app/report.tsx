import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Report() {
  const router = useRouter();

  return (
    <View >
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
