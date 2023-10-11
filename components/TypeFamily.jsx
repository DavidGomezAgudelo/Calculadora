import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function TypeFamily  ({ onPickerChange }) {
  const [selectedValue, setSelectedFamily] = useState('normal');

  return (
    <View>
      <Picker
      style={{
        borderColor: "gray",
        borderWidth: 3,
        flexDirection: "row",
        fontSize:22,
        marginTop:5,
      }} 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedFamily(itemValue);
          onPickerChange(itemValue);
        }}
      >
        <Picker.Item label="Clase Baja" value="pobre" />
        <Picker.Item label="Clase Media" value="normal" />
        <Picker.Item label="Clase Alta" value="rica" />
      </Picker>
    </View>
  );
};

export default TypeFamily;