import { StatusBar } from 'expo-status-bar';
import { Button, Linking, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
 import React, { useState } from "react";


export default function App() {
  const [state,newstate]=useState('this is the initial text');
  const [session,setsession] =useState({number:6,title:'this is the first session'})
  const [add,setadd]=useState(0);
  const [name,setname]=useState('');
  const [submitted,setsubmitted]=useState(false);
  

  const onclickhandler=()=>{
  
    newstate('this is the final state');
    setsession({number:7,title:'this is the second session'});
  }
  const onclickhandleadd=()=>{
    setadd(add+1);
  }

  const handlechangename=(value)=>{
      setname(value);
  }
  const onpresshandler=()=>{
    setsubmitted(!submitted);
  }


  return (
    
    
      <View style={styles.container}  >
      <Text style={styles.Text}>
        please write your name:
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g. john'
        onChangeText={handlechangename}
      />
      <Button title={submitted?'clear':'submit'} onPress={onpresshandler}/>
      {submitted?
        <Text style={styles.Text}>
        you are registered as:{name}
      </Text>
      :
      null      
    }
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc99ff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:10,
    // borderColor:'#0066ff',
    // borderRadius:30,
    // margin:40,
  },
  Text:{
    color: '#e60000',
    backgroundColor:'#80ff00',
    margin:10,
  },
  input:{
    width:200,
    borderWidth:5,
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20,

  }
 
});
