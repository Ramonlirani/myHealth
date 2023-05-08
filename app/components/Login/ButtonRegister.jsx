import { Button, Text, VStack } from 'native-base'
import React from 'react'

export const ButtonRegister = ({navigation}) => {
  return (
    <>
      <Button
      mt={'6'}
      borderRadius={0}
      width={'50%'}
      bgColor={'primary.color'}
      onPress={() => navigation.navigate('Register')}

      
      >
        <Text color={'white'} >
          Criar minha conta
        </Text>
      </Button>
    </>
  )
}
