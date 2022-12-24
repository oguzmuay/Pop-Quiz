import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const ResultCard = ({}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 16,
        marginBottom: 8,
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Sinav Basligi</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Text>Sorular: 10/20 </Text>
          <Text>Sonuc: 50%</Text>
        </View>
      </View>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          mode="contained"
          onPress={() => {
            console.log('Detay');
          }}>
          Detay
        </Button>
      </View>
    </View>
  );
};

export default ResultCard;
