import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
	size: number;
	color: string;
};

export interface PerfilIconProps {
	props: Props[];
}

const PerfilIcon: React.FC<PerfilIconProps> = ({ size, color }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				d='M0 30.0003C0 23.9636 4.766 19.0698 10.6452 19.0698H19.3548C25.234 19.0698 30 23.9636 30 30.0003H0Z'
				fill={color}
			/>
			<Path
				d='M24 8.999C24 13.969 19.9706 17.998 15 17.998C10.0294 17.998 6 13.969 6 8.999C6 4.02899 10.0294 0 15 0C19.9706 0 24 4.02899 24 8.999Z'
				fill={color}
			/>
		</Svg>
	);
};

export default PerfilIcon;
