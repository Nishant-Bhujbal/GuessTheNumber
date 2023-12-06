import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';


import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [gameisOver,setGameIsOver] = useState(true);

  useFonts({})

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;
  
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameisOver && userNumber){
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}> 
    <ImageBackground source={require('./assets/images/background.png')} 
    resizeMode='cover'
    style={styles.rootScreen} imageStyle={{opacity:0.25}}>
    <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  }
});
