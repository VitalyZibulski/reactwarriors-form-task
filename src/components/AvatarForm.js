import React, { Component } from 'react'

export class AvatarForm extends Component {

  render() {
    console.log(this.props)
    const { errors, handleNext } = this.props;
    return (
        <div>
        <form className="form card-body">
        <img src={this.props.values.avatar} style={{width:'250px', height:'250px'}}  alt="" />
          <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input type="file"
              className="form-control-file" 
              id="avatar"
              name="avatar" 
              onChange={this.props.handleChangeAvatar}/>
          </div>
          {errors.avatar ? <div className="invalid-feedback">{errors.avatar}</div> : null}
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4" onClick={this.props.prevStep}>Previous</button>
            <button type="button" className="btn btn-secondary" onClick={handleNext}>Next</button>
          </div>
        </form>
        </div>

      
    )
  }
}

export default AvatarForm
