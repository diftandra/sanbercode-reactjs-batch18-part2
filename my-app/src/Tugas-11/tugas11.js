import React, {Component} from "react"

var date = new Date();

export default class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            timer: 101,
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            showTime: true,
            night: false,
            timeProp: "AM",
        }
    }

    tick(){
        this.setState({
            timer: this.state.timer - 1,
            s: this.state.s + 1
        });
        if(this.state.h > 12){
            this.setState({h: this.state.h-12})
            this.setState({night: true})
        }
        if(this.state.s == 60){
            this.setState({m: this.state.m + 1})
            this.setState({s: 0})
        }
        if(this.state.m == 60){
            this.setState({h: this.state.h + 1})
            this.setState({m: 0})
        }
        if(this.state.h == 12 && this.state.night == false){
            this.setState({h: 0})
            this.setState({night: true})
        }
        if(this.state.h == 12 && this.state.night == true){
            this.setState({h: 0})
            this.setState({night: false})
        }
        if (this.state.night == true){
            this.setState({timeProp: "PM"})
        }
        if (this.state.night == false){
            this.setState({timeProp: "AM"})
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    componentDidUpdate(){
        if (this.state.showTime === true){
            if (this.state.timer <= 0){
                this.setState({
                showTime : false
                })
                this.componentWillUnmount()
            }
        }
    }

    render(){
        return(
            <>
            {this.state.showTime && (
                <>
                <h1 style={{textAlign: "right",marginRight: "10%"}}>
                    hitung mundur: {this.state.timer}
                </h1>
                <h1 style={{textAlign: "left",marginLeft: "10%",marginTop:"-65px"}}>
                    sekarang jam: {this.state.h}:{this.state.m}:{this.state.s} {this.state.timeProp}
                </h1>
                </>
            )}
            </>
        )
    }
}