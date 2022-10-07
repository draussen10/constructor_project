//Все должно быть либо белого, либо черного цвета
const userText = document.querySelector("span.userText")

const categoryDivs = document.querySelectorAll('.category div')
const additionDivs = document.querySelectorAll('.addition div')

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

const mainColorOfFontDiv = document.querySelector(".colorEmbroidery").parentNode

const mainImageBathobeDiv = document.querySelector('.main-image-bathrobe')
const mainImageOtherDiv = document.querySelector('.main-image-other')

const mainTextDiv = document.querySelector('.main-userfont')


//
const imageList1 = document.querySelectorAll('.popupImage1 .imageList div')
const imageList2 = document.querySelectorAll('.popupImage2 .imageList div')
const imageList3 = document.querySelectorAll('.popupImage3 .imageList div')

//
const categoryDiv = document.querySelector(".imageBox")
const hoodDiv = document.querySelector(".additionHoodBox")


const bathrobeDivs = [mainCategoryDiv, mainAdditionDiv, mainSizeDiv, mainBathrobeClothDiv, mainBathrobeColorDiv, mainColorOfFontDiv, mainFrontTextDiv, mainTextDiv, mainImageBathobeDiv]
const autonakidkaDivs = [mainCategoryDiv, mainAutonakidkaColorDiv, mainAutonakidkaClothDiv, mainImageOtherDiv]
const pillowDivs = [mainCategoryDiv, mainPillowClothDiv, mainPillowColorDiv, mainColorOfFontDiv, mainTextDiv]
const capDivs = [mainCategoryDiv, mainCapClothDiv, mainCapColorDiv, mainColorOfFontDiv, mainTextDiv, mainImageOtherDiv]

let activeDivs = bathrobeDivs


let order = {
	category: 'bathrobe',
	addition: 'noHood',
	cloth: 'Махровый',
	color: "Черный; black",
	frontText: '',
	size: '42-44(S)',
	text: 'Мой текст',
	userFont: 'Alexander',
	colorOfFont: 'Белый; white',
	lowerImage: '',
	upperImage: '',
}

const showObjectInConsole = () => {
	console.clear()
	for (key in order){
		console.log(key + ": " + order[key])
	}
}

const keyOrder = category => {
	if(category === 'bathrobe'){
		order = {
			category: 'bathrobe',
			addition: 'noHood',
			cloth: 'Махровый',
			color: "Черный; black",
			frontText: '',
			size: '42-44(S)',
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Белый; white',
			lowerImage: '',
			upperImage: '',
		}
	}	else if(category === 'autonakidka') {
		order = {
			category: order.category,
			cloth: 'Алькантара',
			color: "Черный",
			upperImage: '',
		} 
	} else if(category === 'pillow') {
		order = {
			category: order.category,
			cloth: 'Алькантара',
			color: "Черный",		
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Белый; white',
		}
	} else {
		order = {
			category: order.category,
			cloth: 'Алькантара',
			color: "Black; black",
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Белый; white',
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
		document.querySelector('.userText').classList.add('userText-pillow')
	} else {
		document.querySelector('.userText').classList.remove('userText-pillow')
	}

	if(order.category === 'cap') {
		document.querySelector('.userImage1').classList.add('userImage1-cap')
	} else {
		document.querySelector('.userImage1').classList.remove('userImage1-cap')
	}
	
}

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

//Каждый первый элемент - активный
const setActiveItemToFirst = () => {
	for (key in order) {
		if(key === 'cloth' || key == 'color'){
			eval(key + toUpper(order.category) + 'Divs').forEach( (el, idx) => {
				idx === 0 ? el.classList.add("active") : el.classList.remove("active")
			})
		} else if(key === 'category' || key === 'lowerImage' || key === 'upperImage' || key === 'text') {
			continue
		} else {
			eval(key + 'Divs').forEach( (el, idx) => {
				idx === 0 ? el.classList.add("active") : el.classList.remove("active")
			})
		}
	}
	sizeInput.value = ''
	textarea.value = order.text
}

//Обновление вида и полей объекта order
const updateView = () => {

	if(order.category === 'bathrobe' || order.category === 'cap'){
		categoryDiv.style.backgroundImage = `url(./img/${order.category}/${order.color.split('; ')[1]}.png)`
	} else {
		categoryDiv.style.backgroundImage = `url(./img/${order.category}.png)`
	}


	if (order.addition === 'hood') {
		hoodDiv.style.backgroundImage = `url(./img/bathrobe/hood/${order.color.split('; ')[1]}.png)`
		hoodDiv.style.display = 'block'
	} else{
		hoodDiv.style.display = 'none'
	}
		

	if(order.text !== undefined){
		const fontWeight = document.querySelector('.userFont span.active').style.fontWeight
		userText.style = `font-family: 'for-constructor'; font-weight: ${fontWeight}; color: ${order.colorOfFont.split('; ')[1]}`
		userText.innerHTML = order.text
	} else {
		userText.innerHTML = ''
	}

	if(order.upperImage !== '') {
		document.querySelector(".userImage1").style.backgroundImage = order.upperImage
		order.category === 'bathrobe' ? document.querySelector(".delImage1").style.display = 'flex' : document.querySelector(".delImage3").style.display = 'flex'
	} else {
		document.querySelector(".userImage1").style.backgroundImage = ''
		document.querySelector(".delImage1").style.display = document.querySelector(".delImage3").style.display = 'none'
	}


	if(order.lowerImage !== '' && order.lowerImage !== undefined) {
		document.querySelector(".userImage2").style.backgroundImage = order.lowerImage
		document.querySelector(".delImage2").style.display = 'flex'
	} else {
		document.querySelector(".userImage2").style.backgroundImage = ''
		document.querySelector(".delImage2").style.display = 'none'
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
		el.onclick = () => {
			for (element of array) (
				element.classList.remove("active")
			)
			el.classList.add("active")

			setOrderValue(valueOfObject, el)
			updateView()
			if(array === categoryDivs){
				keyOrder(order.category)
				setActiveItemToFirst()
				viewDivs()
				updateView()
			}
			showObjectInConsole()
		}
	})
}

textarea.addEventListener('input', () => {
	if (textarea.value.split('\n').length > 3) {
		textarea.value = textarea.value.split('\n')[0] + '\n' + textarea.value.split('\n')[1] + '\n' + textarea.value.split('\n')[2] 
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
		document.querySelector(`.popupImage${i}`).style.display = "block"
	}
}