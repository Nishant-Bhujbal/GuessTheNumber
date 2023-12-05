import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [useNumber,setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;
  if(useNumber){
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}> 
    <ImageBackground source={require('./assets/images/background.png')} 
    resizeMode='cover'
    style={styles.rootScreen} imageStyle={{opacity:0.25}}>
      {screen}
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  }
});
