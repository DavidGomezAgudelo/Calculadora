import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import NumberInput from './NumberInput';
import AgeInput from './AgeInput';
import NameInput from './NameInput';
import TypeFamily from './TypeFamily';
import IngresoRetiro from './IngresoRetiro';

function App() {

  const [age, setAge] = useState(0);
  const [mesada, setMesada] = useState(0);
  const [vicios, setVicios] = useState(0);
  const [pareja, setPareja] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [estudios, setEstudios] = useState(0);
  const [salario, setSalario] = useState(0);
  const [padres, setPadres] = useState(0);
  const [hijos, setHijos] = useState(0);
  const [herencia, setHerencia] = useState(0);
  const [pension, setPension] = useState(0);
  const [deudas, setDeudas] = useState(0);
  const [selectedHijos, setSelectedHijos] = useState('restar');
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('normal');
  const [selectedPareja, setSelectedPareja] = useState('restar');
  const [total, SetTotal] = useState(0);


  const resetInputsAndTotal = () => {
    setMesada(0);
    setGastos(0);
    setVicios(0);
    setPareja(0);
    setEstudios(0);
    setSalario(0);
    setPadres(0);
    setHijos(0);
    setHerencia(0);
    setPension(0);
    setDeudas(0);
    SetTotal(0);
  };

  useEffect(() => {
    const calculateTotalEffect = () => {
      let ingresos = 0;
      let egresos = 0;
      let valpareja = 0;
      let hijosCosto = 0;

      if (age <= 18) {
        ingresos = mesada;
        egresos = gastos;
        SetTotal(0)
      }
      else {
        valpareja = selectedPareja === 'restar' ? -pareja : pareja;
        ingresos = ingresos + salario;
        egresos = egresos + vicios + gastos + deudas + estudios;
        SetTotal(0)

        if (age >= 30) {
          hijosCosto = selectedHijos === 'restar' ? -hijos : hijos;
          ingresos = ingresos + herencia;
          egresos = egresos + padres;
        }
        if (age > 60) {
          ingresos = ingresos + pension
        }
      }
      return ingresos - egresos + parseInt(valpareja) + parseInt(hijosCosto);
    };

    const total = calculateTotalEffect();
    SetTotal(total); // Actualizar el estado del total
  }, [age, mesada, gastos, vicios, pareja, salario, selectedPareja, deudas, estudios, hijos, selectedHijos, herencia, padres,pension]);



  return (
    <ScrollView>
      <Card style={styles.card}>
        <View style={styles.containerQuestions}>
          <Text style={styles.text}>Ingresar su Nombre</Text>
          <NameInput onNameChange={(name) => setName(name)} />
          {name !== '' && (
            <View>
              <Text style={styles.text}>Ingresar su Edad Objetivo</Text>
              <AgeInput onAgeChange={(age) => {
                setAge(parseInt(age))
                resetInputsAndTotal();
              }} />
              {age > 0 && (
                <View>
                  <Text style={styles.text}>Ingresar su Clase Social</Text>
                  <TypeFamily onPickerChange={(option) => setSelectedFamily(option)} />
                  {age <= 18 && (
                    <View>
                      <Text style={{ fontSize: 22, marginTop: 20 }}>Ingresar su Mesada</Text>
                      <NumberInput onNumChange={(mesada) => setMesada(parseInt(mesada))} />
                    </View>
                  )}
                  {age >= 9 && (
                    <View>
                      <Text style={styles.text}>Ingresar sus Gastos Mensuales</Text>
                      <NumberInput onNumChange={(gastos) => setGastos(parseInt(gastos))} />
                    </View>
                  )}
                  {age > 18 && (
                    <View>
                      <Text style={styles.text}>Ingresar el Costo de sus Vicios</Text>
                      <NumberInput onNumChange={(vicios) => setVicios(parseInt(vicios))} />
                      <Text style={styles.text}>Ingresar su Salario</Text>
                      <NumberInput onNumChange={(salario) => setSalario(parseInt(salario))} />
                      <Text style={styles.text}>Ingresar el Costo de sus Estudios</Text>
                      <NumberInput onNumChange={(estudios) => setEstudios(parseInt(estudios))} />
                      <Text style={styles.text}>Ingresar el Ingreso/Gasto de su pareja</Text>
                      <NumberInput onNumChange={(pareja) => setPareja(parseInt(pareja))} />
                      <IngresoRetiro onPickerChange={(selectedPareja) => setSelectedPareja(selectedPareja)} />
                      <Text style={styles.text}>Ingresar las Deudas</Text>
                      <NumberInput onNumChange={(deudas) => setDeudas(parseInt(deudas))} />
                    </View>
                  )}

                  {age >= 30 && (
                    <View >
                      <Text style={styles.text}>Ingresar los Gastos de sus Padres</Text>
                      <NumberInput onNumChange={(padres) => setPadres(parseInt(padres))} />
                      <Text style={styles.text}>Ingresar el Ingreso/Gasto de sus hijos</Text>
                      <NumberInput onNumChange={(hijos) => setHijos(parseInt(hijos))} />
                      <IngresoRetiro onPickerChange={(selectedHijos) => setSelectedHijos(selectedHijos)} />

                      <Text style={styles.text}>Ingresar la Herencia</Text>
                      <NumberInput onNumChange={(herencia) => setHerencia(parseInt(herencia))} />
                    </View>
                  )}
                  {age > 60 && (
                    <View>
                      <Text style={styles.text}>Ingresar la Pension</Text>
                      <NumberInput onNumChange={(pension) => setPension(parseInt(pension))} />
                    </View>
                  )}
                </View>
              )}
            </View>
          )}


          <Text style={styles.text}>Nombre: {name}</Text>
          <Text style={styles.text}>Edad: {age}</Text>
          <Text style={styles.text}>Su Dinero actual es: {total}</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    fontSize: 82,
  },

  card: {
    borderColor: 'blue',
    padding: 25,
  },
  text: {
    fontSize: 22,
    marginTop: 20,
  },
  containerQuestions: {
    fontSize: 82,
  },
  infancia: {
    display: 'none',
  },
});

export default App;
