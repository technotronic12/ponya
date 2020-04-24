import React from 'react';
import axios from 'axios';
import { MediumPost } from './MediumPost/MediumPost';

class Medium extends React.Component<{ mediumRssFeed: string }, { posts: any, metadata: any }> {

  constructor() {
    super();
    this.state = {
      posts: {},
      metadata: {},
    };
  }

  componentDidMount(): void {
    const rssFeedJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${ this.props.mediumRssFeed }`;

    axios.get(rssFeedJsonUrl)
      .then(response => this.setState({ posts: response.data.items, metadata: response.data.feed }))
      .catch(err => console.log('Error fetching blog RSS json', err));
  }

  render() {
    return (
      <div>
        <MediumPost postData={ this.state.posts[0] }/>
      </div>);
  }
}

export { Medium };
