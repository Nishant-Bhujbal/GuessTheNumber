import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [gameisOver,setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0)

  const [fontLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontLoaded){
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;
  
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameisOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} roundsNumber={guessRounds} />
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
