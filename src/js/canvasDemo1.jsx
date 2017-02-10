/**
 * Created by luojie on 2016/10/24 11:20.
 */
import React from "react";
import ReactDom from "react-dom";
import "../../src/css/canvasDemo1.scss"
const Canvas = React.createClass({
    componentDidMount(){
        this.getCanvas();

    },
    getCanvas(){
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        let image = new Image()
        image.src = "http://www.php100.com/uploadfile/2012/1030/20121030080410580.jpg"
        image.onload = function(){
            ctx.drawImage(image,50,50);
        }
        c.width = 200;c.height = 200;
        c.backgroundColor = "#ccc";
        ctx.moveTo(100,150);
        ctx.lineTo(0,10)
        ctx.lineTo(20,100);
        ctx.strokeStyle = "#ddffaa";
        ctx.stroke();

    },
    render(){
        return(
            <div>
                <canvas className="content" id = "canvas"></canvas>
            </div>
        )
    }
});
ReactDom.render(<Canvas/>,document.getElementById("app"))