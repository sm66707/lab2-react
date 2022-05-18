import { Component } from 'react';

export default class Task2 extends Component {

    constructor() {
        super();
        this.state = {
            imgno: 1,
            imgSrc: "./Images/1.jpg"
        }
    }
    getPervious = ()=>{
        if(this.state.imgno<=1){
            this.state.imgno=4;
            this.setState({ imgno: this.state.imgno });
            this.setState({ imgSrc: `./Images/${this.state.imgno}.jpg` })
        }
            this.state.imgno--;
            this.setState({ imgno: this.state.imgno });
            this.setState({ imgSrc: `./Images/${this.state.imgno}.jpg` })
    }

    getNext = ()=>{
        if(this.state.imgno<=3){
        this.state.imgno++;
        this.setState({ imgno: this.state.imgno });
        this.setState({ imgSrc: `./Images/${this.state.imgno}.jpg` })
        }
        else{
            this.state.imgno=1;
            this.setState({ imgno: this.state.imgno });
            this.setState({ imgSrc: `./Images/${this.state.imgno}.jpg` })
        }
    }
    start = () => {
        this.state.slideInterval = setInterval(this.getNext, 1000);
    }

    stop = () => {
        clearInterval(this.state.slideInterval);
    }

    render() {
        return (
            <div align="center">
                <div>
                <img src={this.state.imgSrc} width='20%' height='30%' />
                </div>
                <br></br>
                <input
                   className='btn1'
                    type="button"
                    value="<<Pervious"
                    onClick={this.getPervious}
                />
                <input
                    className='btn1'
                    type="button"
                    value="Next>>"
                    onClick={this.getNext}
                />
                <input
                    className='btn1'
                    type="button"
                    value="Slide"
                    onClick={this.start}
                />
                <input
                className='btn1'
                    type="button"
                    value="Stop"
                    onClick={this.stop}
                />
            </div>
        )
    }
}