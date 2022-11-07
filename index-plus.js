//categorySwitchDivs
const categoryDiv = document.querySelector('.main-category')
const additionDiv = document.querySelector('.main-hood')
const sizeDiv = document.querySelector('.main-size')

const bathrobeClothDiv = document.querySelector('.cloth.bathrobe')
const autonakidkaClothDiv = document.querySelector('.cloth.autonakidka')
const pillowClothDiv = document.querySelector('.cloth.pillow')
const capClothDiv = document.querySelector('.cloth.cap')

const frontTextDiv = document.querySelector('.main-front-text')

const bathrobeColorDiv = document.querySelector('.color.bathrobe')
const autonakidkaColorDiv = document.querySelector('.color.autonakidka')
const pillowColorDiv = document.querySelector('.color.pillow')
const capColorDiv = document.querySelector('.color.cap')

const colorOfFontDiv = document.querySelector(".main-colorEmbroidery-bathrobe")
const pillowColorOfFontDiv = document.querySelector(".main-colorEmbroidery-pillow")

const imageBathobeDiv = document.querySelector('.main-image-bathrobe')
const imageOtherDiv = document.querySelector('.main-image-cap')

const textDiv = document.querySelector('.main-userFont')

const bathrobeDivs = [categoryDiv, additionDiv, sizeDiv, bathrobeClothDiv, bathrobeColorDiv, colorOfFontDiv, frontTextDiv, textDiv, imageBathobeDiv]
const autonakidkaDivs = [categoryDiv, autonakidkaColorDiv, autonakidkaClothDiv, imageOtherDiv]
const pillowDivs = [categoryDiv, pillowClothDiv, pillowColorDiv, pillowColorOfFontDiv, textDiv, imageOtherDiv]
const capDivs = [categoryDiv, capClothDiv, capColorDiv, colorOfFontDiv, textDiv, imageOtherDiv]

//ViewDivs
const imageBox = document.querySelector(".imageBox")
const hoodImg = document.querySelector(".additionBox")
const userImage1 = document.querySelector(".userImage1")
const userImage2 = document.querySelector(".userImage2")
const userText = document.querySelector(".userText")
const userPillowText = document.querySelector(".userPillowText")

//SwitchDivs
const sizeInput = document.querySelector('input[name = "size60-height"]')
const textarea = document.querySelector("#userText")

//OriginSettings
let activeDivs = bathrobeDivs
let order = {
	category: 'bathrobe',
	addition: 'noHood',
	cloth: 'terry',
	color: "Синий; blue",
	frontText: 'no',
	size: '42-44(S)',
	text: 'Мой текст',
	colorOfFont: 'Золотой; gold',
	userFont: 'Alexander',
	lowerImage: '',
	upperImage: ''
}
const original_coords = {
	bathrobe: {
		userImage1: {
			top: '175px',
			left: '115px'
		},
		userText: {
			top: '342.85px',
			left: '84px'
		},
		userImage2: {
			top: '395px',
			left: '102px'
		}
	},
	autonakidka: {
		userImage1: {
			top: '130px',
			left: '115px'
		}
	},
	pillow: {
		userImage1: {
			top: '150px',
			left: '120px'
		},
		userText: {
			top: '310.85px',
			left: '62.85px'
		},
		userPillowText: {
			top: '313px',
			left: '67%'
		}
	},
	cap: {
		userImage1: {
			top: '234px',
			left: '115px'
		},
		userText: {
			top: '67%',
			left: '84px'
		}
	}
}

//Utility Function
const toColorEng = str => str.split('; ')[1]
const toColorRu = str => str.split('; ')[0]

//Main Function
function viewDivs() {
	for(el of activeDivs) {
		el.style.display = 'none'
	}

	activeDivs = eval(`${order.category}Divs`)

	for(el of activeDivs) {
		el.style.display = 'flex'
	}

	//Set Origin div.active
	for(key in order) {
		if(key === 'lowerImage' || key === 'upperImage'){
			continue
		}

		keyDivs = document.querySelectorAll(`[${key}]`)
		!!document.querySelector(`.active[${key}]`) && document.querySelector(`.active[${key}]`).classList.remove('active')
		if(key === 'color' ||  key === 'colorOfFont'){
			for(el of keyDivs) {
				el.getAttribute([key]) === toColorRu(order[key]) && el.classList.add('active')
			}
		} else {
			for(el of keyDivs) {
				el.getAttribute([key]) === order[key] && el.classList.add('active')
			}
		}
	}
}

