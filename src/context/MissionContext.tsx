import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Types describing sensor data and mission state.
 */
export interface SensorData {
  temperature: number;
  pressure: number;
  batteryLevel: number;
  communicationStatus: string;
  orbitalStability: number;
}

export interface MissionState {
  sensors: SensorData;
  missionName: string;
  crewCount: number;
  lastUpdated: string;
}

interface MissionContextProps {
  data: MissionState;
  updateData: (updates: Partial<MissionState>) => void;
}

const defaultState: MissionState = {
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
};

const MissionContext = createContext<MissionContextProps>({
  data: defaultState,
  updateData: () => {},
});

/**
 * Provider component wrapping children with mission state and actions.
 * Loads persisted state from AsyncStorage and saves whenever data changes.
 */
export const MissionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<MissionState>(defaultState);

  // Load stored data on mount.
  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem('missionData');
        if (stored) {
          setData(JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Erro ao carregar dados persistidos:', e);
      }
    };
    load();
  }, []);

  // Persist data on change.
  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem('missionData', JSON.stringify(data));
      } catch (e) {
        console.warn('Erro ao salvar dados persistidos:', e);
      }
    };
    save();
  }, [data]);

  // Merge updates into the current state.
  const updateData = (updates: Partial<MissionState>) => {
    setData((prev) => ({
      ...prev,
      ...updates,
      sensors: {
        ...prev.sensors,
        ...(updates.sensors || {}),
      },
    }));
  };

  return (
    <MissionContext.Provider value={{ data, updateData }}>
      {children}
    </MissionContext.Provider>
  );
};

export const useMission = () => useContext(MissionContext);