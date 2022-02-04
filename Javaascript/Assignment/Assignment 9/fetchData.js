fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
       
    .then((data)=>{


    const title=React.createElement("ul",null,data.map((value,index)=>{
        return React.createElement('li',{key:index , id:"list"},`${index} ---`,value.title);
    }))

    // const Title = <ul>
    //     {
    //         data.map((value,index)=>{
    //   return <li {key:index}> {index}  : {value.Title}</li>
    //  }))
    //     }
    // </ul>

    

    ReactDOM.render(title,document.getElementById('container'))
})



  