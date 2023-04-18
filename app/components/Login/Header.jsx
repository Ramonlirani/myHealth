import React from 'react'
import { Box, Image, Text } from 'native-base'

export const Header = () => {
  return (
    <Box alignItems={'center'}>
      <Image
        size={'200'}
        source={require('../../../assets/images/vacina2.png')}
        alt="Logo de Vacina"
      />
      <Text bold fontSize={'30'} color={'white'}>
        Bem vindo
      </Text>
    </Box>
  )
}
