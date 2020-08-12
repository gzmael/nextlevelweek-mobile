import React, { useState } from 'react';
import { Image, Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  ProfileInfo,
  Avatar,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  ButtonFav,
  ButtonWhats,
  TextWhats,
} from './styles';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherProps> = ({
  teacher,
  favorited,
}: TeacherProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleToggleFavorited() {
    setIsFavorited(true);
  }

  function handleLinkToWhatsApp() {
    api.post('connections', { user_id: teacher.id });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher?.avatar }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          {'Preço/Hora '}
          <PriceValue>
            R$
            {teacher.cost}
          </PriceValue>
        </Price>
        <ButtonsContainer>
          <ButtonFav
            style={isFavorited ? { backgroundColor: 'red' } : {}}
            onPress={handleToggleFavorited}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </ButtonFav>
          <ButtonWhats onPress={handleLinkToWhatsApp}>
            <Image source={whatsappIcon} />
            <TextWhats>Entrar em Contato</TextWhats>
          </ButtonWhats>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
