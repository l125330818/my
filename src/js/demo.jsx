/**
 * Created by luojie on 2016/10/10 17:17.
 *  滤镜
 */
import "../../src/css/demo.scss"
import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    render(){
        return(<div>
            <img className="grayscale" src="http://www.php100.com/uploadfile/2012/1030/20121030080410580.jpg" alt=""/>
        </div>)
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
