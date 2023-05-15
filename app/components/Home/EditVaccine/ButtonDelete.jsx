import React from 'react';
import { Button,  Text, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const ButtonDelete = () => {
  return (
    <Box alignItems={'center'} >
      <Button
        mt="5"
        mb={'10'}
        width={'20%'}
        height={'10'}
        borderRadius={0}
        bgColor={'primary.button.delete'}
      >
         <Box flexDirection="row" alignItems="center">
          <MaterialIcons name="delete" size={24} color="white" />
          <Text color="white" ml={2}>
            Excluir
          </Text>
        </Box>
      </Button>
    </Box>
  );
};
