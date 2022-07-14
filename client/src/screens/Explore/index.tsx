import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import HomePageButton from '../../components/HomePageButton';

import * as RootNavigation from '../../routes/RootNavigation';

import Fire from '../../assets/fire.svg';
import Verified from '../../assets/verified.svg';
import Heart from '../../assets/heart.svg';
import Categories from '../../assets/categories.svg';
import Lunetta from '../../assets/lunetta.svg';

import { HomePageButtonProps } from '../../components/HomePageButton';
import styles from './styles';

const buttons: HomePageButtonProps[] = [
	{
		title: 'Categorias',
		Icon: Categories,
		route: 'Categories',
	},
	{
		title: 'Favoritos',
		Icon: Heart,
		route: 'Favorites',
	},
	{
		title: 'Verificados',
		Icon: Verified,
		route: 'Verified',
	},
	{
		title: 'Populares',
		Icon: Fire,
		route: 'Popular',
	},
];

const ForYouButton: React.FC = () => {
	return (
		<TouchableOpacity
			style={styles.fycontainer}
			onPress={() => RootNavigation.navigate('ForYou')}
			activeOpacity={0.9}>
			<Text style={styles.fytext}>PARA VOCÊ</Text>
			<Lunetta />
		</TouchableOpacity>
	);
};

//TODO: talvez colocar essa estilização em arquivo separado
const Explore: React.FC = () => {
	return (
		<View style={{ marginHorizontal: 10, marginTop: 10 }}>
			<ForYouButton />

			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<HomePageButton {...buttons[0]} />
				<HomePageButton {...buttons[1]} />
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<HomePageButton {...buttons[2]} />
				<HomePageButton {...buttons[3]} />
			</View>
		</View>
	);
};

export default Explore;
