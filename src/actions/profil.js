export const TYPE_VALUES = 'TYPE_VALUES';
export const typeValues = (key, value) => ({
  type: TYPE_VALUES,
  key: key,
  value: value,
});

export const UPDATE_INFORMATIONS = 'UPDATE_INFORMATIONS';
export const updateInformations = () => ({
  type: UPDATE_INFORMATIONS,
});

export const MODIFY_INFORMATIONS = 'MODIFY_INFORMATIONS';
export const modifyInformations = () => ({
  type: MODIFY_INFORMATIONS,
});
