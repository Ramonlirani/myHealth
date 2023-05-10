import React, { useContext, useState } from 'react';
import { HeaderNewVaccine } from '../components/Home/NewVaccine/HeaderNewVaccine';
import { Box } from 'native-base';
import { InputsNewVaccine } from '../components/Home/NewVaccine/InputsNewVaccine';
import { ButtonRegisterNew } from '../components/Home/NewVaccine/ButtonRegisterNew';
import { useForm } from 'react-hook-form';
import { VaccineContext } from '../context/VaccineContext';

import { v4 as uuidv4 } from 'uuid';

export const NewVaccine = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { addVaccine } = useContext(VaccineContext);
  const newId = uuidv4();

  const onSubmit = (data) => {
    console.log('submit', data);
    console.log('att', data.dov);

    const newVaccine = { id: newId, ...data };
    addVaccine(newVaccine);
    navigation.pop();
  };

  return (
    <Box width={'100%'} flex={1} backgroundColor={'backgroundColor.primary'}>
      <HeaderNewVaccine navigation={navigation} />
      <InputsNewVaccine control={control} errors={errors} setValue={setValue} />
      <ButtonRegisterNew navigation={navigation} handleSubmit={handleSubmit(onSubmit)} />
    </Box>
  );
};
