import React, { useState } from 'react'
import { Radio, Box, Text } from 'native-base'

export const RadioRegister = () => {
  const [value, valueSet] = useState('Male')
  return (
    <Box>
      <Text fontSize="sm" color="#696969" bold marginRight={3}>
        Sexo
      </Text>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="gender"
        value={value}
        onChange={(nextValue) => {
          valueSet(nextValue)
        }}
        display="flex"
        flexDirection="row"
      >
        <Radio value="Male" marginY={1} marginRight={1}>
          <Text color="#696969" bold>
            Masculino
          </Text>
        </Radio>
        <Radio value="Female" marginY={1} marginLeft={4} color={'white'}>
          <Text color="#696969" bold>
            Feminino
          </Text>
        </Radio>
      </Radio.Group>
    </Box>
  )
}
