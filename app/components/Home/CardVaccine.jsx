import React from 'react';
import { Box, Card, Text, Image, ScrollView, Pressable } from 'native-base';
import moment from 'moment';

export const CardVaccine = ({ item }) => {
  console.log('ITEM', item);
  const showItem = () => {
    console.log(JSON.stringify(item));
  };
  return (
    <ScrollView>
      <Pressable onPress={showItem}>
        <Box
          border="1"
          borderRadius="md"
          width={'100%'}
          height={'56'}
          alignItems={'center'}
          flexDirection={'row'}
          paddingTop={5}
          maxHeight={'80%'}
        >
          <Card backgroundColor={'white'}>
            <Box alignItems={'center'}>
              <Text color={'#355c7d'} bold>
                {item.name}
              </Text>
              <Box backgroundColor={'#355c7d'} borderRadius={6} width={20} alignItems={'center'}>
                <Text color={'white'}>Dose: {item.dose}</Text>
              </Box>
              <Text>Data: {item.dov}</Text>
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
                Próxima dose em: {item.donv}
              </Text>
            </Box>
          </Card>
        </Box>
      </Pressable>
    </ScrollView>
  );
};
