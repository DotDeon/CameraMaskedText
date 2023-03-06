import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView } from 'expo-blur';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CameraFullScreen } from './CameraFullScreen';
export default function App() {
  const hasPermission = useCameraPermission();
  const [type, setType] = useState(Camera.Constants.Type.back);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <ScrollView contentContainerStyle={styles.maskWrapper} >
          <Text style={styles.mask}>
               HI
          </Text>
          <Text style={styles.mask2}>
             I AM
          </Text>
          <Text style={styles.mask4}>
              DEON 
          </Text>
          <Text style={styles.mask5}>
              RO    
          </Text>
          <Text style={styles.mask6}>
              OS  
          </Text>
          {/* </View> */}
        </ScrollView>
      }>
      <CameraFullScreen type={type}>
        <BlurView  
          intensity={100}
          style={{
            flex: 1,
           marginLeft: -10,
        
          }}>
       
        </BlurView>
      </CameraFullScreen>
    </MaskedView>
    </View>
  );
}

function useCameraPermission() {
  const [hasPermission, setPermission] = useState(null);

  useEffect(() => {
    Camera.requestPermissionsAsync().then(
      response => setPermission(response.status === 'granted')
    );
  }, []);

  return hasPermission;
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    maskedView: {
      flex: 1,
      flexDirection: 'row',
    //   height: '100%'
    },
    maskWrapper: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    mask: {
      fontSize: 200,
      marginTop: 25,
      color: 'black',
      fontWeight: 'bold',
    },
    mask2: {
        fontSize: 90,
        marginLeft: 200,
        marginTop: -80,
        color: 'black',
        fontWeight: 'bold',
      },
      mask3: {
        fontSize: 90,
        marginTop: -30,
        color: 'black',
        fontWeight: 'bold',
      },
      mask4: {
        fontSize: 140,
        marginTop: -50,
     
        color: 'black',
        fontWeight: 'bold',
      },
      mask5: {
        fontSize: 190,
        marginTop: -75,
        marginLeft: -3,
        color: 'black',
        fontWeight: 'bold',
      },
      mask6: {
        fontSize: 193,
        marginTop: -80,
        marginLeft: 122,
        color: 'black',
        fontWeight: 'bold',
      },
    image: {
      flex: 1,
      height: '100%',
      backgroundColor: '#324376'
    },
  });
  

