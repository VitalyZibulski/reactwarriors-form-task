import React from "react";
import BasisForm from "./BasisForm";
import ContactsForm from "./ContactsForm";
import AvatarForm from "./AvatarForm";
import Success from "./Success";
import countries from '../data/countries'
import cities from '../data/cities'
  
export default class App extends React.Component {

    state = {
      step: 1,
      values:{
        firstName:"",
        lastName:"",
        password:"",
        repeatPassword:"",
        email:"",
        mobile: "",
        country: "1",
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

  sentForm = () => {
    console.log(this.state)
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

  handleChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState(state => ({
        values: {
          ...state.values,
          avatar: event.target.result
        }
      }));
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  handleNext = (e) => {
    const errors = {};
    if(this.state.values.firstName.length < 5){
      errors.firstName = "Must be 5 characters or more"
    }

    if(this.state.values.lastName.length < 5){
      errors.lastName = "Must be 5 characters or more"
    }

    if(this.state.values.password.length < 6){
      errors.password = "Must be 6 characters or more"
    }

    if(this.state.values.password !== this.state.values.repeatPassword){
      errors.repeatPassword = "Must be equal password"
    }

    if(!this.state.values.gender){
      errors.gender = "Choose gender"
    }

    if(Object.keys(errors).length > 0){
      
      this.setState({
        errors: errors
      })
    } else {
      
      this.setState({
        errors:{}
      });

      this.nextStep();
    }
}

  render() {
    const {step, errors, values} = this.state;
    
    return(
      <React.Fragment>
        { step === 1 && <BasisForm 
            handleNext={this.handleNext} 
            values={values}
            handleChange = {this.handleChange}
            errors = {errors}
          />
        }
        { step === 2 && <ContactsForm 
            handleNext={this.handleNext}
            prevStep={this.prevStep}
            values={values}
            handleChange = {this.handleChange}
            countries = {countries}
            cities = {cities}
          />
        }
        { step === 3 && <AvatarForm 
            handleNext={this.handleNext}
            prevStep={this.prevStep}
            values={values}
            handleChangeAvatar = {this.handleChangeAvatar}
            sentForm = {this.sentForm}
          />
        }
        { step === 4 && <Success /> }
      </React.Fragment>
    )   
  }
}
