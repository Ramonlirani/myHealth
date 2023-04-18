import * as React from 'react'
import { Text, Link, HStack, Center } from 'native-base'
import { Header } from '../components/Login/Header'
import { Inputs } from '../components/Login/Inputs'
import { ButtonLogin } from '../components/Login/ButtonLogin'

export const Login = () => {
  return (
    <Center flex={1} w="100%" backgroundColor={'#24253c'}>
      <Header />
      <Inputs />
      <ButtonLogin />
      <HStack mt="6" justifyContent="center">
        <Text fontSize="sm" color="#5F636E" bold>
          Não tem uma conta?{' '}
        </Text>
        <Link
          _text={{
            color: '#5F636E',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          href="#"
        >
          Registre-se
        </Link>
      </HStack>
    </Center>
  )
}
