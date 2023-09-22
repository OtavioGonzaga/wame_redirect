const num = document.getElementById("num")
const form = document.querySelector("form")

form.onsubmit = (e) => {
	e.preventDefault()
	window.location.href = `https://wa.me/+55${num.value}`
}
num.focus()

num.addEventListener("input", (e) => {
	console.log(e.target.value)
})

num.addEventListener("keypress", (e) => {
	if (e.code === "Enter") Submit()
})

function Submit() {
	console.log("aa")
}