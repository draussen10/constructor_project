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
const mainHoodDiv = document.querySelector('.main-hood')
const mainSizeDiv = document.querySelector('.main-size')

const bathrobeClothDiv = document.querySelector('.cloth.bathrobe')
const autonakidkaClothDiv = document.querySelector('.cloth.autonakidka')
const pillowClothDiv = document.querySelector('.cloth.pillow')
const capClothDiv = document.querySelector('.cloth.cap')

const mainFrontTextDiv = document.querySelector('.main-front-text')

const bathrobeColorDiv = document.querySelector('.color.bathrobe')
const autonakidkaColorDiv = document.querySelector('.color.autonakidka')
const pillowColorDiv = document.querySelector('.color.pillow')
const capColorDiv = document.querySelector('.color.cap')

const mainImageDiv = document.querySelector('.main-image')
const mainUserfontDiv = document.querySelector('.main-userfont')


//

const imageList1 = document.querySelectorAll('.popupImage1 .imageList div')
const imageList2 = document.querySelectorAll('.popupImage2 .imageList div')

//
const categoryDiv = document.querySelector(".imageBox")
const hoodDiv = document.querySelector(".additionHoodBox")

let activeDivs = [mainCategoryDiv, mainHoodDiv, mainSizeDiv, bathrobeClothDiv, mainFrontTextDiv, bathrobeColorDiv, mainImageDiv, mainUserfontDiv]

const bathrobeDivs = [mainHoodDiv, mainSizeDiv, bathrobeClothDiv, bathrobeColorDiv]
const autonakidkaDivs = [autonakidkaClothDiv, autonakidkaColorDiv]
const pillowDivs = [pillowClothDiv, pillowColorDiv]
const capDivs = [capClothDiv, capColorDiv]


let order = {
	category: 'bathrobe',
	addition: 'noHood',
	cloth: 'Махровый',
	color: "Белый",
	colorOfFont: 'Черный; black',
	frontText: '',
	lowerImage: '',
	size: '42-44(S)',
	text: 'Мой текст',
	upperImage: '',
	userFont: 'Alexander'
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
			color: "Белый",
			colorOfFont: 'Черный; black',
			frontText: '',
			lowerImage: '',
			size: '42-44(S)',
			text: 'Мой текст',
			upperImage: '',
			userFont: 'Alexander'
		}
	}	else {
		order = {
			category: order.category,
			cloth: 'Алькантара',
			color: "Белый",
			colorOfFont: `${order.category === 'autonakidka' ? 'Белый>; white' : 'Черный; black'}`,
			frontText: '',
			lowerImage: '',
			text: 'Мой текст',
			upperImage: '',
			userFont: 'Alexander'
		}
	}
}

//Удаление и добавление полей ввода
const viewLeftDivs =  ()  => {
	let activeCatogoryDivs = []

	for (el of activeDivs) {
		el.style.display = 'none'
	}

	activeDivs = [mainCategoryDiv, mainFrontTextDiv, mainImageDiv, mainUserfontDiv]

	activeCatogoryDivs = eval(`${order.category}Divs`)
	activeDivs = activeDivs.concat(activeCatogoryDivs)

	for (el of activeDivs) {
		el.style.display = 'flex'
	}
}

const toUpper = str => {
	return str
			.toLowerCase()
			.split(' ')
			.map(function(word) {
					return word[0].toUpperCase() + word.substr(1);
			})
			.join(' ');
	 }

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

const updateView = () => {
	order.category === 'bathrobe' 
		? categoryDiv.style.backgroundImage = 'url(./img/bathrobe.png)'
		: order.category === 'autonakidka'
			? categoryDiv.style.backgroundImage = 'url(./img/autonakidka.png)'
			: order.category === 'pillow'
				? categoryDiv.style.backgroundImage = 'url(./img/pillow.png)'
				: categoryDiv.style.backgroundImage = 'url(./img/cap.png)'
			

	order.addition === 'hood' ? hoodDiv.style.display = 'block' : hoodDiv.style.display = 'none'
	const fontWeight = document.querySelector('.userFont span.active').style.fontWeight
	userText.style = `font-family: 'for-constructor'; font-weight: ${fontWeight}; color: ${order.colorOfFont.split('; ')[1]}`
	userText.innerHTML = order.text

	if(order.upperImage !== '') {
		document.querySelector(".userImage1").style.backgroundImage = order.upperImage
		document.querySelector(".delImage1").style.display = 'block'
	} else {
		document.querySelector(".userImage1").style.backgroundImage = ''
		document.querySelector(".delImage1").style.display = 'none'
	}

	if(order.lowerImage !== '') {
		document.querySelector(".userImage2").style.backgroundImage = order.lowerImage
		document.querySelector(".delImage2").style.display = 'block'
	} else {
		document.querySelector(".userImage2").style.backgroundImage = ''
		document.querySelector(".delImage2").style.display = 'none'
	}
}

const setOrderValue = (name, el = null) => {
	if(el === null){
		order[name] = ''
	} else {
		order[name] = el.getAttribute(name)
		if(name === 'colorOfFont') {
			order[name] = el.getAttribute(name) + "; " + el.style.backgroundColor
		}
	}
}

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
				viewLeftDivs()
			}
		}
	})
	updateView()
	showObjectInConsole()
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

	number === 1 ? setOrderValue('upperImage') : setOrderValue('lowerImage')
	
	activeTopImageDiv = document.querySelector(`.popupImage${number} .imageList div.active`)
	if(activeTopImageDiv !== null) {
		activeTopImageDiv.classList.remove("active")
	}
	updateView()
	//Подумать как реализовать изменение красиво
}
document.querySelector('.delImage1').onclick = (event) => {
	clearImage(event, 1)
}
document.querySelector('.delImage2').onclick = (event) => {
	clearImage(event, 2)
}


document.querySelector(".popupImage1 > .close").onclick = () => {
	document.querySelector(".popupImage1").style.display = "none"
}
document.querySelector(".popupImage2 > .close").onclick = () => {
	document.querySelector(".popupImage2").style.display = "none"
}

document.querySelector(".image1").onclick = () => {
	document.querySelector(".popupImage1").style.display = "block"
}
document.querySelector(".image2").onclick = () => {
	document.querySelector(".popupImage2").style.display = "block"
}