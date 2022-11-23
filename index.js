//categorySwitchDivs
const categoryDiv = document.querySelector('.main-category')
const additionDiv = document.querySelector('.main-hood')
const sizeDiv = document.querySelector('.main-size')

const bathrobeClothDiv = document.querySelector('.cloth.bathrobe')
const autonakidkaClothDiv = document.querySelector('.cloth.autonakidka')
const pillowClothDiv = document.querySelector('.cloth.pillow')
const capClothDiv = document.querySelector('.cloth.cap')

const frontTextDiv = document.querySelector('.main-front-text')
const viewDiv = document.querySelector(".main-view")

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
const userImage3 = document.querySelector(".userImage3")
const userText = document.querySelector(".userText")
const userPillowText = document.querySelector(".userPillowText")
const toolbarMenu = document.querySelector('.toolbar-menu')

//SwitchDivs
const sizeInput = document.querySelector('input[name = "size60-height"]')
const textarea = document.querySelector("#userText")
const scaleInput =  document.querySelector('input[name = "scale"]')

//OriginSettings
let activeDivs = bathrobeDivs
let order = {
	category: 'bathrobe',
	addition: 'noHood',
	cloth: 'terry',
	color: "Тёмносиний; darkblue",
	frontText: 'no',
	view: 'back',
	size: '42-44(S)',
	text: 'Мой текст',
	colorOfFont: 'Золотой; gold',
	userFont: 'Alexander',
	lowerImage: '',
	frontImage: '',
	upperImage: ''
}
const original_coords = {
	bathrobe: {
		userImage1: {
			top: '175px',
			left: '115px',
			width: '150px',
			height: '182px',
			k: 1
		},
		userText: {
			top: '342.85px',
			left: '84px',
			width: '200px',
			height: '40px',
			fontSize: '26px',
			k: 1
		},
		userImage2: {
			top: '395px',
			left: '102px',
			width: '174px',
			height: '84px',
			k: 1
		},
		userImage3: {
			top: '273px',
			left: '201px',
			width: '120px',
			height: '100px',
			k: 1
		}
	},
	autonakidka: {
		userImage1: {
			top: '130px',
			left: '115px',
			width: '150px',
			height: '182px',
			k: 1
		}
	},
	pillow: {
		userImage1: {
			top: '180px',
			left: '120px',
			width: '150px',
			height: '118px',
			k: 1
		},
		userText: {
			top: '312px',
			left: '65px',
			width: '200px',
			height: '40px',
			fontSize: '26px',
			k: 1
		},
		userPillowText: {
			top: '313px',
			left: '67%',
			width: '58px',
			height: '25px',
			fontSize: '32px',
			k: 1
		}
	},
	cap: {
		userImage1: {
			top: '280px',
			left: '128px',
			width: '125px',
			height: '75px',
			k: 1
		},
		userText: {
			top: '67%',
			left: '84px',
			width: '200px',
			height: '40px',
			fontSize: '26px',
			k: 1
		}
	}
}

let activeItem = null
let activeItemName = null

//Utility Function
const toColorEng = str => str.split('; ')[1]
const toColorRu = str => str.split('; ')[0]

const sumStringAndFloat = (str, reduce) => String((parseFloat(str)  + reduce).toFixed(1))
const getActiveItemName = activeItem => {
	if(activeItem === userText) {
		activeItemName = 'userText'
	} else if(activeItem === userPillowText) {
		activeItemName = 'userPillowText'
	} else if(activeItem === userImage1) {
		activeItemName = 'userImage1'
	} else if(activeItem === userImage2) {
		activeItemName = 'userImage2'
	} else if(activeItem === userImage3) {
		activeItemName = 'userImage3'
	}
	return activeItemName
}

const createImageURL = (str) => 'url(https://draussen10.github.io/constructor_project/img/' + str + `.png)`

