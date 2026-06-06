import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { MetricCard } from '../../components/MetricCard';
import { colors } from '../../constants/theme';

/**
 * Dashboard screen. Displays current sensor data using MetricCard components.
 */
export default function DashboardScreen() {
  const { data } = useMission();
  const { sensors } = data;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.primary, fontSize: 24, marginBottom: 16 }}>
          Painel de Controlo
        </Text>
        <MetricCard label="Temperatura" value={sensors.temperature} unit="°C" />
        <MetricCard label="Pressão" value={sensors.pressure} unit="Pa" />
        <MetricCard label="Bateria" value={sensors.batteryLevel} unit="%" />
        <MetricCard label="Comunicação" value={sensors.communicationStatus} />
        <MetricCard label="Estabilidade Orbital" value={sensors.orbitalStability} unit="%" />
      </View>
    </ScrollView>
  );
}