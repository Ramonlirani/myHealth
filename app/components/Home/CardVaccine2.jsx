import { Text, View } from 'native-base';

export const CardVaccine2 = ({ item }) => {
  return (
    <View>
      <Text>{item.donv}</Text>
      <Text>{item.dose}</Text>

      <Text>{item.dov}</Text>

      <Text>{item.id}</Text>

      <Text>{item.name}</Text>
    </View>
  );
};
