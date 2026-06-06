import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { validateMissionForm, MissionForm } from '../../utils/validation';
import { colors } from '../../constants/theme';

/**
 * Mission form screen. Allows updating mission name and crew count with validation.
 */
export default function MissionFormScreen() {
  const { data, updateData } = useMission();
  const [form, setForm] = useState<MissionForm>({
    missionName: data.missionName,
    crewCount: data.crewCount.toString(),
  });
  const [errors, setErrors] = useState<Partial<MissionForm>>({});

  const handleSubmit = () => {
    const validation = validateMissionForm(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      updateData({
        missionName: form.missionName,
        crewCount: parseInt(form.crewCount, 10),
        lastUpdated: new Date().toISOString(),
      });
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.primary, fontSize: 24, marginBottom: 16 }}>
          Atualizar Missão
        </Text>
        <Text style={{ color: colors.text }}>Nome da Missão</Text>
        <TextInput
          value={form.missionName}
          onChangeText={(text) => setForm({ ...form, missionName: text })}
          style={{
            backgroundColor: colors.card,
            color: colors.text,
            padding: 8,
            marginVertical: 8,
            borderRadius: 6,
          }}
        />
        {errors.missionName && (
          <Text style={{ color: colors.danger }}>{errors.missionName}</Text>
        )}
        <Text style={{ color: colors.text, marginTop: 12 }}>Número de Tripulantes</Text>
        <TextInput
          value={form.crewCount}
          onChangeText={(text) => setForm({ ...form, crewCount: text })}
          keyboardType="numeric"
          style={{
            backgroundColor: colors.card,
            color: colors.text,
            padding: 8,
            marginVertical: 8,
            borderRadius: 6,
          }}
        />
        {errors.crewCount && (
          <Text style={{ color: colors.danger }}>{errors.crewCount}</Text>
        )}
        <View style={{ marginTop: 24 }}>
          <Button title="Salvar" onPress={handleSubmit} color={colors.primary} />
        </View>
      </View>
    </ScrollView>
  );
}