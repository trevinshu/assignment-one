import link from '../components/ui/link';
import heading from '../components/ui/header';
import tagline from '../components/ui/tagline';
import appLogo from '../components/ui/logo';

const newPage = (e) => {
  e.preventDefault();
  Router(e.currentTarget.dataset.path);
};

const home = () => {
  const section = document.createElement('div');
  section.classList.add('homeDiv');
  const header = heading('heading', "Trevin's Todo App");
  const homeTagline = tagline('tagline', "App To Manage Your Todo's");
  const todoPageLink = link('enter', '/todos', 'homeBtn');
  const logo = appLogo();
  section.append(logo);
  section.append(header);
  section.append(homeTagline);
  section.append(todoPageLink);
  return section;
};

export default home;
