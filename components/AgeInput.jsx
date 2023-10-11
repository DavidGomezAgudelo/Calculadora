import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';


function AgeInput ({ onAgeChange })  {
  const [age, setAge] = useState("");
  const [showAge, setShowAge] = useState("");

  function handleChange (){
    setShowAge("");
  }

  function handleAgeChange  (text) {
    // Solo permite números entre 0 y 81
    handleChange();
    const newAge = text.replace(/[^0-9]/g, '');
    if (parseInt(newAge) >=0 && parseInt(newAge) < 81) {
        setAge(newAge);
        onAgeChange(newAge);
    }
  };
  
  return (
    <View>
      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 3,
          fontSize:22,
          height: 30,
          marginTop:5,
        }} 
        placeholder=""
        keyboardType='numeric'
        value={age}
        onChangeText={handleAgeChange}
      />
    </View>
  );
};

export const stylesQuestions = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
};


export default AgeInput;
