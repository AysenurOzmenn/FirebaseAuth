import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import React, { useState, useRef } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [animationRunning, setAnimationRunning] = useState(true);
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const handleToggleAnimation = () => {
        if (animationRunning) {
            Animated.loop(
                Animated.timing(
                    rotateAnim,
                    {
                        toValue: 1,
                        duration: 8000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }
                )
            ).start();
        } else {
            rotateAnim.setValue(0);
        }
        setAnimationRunning(!animationRunning);
    };

    const handleSignOut = () => {
        auth.signOut().then(()=>{
            navigation.navigate('Login');
        }).catch(error => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleAnimation}>
                <Animated.Image
                    source={require('../src/image/AA.png')}
                    style={{
                        ...styles.logo,
                        transform: [
                            {
                                rotate: rotateAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg'],
                                }),
                            },
                        ],
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>
                <Text style={{ color: '#007bff', fontWeight: 'bold' }}>AA Mühendislik & Yazılım Tanıtım Uygulamasına hoşgeldiniz.</Text>
                {"\n\n"}
                <Text style={{ color: '#333', fontWeight: 'bold' }}>Bu bir deneme sürümüdür.</Text>
                {"\n\n"}
                <Text>Giriş yaptığınız mail bilgisi aşağıda yer almaktadır:</Text>
            </Text>
            <Text style={styles.emailText}>{auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    emailText: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
