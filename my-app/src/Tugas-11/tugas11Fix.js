import React, {Component} from 'react'

class Tugas11 extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 101,
      date: new Date(),
      visibleTime: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
    if (this.state.visibleTime === true){
      if (this.state.time <= 0){
        this.setState({visibleTime: false})
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date() 
    });
  }


  render(){
    return(
      <>
        {
          this.state.visibleTime && (
            <>
              <h1 style={{float: "left",marginLeft: "10%"}}>
                Sekarang jam - {this.state.date.toLocaleTimeString()}.
              </h1>
              <h1 style={{float: "right",marginRight: "10%"}}>
                hitung Mundur: {this.state.time}
              </h1>
            </>
          )
        }
      </>
    )
  }
}

export default Tugas11
