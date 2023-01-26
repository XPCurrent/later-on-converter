//var for display
var Display = new Array(0);
//3 functions that build the keyboards for specific modes
function BuildHexadecimalKeyboard()
{
    var numbers = new Array(16);
    numbers[0] = 0;
    numbers[1] = 1;
    numbers[2] = 2;
    numbers[3] = 3;
    numbers[4] = 4;
    numbers[5] = 5;
    numbers[6] = 6;
    numbers[7] = 7;
    numbers[8] = 8;
    numbers[9] = 9;
    numbers[10] = "A";
    numbers[11] = "B";
    numbers[12] = "C";
    numbers[13] = "D";
    numbers[14] = "E";
    numbers[15] = "F";
	var div_value ="";
	for (i=0; i<=15; i++)
	{
		var element = "num" + i;
		div_value = div_value + '<div class="number" onclick="EnterToScreen('+i+')" id="'+element+'">'+numbers[i]+'</div>';
	}
	document.getElementById("keyboard").innerHTML = div_value+`<div id="mode">Mode: HEX</div>`+'<div class="number" onclick="ClearScreen()" id="clear">Clear</div>';
    ClearScreen();
}
function BuildBinaryKeyboard()
{
    var numbers = new Array(2);
    numbers[0] = 0;
    numbers[1] = 1;
	var div_value ="";
	for (i=0; i<=1; i++)
	{
		var element = "num" + i;
		div_value = div_value + '<div class="number" onclick="EnterToScreen('+i+')" id="'+element+'">'+numbers[i]+'</div>';
	}
	document.getElementById("keyboard").innerHTML = div_value+`<div id="mode">Mode: BIN</div>`+'<div class="number" onclick="ClearScreen()" id="clear">Clear</div>';
    ClearScreen();
}
function BuildDecimalKeyboard()
{
    var numbers = new Array(10);
    numbers[0] = 0;
    numbers[1] = 1;
    numbers[2] = 2;
    numbers[3] = 3;
    numbers[4] = 4;
    numbers[5] = 5;
    numbers[6] = 6;
    numbers[7] = 7;
    numbers[8] = 8;
    numbers[9] = 9;
	var div_value ="";
	for (i=0; i<=9; i++)
	{
		var element = "num" + i;
		div_value = div_value + '<div class="number" onclick="EnterToScreen('+i+')" id="'+element+'">'+numbers[i]+'</div>';
	}
	document.getElementById("keyboard").innerHTML = div_value+`<div id="mode">Mode: DEC</div>`+'<div class="number" onclick="ClearScreen()" id="clear">Clear</div>';
    ClearScreen();
}
//before keyboard, all they had to do was switch a thingy, now the new functions handle that too
function SwitchToDecimal(){
    document.getElementById("mode").innerHTML = 10;
    BuildDecimalKeyboard();
}
function SwitchToHexadecimal(){
    document.getElementById("mode").innerHTML = 16;
}
function SwitchToBinary(){
    document.getElementById("mode").innerHTML = 2;
}
//why did i make this stupid function
function AutoSetDecimal(){
    SwitchToDecimal();
}
//button-related functions that make sure you see what you're about to do
function DecimalButtonHover(){
    document.getElementById("decimal").style.borderColor="purple";
}
function BinaryButtonHover(){
    document.getElementById("binary").style.borderColor="purple";
}
function HexadecimalButtonHover(){
    document.getElementById("hexadecimal").style.borderColor="purple";
}
function DecimalButtonLeave(){
    document.getElementById("decimal").style.borderColor="forestgreen";
}
function BinaryButtonLeave(){
    document.getElementById("binary").style.borderColor="forestgreen";
}
function HexadecimalButtonLeave(){
    document.getElementById("hexadecimal").style.borderColor="forestgreen";
}
//function that adds information to screen
function EnterToScreen(inputnumvalue){
    var numbers = new Array(16);
    numbers[0] = 0;
    numbers[1] = 1;
    numbers[2] = 2;
    numbers[3] = 3;
    numbers[4] = 4;
    numbers[5] = 5;
    numbers[6] = 6;
    numbers[7] = 7;
    numbers[8] = 8;
    numbers[9] = 9;
    numbers[10] = "A";
    numbers[11] = "B";
    numbers[12] = "C";
    numbers[13] = "D";
    numbers[14] = "E";
    numbers[15] = "F";
    Display.push(numbers[inputnumvalue]);
    var DisplayedDisplay = Display.join('');
    document.getElementById("screen").innerHTML = DisplayedDisplay
}
//simple screen clear function
function ClearScreen(){
    while (Display.length) {
        Display.pop();
    }
    document.getElementById("screen").innerHTML = "0"
}