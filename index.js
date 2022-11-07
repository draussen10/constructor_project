const categoryDivs = document.querySelectorAll('.category span')
const additionDivs = document.querySelectorAll('.hood span')

const sizeDivs = document.querySelectorAll('.size div span')
const sizeInput = document.querySelector('input[name = "size60-height"]')

const clothBathrobeDivs = document.querySelectorAll('.cloth.bathrobe span')
const clothAutonakidkaDivs = document.querySelectorAll('.cloth.autonakidka span')
const clothPillowDivs = document.querySelectorAll('.cloth.pillow span')
const clothCapDivs = document.querySelectorAll('.cloth.cap span')

const colorBathrobeDivs = document.querySelectorAll('.color.bathrobe span')
const colorAutonakidkaDivs = document.querySelectorAll('.color.autonakidka span')
const colorPillowDivs = document.querySelectorAll('.color.pillow span')
const colorCapDivs = document.querySelectorAll('.color.cap span')

const frontTextDivs = document.querySelectorAll('.front-text span')

const colorOfFontDivs = document.querySelectorAll('.colorEmbroidery span')

const userFontDivs = document.querySelectorAll('.userFont span')

const textarea = document.querySelector("#userText")

//

const mainCategoryDiv = document.querySelector('.main-category')
const mainAdditionDiv = document.querySelector('.main-hood')
const mainSizeDiv = document.querySelector('.main-size')

const mainBathrobeClothDiv = document.querySelector('.cloth.bathrobe')
const mainAutonakidkaClothDiv = document.querySelector('.cloth.autonakidka')
const mainPillowClothDiv = document.querySelector('.cloth.pillow')
const mainCapClothDiv = document.querySelector('.cloth.cap')

const mainFrontTextDiv = document.querySelector('.main-front-text')

const mainBathrobeColorDiv = document.querySelector('.color.bathrobe')
const mainAutonakidkaColorDiv = document.querySelector('.color.autonakidka')
const mainPillowColorDiv = document.querySelector('.color.pillow')
const mainCapColorDiv = document.querySelector('.color.cap')

const mainColorOfFontDiv = document.querySelector(".colorEmbroidery-bathrobe")
const mainPillowColorOfFontDiv = document.querySelector(".colorEmbroidery-pillow")

const mainImageBathobeDiv = document.querySelector('.main-image-bathrobe')
const mainImageOtherDiv = document.querySelector('.main-image-cap')

const mainTextDiv = document.querySelector('.main-userFont')


//
const imageList1 = document.querySelectorAll('.popupImage1 .imageList div')
const imageList2 = document.querySelectorAll('.popupImage2 .imageList div')
const imageList3 = document.querySelectorAll('.popupImage3 .imageList div')

//
const imageBox = document.querySelector(".imageBox")
const hoodImg = document.querySelector(".additionBox")
const userImage1 = document.querySelector(".userImage1")
const userImage2 = document.querySelector(".userImage2")
const userText = document.querySelector(".userText")
const userPillowText = document.querySelector(".userPillowText")


const bathrobeDivs = [mainCategoryDiv, mainAdditionDiv, mainSizeDiv, mainBathrobeClothDiv, mainBathrobeColorDiv, mainColorOfFontDiv, mainFrontTextDiv, mainTextDiv, mainImageBathobeDiv]
const autonakidkaDivs = [mainCategoryDiv, mainAutonakidkaColorDiv, mainAutonakidkaClothDiv, mainImageOtherDiv]
const pillowDivs = [mainCategoryDiv, mainPillowClothDiv, mainPillowColorDiv, mainPillowColorOfFontDiv, mainTextDiv, mainImageOtherDiv]
const capDivs = [mainCategoryDiv, mainCapClothDiv, mainCapColorDiv, mainColorOfFontDiv, mainTextDiv, mainImageOtherDiv]

let activeDivs = bathrobeDivs

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}
//DragAndDrop

function dragAndDrop(el) {
		let coordsY

		el.addEventListener('dragstart', e => {
			e.dataTransfer.setData('text/html', 'dragstart')
			el.style.zIndex = '1000'
			coordsY = e.offsetY
		})

		el.addEventListener('dragend', e => {
			el.style.top = e.pageY - coordsY - getOffset(imageBox).top + 'px'
			el.style.left = e.pageX  - getOffset(imageBox).left + 'px'
		})
}

dragAndDrop(userImage1)
dragAndDrop(userImage2)
dragAndDrop(userText)
dragAndDrop(userPillowText)



