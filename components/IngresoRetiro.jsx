import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function IngresoRetiro  ({ onPickerChange }) {
  const [selectedValue, setSelectedValue] = useState('restar');

  return (
    <View>
      <Picker
      style={{
        borderColor: "gray",
        borderWidth: 3,
        flexDirection: "row",
        fontSize:22,
        height: 30,
        marginLeft: 10,
        marginTop:5,
    
        
      }} 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          onPickerChange(itemValue);
          
        }}
      >
        <Picker.Item label="Restar " value="restar" />
        <Picker.Item label="Sumar " value="sumar" />
      </Picker>
    </View>
  );
};

export default IngresoRetiro;