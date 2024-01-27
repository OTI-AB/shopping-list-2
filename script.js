const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (e) => {
	e.preventDefault();
	const newItem = itemInput.value;

	if (newItem === '') {
		alert('Please enter an item');
		return;
	}

	const li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));

	const btn = createButton('remove-item btn-link text-red');
	li.appendChild(btn);
	const icon = createIcon('fa-solid fa-xmark');
	btn.appendChild(icon);

	itemList.appendChild(li);

	itemInput.value = '';
};

const createButton = (classes) => {
	const btn = document.createElement('button');
	btn.className = classes;
	return btn;
};

const createIcon = (classes) => {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
