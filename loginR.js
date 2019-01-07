//Create the log in screen for the website 
'use strict';

const e = React.createElement; 

class loginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: String,
            password: String
        }
    }
    
    render(){
        return e(
            <div align="center"><img id="LoginTitle" 
            src="./Graphical_Assets/Logo/Uassist Black.png"/></div>
        );
    }
};

const Buttons = (props) =>{
    return (
        <button key={this.props.key} type='submit'
        placeholder={this.props.placeholder} class='btn-block'
        />
    );
} 

console.log("hello");
 
const domContainer = document.querySelector('#viewContainer');
ReactDOM.render(e(loginContainer), domContainer);
