const menu = [
	{
		id: 1,
		title: 'Pasta',
		category: 'lunch',
		price: 12,
		img: './assets/img/pasta.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	},
	{
		id: 2,
		title: 'Cioccolata',
		category: 'breakfast',
		price: 5.70,
		img: './assets/img/cioccolata.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	},
	{
		id: 3,
		title: 'Caffè',
		category: 'breakfast',
		price: 0.80,
		img: './assets/img/caffe.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	},
	{
		id: 4,
		title: 'Pomodori',
		category: 'lunch',
		price: 2.90,
		img: './assets/img/pomodori.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	},
	{
		id: 5,
		title: 'Pizza',
		category: 'dinner',
		price: 7,
		img: './assets/img/pizza.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	},
	{
		id: 6,
		title: 'Insalata',
		category: 'lunch',
		price: 5.40,
		img: './assets/img/insalata.jpg',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique.'
	}
]

const recipe = document.querySelector('.recipe');
const filterBtn = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener('DOMContentLoaded', function () {
	displayMenuItems(menu);
	const categories = menu.reduce(function (values,item) {
		if (!values.includes(item.category)) {
			values.push(item.category);
		}
		return values;
	}, ['all']);
});
// filter items
filterBtn.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const category = e.currentTarget.dataset.id;
		const menuCategory = menu.filter(function (menuItem) {
			if (menuItem.category === category) {
				return menuItem;
			}
		});
		if (category === 'all') {
			displayMenuItems(menu);
		} else {
			displayMenuItems(menuCategory);
		}
	});
});


function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		return `<article class="menu-item">
			<img src=${item.img} alt=${item.title} />
			<div class="details-item">
				<div class="title-price">
					<div class="title-item">${item.title}</div>
					<div class="price-item">${item.price}€</div>
				</div>
				<hr>
					<p class="info-item">${item.desc}</p>
			</div>
		</article>`
	});
	displayMenu = displayMenu.join('');
	recipe.innerHTML = displayMenu;
};
