import * as React from 'react';
import './PageDsc.less';

interface Props {
  desc: string;
}
export default class PageDsc extends React.Component<Props> {
  render() {
    const { desc } = this.props;
    return (
      <h1 className="page-dsc">
        {/* Cannot Reach Site! */}
        {desc}
      </h1>
    );
  }
}
