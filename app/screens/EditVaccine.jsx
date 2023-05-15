import { Text, View } from 'native-base';
import { HeaderEditVaccine } from '../components/Home/EditVaccine/HeaderEditVaccine';
import { InputsEditVaccine } from '../components/Home/EditVaccine/InputsEditVaccine';
import { VaccineContext } from '../context/VaccineContext';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export const EditVaccine = ({ item, navigation }) => {
  const {
    control,
    handleSubmit,
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
    <View>
      <HeaderEditVaccine navigation={navigation}/>
      <InputsEditVaccine control={control} errors={errors}/>
    </View>
  );
};
