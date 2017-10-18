'use strict';

var str = "variableString",
    number = 56,
    logical = false,
    undef = undefined,
    nll = null,
    obj = {
    	name: "Nastya",
    	age: 18
    }
// var arr = ["variableString", 56, false, undefined, null, {}];

do{
	// var question = confirm('Если хотите узнать тип любой из переменных нажмите OK');
    var input = prompt('Введите имя переменной(str/number/logical/undef/nll/obj)', '');
    switch(input){
    	case 'str':
    		alert('Это ' + typeof str);
    		break;
    	case 'number':
    		alert('Это ' + typeof number);
    		break;
    	case 'logical':
    		alert('Это ' + typeof logical);
    		break;
    	case 'undef':
    		alert('Это ' + typeof undef);
    		break;
    	case 'nll':
    		alert('Это ' + typeof nll);
    		break;
    	case 'obj':
    		alert('Это ' + typeof obj);
    		break;
    	default: alert('Неверное название переменной');
    }
    var again = confirm('Хочешь ещё раз?');
    
}while(again)

var arr = ["variableString", 56, false, "undefined", null, {}];
document.write('<table border = "1" cellspacing="0" cellpadding="0" width = "40%">');
for (var i = 0; i < arr.length; i++){
	if()
    	document.write('<tr><td>' + arr[i] + '</td>' + '<td>' + typeof arr[i] + '</td></tr>');
    }
document.write('</table>');