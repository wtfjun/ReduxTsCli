import Hello from '../../components/Hello';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function mapStateToProps(state: any) {
  return {
    enthusiasmLevel: state.demo.enthusiasmLevel,
    name: state.demo.languageName,
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);