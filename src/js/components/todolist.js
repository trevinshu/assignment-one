import makeElement from '../utils/makeElement';

const todoList = () => {
  const template = `{
        <div class="itemContainer">
            <ul class"todos" id="todos"></ul>
        </div>
    }`;

  return makeElement(template);
};

export default todoList;
