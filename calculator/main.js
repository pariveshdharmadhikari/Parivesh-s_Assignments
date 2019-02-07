/*event listener for key press event*/
document.addEventListener("keydown", keyDownTextField, false);

/*function to perform action on keypress*/
function keyDownTextField(e) {
    var keyCode = e.key;
    if (e.keyCode == 13) {
        equal();
    }
    if (e.keyCode == 27) {
        reset();
    }
    if (e.keycode == 107 || e.keycode == 111 || e.keycode == 106 || e.keycode == 109) {
        onButtonClick(e.key);
    }
}

/*global variables*/
var stringNumber, printString;
var buffer = [];
var jsData = new Array();


/*function to perform task on clicking the html buttons of web page*/
function onButtonClick(ids) {
    buffer.push(ids);
    stringNumber = buffer.join('');
    document.getElementById('viewer').value = stringNumber;
    makeFocus();
}

/*function to make cusros always point in the input field*/
function makeFocus() {
    document.getElementById('viewer').focus();
}

/*function to evaluate the result */
/*it uses eval() function*/
function equal() {
    var inputString = document.getElementById('viewer').value;
    if (inputString.charAt(0) === "*" || inputString.charAt(0) === "/" || inputString == "") {
        alert("invalid input");
        document.getElementById('viewer').value = "";
    }
    else {
        var result = eval(inputString);
        document.getElementById('viewer').value = result;
        var data = {
            operation: inputString,
            result: result
        }
        buffer.splice(0, buffer.length, result);
        jsData.push(data)
        drawTable('matchData');
        jsData.pop();
        makeFocus();
    }
}

/*function to reset the calculator screen */
/*it also clean the data from buffer*/
function reset() {
    buffer.splice(0, buffer.length);
    document.getElementById('viewer').value = "";
    makeFocus();
}

/*it is to clear the data of our table*/
function clear_table() {
    var table = document.getElementById('cupFinals');
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    makeFocus();
}

/* Create table from 'jsData' array of objects */
function drawTable(tbody) {
    var tr, td;
    tbody = document.getElementById(tbody);

    /* loop for print the data in the table */

    for (var i = 0; i < jsData.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = jsData[i].operation;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = jsData[i].result;

    }
}
