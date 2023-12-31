import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function EnveloppeFull( props ) {
  return (
    <SvgIcon { ...props }>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x={ 0 }
        y={ 0 }
        fill={ props.color }
        viewBox='0 0 305.6 305.6'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M24.8,260.3c-24.5,0-0.4-24.8-0.4-24.8L86.8,167c6.1-6.7,17.8-16.8,24.6-11.2c6.8,5.6,16,16.9,22.3,23.3
          l12.9,12.9c6.9,6.1,12.2,0,12.2,0l13.2-13c6.4-6.3,15.6-17.4,22.5-22.5s18.5,4.6,24.6,11.3l62,68.5c24.5,24.1,0.4,24.1,0.4,24.1
          L24.8,260.3L24.8,260.3z M35.4,204c-6.1,6.7-14.9,18.3-20.9,25C7.7,236.5,0,242.3,0,229L0.3,95.3c0-9-0.2-26.2,5.9-23.1
          c2.3,1.1,5.4,3.5,9.7,7.8l50.5,41.3c7,5.7,16.8,12.7,20,17.3c2,2.9,3,6.3,0,9.3L35.4,204z M171.4,156.5c-7,5.7-14.5,13.8-18.4,13.8
          s-11.6-7.9-18.6-13.6L24.6,67.6c-7-5.7-19.1-17.1-13.1-20.2c4.3-2.2,11.9-2.2,11.9-2.2h258c23.2,0,11.4,11.5,11.4,11.5L171.4,156.5
          z M291.1,228.9c-6-6.7-14.9-18.3-20.9-25l-51-56.1c-3-2.9-2-6.4,0-9.3c3.2-4.6,13-11.6,20-17.3l37.8-31c7-5.7,16.1-15,22.3-18.1
          s5.9,14.1,5.9,23.1l0.3,133.7C305.6,242.3,297.9,236.5,291.1,228.9z'
        />
      </svg>
    </SvgIcon>
  );
}