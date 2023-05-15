import React from 'react';
import { Button, VStack, Text, Box } from 'native-base';

export const ButtonSaveChange = ({onSaveChanges}) => {
  return (
    <Box alignItems={'center'}>
      <Button
        mt="5"
        mb={'10'}
        width={'40%'}
        height={'10'}
        borderRadius={0}
        bgColor={'green.400'}
        onPress={onSaveChanges}
      >
        <Text color={'white'}>Salvar alterações</Text>
      </Button>
    </Box>
  );
};
