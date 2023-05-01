import * as React from 'react'
import { Text, Link, HStack, Center } from 'native-base'
import { Header } from '../components/Login/Header'
import { Inputs } from '../components/Login/Inputs'
import { ButtonLogin } from '../components/Login/ButtonLogin'

export const Login = ({ navigation }) => {
  return (
    <Center flex={1} w="100%" backgroundColor={'#fff'}>
      <Header />
      <Inputs navigation={navigation} />
      <ButtonLogin navigation={navigation} />
      <HStack mt="6" justifyContent="center">
        <Text fontSize="sm" color="#5F636E" bold>
          Não tem uma conta?{' '}
        </Text>
        <Link
          onPress={() => navigation.navigate('Register')}
          _text={{
            color: '#5F636E',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
        >
          Registre-se
        </Link>
      </HStack>
    </Center>
  )
}
