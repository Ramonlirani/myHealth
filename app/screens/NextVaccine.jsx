import { Box, Text } from 'native-base';
import { HeaderNextVaccine } from '../components/NextVaccine/HeaderNextVaccine';

export const NextVaccine = ({ navigation }) => {
  return (
    <Box width={'100%'} height={'100%'} backgroundColor={'backgroundColor.primary'}>
      <HeaderNextVaccine navigation={navigation} />
    </Box>
  );
};
