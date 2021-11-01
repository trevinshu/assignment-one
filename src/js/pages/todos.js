import todoItem from '../components/todoitem';
import { getStore } from '../redux/store';
import todoList from '../components/todolist';
import heading from '../components/ui/header';
import tagline from '../components/ui/tagline';
import appLogo from '../components/ui/logo';
import button from '../components/ui/button';

const newPage = (e) => {
  e.preventDefault();
  Router(e.currentTarget.dataset.path);
};

const toDoPage = () => {
  const page = document.createElement('div');
  const nav = document.createElement('nav');
  nav.classList.add('todoNav');

  const todoHeader = heading('todoHeading', "Trevin's Todo App");
  const todoTagline = tagline('todoTagline', "App To Manage Your Todo's");
  const todoLogo = appLogo();

  nav.append(todoLogo);
  nav.append(todoHeader);
  nav.append(todoTagline);

  page.append(nav);

  const storeItems = getStore();
  const itemContainer = todoList();

  if (storeItems.length != 0) {
    const elements = storeItems.map((emp) => {
      return todoItem(emp);
    });

    const ul = itemContainer.querySelector('#todos');
    elements.forEach((elm) => {
      ul.append(elm);
    });

    page.append(itemContainer);
  }

  const footer = document.createElement('footer');
  const addBtn = button('add', 'addBtn');

  footer.append(addBtn);
  page.append(footer);
  return page;
};

export default toDoPage;