let order = {
	category: 'bathrobe',
	addition: 'noHood',
	cloth: 'Махровый',
	color: "Синий; blue",
	frontText: '',
	size: '42-44(S)',
	text: 'Мой текст',
	userFont: 'Alexander',
	colorOfFont: 'Золотой; gold',
	lowerImage: '',
	upperImage: '',
}

const original_coords = {
	bathrobe: {
		userImage1: {
			top: '175px',
			left: '50%'
		},
		userText: {
			top: '67%',
			left: '50%'
		},
		userImage2: {
			top: '395px',
			left: '50%'
		}
	},
	autonakidka: {
		userImage1: {
			top: '130px',
			left: '50%'
		}
	},
	pillow: {
		userImage1: {
			top: '200px',
			left: '50%'
		},
		userText: {
			top: '330px',
			left: '48%'
		},
		userPillowText: {
			top: '313px',
			left: '67%'
		}
	},
	cap: {
		userImage1: {
			top: '280px',
			left: '50%'
		},
		userText: {
			top: '67%',
			left: '50%'
		}
	}
}

const colors = ['darkblue', 'blue', '474a51', 'purple', 'green', 'brown', 'red', 'silver', 'black', 'white', 'gold']

//Utilits

//Приведение первой буквы к верхнему регистру
const toUpper = str => {
	return str
		.toLowerCase()
		.split(' ')
		.map(function(word) {
				return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');
}

const showObjectInConsole = () => {
	console.clear()
	for (key in order){
		console.log(key + ": " + order[key])
	}
}

const toColor = str => str.split('; ')[1]

//Functions

const setKeyOrder = category => {
	if(category === 'bathrobe'){
		order = {
			category: 'bathrobe',
			addition: 'noHood',
			cloth: 'Махровый',
			color: "Синий; blue",
			frontText: '',
			size: '42-44(S)',
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Золотой; gold',
			lowerImage: '',
			upperImage: '',
		}
	}	else if(category === 'autonakidka') {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Черный",
			upperImage: '',
		} 
	} else if(category === 'pillow') {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Черный",		
			text: 'Госномер\n01',
			userFont: 'Alexander',
			colorOfFont: 'Белый; white',
			upperImage: '',
		}
	} else {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Black; black",
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Золотой; gold',
			upperImage: '',
		}
	}
}

//Удаление и добавление полей ввода
const viewDivs = () => {
	for (el of activeDivs) {
		el.style.display = 'none'
	}
	
	activeDivs = eval(`${order.category}Divs`)

	for (el of activeDivs) {
		el.style.display = 'flex'
	}

	if(order.category === 'pillow'){

		userImage1.classList.add('userImage1-pillow')
		userText.classList.add('userText-pillow')

	} else {
		userText.classList.remove('userText-pillow')
		userImage1.classList.remove('userImage1-pillow')
	}

	if(order.category === 'cap') {
		userImage1.classList.add('userImage1-cap')
	} else {
		userImage1.classList.remove('userImage1-cap')
	}
	
}

//Каждый первый элемент - активный
const setOriginSettings = () => {
	for (key in order) {
		if(key === 'cloth' || key === 'color'){
			eval(key + toUpper(order.category) + 'Divs').forEach( (el, idx) => {
				idx === 0 ? el.classList.add("active") : el.classList.remove("active")
			})
		} else if(key === 'category' || key === 'lowerImage' || key === 'upperImage' || key === 'text') {
			continue
		} else if(order.category === 'pillow' && key === 'colorOfFont') {
			document.querySelector('.colorEmbroidery-pillow span').classList.add("active")
		} else {
			eval(key + 'Divs').forEach( (el, idx) => {
				idx === 0 ? el.classList.add("active") : el.classList.remove("active")
			})
		}
	}
	sizeInput.value = ''
	textarea.value = order.text

	const imageList = [userImage1, userImage2]

	imageList.forEach(el => {
		for(color of colors) {
			el.classList.remove(`img-${color}`)
		}
	})

	if(order.category === 'bathrobe') {
		userImage1.style.left = original_coords.bathrobe.userImage1.left
		userImage2.style.left = original_coords.bathrobe.userImage2.left
			userText.style.left = original_coords.bathrobe.userText.left

		userImage1.style.top = original_coords.bathrobe.userImage1.top
		userImage2.style.top = original_coords.bathrobe.userImage2.top
			userText.style.top = original_coords.bathrobe.userText.top

	} else if(order.category === 'autonakidka') {
		userImage1.style.left = original_coords.autonakidka.userImage1.left
		userImage1.style.top = original_coords.autonakidka.userImage1.top
	} else if(order.category === 'pillow') {

		userImage1.style.left = original_coords.pillow.userImage1.left
		userText.style.left = original_coords.pillow.userText.left
		userPillowText.style.left = original_coords.pillow.userPillowText.left

		userImage1.style.top = original_coords.pillow.userImage1.top
		userText.style.top = original_coords.pillow.userText.top
		userPillowText.style.top = original_coords.pillow.userPillowText.top

	} else if(order.category === 'cap') {

		userImage1.style.left = original_coords.cap.userImage1.left
		userText.style.left = original_coords.cap.userText.left

		userImage1.style.top = original_coords.cap.userImage1.top
		userText.style.top = original_coords.cap.userText.top
	}
}

