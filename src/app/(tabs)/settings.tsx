import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { colors } from '../../constants/theme';

/**
 * Settings screen. Allows simulating new sensor data and resetting the mission.
 */
function randomSensorValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SettingsScreen() {
  const { updateData } = useMission();

  // Generate random sensor data for demonstration.
  const generateData = () => {
    updateData({
      sensors: {
        temperature: randomSensorValue(10, 80),
        pressure: randomSensorValue(80, 120),
        batteryLevel: randomSensorValue(5, 100),
        communicationStatus: Math.random() > 0.9 ? 'FAIL' : 'OK',
        orbitalStability: randomSensorValue(50, 100),
      },
      lastUpdated: new Date().toISOString(),
    });
  };

  // Reset mission to default values.
  const resetMission = () => {
    updateData({
      sensors: {
        temperature: 0,
        pressure: 0,
        batteryLevel: 100,
        communicationStatus: 'OK',
        orbitalStability: 100,
      },
      missionName: 'Apollo X',
      crewCount: 3,
      lastUpdated: new Date().toISOString(),
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.primary, fontSize: 24, marginBottom: 16 }}>
          Configurações
        </Text>
        <Button
          title="Simular Novos Dados de Sensores"
          onPress={generateData}
          color={colors.info}
        />
        <View style={{ height: 16 }} />
        <Button title="Resetar Missão" onPress={resetMission} color={colors.warning} />
      </View>
    </ScrollView>
  );
}