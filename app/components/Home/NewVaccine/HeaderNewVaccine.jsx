import React from 'react'
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  Image,
  Box,
  StatusBar,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { logo } from '../../../../assets/images/vacina.png'

export const HeaderNewVaccine = () => {
  return (
    <>
      <StatusBar />
      <Box safeAreaTop bg="#355c7d">
        <HStack
          bg="#355c7d"
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack alignItems="center" paddingLeft={4}>
            <Image
              size={'10'}
              source={require('../../../../assets/images/vacina2.png')}
              alt="Logo de Vacina"
            />
            <Text color="white" fontSize="20" fontWeight="bold" left={4}>
              Nova vacina
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  )
}
