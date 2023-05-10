import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Box, Text } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

export const ImagePickerButton = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box flexDirection={'row'} alignItems={'center'}>
      <Text color="white" ml={12} mr={3}>
        Comprovante
      </Text>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        width={'40%'}
        height={'10'}
      >
        Selecione a imagem
      </Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </Box>
  );
};
