import React, {Component} from "react"


class MemeGenarotor extends Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            botomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allImg:[]
        }
        this.memgen = this.memgen.bind(this)
        this.gentmim = this.gentmim.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(res =>{
            const {memes} = res.data
            
            this.setState({allImg :memes})
        })
    }
    memgen(e){
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    gentmim (e){
        e.preventDefault()
        // set rand mem image
        const randnumb = Math.floor(Math.random() * this.state.allImg.length)
        // get rand imgall
        const imgallrand = this.state.allImg[randnumb].url
        this.setState({
            randomImg:imgallrand
        })
    }
  render(){
      return(
          <div>
              <h1> Meme Generator Section</h1>
              <form className="meme-form" onSubmit={this.gentmim}>
                 <input type="text" placeholder="topText" 
                 name="topText"
                 value={this.state.topText}
                 onChange={this.memgen}
                 /> 
                 <input type="text" placeholder="botomText" 
                 name="botomText"
                 value={this.state.botomText}
                 onChange={this.memgen}
                 />
                 <button className="mem"> Gen</button> 
              </form>
              <div className="meme">
                  <img src={this.state.randomImg} alt="img" />
                  <h2 className="top">{this.state.topText}</h2>
                  <h2 className="botom">{this.state.botomText}</h2>
              </div>

          </div>
        

      )
  }
}


export default MemeGenarotor