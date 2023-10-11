import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

function NumberInput ({ onNumChange })  {
  const [num, setNum] = useState("");

  function handleNumChange  (text) {
    // Solo permite números entre 0 y 81
    const newNum = text.replace(/[^0-9]/g, '');
    if (parseInt(newNum) >=0 && parseInt(newNum) < 9999999999999999999999) {
        setNum(newNum);
        onNumChange(newNum);
    }
  };

  
  return (
    <View>
      <TextInput
      
        style={{
          borderColor: "gray",
          borderWidth: 3,
          fontSize:22,
          flexDirection: "row",
          height: 30,
          marginTop:5,
        }} 
        placeholder=""
        keyboardType='numeric'
        value={num}
        onChangeText={handleNumChange}
      />
    </View>
  );
};


export default NumberInput;
