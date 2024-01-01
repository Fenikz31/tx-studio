import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Facebook( props = {
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
          d='M341.3,85H388V3.6C379.9,2.5,352.2,0,319.9,0c-67.4,0-113.6,42.4-113.6,120.3V192H132v91h74.4v229h91.2V283
          h71.4l11.3-91h-82.7v-62.7C297.5,103,304.6,85,341.3,85L341.3,85z'
        />
      </svg>
    </SvgIcon>
  );
}
