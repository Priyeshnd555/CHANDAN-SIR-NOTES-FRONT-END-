


class MyApp extends React.Component{

    state={

        adminName:'Girish',
        userName:'Guru',
        isAdmin: false 
    }

    changeView(){
        this.setState({
            isAdmin:!this.state.isAdmin
        })
    }

    render(){

        return(
            <div>
            <h1>{this.state.isAdmin?this.state.adminName:this.state.userName}</h1>
              <div>login</div>  {this.state.isAdmin?<div>HOME</div>:null}

                {
                    isAdmin?<div>conditonal Rendering 2 </div>:null

                    
                }
                <div>example 2</div>

                {isAdmin&&<div>conditonalRendering 2 </div>}
                <div>example 3</div>

                

              <button onClick={()=>this.changeView()}>{this.state.isAdmin?'click for user view':'click for Admin view'}</button>
            </div>
        )
    }
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))