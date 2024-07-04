import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = ()=>{
        auth.createUserWithEmailAndPassword(email,password).then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Kullanıcı', user.email);
        })
        .catch((error) => alert(error.message));
    };
    
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={text => setPassword(text)} secureTextEntry/>
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button , styles.outlineButton]}>
            <Text style={styles.outlineButtonText}>Kayıt ol</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    inputContainer: {
      width: '80%',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    buttonContainer: {
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      width: '45%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#007bff',
    },
    outlineButtonText: {
      color: '#007bff',
      fontSize: 16,
    },
  });