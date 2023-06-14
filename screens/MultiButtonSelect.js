import React, { useState } from 'react';
import { Block,Text } from 'expo-ui-kit';
import { Button } from 'galio-framework';

export default function MultiButtonSelect({ count, onSelect , btnstyle,textstyle,textcolors,titles}) {
  const [selected, setSelected] = useState('1');

  const handlePress = (value) => {
    setSelected(value);
    onSelect(value);
    console.log(value);
  };

  const renderButtons = () => {
    const buttonArray = [];

    for (let i = 0; i < count; i++) {
      buttonArray.push(
        <Button
          key={i+1}
          title={`Option ${i+1}`}
          onPress={() => handlePress(`${i+1}`)}
          color={selected === `${i+1}` ? '#52b2f8' : 'white'}
          
          style={{...btnstyle, borderColor:'grey', borderWidth:1}}
        ><Text style={{...textstyle, fontWeight:'bold'}} color={selected === `option${i+1}` ? textcolors[i] : textcolors[i]}>{titles[i]}</Text></Button>
      );
    }

    return buttonArray;
  };

  return <Block marginTop={-3} left style={{ flexDirection: 'row' }}>{renderButtons()}</Block>;
}