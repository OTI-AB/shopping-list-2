const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearAllBtn = document.getElementById('clear');
const filter = document.getElementById('filter');

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

	checkUI();
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

const removeItem = (e) => {
	if (e.target.parentElement.classList.contains('remove-item')) {
		if (confirm('Are you sure?!')) {
			e.target.parentElement.parentElement.remove();
		}
	}
	checkUI();
};

const removeAll = (e) => {
	const lis = document.querySelectorAll('li');
	if (confirm('Are you positive?')) {
		lis.forEach((li) => {
			li.remove();
		});
	}
	checkUI();
};

const filterItems = (e) => {
	const text = e.target.value.toLowerCase();
	const lis = document.querySelectorAll('li');

	lis.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();
		if (itemName.includes(text)) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
};

const checkUI = () => {
	const lis = document.querySelectorAll('li');
	if (lis.length === 0) {
		clearAllBtn.style.display = 'none';
		filter.style.display = 'none';
	} else {
		clearAllBtn.style.display = 'block';
		filter.style.display = 'block';
	}
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAll);
filter.addEventListener('input', filterItems);

checkUI();
