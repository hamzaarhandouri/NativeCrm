import React , { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import axios from 'axios'

export default function Login({navigation}) {
    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);

    const Connexion = async () =>{
        console.log("infos : " , email , " , " , password);
        let fd = new FormData();
        fd.append('email',email);
        fd.append('password',password);
        axios.post("http://192.168.0.130:8000/api/login",fd)
        .then(async (data)=>{
            console.log("data : ", JSON.stringify(data.data.token.tokenable_id));
            await AsyncStorage.setItem('id_user', JSON.stringify(data.data.token.tokenable_id));
            navigation.navigate('Home')

        })
        .catch((error)=>{
            console.log("error hh !");
            console.log("data : ",error.response.data);
            console.log("status : ",error.response.status);
            console.log("headers : ",error.response.headers);
            console.log("message : ",error.message);
              alert(error);
           });    
    } 

    return (
        <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://wallpaperaccess.com/full/1287387.jpg" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={setEmail}
          />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={setPassword}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword} 
   // onPress={() => this.onClickListener('restore_password')}
        >
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
         onPress={Connexion}
         >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    )
}


  const resizeMode = 'center';
  
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
    bgImage:{
      flex: 1,
      resizeMode,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    btnText:{
      color:"white",
      fontWeight:'bold'
    }
  });
