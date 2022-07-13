import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
	size: number;
	color: string;
};

export interface ExplorarIconProps {
	props: Props[];
}

const ExplorarIcon: React.FC<ExplorarIconProps> = ({ size, color }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M17.3511 25.2979C24.3369 25.2979 30 19.6347 30 12.6489C30 5.66312 24.3369 0 17.3511 0C10.3653 0 4.70215 5.66312 4.70215 12.6489C4.70215 15.3974 5.57875 17.9411 7.06762 20.0158C7.02524 20.0518 6.98398 20.0899 6.94394 20.1299L0.605986 26.4679C-0.201995 27.2759 -0.201995 28.5858 0.605986 29.3938C1.41397 30.2018 2.72396 30.2018 3.53194 29.3938L9.8699 23.0559C9.90992 23.0158 9.94796 22.9746 9.98401 22.9322C12.0587 24.4212 14.6025 25.2979 17.3511 25.2979ZM25.8621 12.6487C25.8621 17.3492 22.0516 21.1597 17.3511 21.1597C12.6506 21.1597 8.84009 17.3492 8.84009 12.6487C8.84009 7.9482 12.6506 4.1377 17.3511 4.1377C22.0516 4.1377 25.8621 7.9482 25.8621 12.6487Z'
				fill={color}
			/>
		</Svg>
	);
};

export default ExplorarIcon;
