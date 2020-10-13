import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              {/* <a href={projects.url} title={projects.title} target="_blank"> */}
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <p>-------------------------------</p>
                    <a href={projects.url} title={projects.title} className="work-link btn btn-link" target="_blank">Go to Website</a>
                    <a href={projects.repourl} title={projects.title} className="work-link btn btn-link" target="_blank">View Repo</a>
                  </div>
                </div>
              {/* </a> */}
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check out some of my homework assignments and group projects.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
