import React from 'react'
import { Button,  Text } from 'native-base'

export const ButtonLogin = ({ navigation }) => {
  return (
    <
>
      <Button
        borderRadius={0}
        mt="10"
        width={'40%'}
        height={'10'}
        bgColor={'primary.button.success'}
        onPress={() => navigation.navigate('DrawerNavigator')}
      >
        <Text color={'white'} >
          Entrar
        </Text>
      </Button>
    </>
  )
}
