import React from 'react'
import { Button, VStack, Text } from 'native-base'

export const ButtonLogin = ({ navigation }) => {
  return (
    <VStack
      w={{
        base: '75%',
        md: '25%',
      }}
    >
      <Button
        mt="2"
        width={'100%'}
        bgColor={'#9BC2F7'}
        onPress={() => navigation.navigate('Home')}
      >
        <Text color={'white'} bold>
          Entrar
        </Text>
      </Button>
    </VStack>
  )
}
