import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Phone( props = {
  color: '#53D5BB',
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
        strokeWidth={ 1.5 }
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M499.7,377L428,305.3c-25.6-25.6-69.1-15.4-79.4,17.9c-7.7,23-33.3,35.8-56.3,30.7
          c-51.2-12.8-120.3-79.4-133.1-133.1c-7.7-23,7.7-48.6,30.7-56.3c33.3-10.2,43.5-53.8,17.9-79.4l-71.7-71.7
          C115.7-4.5,84.9-4.5,67,13.4L18.4,62.1c-48.6,51.2,5.1,186.9,125.4,307.2s256,176.6,307.2,125.4l48.6-48.6
          C517.6,425.6,517.6,394.9,499.7,377z'
        />
      </svg>
    </SvgIcon>
  );
}