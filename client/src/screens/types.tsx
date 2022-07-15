import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Detail } from '../components/OpportunityListItem'
 
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
  Opportunity: {
    oppID?: string;
    name: string;
    imgUrl?: string;
    details?: Detail[];
  }
};
