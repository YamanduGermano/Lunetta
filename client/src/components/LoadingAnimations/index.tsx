import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const BigLoading: React.FC = () => {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<LottieView
				style={{ width: '80%' }}
				source={require('../../assets/Animations/Loading.json')}
				autoPlay={true}
				loop={true}
			/>
		</View>
	);
};

export default BigLoading;
