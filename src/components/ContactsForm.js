import React, { Component } from 'react'

export class ContactsForm extends Component {

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ));
  }

  render() {
    const {countries, cities, errors, handleChange, handleNext} = this.props
    const cities1 = Object.values(cities);
    const {country, email, mobile, city} = this.props.values;
    const filtered = cities1.filter((item) => item.country === Number(country))
  
    return (
        <div>
        <div className="form-container card">
            <form className="form card-body">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className={errors.email ? 'form-control invalid' : 'form-control'}
                placeholder="Enter email"
                ref={node => (this.email = node)}
                onChange = {handleChange}
                value = {email}
                name = "email"
              />
            </div>
            {errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className={errors.mobile ? 'form-control invalid' : 'form-control'}
                placeholder="Enter mobile"
                ref={node => (this.mobile = node)}
                onChange = {handleChange}
                name="mobile"
                value = {mobile}
              />
            </div>
            {errors.mobile ? <div className="invalid-feedback">{errors.mobile}</div> : null}
            <div>
            <label htmlFor="country">Countries</label>
            <select className="form-control" id="country"
            name="country"
            value={country}
            onChange = {handleChange}
            >
              {this.getOptionsItems(countries)}
            </select>
          </div>
          {errors.country ? <div className="invalid-feedback">{errors.country}</div> : null}
          <div className="form-group">
            <label htmlFor="city">Cities</label>
            <select className="form-control" id="city"
            name="city"
            value={city}
            onChange = {handleChange}
            >
              {this.getOptionsItems(filtered)}
            </select>
          </div>
          {errors.city ? <div className="invalid-feedback">{errors.city}</div> : null}
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4" onClick={this.props.prevStep}>Previous</button>
            <button type="button" className="btn btn-secondary" onClick={handleNext}>Next</button>
        </div>  
        </form>
      </div>
      </div>
      
    )
  }
}

export default ContactsForm
