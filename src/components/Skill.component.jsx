import React from 'react';

class SkillComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            percentage:0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.percentage<this.props.percentage){
                this.setState({percentage:this.state.percentage+1});
            }
        },10);
    }
    render(props){
        return(
        <div className="skill">
            <img src={this.props.img} alt="react" />
    
            <div className="skillName">
                <h4>{this.props.name}</h4>
                <div className="progressBar">
                <div className="fullLimit">
                    <div className="limit" style={{width:`${this.state.percentage}%`}}></div>
                </div>
                </div>
            </div>
    
            <div className="percentage">
                <h1>{this.state.percentage}%</h1>
            </div>
        </div>
        );
    }
    

}
export default SkillComponent;