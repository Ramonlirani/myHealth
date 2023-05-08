import React, { useState } from 'react'
import { VStack, FormControl, Icon, Input, Pressable, Link, Button } from 'native-base'
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
          type={'text'}         
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
    </VStack>
  )
}
