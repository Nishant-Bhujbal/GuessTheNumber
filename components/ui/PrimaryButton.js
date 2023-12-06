import { View,Text,Pressable,StyleSheet} from "react-native"
import Colors from "../../constants/Colors";

function PrimaryButton(props) {

    function pressHandler(){
        console.log('Pressed button')
    }

  return (
    <View style={styles.buttonOuterContainer}>
    {/* pressed is added because we cannot use android_ripple on ios so we change 
    the styles and to add the effect on ios */}
        <Pressable style={({pressed})=>
        pressed 
        ? [styles.buttonInnerContainer,styles.pressed]
        : styles.buttonInnerContainer
        } 
        onPress={props.onPress} 
        android_ripple={{color:Colors.primary600}}
        >
        <Text style={styles.buttonText}>{props.children}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRadius : 28,
        margin : 4,
        overflow : 'hidden'
    },
    buttonInnerContainer : {
        backgroundColor : Colors.primary500,
        paddingVertical : 8,
        paddingHorizontal : 16,
        elevation : 2,
    },
    buttonText:{
        color:'white',
        textAlign: 'center',
    },
    pressed : {
        opacity : 0.75,
    }
});

