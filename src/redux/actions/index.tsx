import * as constants from '../../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM_TYPE;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM_TYPE;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}