function setOrderOriginSettings() {
	if(order.category === 'bathrobe'){
		order = {
			category: 'bathrobe',
			addition: 'noHood',
			cloth: 'terry',
			color: "Синий; blue",
			frontText: 'no',
			size: '42-44(S)',
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Золотой; gold',
			lowerImage: '',
			upperImage: '',
		}
	}	else if(order.category === 'autonakidka') {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Чёрный; black",
			upperImage: '',
		}
	} else if(order.category === 'pillow') {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Чёрный; black",
			text: 'Госномер\n01',
			userFont: 'Alexander',
			colorOfFont: 'Белый; white',
			upperImage: '',
		}
	} else {
		order = {
			category: order.category,
			cloth: 'alcantara',
			color: "Чёрный; black",
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Золотой; gold',
			upperImage: '',
		}
	}

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

const clearImage = (event, number) => {
	event.stopPropagation()

	if(number === 2) {
		order.lowerImage = ''
	} else {
		order.upperImage = ''
	}

	console.log(order)
	updateView()
}

function setOriginSettings() {
	setOrderOriginSettings()
	viewDivs()
}

function updateView() {

	//category
	if(order.category === 'autonakidka') {
		imageBox.style.backgroundImage = `url(./img/${order.category}/${order.cloth}.png)`
	} else if(order.category === 'pillow'){
		imageBox.style.backgroundImage = `url(./img/${order.category}.png)`
	} else {
		imageBox.style.backgroundImage = `url(./img/${order.category}/${toColorEng(order.color)}.png)`
	}

	//hood
	if (order.addition === 'hood') {
		hoodImg.style.backgroundImage = `url(./img/bathrobe/hood/${toColorEng(order.color)}.png)`
		hoodImg.style.display = 'block'
	} else{
		hoodImg.style.display = 'none'
	}

	//text
	if(order.text !== undefined){
		const fontWeight = document.querySelector('[userFont].active').style.fontWeight
		userText.style.fontFamily = 'for-constructor'
		userText.style.fontWeight = fontWeight
		userText.style.color = toColorEng(order.colorOfFont)

		userText.style.fontFamily = 'for-constructor'
		userText.style.fontWeight = fontWeight
		userText.style.color = toColorEng(order.colorOfFont)

		if(order.category === 'pillow'){
			userText.innerHTML = order.text.split('\n')[0]
			userPillowText.innerHTML = order.text.split('\n')[1]
		} else {
			userText.innerHTML = order.text
			userPillowText.innerHTML = ''
		}

	} else {
		userText.innerHTML = ''
		userPillowText.innerHTML = ''
	}

	//upperImage
	if(order.upperImage && order.upperImage !== '') {
		userImage1.style.backgroundImage = order.upperImage
		userImage1.style.pointerEvents = 'auto'
		order.category === 'bathrobe' ? document.querySelector(".delImage1").style.display = 'flex' : document.querySelector(".delImage3").style.display = 'flex'
	} else {
		userImage1.style.backgroundImage = ''
		userImage1.style.pointerEvents = 'none'
		document.querySelector(".delImage1").style.display = document.querySelector(".delImage3").style.display = 'none'
		document.querySelector(`.active[upperimage]`) && document.querySelector(`.active[upperimage]`).classList.remove("active")
	}

	//lowerImage
	if(order.lowerImage && order.lowerImage !== '') {
		userImage2.style.backgroundImage = order.lowerImage
		userImage2.style.pointerEvents = 'auto'
		document.querySelector(".delImage2").style.display = 'flex'
	} else {
		userImage2.style.backgroundImage = ''
		userImage2.style.pointerEvents = 'none'
		document.querySelector(".delImage2").style.display = 'none'
		document.querySelector(`.active[lowerImage]`) && document.querySelector(`.active[lowerImage]`).classList.remove("active")
	}

}

document.addEventListener('click', e => {
	for (key in order) {
		if(e.target.hasAttribute(key)) {
			//Не изменять, если выбрано тоже самое
			if(order[key] === e.target.getAttribute(key)){
				return true
			}

			//Изменить активный элемент
			document.querySelector(`.active[${key}]`) && document.querySelector(`.active[${key}]`).classList.remove('active')
			e.target.classList.add('active')

			//Особенный значение для colorOfFont или color
			if(key === 'colorOfFont' || key === 'color') {
				order[key] = e.target.getAttribute(key) + "; " + e.target.style.backgroundColor
			} else {
				order[key] = e.target.getAttribute(key)
			}

			//После каждого изменения order
			if(key === 'category'){
				setOriginSettings()
			}

			updateView()
			console.log(order)
			return true
		}
	}
})


