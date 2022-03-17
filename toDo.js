var listItems = document.getElementById('itemList'); //  assign the ordered list to the variable listItems.


function submit() { // create the submit function which is used to call the addItems and clearInput functions.
  addItems(); // 
  clearInput(); // calls clearInput function which will clear the input field upon hitting submit button.
}

function addItems() { // defines the addItems button which will add items to the list along witht the done and remove buttons.
  var liList = document.getElementsByTagName('li').length + 1; // creates a variable named 'liList' and assigns the value as the number of items in the list.
  var input = document.getElementById('main-input').value; // creates 'input' variable and assigns the of the text in the input field to the variable.
  listItems.innerHTML += `<li>  ${input} <span><button id=${liList} onclick="removeLi(this.id)";>X</button><button id="done" onclick="done(this.id)";>Done</button></span></li>`; // appends an li elment to the listItems inner HTML containing the value of the 'input' variable followed by a span container which will hold two button elements. Add an 'X' button with the id 'done' which will remove the selected 'li' element on click.  Also add and a 'Done' button with the id 'done'.
}


function clearInput() { // create a function named 'clearInput'
  var input = document.getElementById('main-input');  // assigns the value of the input variable to 'the main-input' element.
  input.value = " "; // defines the value of the input field as an empty string.
}

function clearList() { // create a function named 'clearList'
  var list = document.getElementById('itemList').innerHTML = " "; // creates a variable named 'list' and defines it as the 'itemList' HTML elmenent then assigns the value of the inner HTML as a blank string wihch will clear the contents of the 'itemList' element.
}

function removeLi(li_id) { //create a function named 'removeLI'
  var thisLi = document.getElementById(li_id); // creates and defines a variable named 'thisLi' and dfines it as an HTML element with an id of 'li_id'.
  thisLi.parentNode.parentNode.remove(thisLi); // removes the HTML li elment containing the element defined by 'thisLi'.
}
