import React from 'react'
import { Text, View ,ScrollView,StyleSheet,ImageBackground, Image ,TouchableOpacity } from 'react-native'
import {Ionicons,Feather , Octicons  , MaterialIcons} from '@expo/vector-icons';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import IOSIcon from "react-native-vector-icons/Ionicons";

export default function Menu() {
    return (
        <Container>
             
        <ScrollView>
            <View style={styles.container}>
                
               
                <TouchableOpacity style={styles.box} >
               
                    <View style={styles.inner}>
                    
                    <MaterialIcons name="import-export" size={35} color="black" />
                    
                    <Text>Imports</Text>
                    </View>
              
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
               
               <View style={styles.inner}>
                    <MaterialIcons name="import-export" size={35} color="black" />
                   <Text>Export </Text>
               </View>
         
           </TouchableOpacity>

           <TouchableOpacity style={styles.box} >
               
               <View style={styles.inner}>
                 <Feather name="triangle" size={35} color="black" />
                   <Text>Triangulaire</Text>
               </View>
         
           </TouchableOpacity> 
           <TouchableOpacity style={styles.box} >
               
               <View style={styles.inner}>
               <Ionicons name="create" size={24} color="black" />
                   <Text>Nouveau projets</Text>
               </View>
         
           </TouchableOpacity> 
           <TouchableOpacity style={styles.box}>
               
               <View style={styles.inner}>
               <Octicons name="project" size={35} color="black" />
                   <Text>Exports transite</Text>
               </View>
         
           </TouchableOpacity>
           <TouchableOpacity style={styles.box} >
               
               <View style={styles.inner}>
               <Octicons name="project" size={35} color="black" />
                   <Text>Mise à la consomation </Text>
               </View>
         
           </TouchableOpacity>
           <TouchableOpacity style={styles.box} >
               
               <View style={styles.inner} >
               <Octicons name="project" size={35} color="black" />
                   <Text>Tous vos projets</Text>
               </View>
         
           </TouchableOpacity>
          
            </View>
          
            </ScrollView>
            <Footer>
          <FooterTab>
            <Button >
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
            <AntDesign name="dashboard" size={24} color="black" />
            </Button>
            <Button >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
            </Container>

    )
}
const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '85%',
        padding : 5 ,
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    box : {
        width : '50%',
        height : '50%',
        padding : 5 ,
    },
    inner :{
        flex : 1 ,
        backgroundColor : "#eee",
        alignItems : 'center',
        justifyContent : 'center'
    }
});