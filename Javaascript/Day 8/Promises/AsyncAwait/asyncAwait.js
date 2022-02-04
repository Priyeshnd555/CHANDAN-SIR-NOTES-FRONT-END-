
console.log(`js started`);

async function fetchPosts() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    console.log(response);

    const data = await  response.json()

    console.log('data',data);

    console.log('Hello');

    let titles ='</ul>';

    // to display title from response
     await data.forEach(val => {
        
        const  title = val.title;

        titles+=`<li>${title}</li>`
    });

    titles+='</ul>'

    console.log(titles);

    
}


// function call

fetchPosts()
console.log('js Ended');




