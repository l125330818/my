/**
 * Created by luojie on 2016/11/1 15:53.
 */
import React from "react"
import ReactDom from "react-dom";
import Person from "./components/person.jsx"
import "../css/perDemo.scss"
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"tom",
            age:1,
            persons:[]
        }
    }
    handleChange(e){
        this.state[e.target.name] = e.target.value;
        this.setState({});
    }
    h = ()=>{}
    handleButton(){
        const {name,age,persons} = this.state;
        this.setState({
            name:"",
            age:"",
            persons:persons.concat([{name:name,age:age}])
        })
    }
    handleSelect(){

    }
    render(){
        const {name,age,persons} = this.state;
        let a = 3;
        let pro = new Promise((resolve,reject)=>{
            if(3 == a){
                resolve("aaaa");
            }
        });

        pro.then((a)=>{
            console.log(a)
        })
        return(
            <div>
                <label>姓名：</label><input type="text" name = "name" value={name} onChange = {this.handleChange.bind(this)}/>
                <label>年龄：</label><input type="text" className="" name = "age" value={age} onChange = {this.handleChange.bind(this)}/>
                <button onClick = {this.handleButton.bind(this)}>添加</button>
                {
                    persons.map((item,index)=>{
                        return(
                            <Person {...item} key = {index}></Person>
                        )
                    })
                }
            </div>
        )
    }
}
ReactDom.render(<Demo/>,document.getElementById("app"));