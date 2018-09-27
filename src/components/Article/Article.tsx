import * as React from 'react';
import PageDsc from '../PageDsc/PageDsc';

export default class Hello extends React.Component<{match: any}, {}> {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="article main">
        <PageDsc desc="All Articles" />
        {this.props.match.params.id}
      </div>
    );
  }
}
