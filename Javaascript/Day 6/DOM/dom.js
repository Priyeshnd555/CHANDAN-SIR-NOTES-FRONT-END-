
const element = document.getElementById('test')
console.log('element',element);

console.log(element.innerText);// innerText
console.log(element.innerHtML);// inner HTML

// what is the differece between innerText and InnerHTML...?

console.log(element.textContent);

element.innerText = 'Good Morning';



element.innerText = '<h1>Good AfterNoon</h1>';
// innerText Treats HTML tags as just plain Text

element.innerHTML= '<button>Good AfterNoon</button>'; 
// innerHTML Treats the HTML tags as html code 



// whatever we write in document.write it will be printed at Last after all elments are rendered
// also we can use html tags inside it like below 
document.write('<b>HEllo THIS IS PRIYESH \N USING document.write() </b>');

// document createElement
const pElement = document.createElement('p') // check console
console.log('pElement',pElement)

pElement.textContent = 'Monday Mock '; /// this will not get displayed in the page
// to be displayed we have to add it to DOM  also  we need to give location where it should be displayed
document.body.appendChild(pElement) //append meaning : to the end 



/*--------------------------------------------------------------------
                        TO ADD ELEMENT DIRECTLY TO HTML PAGE
 To add a element after the h1 element without touching the  html code*/
element.insertAdjacentHTML('afterend','<p>monday mock</p>');
//----------------------------------
console.log('\n---------------------------------------------------\n');

const h1Elements = document.getElementsByTagName('h1')
console.log(` \n'h1Elements -> getElementByTagName : `,h1Elements);

const demoClassElements = document.getElementsByClassName('.demo')
console.log(`demoClassElements ->getElementByClassName : `,demoClassElements);

const h1Element = document.querySelector('h1')
console.log(`h1Element -> QuerySelector : `,h1Element);

const pElements = document.querySelectorAll('p')
console.log(`pElements -> QuerySelectorAll : `, pElements);

console.log('---------------------------------------------------\n');


// adding style to html element using javascript 

element.style.color = "lightblue";
element.style.border = "2px solid #f00";







const randomTextElement = document.getElementById('randomText');

randomTextElement.className = "randomStyle";// using this we can apply code from css 
// check dom.css for clarification 

// randomTextElement.classList = 'randomStyle randomStyle1' // if u have multiple classes in css file and if u want to apply it 
// then  use classList 
//if u have only one then go for className



//---------------------------------------------------------------------------------------------------------------------
                                                    //IMPORTANT
const pClassElements = document.querySelectorAll('.demo');
// here we are looping .demo class Elementsthe array returned by querySelectorAll 
// and applying Some color
pClassElements.forEach(ele => {
    ele.style.color="green";
});
//---------------------------------------------------------------------------------------------------------------------


// here we are looping the .demo classreturned by for loop 

for(let i=0;i<pClassElements.length;i++){
    pClassElements[i].className = 'random3'
}

// here we are looping the .demo classreturned by for loop 

// for(let item of pClassElements){
//     item.className = 'random4'
// }