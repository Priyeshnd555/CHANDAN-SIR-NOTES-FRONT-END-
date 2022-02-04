class Parent extends React.Component {
  state = {
    text: "hello",
  };

  getData(data) {
   
     
    this.setState({
        text:data
    })
  }

  render() {
    return (
      <div>
        <h1 style={this.state.text.length>5?{color:"red"}:{color:"green"}}>{this.state.text}</h1>

        <Child action={this.getData.bind(this)} />
      </div>
    );
  }
}


function Child(props) {
    
    const data = 'child data';

    return(
        <button onClick={()=>props.action(data)}>click</button>

    )
};


ReactDOM.render(<Parent/>,container)
