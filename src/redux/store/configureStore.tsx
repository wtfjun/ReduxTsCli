import { createStore } from 'redux';
import { enthusiasm } from '../reducers';
import { StoreState } from '../../types';
import initState from './initState';
export default function () {
  const store = createStore(enthusiasm, initState);
  return store;
}