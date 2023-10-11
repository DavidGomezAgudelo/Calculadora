import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function YesNoPicker ({ onPickerChange }) {
  const [selectedValue, setSelectedValue] = useState('no');

  return (
    <View>
      <Picker
      style={{
        borderColor: "gray",
        borderWidth: 3,
        fontSize:22,
      }} 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          onPickerChange(itemValue);
        }}
      >
        <Picker.Item label="Sí" value="si" />
        <Picker.Item label="No" value="no" />
      </Picker>
    </View>
  );
};

export default YesNoPicker;
