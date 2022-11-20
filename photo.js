document.querySelector('#form-order').addEventListener('submit', e => {
	e.preventDefault()


	html2canvas(document.querySelector(".imageBox")).then(canvas => {
		canvas.toBlob(function(blob) {
			window.saveAs(blob, 'my_image');
		});
	});
})