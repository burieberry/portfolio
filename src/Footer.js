import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

import '@material/button/dist/mdc.button.min.css';
import './footer.css';

const Footer = ({ title }) => {
  const icons = [
    { icon: faLinkedinIn,
      link: 'https://www.linkedin.com/in/burcunoyan/'
    },
    { icon: faGithub,
      link: 'https://github.com/burieberry'
    },
    { icon: faTwitter,
      link: 'https://twitter.com/burieberry'
    },
    { icon: faStackOverflow,
      link: 'https://stackoverflow.com/users/8845312/burieberry'
    },
    { icon: faMediumM,
      link: 'https://medium.com/@Burieberry'
    },
    { icon: faEnvelope,
      link: 'mailto:burcunoyan@gmail.com'
    }
  ];

  const copyrightTxt = 'Site built by Burcu Noyan, 2018.';

  return (
    <div className='footer'>
      {/*<h2 className='subhead'>{ title }</h2>*/}
      <div className='copyright'>
        <p><small>©</small> { copyrightTxt }</p>
      </div>
      <div className='social-buttons'>
        {
          icons.map(btn => {
            return (
              <Link to={ btn.link } target='_blank'>
                <FontAwesomeIcon key={ btn.iconName } className='footer-icon' icon={ btn.icon } />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}

export default Footer;
