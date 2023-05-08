import { Box, HStack, Image, StatusBar, Text } from 'native-base';


export function HeaderForgot() {
    return <>
        <StatusBar bg="backgroundColor.header" barStyle="light-content" />
        <Box safeAreaTop bg="backgroundColor.header" />
        <HStack bg="backgroundColor.header" px="1" justifyContent="space-between" alignItems="center" w="100%" >
          <HStack alignItems="center">
          <Image
          alt='Logo'
          size={10}
          marginRight={3}
          source={require('../../../assets/images/icon-vaccine.png')}
          />
            <Text color="primary.color" fontSize="30" >
              MyHealth
            </Text>
          </HStack>
        </HStack>
      </>;
  }