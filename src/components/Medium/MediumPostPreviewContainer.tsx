import React from 'react';
import axios from 'axios';
import { MediumPostPreview } from './MediumPostPreview/MediumPostPreview';
import { MediumAuthorMetadata, MediumPost } from './medium-typings';

class MediumPostPreviewContainer extends React.Component<{ mediumRssFeed: string }, { posts: MediumPost[], metadata: MediumAuthorMetadata }> {
  constructor() {
    super();

    this.state = {
      posts: [],
      metadata: undefined,
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
        { this.state.posts.map(post => <MediumPostPreview post={ post }/>) }
      </div>);
  }
}

export { MediumPostPreviewContainer };
