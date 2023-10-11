import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

function NumberInput({ onNumChange }) {
  const [num, setNum] = useState('');
  const numSubject = new BehaviorSubject('');

  useEffect(() => {
    const subscription = numSubject.pipe(debounceTime(500)).subscribe((newNum) => {
      // Aquí puedes realizar cualquier acción necesaria con el nuevo número
      onNumChange(newNum);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onNumChange]);

  function handleNumChange(text) {
    // Solo permite números entre 0 y 81
    const newNum = text.replace(/[^0-9]/g, '');
    if (parseInt(newNum) >= 0 && parseInt(newNum) < 9999999999999999999999) {
      setNum(newNum);
      numSubject.next(newNum);
    }
  }

  return (
    <View>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 3,
          fontSize: 22,
          flexDirection: 'row',
          height: 30,
          marginTop: 5,
        }}
        placeholder=""
        keyboardType="numeric"
        value={num}
        onChangeText={handleNumChange}
      />
    </View>
  );
}

export default NumberInput;
