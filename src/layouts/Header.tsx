import * as React from 'react';

import './Header.less';

export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
//   onIncrement?: () => void;
//   onDecrement?: () => void;
}

export default class Header extends React.Component<Props, {}> {
  render() {
    // const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

    return (
      <div className="header">
        header
      </div>
    );
  }
}
