import React from 'react'
import { View, Text  ,TouchableOpacity , StyleSheet} from 'react-native'

export default function Mode({ navigation }) {
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    return (
        <View style={styles.container}>
           <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>{navigation.navigate('Scan', {Type:"Entrer"})}} >
              <Text style={styles.loginText}>Pointage Entrée</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>{navigation.navigate('Scan', {Type:"Sortie"})}}>
              <Text style={styles.loginText}>Pointage Sortie</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginRight:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:30,
      backgroundColor:'transparent'
    },
    btnForgotPassword: {
      height:15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom:10,
      width:300,
      backgroundColor:'transparent'
    },
    loginButton: {
      backgroundColor: "#00b5ec",
  
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    loginText: {
      color: 'white',
    },

    btnText:{
      color:"white",
      fontWeight:'bold'
    }
  });