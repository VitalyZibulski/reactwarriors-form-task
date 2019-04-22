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
      errors:{
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false
      }
    }
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {step} = this.state;
    const {
      firstName, lastName, password, 
      repeatPassword, email, mobile, country, avatar, gender } = this.state;

    const values = {
      firstName, lastName, password, 
      repeatPassword, email, mobile, country, avatar, gender }
    
    const { errors } = this.state

      switch(step) {
        case 1:
            return <BasisForm 
                    nextStep={this.nextStep} 
                    values={values}
                    handleChange = {this.handleChange}
                    errors = {errors}
                    />
        case 2:
            return <ContactsForm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleChange = {this.handleChange}
                    countries = {countries}
                    cities = {cities}
                    />
        case 3:
            return <AvatarForm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleChange = {this.handleChange}
                    />
        case 4:
            return <Success />
        }

    
  }
}
