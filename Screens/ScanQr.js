import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CryptoJS from "react-native-crypto-js"
import {decode as atob, encode as btoa} from 'base-64'

export default function ScanQr({navigation, route }) {

    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
      console.log(" i am here please  type : ", route.params.Type );
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log("data ffff : " , data);
    var key = '6AhFLqwlExB9tn2Twql62EtbFDqBEv+S7tXW3h6a/0o=';
    
    let  encrypted = atob(data);
    
      encrypted = JSON.parse(encrypted);
      
    const iv = CryptoJS.enc.Base64.parse(encrypted.iv);
    
    const value = encrypted.value;
    
    key = CryptoJS.enc.Base64.parse(key);
    
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        iv: iv
      });
      
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    
    console.log("data test decrypted:" ,decrypted);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



    return (
        <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });
