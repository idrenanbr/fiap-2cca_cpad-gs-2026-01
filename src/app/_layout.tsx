import React from 'react';
import { Stack } from 'expo-router';
import { MissionProvider } from '../context/MissionContext';

/**
 * Root layout of the app. Wraps all screens in the MissionProvider and hides headers.
 */
export default function RootLayout() {
  return (
    <MissionProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </MissionProvider>
  );
}