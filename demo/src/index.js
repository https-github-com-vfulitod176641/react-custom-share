import { css } from 'emotion';
import { render } from 'react-dom';
import React from 'react';

// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';

import {
  ShareButton,
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,
  ShareBlockStandard,
} from '../../src';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

require('prismjs/themes/prism-okaidia.css');

const App = props => {
  const shareBlockProps = {
    url: 'https://github.com/greglobinski/react-custom-share',
    button: ShareButton,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      {
        network: 'Pinterest',
        icon: FaPinterest,
        media:
          'https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif',
      },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - react-custom-share component`,
    longtext: `Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.`,
  };

  return (
    <div
      className={css`
        margin: 0 auto;
        max-width: 600px;

        .box {
          padding: 50px 0;
          border: 1px solid #ddd;
          margin: 1em 0 3em;
        }
      `}
    >
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} />
      </div>
      <div className="box">
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRectangle}
          header="Share it"
        />
      </div>
      <div className="box">
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRoundSquare}
        />
      </div>
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonCircle} />
      </div>
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonIconOnly} />
      </div>
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonOutline} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));