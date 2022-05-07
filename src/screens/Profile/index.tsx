import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ProfileBG from '../../assets/profile.png';
import ProfilePic from '../../assets/profilepic.jpeg';
import { useAuth } from '../../hooks/auth';
import { Avatar, AvatarContainer, FakeInput, FakeInputContainer, HeaderContainer, LastUpdatedAt, MemberSince, TrainningContainer, TrainningTitle, UserBio, UserName, WeightContainer, Wrapper } from './styles';
import { ImageBackground, View } from 'react-native';
import FocusAwareStatusBar from '../../hooks/statusBar';

export function Profile() {
  const { user } = useAuth();
  const { signIn } = useAuth();

  const navigation = useNavigation();
  
  function handleNavigateToWeightControl() {
    navigation.navigate('Controle de peso')
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={ProfileBG}>
      <FocusAwareStatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <HeaderContainer>
        <AvatarContainer>
          <Avatar source={ProfilePic} />
          <Feather name="camera" size={12} color='#FFF' />
        </AvatarContainer>

        <View>
          <UserName>{user.name}</UserName>
          <UserBio>
            36 anos, 1,78cm, 125Kg
          </UserBio>
          <MemberSince>Membro desde: 15/04/2020</MemberSince>
        </View>

        <Feather name='edit-2' size={20} color='#FFF' onPress={() => {}} />
      </HeaderContainer>

      <TrainningContainer>
        <TrainningTitle>Seus treinos:</TrainningTitle>
        <FakeInputContainer>
          <FakeInput>A</FakeInput>
          <FakeInput>Peitos, Ombros e Tríceps</FakeInput>
        </FakeInputContainer>
        <FakeInputContainer>
          <FakeInput>B</FakeInput>
          <FakeInput>Bíceps, Abdômen</FakeInput>
        </FakeInputContainer>
        <FakeInputContainer>
          <FakeInput>C</FakeInput>
          <FakeInput>Pernas</FakeInput>
        </FakeInputContainer>
        <TrainningTitle>Seu instrutor: Felipe Monteiro</TrainningTitle>
          <TrainningTitle>Data da prescrição do último treino: 30/07/2020</TrainningTitle>

          <FakeInput>Seu peso:</FakeInput>
          <WeightContainer>
            <Wrapper>
              <Feather style={{ width: 20, height: 20, marginRight: 20 }} name='archive' size={20} color='#FFF' onPress={() => {}} />
              <FakeInput>125Kg</FakeInput>
            </Wrapper>
            <Wrapper>
              <LastUpdatedAt>30/07/2020</LastUpdatedAt>
              <Feather name='edit-2' size={20} color='#FFF' onPress={() => handleNavigateToWeightControl()} />
            </Wrapper>
          </WeightContainer>
      </TrainningContainer>
    </ImageBackground >
  );
}
