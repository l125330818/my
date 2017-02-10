/**
 * Created by luojie on 2016/11/18 10:36.
 */
import React,{Component} from "react";
import ReactDom from "react-dom";
import Immutable from 'immutable';
class Demo extends React.Component{
    constructor(args){
        super(args)
        this.state = {
            test :[{a:1}]
        }
    }
    render(){
        let {test} = this.state;
        let arr = [5,4,8,1];
        let test1 = Immutable.fromJS(arr);
        let test2 =test1.toArray()
        test2[0] = 3;
console.log(test2);
        console.log(arr)
        return(
            <div>
                immutable
            </div>
        )
    }
}
ReactDom.render(<Demo></Demo>,document.getElementById("app"));