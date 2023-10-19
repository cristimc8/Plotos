/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { Main } from './src/pages/Main';
import { StatusBar } from "react-native";
import { ProvideMath } from "./src/hooks/useMath";

export default (): React.ReactElement => (
  <>
    <StatusBar hidden/>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ProvideMath>
        <Main/>
      </ProvideMath>
    </ApplicationProvider>
  </>
);
