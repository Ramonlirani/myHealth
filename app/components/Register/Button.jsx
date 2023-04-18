import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonRegister = ({ handleSubmit }) => {
  const onSubmit = (data) => console.log(data)

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