//DRAG&DROP
function touchAndDrop(drag) {
	const offsetTouch = {
		x: null,
		y: null
	}

	const touchStart = (event) => {
		const touch = event.targetTouches[0]
		offsetTouch.x = touch.pageX - drag.getBoundingClientRect().left
		offsetTouch.y = touch.pageY - drag.getBoundingClientRect().top

		document.querySelector('body').style.overflow = 'hidden'
	}

	const touchMove = (event) => {
		const touch = event.targetTouches[0]
		drag.style.top  = `${ touch.pageY - (imageBox.getBoundingClientRect().top)  - (offsetTouch.y) }px`
		drag.style.left = `${ touch.pageX - (imageBox.getBoundingClientRect().left) - (offsetTouch.x) }px`

		if (drag.getBoundingClientRect().top <= imageBox.getBoundingClientRect().top) {
			drag.style.top = `${ 0 }px`
		}
		if (drag.getBoundingClientRect().right >= imageBox.getBoundingClientRect().right) {
			drag.style.right = `${ 0 }px`
			drag.style.left  = `unset`
		}
		if (drag.getBoundingClientRect().bottom >= imageBox.getBoundingClientRect().bottom) {
			drag.style.top = `unset`
			drag.style.bottom = `${ 0 }px`
		}
		if (drag.getBoundingClientRect().left <= imageBox.getBoundingClientRect().left) {
			drag.style.left = `${ 0 }px`
		}
	}

	const touchEnd = () => {
		document.querySelector('body').style.overflow = 'auto'
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

		item.style.top  = `${ e.clientY - (imageBox.getBoundingClientRect().top)  - (offsetDrag.y) }px`
		item.style.left = `${ e.clientX - (imageBox.getBoundingClientRect().left) - (offsetDrag.x) }px`

		if (item.getBoundingClientRect().top <= imageBox.getBoundingClientRect().top) {
			item.style.top = `${ 0 }px`
		}
		else if (item.getBoundingClientRect().right >= imageBox.getBoundingClientRect().right) {
			item.style.right = `${ 0 }px`
			item.style.left  = `unset`
		}
		else if (item.getBoundingClientRect().bottom >= imageBox.getBoundingClientRect().bottom) {
			item.style.top = `unset`
			item.style.bottom = `${ 0 }px`
		}
		else if (item.getBoundingClientRect().left <= imageBox.getBoundingClientRect().left) {
			item.style.left = `${ 0 }px`
		}

	}
}

if( window.innerWidth >= 600 ){
	dragAndDrop(userText)
	dragAndDrop(userImage1)
	dragAndDrop(userImage2)
	dragAndDrop(userImage3)
	dragAndDrop(userPillowText)
} else {
	touchAndDrop(userText)
	touchAndDrop(userImage1)
	touchAndDrop(userImage2)
	touchAndDrop(userImage3)
	touchAndDrop(userPillowText)
}

//Open Toolbar
function toolbar(item) {
	item.addEventListener('click', () => {
		activeItem = item
		activeItemName = getActiveItemName(activeItem)

		document.querySelector('input[name = "scale"]').value = original_coords[order.category][activeItemName].k
		toolbarMenu.style.display = 'block'
	})
}

function checkAndChangeScaleInput() {
	if(scaleInput.value > 2) {
		scaleInput.value = 2
	} else if (scaleInput.value < 0) {
		scaleInput.value = 0
	}

	activeItemName = getActiveItemName(activeItem)

	activeItem.style.height = `${parseInt(original_coords[order.category][activeItemName].height.replace('px', '')) * parseFloat(scaleInput.value)}px`
	activeItem.style.width = `${parseInt(original_coords[order.category][activeItemName].width.replace('px', '')) * parseFloat(scaleInput.value)}px`

	if(activeItemName.includes('Text')) {
		activeItem.style.fontSize = `${parseInt(original_coords[order.category][activeItemName].fontSize.replace('px', '')) * parseFloat(scaleInput.value)}px`
	}
	original_coords[order.category][activeItemName].k = scaleInput.value

}

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
			color: "Тёмносиний; darkblue",
			frontText: 'no',
			view: 'back',
			size: '42-44(S)',
			text: 'Мой текст',
			userFont: 'Alexander',
			colorOfFont: 'Золотой; gold',
			lowerImage: '',
			frontImage: '',
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

	if('upperImage' in order) {
		userImage1.style.left = original_coords[order.category].userImage1.left
		userImage1.style.top = original_coords[order.category].userImage1.top

		userImage1.style.height = original_coords[order.category].userImage1.height
		userImage1.style.width = original_coords[order.category].userImage1.width
	}
	if('lowerImage' in order) {
		userImage2.style.left = original_coords[order.category].userImage2.left
		userImage2.style.top = original_coords[order.category].userImage2.top

		userImage2.style.height = original_coords[order.category].userImage2.height
		userImage2.style.width = original_coords[order.category].userImage2.width
	}
	if('frontImage' in order) {
		userImage3.style.left = original_coords[order.category].userImage3.left
		userImage3.style.top = original_coords[order.category].userImage3.top

		userImage3.style.height = original_coords[order.category].userImage3.height
		userImage3.style.width = original_coords[order.category].userImage3.width
	}
	if('text' in order) {
		userText.style.left = original_coords[order.category].userText.left
		userText.style.top = original_coords[order.category].userText.top

		userText.style.height = original_coords[order.category].userText.height
		userText.style.width = original_coords[order.category].userText.width
		userText.style.fontSize = original_coords[order.category].userText.fontSize
	}
	if(order.category === 'pillow') {
		userPillowText.style.left = original_coords.pillow.userPillowText.left
		userPillowText.style.top = original_coords.pillow.userPillowText.top

		userPillowText.style.height = original_coords.pillow.userPillowText.height
		userPillowText.style.width = original_coords.pillow.userPillowText.width
		userPillowText.style.fontSize = original_coords.pillow.userPillowText.fontSize
	}
}

