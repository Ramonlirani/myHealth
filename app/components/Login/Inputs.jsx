import React, { useState } from 'react'
import { VStack, FormControl, Icon, Input, Pressable, Link } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

export const Inputs = () => {
  const [show, setShow] = useState(false)
  return (
    <VStack space={3} mt="5">
      <FormControl>
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          _focus={{ bg: '#24253c', borderColor: '#00D7DF' }}
          type={'text'}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Email"
          color={'white'}
          bold
        />
      </FormControl>
      <FormControl>
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          _focus={{ bg: '#24253c', borderColor: '#00D7DF' }}
          color={'white'}
          bold
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Senha"
        />
      </FormControl>
      <Link
        _text={{
          fontWeight: 'medium',
          fontSize: 'sm',
          color: '#5F636E',
        }}
        alignSelf="flex-end"
        mt="1"
      >
        Esqueceu a senha?
      </Link>
    </VStack>
  )
}
