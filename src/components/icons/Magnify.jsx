import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Magnify( props ) {
  return (
    <SvgIcon { ...props }>
      <svg
        version='1.1'
        id='magnify'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x={ 0 }
        y={ 0 }
        fill={ props.color }
        viewBox='0 0 6.3 7.9'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path
          d='M2.6,290.9c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4c0.6,0,1.1-0.2,1.5-0.5l1.5,1.5
          c0.1,0.1,0.3,0.1,0.4,0c0.1-0.1,0.1-0.3,0-0.4l0,0l-1.5-1.5c0.3-0.4,0.5-0.9,0.5-1.5C5,292,4,290.9,2.6,290.9z M2.6,291.4
          c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9C0.8,292.3,1.6,291.4,2.6,291.4z'
        />
      </svg>
    </SvgIcon>
  );
}
