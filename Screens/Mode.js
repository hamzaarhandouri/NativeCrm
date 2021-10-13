import React , {useEffect,useState} from 'react'
import { View, Text  ,TouchableOpacity , StyleSheet} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

export default function Mode({ navigation }) {

    const [Entrer , setEntrer] = useState(0);
    const [Sorite, setSortie] = useState(0);
    const [Unix, setUnix] = useState(null);
    const [Type, setType] = useState(null)
    const [Site, setSite] = useState(null);
    const [Time, setTime] = useState(null)
    const [Data, setData] = useState(null);


  useEffect(() => {
    

      async function get()  {
        let id = await AsyncStorage.getItem("id_user");
  
      axios.get(`http://192.168.0.130:8000/api/check/${id}`)
      .then( (data)=>{
        if(data.data.Type  === "Entrer")
        {
          const date =  moment.unix(parseInt(data.data.QR_Unix_Time)).format("DD/MM/YYYY");
          const time =  moment.unix(parseInt(data.data.QR_Unix_Time)).format("HH:mm:ss");

          setUnix(date);
          setTime(time);
          setSite(data.data.Site_pointage);
          setType(data.data.Type);
          setEntrer(1);
        }
        else if (data.data.Type  === "Sortie")
        {
          const date =  moment.unix(parseInt(data.data.QR_Unix_Time)).format("DD/MM/YYYY");
          const time =  moment.unix(parseInt(data.data.QR_Unix_Time)).format("HH:mm:ss");

          setUnix(date);
          setTime(time);
          setSite(data.data.Site_pointage);
          setType(data.data.Type);
          setSortie(1);
        }
  
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

    get();
  }, [])


    

    return (
        <View style={styles.container}>
        <View  >
            <Text style={styles.btnText}> Votre dernier pointage a été effectué en {Type} sur le site {Site} le {Unix} à {Time}</Text>
        </View>

          {
            Entrer === 0 ? (<TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>{navigation.navigate('Scan', {Type:"Entrer"})}} >
            <Text style={styles.loginText}>Pointage Entrée</Text>
          </TouchableOpacity>) : null
          }
           {
             Sorite === 0 ? ( <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>{navigation.navigate('Scan', {Type:"Sortie"})}}>
             <Text style={styles.loginText}>Pointage Sortie</Text>
           </TouchableOpacity>) :null
           }
           
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
      color:"black",
      fontWeight:'bold'
    }
  });