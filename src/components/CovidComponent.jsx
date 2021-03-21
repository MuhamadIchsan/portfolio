import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Typical from 'react-typical'
import index from 'react-typical'

class Spinners extends Component{
  render(){
    return(
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    )

  }
}

class CovidComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            covids : [] ,
            isLoading : true
        }
    }

    componentDidMount(){
        fetch("https://api.kawalcorona.com/indonesia")
        .then(res => res.json())
        .then(res => this.setState({ covids : res , isLoading : false }))
    }    

    render(){
      const { covids , isLoading } = this.state
        return(
            <React.Fragment>
        <div className="container" data-aos="fade-down" data-aos-duration="1000">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <img src="https://blush.design/api/download?shareUri=WoJm3LUSu&c=Skin_0%7E757eff-0.2%7E09b9c6&w=800&h=800&fm=png" className="img-fluid" alt="info" />
            </div>
          </div>
        </div>
        <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
          <div className="jumbotron text-center text-white">
            <h1 className="display-5">
              Data Perkembangan <span className="text-light-green fw-bold">COVID-19</span> Indonesia               
            </h1>
            <p className="lead">
              <Typical className="text-white fs-1" steps={['Data Terupdate Tiap Harinya', 2000, 'Stay Safe Everyone!', 2000]} loop={Infinity} wrapper="b" />
            </p>
            <hr className="my-4" />
            <div className="row justify-content-center">
                <div className="col-lg-3 mt-4">
                    <div className="card bg-glass">
                        <div className="card-header">
                            <h4 className="text-white">Kasus Positif</h4>
                        </div>
                        <div className="card-body">
                          { isLoading ? <Spinners/> : covids.map( (covid , index ) => ( <p key={index}> {covid.positif} Orang </p>) ) }                          
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="card bg-glass">
                        <div className="card-header">
                            <h4 className="text-white">Sembuh</h4>
                        </div>
                        <div className="card-body">
                        { isLoading ? <Spinners/> : covids.map( (covid , index ) => ( <p key={index}> {covid.sembuh} Orang </p>) ) }
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="card bg-glass">
                        <div className="card-header">
                            <h4 className="text-white">Meninggal</h4>
                        </div>
                        <div className="card-body">
                          { isLoading ? <Spinners/> : covids.map( (covid , index ) => ( <p key={index}> {covid.meninggal} Orang </p>) ) }                          
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="card bg-glass">
                        <div className="card-header">
                            <h4 className="text-white">Dirawat</h4>
                        </div>
                        <div className="card-body">
                          { isLoading ? <Spinners/> : covids.map( (covid , index ) => ( <p key={index}> {covid.dirawat} Orang </p>) ) }                          
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
        )
    }
}

export default CovidComponent;