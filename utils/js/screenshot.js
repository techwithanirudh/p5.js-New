function screenshot() {
	let p5Canvas = document.querySelector('.p5Canvas')
    return p5Canvas.toDataURL()
}