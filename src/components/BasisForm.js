import React, { Component } from 'react'

export class BasisForm extends Component {

  handleNext = (e) => {
      const errors = {};
      if(this.props.errors.firstName.length < 5){
        errors.firstName = "Must be 5 characters or more"
      }

      if(this.props.errors.lastName.length < 5){
        errors.lastName = "Must be 5 characters or more"
      }

      if(Object.keys(errors).length > 0){
        
        this.setState({
          errors: errors
        })
      } else {
        this.setState({
          errors:{}
        })
      }

      this.props.nextStep();
  }

  render() {
    
    const {values:{avatar, country, email, firstName, lastName, mobile, password, repeatPassword, gender}, handleChange, errors}  = this.props;

    return (
        <div className="form-container card">
            <form className="form card-body">
            <div className="form-group">
              <label>FirstName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                ref={node => (this.firstName = node)}
                value = {firstName}
                onChange = {handleChange}
                name="firstName"
              />
              {this.props.errors.firstName ? <div className="invalid-feedback">{this.props.errors.firstName}</div> : null}
            </div>
            <div className="form-group">
              <label>LastName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                ref={node => (this.lastName = node)}
                value = {lastName}
                onChange = {handleChange}
                name="lastName"
              />
            </div>
            <div className="form-group">
            <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
                ref={node => (this.password = node)}
                value = {password}
                onChange = {handleChange}
                name="password"
                type="password"
              />
            {this.props.errors.password ? <div className="invalid-feedback">{this.props.errors.password}</div> : null}
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node => (this.repeatPassword = node)}
              onChange = {handleChange}
              name="repeatPassword"
              type="password"
            />
            {this.props.errors.repeatPassword ? <div className="invalid-feedback">{this.props.errors.repeatPassword}</div> : null}
          </div>
            <fieldset className="form-group">
            <div>Gender</div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="male" name="gender" value="male"
                checked={gender === "male"}
                onChange = {handleChange}/>
                <label className="form-check-label" htmlFor="male" >
                  Male
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="female" name="gender" value="female"
                checked={gender === "female"}
                onChange = {handleChange}/>
                <label className="form-check-label" htmlFor="female" >
                  Female
                </label>
              </div>
            </fieldset>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light mr-4" disabled>Previous</button>
                <button type="button" className="btn btn-secondary" onClick={this.handleNext}>Next</button>
            </div>
        </form>

      </div>
    )
  }
}

export default BasisForm
