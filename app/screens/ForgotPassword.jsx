import { Button, Center, Input, Text, VStack } from 'native-base'
import React from 'react'

export const ForgotPassword = ({navigation}) => {
    const onSubmit = (data) => {
        console.log(data)
      }

  return (
    <VStack  height={'100%'} justifyContent={'center'} alignItems={'center'} backgroundColor={'white'} space={3} >
        <Text fontWeight={'medium'} fontSize={'sm'} color={'#5F636E'}>Digite seu email para recuperar sua senha</Text>
        <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            backgroundColor={'#fff'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            color={'black'}
          />
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
        onPress={onSubmit}
      >
        <Text color={'white'} bold>
          Enviar
        </Text>
      </Button>
    </VStack>
    </VStack>
  )
}


