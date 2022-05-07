import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import LadSoft from '../../assets/ladsoft.png';

import { useAuth } from '../../hooks/auth';
import { Container, Greeting, GreetingContainer, Logo, LogOutText } from './styles';
import { RectButton } from 'react-native-gesture-handler';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Logo source={LadSoft} />
      <GreetingContainer>
        <Greeting>Bem vindo, {user.name}</Greeting>
        <RectButton style={{ flexDirection: 'row' }} onPress={() => signOut()}>
          <LogOutText>Sair</LogOutText>
          <MaterialIcons name='logout' size={22} color='#3A362D' />
        </RectButton>
      </GreetingContainer>
    </Container>
  );
}
