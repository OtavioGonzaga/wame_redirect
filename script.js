const num = document.getElementById("num")
const form = document.querySelector("form")

form.onsubmit = (e) => {
	e.preventDefault()
	window.location.replace(`https://wa.me/+55${num.value}`)
}
num.focus()

num.addEventListener("input", (e) => {
	console.log(e.target.value)
})