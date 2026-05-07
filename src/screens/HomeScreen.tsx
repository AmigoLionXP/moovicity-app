import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';

export const HomeScreen: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);

  const handleCheckIn = () => {
    setIsMonitoring(!isMonitoring);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MOOVICITY</Text>
        <Text style={styles.greeting}>Olá, Ana!</Text>
      </View>

      <View style={styles.alertBar}>
        <Text style={styles.alertText}>⚠️ Atraso médio: 12 min na Linha de Sintra</Text>
      </View>

      <View style={styles.journeyCard}>
        <Text style={styles.cardTitle}>Sintra ➔ Sete Rios</Text>
        <Text style={styles.timer}>Próximo em 4 min</Text>
        <Text style={styles.iaHint}>IA: Risco de atraso alto hoje.</Text>
      </View>

      <TouchableOpacity 
        style={[
          styles.button,
          isMonitoring && styles.buttonMonitoring
        ]}
        onPress={handleCheckIn}
      >
        <Text style={styles.buttonText}>
          {isMonitoring ? 'Viagem em Monitoramento' : 'EasyRide: Check-in de Viagem'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTeal,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  logo: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: colors.white,
    opacity: 0.8,
    marginTop: 4,
  },
  alertBar: {
    backgroundColor: colors.warning,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  alertText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  journeyCard: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 15,
    marginBottom: 40,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkText,
  },
  timer: {
    fontSize: 32,
    color: colors.darkTeal,
    marginVertical: 10,
    fontWeight: '600',
  },
  iaHint: {
    color: colors.gray,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: colors.success,
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonMonitoring: {
    backgroundColor: colors.warning,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
