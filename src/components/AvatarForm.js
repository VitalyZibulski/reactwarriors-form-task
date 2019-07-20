import React, { Component } from 'react'

export class AvatarForm extends Component {

  render() {

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
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light mr-4" onClick={this.props.prevStep}>Previous</button>
            <button type="button" className="btn btn-secondary" onClick={this.props.sentForm}>Next</button>
          </div>
        </form>
        </div>

      
    )
  }
}

export default AvatarForm
