import * as React from 'react'
import { View } from 'native-base'
import { ImageBackground } from 'react-native';
import { Header } from '../components/Login/Header'
import { Inputs } from '../components/Login/Inputs'
import { ButtonLogin } from '../components/Login/ButtonLogin'
import { ButtonRegister } from '../components/Login/ButtonRegister'
import { ButtonForgotPass } from '../components/Login/ButtonForgotPass'

// const image = {uri: 'https://i.imgur.com/J31PLgZ.jpg'};
export const Login = ({ navigation }) => {

  return (
    <View flex={1} >
      <ImageBackground 
        // source={image}
        style={{width: '100%' , height: '100%', alignItems:'center', justifyContent: 'center'}}
        blurRadius={40}
        >
      <Header />
      <Inputs  />
      <ButtonLogin navigation={navigation} />
      <ButtonRegister navigation={navigation}/>
      <ButtonForgotPass navigation={navigation}/>
      </ImageBackground>
    </View>
  )
}
