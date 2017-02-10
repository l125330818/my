/**
 * Created by luojie on 2016/10/10 17:17.
 *  滤镜
 */
import "../../src/css/demo.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import SelectList from "./components/select.jsx"

var Hello = React.createClass({
    getInitialState(){
        return{
            list:[],
            categories: '',
            category: '',
            title: '',
            text1: '',
            text2: '',
            duration: '',
            price: '',
            schedules: '',
            week_day: 2,
            time_begin: '0830',
            time_end: '2000',
            isChecked: false,
            items:[],
            selectList:[{}]
        }
    },
    getTimeList(){
        let a = 6;
        let arr = [];
        for(let i = 0 ;i<33;i++){
            if(i%2==0){
                arr.push({name:(a<10?"0":"")+(a+1)+"00",value:(a<10?"0":"")+(a+1)+":00"});
            }else{
                arr.push({name:(a<10?"0":"")+(a+1)+"30",value:(a<10?"0":"")+(a+1)+":30"});
                a++;
            }
        }
        return arr;
    },
    callbackFn(e){
        console.log("回调:" + e)
        this.setState({e});
    },
    addItem: function(e) {
        //var newItem = {id: Date.now()};
        //this.setState((prevState) => ({
        //    items: prevState.items.concat(newItem)
        //}));
        this.state.selectList.push({});
        this.setState({})
        console.log(this.state.selectList)
    },
    render(){
        let _this = this;
        return(<div>
            <ul>
                <li className="left-to-right">
                    <a href="#">
                        <div className="img">
                            <img className="grayscale" src="http://www.php100.com/uploadfile/2012/1030/20121030080410580.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <h3>hello</h3>

                            <p></p>
                        </div>
                        <SelectList  items={_this.state.items} callback={_this.callbackFn} week_day={_this.state.week_day}
                                    time_begin={_this.state.time_begin} time_end={_this.state.time_end}/>
                        {
                            this.state.selectList.map((item,index)=>{
                                return(
                                    <SelectList key = {index} items={_this.state.items} callback={_this.callbackFn} week_day={_this.state.week_day}
                                                time_begin={_this.state.time_begin} time_end={_this.state.time_end}/>
                                )
                            })
                        }
                        <button onClick={this.addItem}  type="button">添加一个新周期</button>
                    </a>
                </li>
            </ul>
        </div>)
    }
});

ReactDOM.render(<Hello/>, document.getElementById('app'));
