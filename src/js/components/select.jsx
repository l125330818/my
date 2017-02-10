import React from 'react';
var select = React.createClass({
    getInitialState: function () {
        return {
            week_day: this.props.week_day,
            time_begin: this.props.time_begin,
            time_end: this.props.time_end
        };
    },
    componentDidMount: function () {
    },
    allOnChange(type, e){
        this.state[type] = e.target.value;
        this.setState({});
        this.props.callback && this.props.callback.call(null, e.target.value);
    },
    render: function () {
        let week_val = ["1", "2", "3", "4", "5", "6", "0"]
        let week_names = ["一", "二", "三", "四", "五", "六", "七"]
        let week_opt = [];
        for (var option in week_names) {
            week_opt.push(<option key={week_names.length++} value={week_val[option]}>星期{week_names[option]}</option>)
        }
        let a = 7;
        let arr = [];
        for (let i = 0; i < 33; i++) {
            if (i % 2 == 0) {
                arr.push({value: (a < 10 ? "0" : "") + (a) + "00", name: (a < 10 ? "0" : "") + (a) + ":00"});
            } else {
                arr.push({value: (a < 10 ? "0" : "") + (a) + "30", name: (a < 10 ? "0" : "") + (a) + ":30"});
                a++;
            }
        }
        return (
            <ul>
                {
                    <li>
                        <select value={this.state.week_day}
                                onChange={this.allOnChange.bind(this,"week_day")} required>
                            {week_opt}
                        </select>
                        <select value={this.state.time_begin}
                                onChange={this.allOnChange.bind(this,"time_begin")} required>
                            {
                                arr.map((item)=> {
                                    return (
                                        <option value={item.value} key={item.value}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <span>-</span>
                        <select value={this.state.time_end}
                                onChange={this.allOnChange.bind(this,"time_end")} required>
                            {
                                arr.map((item)=> {
                                    return (
                                        <option value={item.value} key={item.value}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <button type="button">×</button>
                    </li>
                }
            </ul>
        )
    }
});
module.exports = select;
