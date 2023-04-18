import React from 'react'
import { VStack, Box, Divider, Card, Text } from 'native-base'

export const CardVaccine = () => {
  return (
    <Box
      border="1"
      borderRadius="md"
      width={'100%'}
      alignItems={'center'}
      flexDirection={'row'}
    >
      <Card
        backgroundColor={'white'}
        width={'50%'}
        height={'40'}
        marginLeft={2}
      >
        <Box alignItems={'center'}>
          <Text color={'#355c7d'} bold>
            Febre amarela
          </Text>
          <Box
            backgroundColor={'#355c7d'}
            borderRadius={6}
            width={20}
            alignItems={'center'}
          >
            <Text color={'white'}>1a. dose</Text>
          </Box>
          <Text>11/06/2022</Text>
        </Box>
      </Card>
    </Box>
  )
}
