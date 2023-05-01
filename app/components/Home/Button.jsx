import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonNewVaccine = ({ navigation }) => {
  return (
    <VStack
      w={{
        base: '75%',
        md: '25%',
      }}
    >
      <Button
        mt="5"
        width={'100%'}
        bgColor={'green.400'}
        onPress={() => navigation.navigate('NewVaccine')}
      >
        <Text color={'white'} bold>
         Cadastrar Nova vacina
        </Text>
      </Button>
    </VStack>
  )
}
