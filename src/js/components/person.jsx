/**
 * Created by luojie on 2016/11/1 16:08.
 */
import React,{Component} from "react";
import pureRender from "pure-render-decorator"
 class Person extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <span>姓名：</span><span>{this.props.name}</span>
                <span>年龄：</span><span>{this.props.age}</span>
            </div>
        )
    }
}
export default pureRender(Person)