//Unstandart SwitchsDivs
sizeInput.addEventListener('keydown', (e) => {if (e.keyCode === 13) {e.preventDefault()}})
sizeInput.addEventListener('input', () => {
	if(sizeInput.value.length !== 0 ){
		const activeSizeDiv = document.querySelector(`.active[size]`)
		if(activeSizeDiv !== null) {
			activeSizeDiv.classList.remove("active")
		}
		order.size = sizeInput.value
		console.log(order)
	} else {
		const firstSize = document.querySelector('[size]:nth-child(1)')
		firstSize.classList.add('active')
		order.size = firstSize.getAttribute('size')
	}
})

textarea.addEventListener('input', () => {
	if (textarea.value.split('\n').length > 2) {
		textarea.value = textarea.value.split('\n')[0] + '\n' + textarea.value.split('\n')[1]
	}
	order.text = textarea.value

	console.log(order)
	updateView()
})

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

function touchAndDrop(drag) {
	const offsetTouch = {
		x: null,
		y: null
	}

	const touchStart = (event) => {
		const touch = event.targetTouches[0]
		offsetTouch.x = touch.pageX - drag.getBoundingClientRect().left
		offsetTouch.y = touch.pageY - drag.getBoundingClientRect().top

		drag.classList.add('drag-start')

		document.querySelector('body').style.overflow = 'hidden'
	}

	const touchMove = (event) => {
		const touch = event.targetTouches[0]
		drag.style.top  = `${ touch.pageY - (wrapper.getBoundingClientRect().top)  - (offsetTouch.y) }px`
		drag.style.left = `${ touch.pageX - (wrapper.getBoundingClientRect().left) - (offsetTouch.x) }px`

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
		document.querySelector('body').style.overflow = 'auto'
		drag.classList.remove('drag-start')
	}

	const init = () => {
		drag.addEventListener('touchstart', touchStart)
		drag.addEventListener('touchmove', touchMove)
		drag.addEventListener('touchend', touchEnd)
	}

	init()
}

function dragAndDrop(item) {
	const offsetDrag = {
		x: null,
		y: null
	}

	item.addEventListener('dragstart', dragstart)
	item.addEventListener('mousemove', onmousemove)
	item.addEventListener('dragend', dragend)


	function dragstart(e) {
		setTimeout(()=> item.style.display = 'none', 0)

		item.style.zIndex = '1000'
		offsetDrag.x = e.clientX - item.getBoundingClientRect().left
		offsetDrag.y = e.clientY - item.getBoundingClientRect().top


	}

	function dragend(e) {
		item.style.display = 'block'
		if(!item.innerHTML.length && item.style.backgroundImage == ''){
			return
		}

		item.style.top  = `${ e.clientY - (wrapper.getBoundingClientRect().top)  - (offsetDrag.y) }px`
		item.style.left = `${ e.clientX - (wrapper.getBoundingClientRect().left) - (offsetDrag.x) }px`

		if (item.getBoundingClientRect().top <= wrapper.getBoundingClientRect().top) {
			item.style.top = `${ 0 }px`
		}
		else if (item.getBoundingClientRect().right >= wrapper.getBoundingClientRect().right) {
			item.style.right = `${ 0 }px`
			item.style.left  = `unset`
		}
		else if (item.getBoundingClientRect().bottom >= wrapper.getBoundingClientRect().bottom) {
			item.style.top = `unset`
			item.style.bottom = `${ 0 }px`
		}
		else if (item.getBoundingClientRect().left <= wrapper.getBoundingClientRect().left) {
			item.style.left = `${ 0 }px`
		}



	}
}

if( window.innerWidth >= 600 ){
	dragAndDrop(userText)
	dragAndDrop(userImage1)
	dragAndDrop(userImage2)
	dragAndDrop(userPillowText)
} else {
	touchAndDrop(userText)
	touchAndDrop(userImage1)
	touchAndDrop(userImage2)
	touchAndDrop(userPillowText)
}

const size = [window.width, window.height]

window.addEventListener('resize', (e) => {
	window.resizeTo(size[0],size[1]);
})