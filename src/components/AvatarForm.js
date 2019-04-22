import React, { Component } from 'react'

export class AvatarForm extends Component {
  handlePrevious = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  handleNext = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      })
    }
    
    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    return (
        <div>
        <form className="form card-body">
          <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input type="file" 
              className="form-control-file" 
              id="avatar"
              name="avatar" 
              onChange={this.onChangeAvatar}/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4" onClick={this.handlePrevious}>Previous</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleNext}>Next</button>
          </div>
        </form>
        </div>

      
    )
  }
}

export default AvatarForm
