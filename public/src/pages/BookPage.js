import React from 'react';


class BookPage extends React.Component {
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
          <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Pages <span className="badge">12</span></a>
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
            <h3 className="panel-title">Pages</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <input className="form-control" type="text" placeholder="Filter Pages..." />
              </div>
            </div>
            <br />
            <table className="table table-striped table-hover">
              <tbody><tr>
                  <th>Title</th>
                  <th>Published</th>
                  <th>Created</th>
                  <th />
                </tr>
                <tr>
                  <td>Home</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true" /></td>
                  <td>Dec 12, 2016</td>
                  <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                </tr>
                <tr>
                  <td>About</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true" /></td>
                  <td>Dec 13, 2016</td>
                  <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                </tr>
                <tr>
                  <td>Services</td>
                  <td><span className="glyphicon glyphicon-remove" aria-hidden="true" /></td>
                  <td>Dec 13, 2016</td>
                  <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true" /></td>
                  <td>Dec 14, 2016</td>
                  <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
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

export default BookPage;
