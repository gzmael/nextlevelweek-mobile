/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {
  Container,
  Input,
  InputBlock,
  InputGroup,
  Label,
  SearchForm,
  SubmitButton,
  SubmitText,
  TeachersScroll,
} from './styles';

function TeachersList(): React.ReactElement {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFilters() {
    setIsFiltersVisible(prev => !prev);
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id,
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    await api
      .get('class', {
        params: {
          subject,
          week_day: weekDay,
          time,
        },
      })
      .then(response => {
        setTeachers(response.data);
      })
      .catch(err => {
        Alert.alert('Erro', `Erro ao Filtrar: ${err}`);
      });

    setIsFiltersVisible(false);
  }

  return (
    <Container>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilters}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bbcc"
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bbcc"
                />
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitText>Filtrar</SubmitText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>
      <TeachersScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </TeachersScroll>
    </Container>
  );
}

export default TeachersList;
