import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { AlertCard } from '../../components/AlertCard';
import { colors } from '../../constants/theme';

/**
 * Alerts screen. Generates alerts based on sensor data thresholds.
 */
export default function AlertsScreen() {
  const { data } = useMission();
  const { sensors } = data;

  // Determine alerts based on sensor values.
  const alerts: { message: string; level: 'critical' | 'warning' | 'info' }[] = [];

  if (sensors.batteryLevel < 20) {
    alerts.push({ message: 'Nível de bateria crítico', level: 'critical' });
  }
  if (sensors.temperature > 50) {
    alerts.push({ message: 'Temperatura acima do limite seguro', level: 'warning' });
  }
  if (sensors.pressure < 50 || sensors.pressure > 150) {
    alerts.push({ message: 'Pressão fora de faixa nominal', level: 'warning' });
  }
  if (sensors.communicationStatus !== 'OK') {
    alerts.push({ message: 'Falha de comunicação detectada', level: 'critical' });
  }
  if (sensors.orbitalStability < 70) {
    alerts.push({ message: 'Estabilidade orbital comprometida', level: 'critical' });
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.primary, fontSize: 24, marginBottom: 16 }}>Alertas</Text>
        {alerts.length === 0 && (
          <Text style={{ color: colors.text }}>Nenhum alerta no momento.</Text>
        )}
        {alerts.map((alert, index) => (
          <AlertCard key={index} message={alert.message} level={alert.level} />
        ))}
      </View>
    </ScrollView>
  );
}