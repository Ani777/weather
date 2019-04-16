import React, { Component } from 'react';
import './App.css';
import SearchField from "./components/form";
import Weather from "./components/weather";


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          city: 'Yerevan',
          current: {},
          forecast: [],
          found: true,
      }
  }

    handleChange = e => {
      this.setState({ city: e.target.value });
    }

    componentDidMount() {
      fetch('https://api.apixu.com/v1/forecast.json?key=f68e0ace02014b5dabf134119190301&q=yerevan&days=10')
          .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Requeat failed!');
      }, networkError => console.log(networkError.message)
      )
          .then(jsonResponse =>{

              this.setState({forecast: jsonResponse.forecast.forecastday,
                  current: jsonResponse.current,

              })
      })
    }

    handleClick=()=>{
      const { city } = this.state;
        fetch(`https://api.apixu.com/v1/forecast.json?key=f68e0ace02014b5dabf134119190301&q=${city}&days=10`)
            .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                }
            )
            .then(jsonResponse =>{

                this.setState({forecast: jsonResponse.forecast.forecastday,
                    current: jsonResponse.current,
                    found: true,

                })
            }).catch(err =>{
                // console.error(err.message);
                this.setState({found: false})
        })
    }


    render() {
    const { city, current, forecast, found } = this.state;

    return (
      <div className="App">
        <SearchField city={city} handleChange={this.handleChange} handleClick={this.handleClick}  />
        <Weather current={current} forecast={forecast} found={found}/>

      </div>
    );
  }
}

export default App;
