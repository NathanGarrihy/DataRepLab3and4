import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Title: '',
                  Year: '',
                  Poster: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeMovieYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeMoviePoster(e) {
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e) {
    alert('A movie was submitted: Title: ' + this.state.Title + " Year: " + this.state.Year + " Poster URL: " + this.state.Poster);
    e.preventDefault();
  }



  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className = "form-group">
        <label>
          Add Movie Title:
          </label>
          <input type="text" 
          className="form-control" 
          value={this.state.Title} 
          onChange={this.handleChangeMovieTitle} />
          </div>
          <div className = "form-group">
        <label>
          Add Release Year:
          </label>
          <input type="text" 
          className="form-control" 
          value={this.state.Year} 
          onChange={this.handleChangeMovieYear} />
          </div>
          <div className = "form-group">
        <label>
          Add Poster Url:
          </label>
          <input type="url" 
          className="form-control" 
          value={this.state.Poster} 
          onChange={this.handleChangeMoviePoster} />
          </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default Create;