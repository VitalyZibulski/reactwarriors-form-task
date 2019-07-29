import React from "react";
import MainForm from './MainForm'

export default class App extends React.Component {
  
  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <MainForm />
        </form>
      </div>
    );
  }
}
