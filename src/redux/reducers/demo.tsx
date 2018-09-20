import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../../constants/index';
import initState from '../store/initState';
export function enthusiasm(state = initState.demo, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}