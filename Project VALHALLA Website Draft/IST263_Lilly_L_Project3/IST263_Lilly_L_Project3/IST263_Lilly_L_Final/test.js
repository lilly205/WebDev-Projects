
window.onload = function()
{

	var spoiler = document.getElementById('spoiler');
	spoiler.onclick = changeText;

}

function changeText()
{
	this.innerHTML = "This was a spoiler!";
}