//Обновление вида и полей объекта order
const updateView = () => {

	if(order.category === 'pillow'){
		imageBox.style.backgroundImage = `url(./img/${order.category}.png)`
	} else if(order.category === 'autonakidka') {
		imageBox.style.backgroundImage = `url(./img/${order.category}/${order.cloth}.png)`
	} else {
		imageBox.style.backgroundImage = `url(./img/${order.category}/${toColor(order.color)}.png)`
	}


	if (order.addition === 'hood') {
		hoodImg.style.backgroundImage = `url(./img/bathrobe/hood/${toColor(order.color)}.png)`
		hoodImg.style.display = 'block'
	} else{
		hoodImg.style.display = 'none'
	}

	userImage1.classList.remove('userImage1-autonakidka')
	if(order.category === 'autonakidka') {
		userImage1.classList.add('userImage1-autonakidka')
	}
		

	if(order.text !== undefined){
		const fontWeight = document.querySelector('.userFont span.active').style.fontWeight
		userText.style = `font-family: 'for-constructor'; font-weight: ${fontWeight}; color: ${toColor(order.colorOfFont)}`
		userPillowText.style = `font-family: 'for-constructor'; font-weight: ${fontWeight}; color: ${toColor(order.colorOfFont)}`
		if(order.category !== 'pillow'){
			userText.innerHTML = order.text
			userPillowText.innerHTML = ''
		} else {
			userText.innerHTML = order.text.split('\n')[0]
			userPillowText.innerHTML = order.text.split('\n')[1]
		}
		
	} else {
		userText.innerHTML = ''
		userPillowText.innerHTML = ''
	}

	if(order.upperImage !== ''  && order.upperImage !== undefined) {
		userImage1.style.backgroundImage = order.upperImage
		order.category === 'bathrobe' ? document.querySelector(".delImage1").style.display = 'flex' : document.querySelector(".delImage3").style.display = 'flex'
	} else {
		userImage1.style.backgroundImage = ''
		document.querySelector(".delImage1").style.display = document.querySelector(".delImage3").style.display = 'none'
	}


	if(order.lowerImage !== '' && order.lowerImage !== undefined) {
		document.querySelector(".userImage2").style.backgroundImage = order.lowerImage
		document.querySelector(".delImage2").style.display = 'flex'
	} else {
		document.querySelector(".userImage2").style.backgroundImage = ''
		document.querySelector(".delImage2").style.display = 'none'
	}

	if(order.category === 'bathrobe') {
		const imageList = [userImage1,userImage2]
		
		imageList.forEach(el => {
			for(color of colors) {
				el.classList.remove(`img-${color}`)
			}
			if(toColor(order.colorOfFont) === 'rgb(71, 74, 81)'){
				el.classList.add(`img-474a51`)
			} else {
				el.classList.add(`img-${toColor(order.colorOfFont)}`)
			}
		})
	}


}

//Изменение полей объекта при прямом выборе(изменяется только одно поле)
const setOrderValue = (name, el = null) => {
	if(el === null){
		order[name] = ''
	} else {
		order[name] = el.getAttribute(name)
		if(name === 'colorOfFont' || name === 'color') {
			order[name] = el.getAttribute(name) + "; " + el.style.backgroundColor
		}
	}
}

//Наблюдение за нажатием на каждом div-поле
const watch = (array, valueOfObject) => {
	array.forEach(el => {
		el.addEventListener('click', () => {
			for (element of array) (
				element.classList.remove("active")
			)
			el.classList.add("active")

			setOrderValue(valueOfObject, el)
			if(array === categoryDivs){
				setKeyOrder(order.category)
				setOriginSettings()
				viewDivs()
			}
			updateView()
			showObjectInConsole()
		})
	})
}

