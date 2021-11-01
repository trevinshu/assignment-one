import errorLogo from '../components/ui/error';
import heading from '../components/ui/header';
import tagline from '../components/ui/tagline';
import appLogo from '../components/ui/logo';
import errorLogo from '../components/ui/error';
import link from '../components/ui/link';

const pageNotFound = () => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('errorContainer');

  const header = document.createElement('header');

  const errorAppLogo = appLogo();
  const errorHeader = heading('errorHeading', "Trevin's Todo App");
  const errorTagline = tagline('errorTagline', "App To Manage Your Todo's");

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('contentContainer');

  const errorMsgLogo = errorLogo();
  const errorHeadingMsg = heading('errorHeadingMsg', '404 Error');
  const errorTaglineMsg = tagline('errorTaglineMsg', 'The page you are looking for cannot be found.');
  const errorPageLink = link('go back', '/', 'errorBtn');

  contentContainer.append(errorMsgLogo);
  contentContainer.append(errorHeadingMsg);
  contentContainer.append(errorTaglineMsg);
  contentContainer.append(errorPageLink);

  header.append(errorAppLogo);
  header.append(errorHeader);
  header.append(errorTagline);

  errorContainer.append(header);
  errorContainer.append(contentContainer);
  return errorContainer;
};

export default pageNotFound;
