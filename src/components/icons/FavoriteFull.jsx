import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function FavoriteFull( props ) {
  return (
    <SvgIcon { ...props }>
      <svg
        version='1.1'
        id='Calque_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x={ 0 }
        y={ 0 }
        fill={ props.color }
        viewBox='0 0 512 512'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M256,470.4c-6.9,0-13.5-2.5-18.6-7c-19.5-17-38.2-33-54.8-47.1l-0.1-0.1C133.9,374.8,92,339.1,62.8,303.9
          C30.2,264.5,15,227.2,15,186.4c0-39.6,13.6-76.1,38.2-102.9c25-27.1,59.2-42,96.4-42c27.8,0,53.3,8.8,75.7,26.1
          c11.3,8.8,21.6,19.5,30.6,32c9-12.5,19.3-23.2,30.6-32c22.4-17.3,47.9-26.1,75.7-26.1c37.2,0,71.5,14.9,96.4,42
          c24.7,26.7,38.2,63.3,38.2,102.9c0,40.8-15.2,78.1-47.8,117.4c-29.2,35.2-71.1,70.9-119.7,112.3c-16.6,14.1-35.4,30.2-54.9,47.2
          C269.5,467.9,262.9,470.4,256,470.4z'
        />
      </svg>
    </SvgIcon>
  );
}
