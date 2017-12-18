import React, { Component } from 'react';

export default class Home extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-4">
            <h2 className="text-center">Login</h2>
            <form>
              <div className="form-group">
                <input onChange={this.onChange} type="email" name="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input onChange={this.onChange} type="password" name="password" className="form-control" placeholder="Password" />
              </div>
              <button onClick={this.onSubmit} type="submit" className="btn btn-success btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};