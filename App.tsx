import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import { assets } from './react-native.config';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const App = () => {
  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);
  const [ resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI) {
        //consultar la api para obtener la cotizacion
        const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}';
        const resultado = await axios.get(url);

        guardarResultado(resultado.data.DISPLAY[criptomoneda] [moneda] );

        guardarConsultarAPI(false);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png') }
      />

      <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarAPI={guardarConsultarAPI} 
          />

          <Cotizacion
            resultado={resultado} 
          />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
