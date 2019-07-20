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
        country: "",
        city: "",
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

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value
      }
    }));
  };

  handleChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState((state, props) => ({
       values: {
         avatar:event.target.result
       }
      }))
    }
    
    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    const {step, errors} = this.state;
    
    return(
      <React.Fragment>
        { step === 1 && <BasisForm 
            nextStep={this.nextStep} 
            values={this.state.values}
            handleChange = {this.handleChange}
            errors = {errors}
          />
        }
        { step === 2 && <ContactsForm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={this.state.values}
            handleChange = {this.handleChange}
            countries = {countries}
            cities = {cities}
          />
        }
        { step === 3 && <AvatarForm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={this.state.values}
            handleChangeAvatar = {this.handleChangeAvatar}
          />
        }
        { step === 4 && <Success /> }
      </React.Fragment>
    )   
  }
}
