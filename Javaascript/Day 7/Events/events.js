
// show text
function showName(){
    console.log(`Name is priyesh`);
    const h1Element = document.querySelector('.showHideName');
    console.log(h1Element);// h1 element is visible in the console
    h1Element.style.display = 'block'; // element is hidden first 
    // but after changing the css diplay: none to block 
    // the h1 element is visible in the browser
}



//hides text
function hideName(){
    const h1Element = document.querySelector('.showHideName');
    h1Element.style.display = 'none'; //hide the text
}

//---------------------------------------------------------------------------

                        //visbility : visible / hidden 
                        // it preserves the space 


function showHideButton() { // this function shows and hides the text when clicked
    const h1Element = document.querySelector('.showHideName')

    if(h1Element.style.visibility==='hidden'){
        h1Element.style.visibility='visible';
    }
    else{
        h1Element.style.visibility ='hidden';
    }
};

function price(){
    console.log('keyDown');

}

function showPrice(){
    console.log('keyUP');

    const priceElement = document.getElementById('num');
    console.log(`value -`,priceElement.value);
    
    // to get the element whose value needs to be displayed
    const priceElements = document.getElementById('num');// input element
    
    // to get div element and to display  the text  Below input tag
    const elementValue = document.getElementById('priceValue');// div elment
    
    elementValue.innerText = priceElements.value// div element.innerText = input.value



}


//-------------------------------------------------------------------------------------------------------------------------------

// using addEventListner 

const btnEleEvent = document.getElementById('clickEvent');

btnEleEvent.addEventListener('click',function (event){
    console.log(event);
    console.log(event.target);

    if(event.keyCode===13){
        console.log('value - ',event.target.value);// this gives the Input Element in console
    }
})


const inputEleEvent = document.getElementById('nameValue');

inputEleEvent.addEventListener('click',function (event){
    console.log(event);
    console.log(event.target);

    if(event.keyCode==="Enter"){ // type exactly Enter only then this code works
        console.log('value - Enter is pressed inside input element',event.target);// this gives the Input Element in console
    }
})
// mouse over for input element
inputEleEvent.addEventListener('mouseover',function (event){
    console.log(` mouse over`,event);
})

// checkbox input tag
const checkBoxEle = document.getElementById('checkBox');
checkBoxEle.addEventListener('click', (event)=>{
    console.log(`checkBox is clicked  and will never get uncheked  `,event.target);
    checkBoxEle.checked = true;
});

//radio box 
const radioBtn = document.querySelectorAll('.gender');
// since radio has more than one element with same name use querySelectorAll 
/* it returns an array of radio elements 
loop them using forEach loop and now inside that loop add 
EventListener for individual Elements */
radioBtn.forEach(element => {
    element.addEventListener('change',(event)=>{
        console.log(`${element.id} clicked`,event);
    });
});







