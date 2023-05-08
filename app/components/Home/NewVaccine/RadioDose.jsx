import React, { useState } from 'react'
import { Radio, Box, Text, VStack } from 'native-base'

export const RadioDose = () => {
  const [value, valueSet] = useState('1')

  return (
    <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5} mt={4} mr={9} >
      <Text color="white" marginRight={2}>
        Dose
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
        <Radio value="1" marginY={1} marginRight={1}>
          <Text color="white" marginRight={2}>
            1 
          </Text>
        </Radio>
        <Radio value="2"  color={'white'} marginY={1} marginRight={1}>
          <Text color="white" marginRight={2}>
            2 
          </Text>
        </Radio>
        <Radio value="3"  color={'white'} marginY={1} marginRight={1}>
          <Text color="white" marginRight={2}>
            3 
          </Text>
        </Radio>
        <Radio value="Única"  color={'white'} marginY={1} marginRight={1}>
          <Text color="white" marginRight={2}>
           Única
          </Text>
        </Radio>
      </Radio.Group>
    </Box>
  )
}
