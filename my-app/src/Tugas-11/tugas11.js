import React from 'react'

class Clocker extends React.Component {
    constructor(props) {
        super(props)
        let waktu = new Date()
        waktu = waktu.toLocaleString('ID', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}).replace(/\./g,":")
        this.state = {
            waktuSekarang: waktu,
            hitungMundur: 100,
            showTime: true
        }
    }

    componentDidMount() {
        this.waktuSekarang = setInterval(() => this.tick(), 1000)
        this.waktuHitungMundur = setInterval(() => this.hitungMundur(), 1000)
    }

    componentDidUpdate() {
        if(this.state.hitungMundur === 0 && this.state.showTime) {
            this.stopTime()
            this.hideTime()
        }
    }

    componentWillUnmount() {
        clearInterval(this.waktuHitungMundur)
    }

    tick() {
        let waktu = new Date()
        waktu = waktu.toLocaleString('ID', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true }).replace(/\./g,":")
        this.setState({ waktuSekarang: waktu })
    }

    hitungMundur() {
        this.setState({
            hitungMundur: this.state.hitungMundur - 1
        })
    }

    stopTime() {
        this.componentWillUnmount()
    }

    hideTime() {
        this.setState({ showTime: false })
    }

    render() {
        return (
            <>
                {
                    this.state.showTime && (
                        <h2 style={{display: "flex", justifyContent: "space-around"}}>
                            <b><p>sekarang jam : {this.state.waktuSekarang}</p></b>
                            <b><p>hitung mundur : {this.state.hitungMundur}</p></b>
                        </h2>
                    )
                }
            </>
        )
    }
}

export default Clocker