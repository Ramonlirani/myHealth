import React, { useContext, useState } from 'react';
import { FlatList, HStack, Text, VStack } from 'native-base';
import { HeaderHome } from '../components/Home/HeaderHome';
import { SearchBarHome } from '../components/Home/SearchBarHome';
import { CardVaccine } from '../components/Home/CardVaccine';
import { ButtonNewVaccine } from '../components/Home/Button';
import { VaccineContext } from '../context/VaccineContext';
import { vaccineList } from '../utils/Vaccine';

export const Home = ({ navigation }) => {
  const { vaccines } = useContext(VaccineContext);

  return vaccineList.length > 0 ? (
    <>
      <HeaderHome navigation={navigation} />
      <VStack
        backgroundColor={'backgroundColor.primary'}
        width={'100%'}
        flex={1}
        alignItems={'center'}
      >
        <SearchBarHome />
        <FlatList
          data={vaccines}
          renderItem={({ item }) => <CardVaccine item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        <ButtonNewVaccine navigation={navigation} />
      </VStack>
    </>
  ) : (
    <>
      <HeaderHome navigation={navigation} />
      <VStack
        backgroundColor={'backgroundColor.primary'}
        width={'100%'}
        flex={1}
        alignItems={'center'}
      >
        <SearchBarHome />
        <Text> Sua lista esta vazia</Text>
        <ButtonNewVaccine navigation={navigation} />
      </VStack>
    </>
  );
};
