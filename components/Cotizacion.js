import React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <View style={styles.resultado}>
            <Text style={styles.texto}>
                <Text style={styles.span}> {resultado.PRICE} </Text>
            </Text>
            <Text style={styles.texto}> Precio más alto del dia: {''}
                <Text style={styles.span}> {resultado.HIGHDAY} </Text>
            </Text>
            <Text style={styles.texto}> Precio más bajo del dia: {''}
                <Text style={styles.span}> {resultado.LOWDAY} </Text>
            </Text>
            <Text style={styles.texto}> Variación últimas 24 horas: {''}
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.texto}>Última actualización: {''}
                <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20,
    },
    texto: {

    },
    precio: {

    },
    span: {

    }
})
 
export default Cotizacion;