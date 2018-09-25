import * as React from 'react';

import Sibar from '../../components/Sibar/Sibar';

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
        {/* <div dangerouslySetInnerHTML={WEB_SVG}></div> */}
        {/* <img alt="" src="https://viljamis.com/img/header/web-abb69c1c.svg" /> */}
        {/* <svg /> */}
        <Sibar />
      </div>
    );
  }
}