const clearImage = (event, number) => {
	event.stopPropagation()

	if(number === 2) {
		order.lowerImage = ''
	} else if(number === 4) {
		order.frontImage = ''
	} else {
		order.upperImage = ''
	}
	updateView()
}

function setOriginSettings() {
	setOrderOriginSettings()
	viewDivs()
}

function updateView() {
	console.log(order)

	//imageBox
	if(order.category === 'autonakidka') {
		imageBox.style.backgroundImage = createImageURL(`${order.category}/${order.cloth}`)
		console.log(createImageURL(`${order.category}/${order.cloth}`))

	} else if(order.category === 'pillow') {
		imageBox.style.backgroundImage = createImageURL(order.category)
	} else if(order.category === 'bathrobe') {
		imageBox.style.backgroundImage = createImageURL(`${order.category}/${order.view}/${toColorEng(order.color)}`)
	} else {
		imageBox.style.backgroundImage = createImageURL(`${order.category}/${toColorEng(order.color)}`)
	}

	//frontText
	if(order.frontText) {
		if(order.frontText === 'yes') {
			viewDiv.style.display = 'block'
		} else {
			viewDiv.style.display = 'none'
			document.querySelector('.active[view]').classList.remove('active')
			document.querySelector('span[view="back"]').classList.add('active')
			order.view = 'back'
			order.frontImage = ''
			imageBox.style.backgroundImage = createImageURL(`${order.category}/${order.view}/${toColorEng(order.color)}`)
		}
	}
	//view
	if(order.view) {
		if (order.view == 'front') {
			document.querySelector('.image1').style.display = 'none'
			document.querySelector('.image2').style.display = 'none'
			document.querySelector('.image4').style.display = 'flex'
		} else {
			document.querySelector('.image1').style.display = 'flex'
			document.querySelector('.image2').style.display = 'flex'
			document.querySelector('.image4').style.display = 'none'
			}
	}

	//hood
	if (order.addition === 'hood') {
		hoodImg.style.backgroundImage = createImageURL(`bathrobe/back/hood/${toColorEng(order.color)}`)
		if(order.view && order.view === 'back') {
			hoodImg.style.display = 'block'
		} else {
			hoodImg.style.display = 'none'
		}
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

		userText.style.pointerEvents = 'auto'

		if(order.category === 'pillow'){
			userText.innerHTML = order.text.split('\n')[0]
			userPillowText.innerHTML = order.text.split('\n')[1]
			userPillowText.style.pointerEvents = 'auto'
		} else {
			userText.innerHTML = order.text
			userPillowText.innerHTML = ''
			userPillowText.style.pointerEvents = 'none'
		}

		if(order.view && order.view !== 'back') {
			userText.style.display = 'none'
		} else {
			userText.style.display = 'block'
		}

	} else {
		userText.innerHTML = ''
		userPillowText.innerHTML = ''
		userPillowText.style.pointerEvents = 'none'
		userText.style.pointerEvents = 'none'
	}

	//upperImage
	userImage1.className = "userImage1 item";
	if(order.upperImage && order.upperImage !== '') {
		order.category === 'bathrobe' ? document.querySelector(".delImage1").style.display = 'flex' : document.querySelector(".delImage3").style.display = 'flex'

		if(order.category === 'bathrobe') {
			if(toColorEng(order.colorOfFont) === 'rgb(71, 74, 81)'){
				userImage1.classList.add(`img-474a51`)
			} else {
				userImage1.classList.add(`img-${toColorEng(order.colorOfFont)}`)
			}
		}
		if(order.view && order.view !== 'back') {
			userImage1.style.backgroundImage = ''
			userImage1.style.pointerEvents = 'none'
		} else {
			userImage1.style.backgroundImage = order.upperImage
			userImage1.style.pointerEvents = 'auto'
		}
	} else {
		userImage1.style.backgroundImage = ''
		userImage1.style.pointerEvents = 'none'
		document.querySelector(".delImage1").style.display = document.querySelector(".delImage3").style.display = 'none'
		document.querySelector(`.active[upperimage]`) && document.querySelector(`.active[upperimage]`).classList.remove("active")
	}

	//lowerImage
	userImage2.className = "userImage2 item";
	if(order.lowerImage && order.lowerImage !== '') {
		document.querySelector(".delImage2").style.display = 'flex'
		if(order.category === 'bathrobe') {
			if (toColorEng(order.colorOfFont) === 'rgb(71, 74, 81)') {
				userImage2.classList.add(`img-474a51`)
			} else {
				userImage2.classList.add(`img-${toColorEng(order.colorOfFont)}`)
			}
		}
		if(order.view && order.view !== 'back') {
			userImage2.style.backgroundImage = ''
			userImage2.style.pointerEvents = 'none'
		} else {
			userImage2.style.backgroundImage = order.lowerImage
			userImage2.style.pointerEvents = 'auto'
		}
	} else {
		userImage2.style.backgroundImage = ''
		userImage2.style.pointerEvents = 'none'
		document.querySelector(".delImage2").style.display = 'none'
		document.querySelector(`.active[lowerImage]`) && document.querySelector(`.active[lowerImage]`).classList.remove("active")
	}

	//frontImage
	userImage3.className = "userImage3 item";
	if(order.frontImage) {
		if(order.view !== 'back') {
			userImage3.style.pointerEvents = 'auto'
			userImage3.style.backgroundImage = order.frontImage
		} else {
			userImage3.style.backgroundImage = ''
			userImage3.style.pointerEvents = 'none'
		}
		document.querySelector(".delImage4").style.display = 'flex'
		if (toColorEng(order.colorOfFont) === 'rgb(71, 74, 81)') {
			userImage3.classList.add(`img-474a51`)
		} else {
			userImage3.classList.add(`img-${toColorEng(order.colorOfFont)}`)
		}
	} else {
		userImage3.style.backgroundImage = ''
		userImage3.style.pointerEvents = 'none'
		document.querySelector(".delImage4").style.display = 'none'
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
			return true
		}
	}

	// Появление и исчезновение меню с параметрами/
	if(e.target.hasAttribute('draggable')) {
		toolbar(e.target)
	} else {
		if(e.target == toolbarMenu || toolbarMenu.contains(e.target)) {
			return true
		}

		if(toolbarMenu.style.display == 'block') {
			toolbarMenu.style.display = 'none'
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

	updateView()
})