textarea.addEventListener('input', () => {
	if (textarea.value.split('\n').length > 2) {
		textarea.value = textarea.value.split('\n')[0] + '\n' + textarea.value.split('\n')[1]
	}
	order.text = textarea.value
	updateView()
	showObjectInConsole()
})


watch(categoryDivs, 'category')
watch(additionDivs, 'addition')
watch(sizeDivs, 'size')

watch(clothBathrobeDivs, 'cloth')
watch(clothAutonakidkaDivs, 'cloth')
watch(clothPillowDivs, 'cloth')
watch(clothCapDivs, 'cloth')

watch(colorBathrobeDivs, 'color')
watch(colorAutonakidkaDivs, 'color')
watch(colorPillowDivs, 'color')
watch(colorCapDivs, 'color')

watch(frontTextDivs, 'frontText')
watch(colorOfFontDivs, 'colorOfFont')
watch(userFontDivs, 'userFont')

watch(imageList1, 'upperImage')
watch(imageList2, 'lowerImage')
watch(imageList3, 'upperImage')


//Логика, связанная с переключением полей размеры и ввода значения размера для халата
sizeInput.addEventListener('keydown', (e) => {if (e.keyCode === 13) {e.preventDefault()}})
sizeInput.addEventListener('input', () => {
	if(sizeInput.value.length !== 0 ){
		activeSizeDiv = document.querySelector('.size div span.active')
		if(activeSizeDiv !== null) {
			activeSizeDiv.classList.remove("active")
		}
		order.size = sizeInput.value
		showObjectInConsole()
	} else {
		firstSizeDiv = document.querySelector('.size div span:nth-child(1)')
		firstSizeDiv.classList.add("active")
		setOrderValue('size', firstSizeDiv)
	}
})
sizeDivs.forEach(el => {el.addEventListener('click', () => {sizeInput.value = ''})})

const clearImage = (event, number) => {
	event.stopPropagation()

	number === 2 ? setOrderValue('lowerImage') : setOrderValue('upperImage')
	
	activeTopImageDiv = document.querySelector(`.popupImage${number} .imageList div.active`)
	if(activeTopImageDiv !== null) {
		activeTopImageDiv.classList.remove("active")
	}
	updateView()
	showObjectInConsole()
}

for (let i = 1; i <= 3; i++) {
	//Очистить изображение
	document.querySelector(`.delImage${i}`).onclick = (event) => {
		clearImage(event, i)
	}
	//Скрыть Поп-ап с изображениями
	document.querySelector(`.popupImage${i} > .close`).onclick = () => {
		document.querySelector(`.popupImage${i}`).style.display = "none"
	}
	//Показать Поп-ап с изображениями
	document.querySelector(`.image${i}`).onclick = () => {
		document.querySelector(`.popupImage${i}`).style.display = 'block'
	}
}



//DRAG&DROP

const wrapper = imageBox
const drag    = userText

const offsetTouch = {
	x: null,
	y: null
}

const touchStart = (event) => {
	const touch = event.targetTouches[0]
	offsetTouch.x = touch.pageX - drag.getBoundingClientRect().left
	offsetTouch.y = touch.pageY - drag.getBoundingClientRect().top

	drag.classList.add('drag-start')
}

const touchMove = (event) => {
	const touch = event.targetTouches[0]
	drag.style.top  = `${ touch.pageY - (wrapper.offsetTop)  - (offsetTouch.y) }px`
	drag.style.left = `${ touch.pageX - (wrapper.offsetLeft) - (offsetTouch.x) }px`

	if (drag.getBoundingClientRect().top <= wrapper.getBoundingClientRect().top) {
		drag.style.top = `${ 0 }px`
	}
	if (drag.getBoundingClientRect().right >= wrapper.getBoundingClientRect().right) {
		drag.style.right = `${ 0 }px`
		drag.style.left  = `unset`
	}
	if (drag.getBoundingClientRect().bottom >= wrapper.getBoundingClientRect().bottom) {
		drag.style.top = `unset`
		drag.style.bottom = `${ 0 }px`
	}
	if (drag.getBoundingClientRect().left <= wrapper.getBoundingClientRect().left) {
		drag.style.left = `${ 0 }px`
	}
}

const touchEnd = () => {
	drag.classList.remove('drag-start')
}

const init = () => {
	drag.addEventListener('touchstart', touchStart)
	drag.addEventListener('touchmove', touchMove)
	drag.addEventListener('touchend', touchEnd)
}

setTimeout(() => body.innerHTML += window.innerWidth, 5000)

init()
