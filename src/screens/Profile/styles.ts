import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`

export const HeaderContainer = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 50px;
  padding: 0 20px;
`

export const AvatarContainer = styled.View`
  align-items: flex-end;
`

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`

export const UserName = styled.Text`
  color: #FFF;
  font-size: 25px;
  font-family: RobotoSlab_400Regular;
`

export const UserBio = styled.Text`
  color: #FFF;
  font-family: RobotoSlab_400Regular;
`

export const MemberSince = styled.Text`
  color: #fff;
  font-family: RobotoSlab_400Regular;
  font-size: 10px;
  margin-top: 5px;
`

export const TrainningContainer = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: 80px;
`

export const TrainningTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: RobotoSlab_400Regular;
  margin-bottom: 5px;
`

export const FakeInputContainer = styled.View`
  flex-Direction: row;
  background-color: #6B6868;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 36px;
  padding: 0 10px;
  align-items: center;
  border-radius: 8;
  opacity: 0.5;
`

export const FakeInput = styled.Text`
  color: #FFF;
  font-size: 16;
  font-family: RobotoSlab_400Regular;
  margin-right: 20;
`

export const WeightContainer = styled.View`
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color: '#6B6868';
  margin-top: 5px;
  margin-bottom: 5px;
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  opacity: 0.5;
`

export const Wrapper = styled.View`
  flex-direction:row;
  align-items: center;
`

export const LastUpdatedAt = styled.Text`
  color: #FFF;
  font-size: 12px;
  margin-right: 20px;
`