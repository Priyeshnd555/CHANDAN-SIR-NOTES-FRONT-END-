const loginButton = document.getElementById("login"); // storing button element
console.log(login);

const array = []; //// array is initailzed to zero

function printTable(obj, index) {
  // here array is looped since it contains objects since local storage is present

  console.log(obj.firstName, "firstobj"); // here first object of array is printed

  let table = document.getElementsByTagName("table")[1]; // here table is accessed and
  // and new rows are created

  // add new empty row to the table
  // 0 = in the top
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  let newRow = table.insertRow(index + 1);

  // add cells to the row
  let cel1 = newRow.insertCell(0);
  let cel2 = newRow.insertCell(1);
  let cel3 = newRow.insertCell(2);

  // console.log(obj.firstName);
  // add values to the cells
  cel1.innerHTML = obj.firstName;
  cel2.innerHTML = obj.lastName;
  cel3.innerHTML = obj.age;
}


if (JSON.parse(localStorage.getItem("array"))) {

  let value = JSON.parse(localStorage.getItem("array"));
 
  value.forEach((obj, index) => {
    array.push(obj);
    printTable(obj, index);
  });
  console.log("array after pushing local storage elements", array);
  console.log(value, "local storage data in array of object"); //  Array of object =>  local storage data in array of object is  printed


}

console.log(array);

loginButton.addEventListener("click", function () {
  /// eveent listener for click event

  const userForm = document.forms.userForm; // accesing the form

  const firstNameElement = userForm.firstName; // Fist name element
  const userLastElement = userForm.lastName; // last Name Element

  const ageElement = userForm.age; // age Element
  const isValidFirstName = validateFirstname(firstNameElement.value); // function call
  const isValidLastName = validateLastname(userLastElement.value); // funcition call
  const isValidAge = validateAge(ageElement.value); // function call

  if (isValidFirstName && isValidAge && isValidLastName) {
    // alert("Form is valid");

    const myForm = document.forms["userForm"]; // accesing the form
    const fname = myForm.firstName.value; // Fist name element
    const lname = myForm.lastName.value; // last Name Element
    const age = myForm.age.value; // age Element

    
    const newData = {}; /* creating an Object */

    newData.firstName = fname;
    newData.lastName = lname;
    newData.age = age;

    console.log("user: ", newData);
    console.log(
      "before pushing to   array",
      array
    ); /* ERROR : ARRAY IS SHOWING USER BEFORE PUSHING */

    array.push(newData);
    const len = array.length;
    console.log(`len : ${len} `);
    console.log("New object pushed  to array", array);

    printTable(newData, len - 1);

    let arrStr = JSON.stringify(array);
    console.log("arrStr", arrStr);
    console.log(Array.isArray(array));

    localStorage.setItem("array", arrStr); // storing array

    myForm.firstName.value = ""; // Fist name element
    myForm.lastName.value = ""; // last Name Element
    myForm.age.value = "";
  }
});

// First name is validated here
function validateFirstname(firstName) {
  const firstNameId = document.getElementById("validationCustom01");

  if (firstName) {
    // if first name is true  and valid
    if (firstName.search(/[^a-zA-Z]+/) === -1) {
      document.getElementById("invalidFirstName").style.display = "none";
      document.getElementById("emptyFirstName").style.display = "none";
      firstNameId.style.outline = "3px solid white";

      return true;
    } else {
      // if   first name is invalid
      document.getElementById("invalidFirstName").style.display = "block";
      document.getElementById("emptyFirstName").style.display = "none";
      firstNameId.style.outline = "3px solid red";
    }
  } else {
    // if first name is false i.e.. empty
    document.getElementById("emptyFirstName").style.display = "block";
    document.getElementById("emptyFirstName").style.border = "1px solid red`";
    firstNameId.style.outline = "3px solid red";
  }
  return false;
}

// last name function
function validateLastname(lastName) {
  const lastNameId = document.getElementById("validationCustom02");

  if (lastName) {
    // if first name is true  and valid
    if (lastName.search(/[^a-zA-Z]+/) === -1) {
      document.getElementById("invalidLastname").style.display = "none";
      document.getElementById("emptyLastname").style.display = "none";
      lastNameId.style.outline = "3px solid white";

      return true;
    } else {
      // if   first name is invalid
      document.getElementById("invalidLastname").style.display = "block";
      document.getElementById("emptyLastname").style.display = "none";
      lastNameId.style.outline = "3px solid red";
    }
  } else {
    // if first name is false i.e.. empty
    document.getElementById("emptyLastname").style.display = "block";
    document.getElementById("invalidLastname").style.display = "none";
    lastNameId.style.outline = "3px solid red";
  }
  return false;
}

// age function call
function validateAge(ageValue) {
  const ageId = document.getElementById("validationAge");

  console.log("ageID", ageId);
  if (ageValue) {
    // if age is true and valid
    if (ageValue <= 100 && ageValue >= 0) {
      document.getElementById("invalidAge").style.display = "none";
      document.getElementById("emptyAge").style.display = "none";
      ageId.style.outline = "3px solid white";

      return true;
    } else {
      // if age is true but invalid
      document.getElementById("invalidAge").style.display = "block";
      document.getElementById("emptyAge").style.display = "none";
      ageId.style.outline = "3px solid red";
    }
  } else {
    // if age is False i.e,, invalid
    document.getElementById("emptyAge").style.display = "block";
    ageId.style.outline = "3px solid red";
    document.getElementById("invalidAge").style.display = "none";
  }
  return false;
}
