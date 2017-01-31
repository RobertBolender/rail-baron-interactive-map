import React from 'react';
export default function LinePicker(props){

  const options = props.lines.map((line) => {
    return <option key={line.id} value={line.id}>{line.name}</option>
  });

  return (
    <select id="selector">
      {options}
    </select>
  )

}
