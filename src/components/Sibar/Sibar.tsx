import * as React from 'react';
import { Link } from 'react-router-dom';
import './Sibar.less';

export default class Hello extends React.Component<any> {
  render() {
    return (

      <ul className="header-sibar">
        <li className="active">
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/Archive">Archive</Link>
        </li>
        <li>
          <Link to="/hello">About</Link>
        </li>
        <li>
          <Link to="/hello">Github</Link>
        </li>
        <li>
          <Link to="/hello">Twiter</Link>
        </li>
      </ul>

    );
  }
}
