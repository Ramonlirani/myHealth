import React, { useState } from 'react'
import { Radio, Box, Text, VStack } from 'native-base'

export const RadioRegister = () => {
  const [value, valueSet] = useState('Male')

  return (
    <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5}>
      <Text color="white" marginRight={6}>
        Sexo
      </Text>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="gender"
        flexDirection={'row'}
        value={value}
        onChange={(nextValue) => {
          valueSet(nextValue)
        }}
      >
        <Radio value="Male" marginY={1} marginRight={1}>
          <Text color="white" >
            Masculino
          </Text>
        </Radio>
        <Radio value="Female" marginY={1} marginLeft={4} color={'white'}>
          <Text color="white" >
            Feminino
          </Text>
        </Radio>
      </Radio.Group>
    </Box>
  )
}
