import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type ExploreScreenNavigationProp = BottomTabNavigationProp<
	TabRoutesParamList,
	'Explore'
>;

type TabRoutesParamList = {
	Explore: undefined;
	Options: undefined;
	Profile: undefined;
	Notifications: undefined;
};

export type StackParamList = {
	TabRoutes: undefined;
	About: undefined;
	Licence: undefined;
	Privacy: undefined;
	Popular: undefined;
	ForYou: undefined;
	Verified: undefined;
	Favorites: undefined;
	Categories: undefined;
};
