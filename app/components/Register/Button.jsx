import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonRegister = ({ handleSubmit, navigation }) => {
  const onSubmit = (data) => {
    console.log(data)
    navigation.navigate('Home')
  }

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
        bgColor={'#9BC2F7'}
        onPress={handleSubmit(onSubmit)}
      >
        <Text color={'white'} bold>
          Cadastrar
        </Text>
      </Button>
    </VStack>
  )
}
