const mainText = document.getElementById("mainText");

const colorRed = '<span style="color:red !important">';
//colorSpan + [color] + important

const colorSpan = '<span style="color:';
const important = '!important">';
const endSpan = "</span>";
const br = "<br>";
const bold = "<b>";
const endBold = "</b>";

//var wordSeparators = " ";
var wordSeparators = /\—|\s/;

function setText(newText)
{
	mainText.innerHTML = newText + br;
}

//TEST

setText(bold + "Cont" + endBold + "est");
