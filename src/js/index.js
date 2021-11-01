import { Router } from './routes/router';
import { createStore, getStore } from './redux/store';
import { dataFetcher } from './utils/dataFetcher';
import { keyGenerator } from './utils/keys';
const app = document.querySelector('#app');
Router(window.location.pathname);

// Data Fetcher
const onAppInit = async function (e) {
  // fetch the data for the employee directory
  //  pull data -- store data ---- display data
  const todos = await dataFetcher('./data/todos.json');
  // keyGenerator is for data that has no unique key
  // creating new data employee key
  // imorting multiple data sets create new data in your app

  // todo app data your adding the key id
  // keyGenertor

  // build the data store for the app
  createStore(keyGenerator(todos));
};

window.addEventListener('load', onAppInit);
