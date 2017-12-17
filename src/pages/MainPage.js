import React from 'react';


class MainPage extends React.Component {
  render(){
    return(
      <section id="main">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="list-group">
          <a href="index.html" className="list-group-item active main-color-bg">
            <span className="glyphicon glyphicon-cog" aria-hidden="true" /> Dashboard
          </a>
          <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Books <span className="badge">12</span></a>
          <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Posts <span className="badge">33</span></a>
          <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Users <span className="badge">203</span></a>
        </div>
        <div className="well">
          <h4>Disk Space Used</h4>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
              60%
            </div>
          </div>
          <h4>Bandwidth Used </h4>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
              40%
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        {/* Website Overview */}
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">Website Overview</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-3">
              <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-user" aria-hidden="true" /> 203</h2>
                <h4>Users</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> 12</h2>
                <h4>Books</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> 33</h2>
                <h4>Posts</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true" /> 12,334</h2>
                <h4>Visitors</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Latest Users */}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Latest Users</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped table-hover">
              <tbody><tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined</th>
                </tr>
                <tr>
                  <td>Jill Smith</td>
                  <td>jillsmith@gmail.com</td>
                  <td>Dec 12, 2016</td>
                </tr>
                <tr>
                  <td>Eve Jackson</td>
                  <td>ejackson@yahoo.com</td>
                  <td>Dec 13, 2016</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>jdoe@gmail.com</td>
                  <td>Dec 13, 2016</td>
                </tr>
                <tr>
                  <td>Stephanie Landon</td>
                  <td>landon@yahoo.com</td>
                  <td>Dec 14, 2016</td>
                </tr>
                <tr>
                  <td>Mike Johnson</td>
                  <td>mjohnson@gmail.com</td>
                  <td>Dec 15, 2016</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
  }
}

export default MainPage;
