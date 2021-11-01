import makeElement from '../utils/makeElement';

const item = ({ id, title, category, description, isComplete }) => {
  const template = ` 
     <li class="todoItem ${category}" data-key="${id}">
        <h2>${title}</h2>
        <p class="category">${category}</p>
        <p>${description}</p>
        <p>${isComplete ? 'Completed' : ''}</p>
        <a href="#" class="editBtn">Edit</a>
        <a href="#" class="removeBtn">Remove</a>
     </li>
 `;

  const element = makeElement(template);
  return element;
};

export default item;
