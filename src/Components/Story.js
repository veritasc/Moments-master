import React, {Component} from 'react';
// import axios from 'axios';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    // const story = (await axios.get(`http://API_ENDPOINT/${params.storyId}`)).data;
    const stories = [
        {
            "id": 1,
            "title": "Feeling depressed",
            "description": "All that time alone at home is making me sad :(",
            "comments": [
                {
                    "comment": "Are u ok?"
                }
            ]
        },
        {
            "id": 2,
            "title": "Why am i so lonely?",
            "description": "I feel so lonely these days. Its like I have no one to depend on.",
            "comments": [
                {
                    "comment": "Same here!"
                }
            ]
        },
        {
            "id": 3,
            "title": "Are you guys lonely too?",
            "description": "I know I am!",
            "comments": [
                {
                    "comment": "Why do I feel this way too :("
                }
            ]
        },
        {
            "id": 4,
            "title": "What do you guys do at home to spend the time?",
            "description": "I am out of ideas at this point",
            "comments": [
                {
                    "comment": "Gaming mostly..."
                },
                {
                    "comment": "I feel u"
                }
            ]
        }
    ];
    const story = stories[params.storyId - 1]
    this.setState({
      story,
    });
  }

  render() {
    const {story} = this.state;
    if (story === null) return <p>Loading ...</p>;
    return (
      <div className="container story">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{story.title}</h1>
            <p className="lead">{story.description}</p>
            <hr className="my-4" />
            <p>Comments:</p>
            {
              story.comments.map((comment, idx) => (
                <p className="lead" key={idx}>{comment.comment}</p>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Story;