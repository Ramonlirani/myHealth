import React from 'react';
import { Button, Text } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const ButtonNewVaccine = ({ navigation, vaccineList, vaccineListSet }) => {
  return (
    <>
      <Button
        mt="5"
        mb={'10'}
        width={'40%'}
        height={'10'}
        borderRadius={0}
        bgColor={'green.400'}
        onPress={() => {
          navigation.navigate('NewVaccine');
        }}
      >
        <Text color={'white'}>Nova vacina</Text>
      </Button>
    </>
  );
};
