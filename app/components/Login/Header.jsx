import React from 'react'
import { Box, Image, Text } from 'native-base'

export const Header = () => {
  return (
    <Box alignItems={'center'} >
      <Box flexDirection={'row'} >
      <Image
          alt='Logo'
          source={require('../../../assets/images/icon-vaccine.png')}
          />
      <Text underline fontSize={'45'} color={'#419ED7'}>
        My Health
      </Text>
      </Box>
      <Text color={'#419ED7'} fontSize={'25'} textAlign={'center'}>
        Controle as suas vacinas e fique seguro
      </Text>
    </Box>
  )
}
