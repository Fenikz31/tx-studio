import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function LinkedIn( props = {
  color: '#FFFFFF',
  ...rest
}) {
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
        viewBox='0 0 512 512'
        strokeWidth={1.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M511.9,512L511.9,512l0.1,0V324.2c0-91.9-19.8-162.6-127.2-162.6c-51.6,0-86.3,28.3-100.4,55.2h-1.5v-46.6
          H181.1V512h106V342.7c0-44.6,8.4-87.7,63.6-87.7c54.4,0,55.2,50.9,55.2,90.5V512L511.9,512z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.4,170.2h106.2V512H8.4L8.4,170.2z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M61.5,0C27.5,0,0,27.5,0,61.5s27.5,62.1,61.5,62.1S123,95.4,123,61.5C122.9,27.5,95.4,0,61.5,0z'
        />
      </svg>
    </SvgIcon>
  );
}
