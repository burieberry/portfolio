import { faGithub, faTwitter, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

const LinkedIn = {
  icon: faLinkedinIn,
  link: 'https://www.linkedin.com/in/burcunoyan/'
};

const Github = {
  icon: faGithub,
  link: 'https://github.com/burieberry'
};

const Twitter = {
  icon: faTwitter,
  link: 'https://twitter.com/burieberry'
};

const StackOverflow = {
  icon: faStackOverflow,
  link: 'https://stackoverflow.com/users/8845312/burieberry'
};

 const Email = {
  icon: faEnvelope,
  link: 'mailto:burcunoyan@gmail.com'
};

const ContactLinks = [
  LinkedIn,
  Github,
  Twitter,
  StackOverflow,
  Email
];

export {
  ContactLinks,
  LinkedIn,
  Github,
  Twitter,
  StackOverflow,
  Email
};
