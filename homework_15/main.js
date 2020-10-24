let boxSize = 32;
let borderSize = 2;
let gridCount = 13;
let speed = 500;
let processGame;
let snake = createSnakeData(Math.floor(gridCount / 2), Math.floor(gridCount / 2), 5);
let direction = 'left';
let gridContainer;
let food = createFood();

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('keydown', snakeHendler);

function snakeHendler() {
	updateDirection()
}

function updateDirection(event) {
	if (event.keyCode == 37 && direction != "right")
		direction = "left";
	if (event.keyCode == 39 && direction != "left")
		direction = "right";
	if (event.keyCode == 38 && direction != "down")
		direction = "up";
	if (event.keyCode == 40 && direction != "up")
		direction = "down";
}

function createSnakeData(cell, row, count) {
	let arr = [];

	for (let index = 0; index < count; index++) {
		arr.push({
			cell: cell + index,
			row,
		})
	}
	return arr;
}

function createFood() {
	let food = new Image(boxSize - 7, boxSize - 7);
	food.setAttribute('src', './img/apple.png');
	food.classList.add('snake-food');

	return food;
}

function init() {
	gridContainer = find('#snake-container');
	let messageBox = find('#message');
	let score = find('.score > b');

	initGrid(gridCount, gridContainer);
	startGame();
}

function startGame() {
	updateSnake();
	processGame = setInterval(() => {
		let {cell, row} = snake[0];
		switch (direction) {
			case 'left': {
				snake.unshift({
					cell: cell - 1,
					row,
				})
			};
			break;
			case 'up': {
				snake.unshift({
					cell,
					row: row - 1,
				})
			};
			break;
			case 'right': {
				snake.unshift({
					cell: cell + 1,
					row,
				})
			};
			break;
			case 'down': {
				snake.unshift({
					cell,
					row: row + 1,
				})
			};
			break;
		}
		snake.pop();
		updateSnake();
	}, speed);

	function updateSnake(){
		clearSnake();

		for (const [index, snakePart] of snake.entries()) {
			let cell = findByCoords(snakePart.cell, snakePart.row);

			if (index == 0) {
				cell.classList.add('snake-head', 'snake')
			} else {
				cell.classList.add('snake-body', 'snake')
			}
		}

		function clearSnake() {
			let cells = gridContainer.querySelectorAll('.snake');

			for (let cell of cells) {
				cell.className = "snake-cell";
			}
		}

		function generateBoxForEat() {
			let cell = getRandomInit(0, gridCount);
			let row = getRandomInit(0, gridCount);
			let randomBox = findByCoords(cell, row);

			randomBox.append(food);

			return randomBox;
		}

		function getRandomInit(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}
}

function initGrid(gridCount, target) {
	target.style.width = target.style.height = (boxSize * gridCount) + 'px';

	for (let index = 1; index < gridCount; index++) {
		target.append(createSnakeRow('snake-cell', gridCount, index));
	}
}

function createSnakeRow(snakeClass, gridCount, row) {
	let fragment = new DocumentFragment();
	
	for (let index = 1; index < gridCount; index++) {
		fragment.append(createSnakeCell(snakeClass, row, index));
	}

	return fragment;
}

function createSnakeCell(snakeClass, row, cell) {
	let div = document.createElement('div');

	div.classList.add(snakeClass);
	div.setAttribute('data-cell', cell);
	div.setAttribute('data-row', row);
	div.style.width = div.style.height = boxSize + 'px';

	return div;
}

function find(selector) {
	return document.querySelector(selector)
}

function findByCoords(cell, row) {
	return document.querySelector(`[data-cell = "${cell}"][data-row = "${row}"]`)
}