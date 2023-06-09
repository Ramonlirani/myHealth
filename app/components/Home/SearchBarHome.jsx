import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const SearchBarHome = () => {
  return (
    <Center>
      <VStack my="4" space={5} w="80%" divider={<Box px="2"></Box>}>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Pesquisar"
            variant="filled"
            width="100%"
            borderRadius="0"
            py="1"
            px="2"
            InputLeftElement={
              <Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />
            }
          />
        </VStack>
      </VStack>
    </Center>
  );
};
