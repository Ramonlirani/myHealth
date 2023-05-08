import React from 'react'
import {
  HStack,
  Text,
  Box,
  StatusBar,
  Icon,
  Pressable,
} from 'native-base'
import { logo } from '../../../assets/images/vacina.png'
import { MaterialIcons } from '@expo/vector-icons';


export const HeaderRegister = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Box safeAreaTop bg="backgroundColor.header" >
        <HStack
          bg="backgroundColor.header"
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack alignItems="center" flexDirection={'row'} >
            <Pressable onPress={() => navigation.goBack()}>
          <Icon
               as={<MaterialIcons name="arrow-back-ios" />}
               size={5}
               color="primary.button.forgot"
               ml={3}
               />
               </Pressable>
            <Text color="primary.color" fontSize="24" left={4}>
              Nova Conta
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  )
}
