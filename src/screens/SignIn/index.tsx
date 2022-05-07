import React, { useState, useCallback } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
import { useAuth } from '../../hooks/auth';
import SignInImg from '../../assets/homebg.png';
import Logo from '../../assets/logo.png';
import Ladsoft from '../../assets/ladsoft.png';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  const handleLogin = useCallback(
    async (email, password) => {
      try {
        await signIn(email, password);
      } catch (err) {
        Alert.alert('Usuário ou senha errados. Verifique seus dados.');
      }
    },
    [signIn]
  );

    return (
      <View style={styles.container}>
        <ImageBackground source={SignInImg} style={styles.bcg}>
          <View style={styles.logo}>
            <Image source={Logo} style={styles.signInImg} />
          </View>
          <View style={styles.body}>
            <Text style={styles.signInTxt}>
              Faça o Login para acessar o sistema:
            </Text>

            <TextInput
              style={styles.signInInput}
              onChangeText={(e) => setEmail(e)}
              value={email}
              placeholder='E-mail'
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
            />

            <TextInput
              style={styles.signInInput}
              onChangeText={(e) => setPassword(e)}
              value={password}
              secureTextEntry={true}
              placeholder='Senha'
              returnKeyType='send'
              onSubmitEditing={() => handleLogin(email, password)}
            />

            <RectButton
              style={styles.signInBtn}
              onPress={() => handleLogin(email, password)}
            >
              <Feather name='log-in' size={20} color='#000' />
              <Text style={styles.boldTxt}>ENTRAR</Text>
            </RectButton>
            <Text
              style={styles.signInTxt}
              onPress={() => navigation.navigate('EsqueciSenha')}
            >
              Esqueci minha senha
            </Text>

            <View style={styles.yellowLine}></View>
            <Text style={styles.signInTxt}>Ainda não tem sua conta?</Text>
            <Text
              style={styles.signInTxt}
              onPress={() => navigation.navigate('Cadastro')}
            >
              Faça o seu cadastro aqui!
            </Text>

            <Image source={Ladsoft} style={styles.ladsoftLogo} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
