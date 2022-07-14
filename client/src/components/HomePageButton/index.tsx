import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from '../../screens/types';
import styles from './styles';
import * as RootNavigation from '../../routes/RootNavigation';
import { SvgProps } from 'react-native-svg';


export interface HomePageButtonProps {
  title: string;
  Icon: React.FC<SvgProps>;
  route: keyof StackParamList;
}

const HomePageButton: React.FC<HomePageButtonProps> = ({ title, Icon, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate(route)} activeOpacity={0.9}>
        <Icon color={"white"} width={85} height={85}/>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HomePageButton;