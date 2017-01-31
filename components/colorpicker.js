import React from 'react';
export default function ColorPicker(props){

  const options = props.colors.map((number) => {
    return <option key={number.toLowerCase()} value={number.toLowerCase()}>{number}</option>
  });

  return (
    <select id="player">
      {options}
    </select>
  )

}
