import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../constants/theme';

interface MetricCardProps {
  /** Label displayed above the metric value. */
  label: string;
  /** Value to display. */
  value: string | number;
  /** Optional unit appended after the value. */
  unit?: string;
}

/**
 * Simple card component used to display a metric with label and value.
 */
export const MetricCard: React.FC<MetricCardProps> = ({ label, value, unit }) => {
  return (
    <View
      style={{
        padding: 16,
        marginVertical: 8,
        backgroundColor: colors.card,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: colors.text, fontSize: 16, marginBottom: 4 }}>
        {label}
      </Text>
      <Text style={{ color: colors.primary, fontSize: 24 }}>
        {value} {unit}
      </Text>
    </View>
  );
};