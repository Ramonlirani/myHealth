import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonNewVaccine = ({ navigation }) => {
  return (
    <>
      <Button
        mt="5"
        mb={'10'}
        width={'40%'}
        height={'10'}
        borderRadius={0}
        bgColor={'green.400'}
        onPress={() => navigation.navigate('NewVaccine')}
      >
        <Text color={'white'} >
         Nova vacina
        </Text>
      </Button>
    </>
  )
}
