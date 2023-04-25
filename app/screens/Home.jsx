import * as React from 'react'
import { ScrollView, VStack } from 'native-base'
import { HeaderHome } from '../components/Home/HeaderHome'
import { SearchBarHome } from '../components/Home/SearchBarHome'
import { CardVaccine } from '../components/Home/CardVaccine'

export const Home = ({ navigation }) => {
  return (
    <>
      <HeaderHome />
      <VStack
        backgroundColor={'#24253c'}
        width={'100%'}
        height={'100%'}
        alignItems={'center'}
      >
        <SearchBarHome />
        <CardVaccine />
      </VStack>
    </>
  )
}
