import React from "react";
import BasisForm from "./BasisForm";
import ContactsForm from "./ContactsForm";
import AvatarForm from "./AvatarForm";
import Success from "./Success";
import countries from '../data/countries'
import cities from '../data/cities'
  
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      values:{
        firstName:"",
        lastName:"",
        password:"",
        repeatPassword:"",
        email:"",
        mobile: "",
        country: "1",
        city: "1",
        avatar:"",
        gender:"male",
      }, 
      errors:{
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false
      }
    }
  }

  nextStep = () => {
    this.setState(state => ({
      step: state.step + 1
    }))
  }

  prevStep = () => {
    this.setState(state => ({
      step: state.step - 1
    }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {step} = this.state;
    const { values:{firstName, lastName, password, 
      repeatPassword, email, mobile, country, avatar, gender}
       } = this.state;

    const { errors } = this.state
    
    return(
      <React.Fragment>
        { step === 1 && <BasisForm 
            nextStep={this.nextStep} 
            values={values}
            handleChange = {this.handleChange}
            errors = {errors}
          />
        }
        { step === 2 && <ContactsForm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange = {this.handleChange}
            countries = {countries}
            cities = {cities}
          />
        }
        { step === 3 && <AvatarForm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange = {this.handleChange}
          />
        }
        { step === 4 && <Success /> }
      </React.Fragment>
    )   
  }
}