for (let i = 1; i <= 4; i++) {
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

scaleInput.addEventListener('input', () => {
	checkAndChangeScaleInput()
})
scaleInput.addEventListener('keydown', (e) => {if (e.keyCode === 13) {e.preventDefault()}})

document.querySelector('.toolbar-input-minus').addEventListener('click', () => {
	scaleInput.value = sumStringAndFloat(scaleInput.value, -0.1)
	checkAndChangeScaleInput()
})

document.querySelector('.toolbar-input-plus').addEventListener('click', () => {
	scaleInput.value = sumStringAndFloat(scaleInput.value, 0.1)
	checkAndChangeScaleInput()
})

function doPhoto(imgName = '') {
	html2canvas(document.querySelector(".imageBox")).then(canvas => {
		canvas.toBlob(function(blob) {
			window.saveAs(blob, `${order.category}${imgName}`);
		});
	});
}


document.querySelector('#form-order').addEventListener('submit', e => {
	e.preventDefault()

	order.whereTalk = document.querySelector('input[name="where-talk"]').value
	order.dataContact = document.querySelector('input[name="data-contact"]').value

	if(order.frontText && order.frontText === 'yes') {
		userText.style.display = 'block'

		userImage3.style.backgroundImage = ''
		userImage1.style.backgroundImage = order.upperImage
		userImage2.style.backgroundImage = order.lowerImage
		imageBox.style.backgroundImage = `url(./img/${order.category}/back/${toColorEng(order.color)}.png)`
		doPhoto('_back')

		userText.style.display = 'none'
		userImage1.style.backgroundImage = ''
		userImage2.style.backgroundImage = ''

		userImage3.style.backgroundImage = order.frontImage
		imageBox.style.backgroundImage = `url(./img/${order.category}/front/${toColorEng(order.color)}.png)`

		doPhoto('_front')
	} else {
		doPhoto()
	}


})