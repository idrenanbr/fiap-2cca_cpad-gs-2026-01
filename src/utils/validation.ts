/**
 * Types and helper functions used for validating forms in the app.
 */

export interface MissionForm {
  missionName: string;
  crewCount: string;
}

/**
 * Validates mission form fields and returns error messages for each field.
 * A field is only included in the returned object when validation fails.
 */
export const validateMissionForm = (form: MissionForm): Partial<MissionForm> => {
  const errors: Partial<MissionForm> = {};

  // missionName cannot be empty.
  if (!form.missionName || !form.missionName.trim()) {
    errors.missionName = 'Nome da missão obrigatório';
  }

  // crewCount must be a positive integer.
  if (!form.crewCount || !form.crewCount.trim()) {
    errors.crewCount = 'Número de tripulantes obrigatório';
  } else {
    const num = parseInt(form.crewCount, 10);
    if (isNaN(num) || num <= 0) {
      errors.crewCount = 'Tripulação deve ser um número positivo';
    }
  }

  return errors;
};