import React, { useState } from 'react';
import { Radio, Box, Text, VStack } from 'native-base';
import { Controller } from 'react-hook-form';

export const RadioDose = ({dose, handleDoseChange}) => {
  return (
    <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5} mt={4} mr={9}>
      <Text color="white" marginRight={2}>
        Dose
      </Text>
          <Radio.Group
            accessibilityLabel="dose"
            flexDirection={'row'}
            value={dose}
            onChange={handleDoseChange}
          >
            <Radio value="1" marginY={1} marginRight={1}>
              <Text color="white" marginRight={2}>
                1
              </Text>
            </Radio>
            <Radio value="2" color={'white'} marginY={1} marginRight={1}>
              <Text color="white" marginRight={2}>
                2
              </Text>
            </Radio>
            <Radio value="3" color={'white'} marginY={1} marginRight={1}>
              <Text color="white" marginRight={2}>
                3
              </Text>
            </Radio>
            <Radio value="Única" color={'white'} marginY={1} marginRight={1}>
              <Text color="white" marginRight={2}>
                Única
              </Text>
            </Radio>
          </Radio.Group>
     
    </Box>
  );
};
