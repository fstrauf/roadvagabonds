import React from 'react';
import Helmet from 'react-helmet';

export class HeadContent extends React.Component {
  
  render() {    
    let { title, script } = this.props;
    return (
      <Helmet
        title={title}
        script={script}
        style={{  
          padding: '30px',
          fontSize: '40px',
          textAlign: 'center',
          background: 'blue',
          display: 'table-row',
        }}
      />
    );
  }
}