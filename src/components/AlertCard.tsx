import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../constants/theme';

interface AlertCardProps {
  /** Text message describing the alert. */
  message: string;
  /** Severity level of the alert. */
  level: 'critical' | 'warning' | 'info';
}

/**
 * Card component used to display an alert with coloured accent.
 */
export const AlertCard: React.FC<AlertCardProps> = ({ message, level }) => {
  const borderColor =
    level === 'critical'
      ? colors.danger
      : level === 'warning'
      ? colors.warning
      : colors.info;
  const levelLabel = level.toUpperCase();

  return (
    <View
      style={{
        padding: 16,
        marginVertical: 8,
        backgroundColor: colors.card,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: borderColor,
      }}
    >
      <Text style={{ color: borderColor, fontWeight: 'bold', marginBottom: 4 }}>
        {levelLabel}
      </Text>
      <Text style={{ color: colors.text }}>{message}</Text>
    </View>
  );
};