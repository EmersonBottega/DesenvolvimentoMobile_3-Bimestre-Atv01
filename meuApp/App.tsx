// Deixei para aparecer por padrão os tamanhos, quando for testar, descomente o que deseja ver, e comente os outros

import React from 'react';
import { SafeAreaView } from 'react-native';
import Greeting from './src/ex01/App1';
import Counter from './src/ex02/App2';
import Alignment from './src/ex03/App3';
import Tamanhos from './src/ex04/App4';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Descomente a linha abaixo e passe o nome que desejar como parâmetro */}
      {/* <Greeting name="Nelson" tamanho={30} /> */}

      {/* Descomente a linha abaixo para testar o contador */}
      {/* <Counter /> */}

      {/* Descomente a linha abaixo para testar os alinhamentos */}
      {/* <Alignment /> */}

      {/* Deixei o componente de tamanhos como padrão para aparecer ao rodar a aplicação */}
      <Tamanhos />
    </SafeAreaView>
  );
}
