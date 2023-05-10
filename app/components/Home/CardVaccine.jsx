import React from 'react';
import { Box, Card, Text, Image, ScrollView, Pressable } from 'native-base';

export const CardVaccine = ({ item }) => {
  console.log('ITEM', item);
  const showItem = () => {
    console.log(JSON.stringify(item));
  };

  return (
    <ScrollView style={{marginRight: 5, marginLeft:5}}>
      <Pressable onPress={showItem}>
        <Box
          border="1"
          borderRadius="md"
          maxWidth={'158.9'}
          height={'56'}
          paddingTop={5}
        >
          <Card backgroundColor={'white'}>
            <Box alignItems={'center'}>
              <Text color={'primary.color'} bold>
                {item.name}
              </Text>
              <Box backgroundColor={'primary.color'} height={'5'} width={20} alignItems={'center'}>
                <Text color={'white'}>Dose: {item.dose}</Text>
              </Box>
              <Text>{item.dov}</Text>
              <Image
                marginTop={4}
                width={100}
                height={50}
                source={require('../../../assets/images/vacina_febre_amarela.png')}
                alt="Logo de Vacina"
              />
            </Box>         
              <Box alignItems={'flex-end'}>
              <Text color={'danger.500'} fontSize={11} italic>
                {item.donv === 'Única' ? 'Dose Única' : `Próxima Dose: ${item.donv}`}
              </Text>
            </Box>
          </Card>
        </Box>
      </Pressable>
    </ScrollView>
  );
};
