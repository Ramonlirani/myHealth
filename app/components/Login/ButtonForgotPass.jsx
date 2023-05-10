import { Button, Text } from 'native-base';
import React from 'react';

export const ButtonForgotPass = ({ navigation }) => {
  return (
    <>
      <Button
        borderRadius={0}
        mt={'7'}
        width={'55%'}
        height={'10'}
        bgColor={'primary.button.forgot'}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text color={'white'}>Esqueci minha senha</Text>
      </Button>
    </>
  );
};
