import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import map from 'lodash/map';
import concat from 'lodash/concat';

export class HeadContent extends React.Component {
  render() {
    let { title, description, keywords, meta, script } = this.props;
    let extraMetas = map(meta, (content, name) => ({ name, content }));
    return (
      <Helmet
        title={title}
        meta={concat(
          [
            {
              name: 'description',
              content: description,
            },
            {
              name: 'keywords',
              content: keywords,
            },
          ],
          extraMetas
        )}
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

HeadContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  script: PropTypes.array.isRequired,
  meta: PropTypes.array.isRequired,
};

HeadContent.defaultProps = {
  title: 'Road Vagabonds',
  description: "Road Vagabonds blog on travel, troopy and adventure",
  keywords: 'blog travel 4x4 troopy adventure overland',
  script: [],
  meta: [],
};
