import React, { useState } from 'react';
import { TextInput, View,Text } from 'react-native';

function NameInput  ({ onNameChange }) {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
      style={{
        borderColor: "gray",
        borderWidth: 3,
        fontSize:22,
        padding:5,
        marginTop:5,
      }} 
        placeholder="nombre"
        value={name}
        onChangeText={(text) => {
          setName(text);
          onNameChange(text);
        }}
      />
    </View>
  );
};

export default NameInput;
