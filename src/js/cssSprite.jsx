/**
 * Created by luojie on 2016/11/2 10:41.
 */
import React from "react";
import ReactDom from "react-dom";
import "../css/sprite.scss"
class Sprite extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="content">
                    <div className="class_2"></div>
                    <div className="class_0"></div>
                </div>
            </div>
        )
    }
}
ReactDom.render(<Sprite></Sprite>,document.getElementById("app"));