import React from 'react'
import { VStack, Box, Divider, Card, Text, Image, Center } from 'native-base'

export const CardVaccine = () => {
  return (
    <Center>
      <Box
        border="1"
        borderRadius="md"
        width={'100%'}
        alignItems={'center'}
        flexDirection={'row'}
        paddingTop={5}
      >
        <Card backgroundColor={'white'} width={'80%'} height={'56'}>
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
            <Image
              marginTop={4}
              width={200}
              height={100}
              source={require('../../../assets/images/vacina_febre_amarela.png')}
              alt="Logo de Vacina"
            />
          </Box>
          <Box alignItems={'flex-end'}>
            <Text color={'danger.500'} italic>
              Próxima dose em: 11/10/2023
            </Text>
          </Box>
        </Card>
      </Box>
    </Center>
  )
}
