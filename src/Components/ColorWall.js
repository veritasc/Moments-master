import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

class ColorWall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: null,
    };
  }

  async componentDidMount() {
    // const stories = (await axios.get('API_ENDPOINT_HERE')).data;
    const stories = [
        {
            "id": 1,
            "title": "Feeling depressed",
            "description": "All that time alone at home is making me sad :("
        },
        {
            "id": 2,
            "title": "Why am i so lonely?",
            "description": "I feel so lonely these days. Its like I have no one to depend on."
        },
        {
            "id": 3,
            "title": "Are you guys lonely too?",
            "description": "I know I am!"
        },
        {
            "id": 4,
            "title": "What do you guys do at home to spend the time?",
            "description": "I am out of ideas at this point"
        }
    ];
    this.setState({
      stories,
    });
  }

  render() {
    return (
      <div className="container colorwall">
        <div className="row">
          {this.state.stories === null && <p>Loading stories...</p>}
          {
            this.state.stories && this.state.stories.map(story => (
              <div key={story.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/story/${story.id}`}>
                  <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                      <h4 className="card-title">{story.title}</h4>
                      <p className="card-text">{story.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ColorWall;