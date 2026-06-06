import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/**
 * Layout for the bottom tab navigator.
 * Defines four tabs: Dashboard, Alertas, Missão e Configurações.
 * Each tab receives an icon based on its route name.
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0d0d1a', borderTopColor: '#1a233a' },
        tabBarActiveTintColor: '#4fd1c5',
        tabBarInactiveTintColor: '#718096',
        tabBarIcon: ({ color, size }) => {
          let iconName: any = 'planet';
          if (route.name === 'index') iconName = 'speedometer';
          if (route.name === 'alerts') iconName = 'alert-circle';
          if (route.name === 'mission') iconName = 'create';
          if (route.name === 'settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="alerts" options={{ title: 'Alertas' }} />
      <Tabs.Screen name="mission" options={{ title: 'Missão' }} />
      <Tabs.Screen name="settings" options={{ title: 'Configurações' }} />
    </Tabs>
  );
}