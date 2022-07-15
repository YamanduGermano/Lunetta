import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
	size: number;
	color: string;
};

export interface ConfiguracoesIconProps {
	props: Props[];
}

const ConfiguracoesIcon: React.FC<ConfiguracoesIconProps> = ({ size, color }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 30 30' fill='none'>
			<Path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M16.8504 1.58254C17.6867 0.0850696 19.5142 -0.442713 20.9323 0.403702L24.1757 2.33958C25.5938 3.18599 26.0655 5.08608 25.2292 6.58355L24.9719 7.04421C25.6037 7.90653 26.123 8.8447 26.5234 9.83329L27.0466 9.82829C28.6928 9.81257 30.0151 11.1942 29.9999 12.9143L29.9651 16.8483C29.9499 18.5683 28.603 19.9754 26.9568 19.9912L26.5282 19.9953C26.3111 20.5376 26.0571 21.0717 25.7653 21.5942C25.5124 22.0471 25.238 22.4789 24.9442 22.889L25.1391 23.2457C25.9491 24.7275 25.4438 26.6369 24.0105 27.5105L20.7323 29.5087C19.299 30.3823 17.4805 29.8893 16.6705 28.4076L16.5144 28.122C15.4147 28.2879 14.2931 28.3031 13.1799 28.1589L13.0356 28.4175C12.1993 29.9149 10.3717 30.4427 8.95362 29.5963L5.71022 27.6604C4.29212 26.814 3.82048 24.9139 4.65677 23.4165L4.83463 23.098C4.20019 22.2067 3.68406 21.2372 3.29303 20.2171L2.95341 20.2203C1.30716 20.236 -0.0150725 18.8544 0.000129787 17.1343L0.0349008 13.2003C0.0501037 11.4803 1.39698 10.0732 3.04324 10.0574L3.47602 10.0533C3.67089 9.59127 3.89293 9.13557 4.14266 8.68839C4.4313 8.17155 4.74799 7.68215 5.08947 7.22112L4.86082 6.80283C4.05086 5.32108 4.55617 3.41167 5.98947 2.53803L9.26765 0.539893C10.7009 -0.333744 12.5195 0.15923 13.3294 1.64098L13.5976 2.13163C14.5763 2.00091 15.5707 1.98938 16.5597 2.10313L16.8504 1.58254ZM11.7948 20.637C14.7056 22.3744 18.4569 21.291 20.1735 18.2173C21.8901 15.1435 20.922 11.2433 18.0112 9.50597C15.1003 7.76859 11.3491 8.85193 9.63247 11.9257C7.91586 14.9994 8.88398 18.8996 11.7948 20.637Z'
				fill={color}
			/>
		</Svg>
	);
};

export default ConfiguracoesIcon;