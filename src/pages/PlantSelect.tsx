import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/core';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Header} from '../components/Header';

export default function PlantSelect() {
    return (
        <SafeAreaView style={styles.container}>
           
                <Header />
                    
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,            
        },
        content:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 30
        },
    });