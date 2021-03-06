import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
	size: number;
	color: string;
};

export interface NotificacoesIconProps {
	props: Props[];
}

const NotificacoesIcon: React.FC<NotificacoesIconProps> = ({ size, color }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M6.99876 12.9658L5.46068 12.0988C3.71968 11.1174 1.49345 11.6998 0.488282 13.3996C-0.51689 15.0995 0.0796246 17.273 1.82063 18.2544L21.8113 29.523C23.5523 30.5044 25.7786 29.922 26.7837 28.2222C27.7889 26.5224 27.1924 24.3488 25.4514 23.3674L23.8371 22.4575L28.6189 14.371C29.4959 12.9451 30.0001 11.2759 30.0001 9.49165C30.0001 4.24956 25.6476 0 20.2785 0C16.6102 0 13.4165 1.98364 11.7612 4.9122L6.99876 12.9658Z'
				fill={color}
			/>
			<Path
				d='M8.10496 26.4513C8.10496 28.0311 6.79324 29.3118 5.17516 29.3118C3.55708 29.3118 2.24536 28.0311 2.24536 26.4513C2.24536 24.8715 3.55708 23.5908 5.17516 23.5908C6.79324 23.5908 8.10496 24.8715 8.10496 26.4513Z'
				fill={color}
			/>
		</Svg>
	);
};

export default NotificacoesIcon;
