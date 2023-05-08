import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonRegister = ({ handleSubmit, navigation }) => {
  const onSubmit = (data) => {
    console.log(data)
    navigation.navigate('Home')
  }

  return (
    <>
      <Button
        borderRadius={0}
        mt="10"
        width={'40%'}
        height={'10'}
        bgColor={'primary.button.success'}
        onPress={handleSubmit(onSubmit)}
      >
        <Text color={'white'}>
          Cadastrar
        </Text>
      </Button>
    </>
  )
}
