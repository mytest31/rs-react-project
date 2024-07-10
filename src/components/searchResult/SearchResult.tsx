import React from 'react';
import { Component } from 'react';
import { ISearchResult } from '../../util/interfaces';
import ResultCard from './ResultCard';
import './SearchResult.css';

interface ComponentProps {
  searchResult?: ISearchResult | undefined;
}

const classList: { [key: string]: string } = {
  searchResult: 'searchResult',
  message: 'message',
};

export default class SearchResult extends Component<ComponentProps> {
  renderContent(): React.JSX.Element[] | React.JSX.Element {
    let result: React.JSX.Element[] | React.JSX.Element = <div className={classList.message}></div>;
    if (localStorage.getItem('searchQuery') === null) {
      result = (
        <div className={classList.message}>
          <div>
            Hello, here you can find information about an individual person or character within the
            Star Wars universe.
          </div>
          <div>Empty search entry returns information about all characters.</div>
        </div>
      );
    } else if (this.props.searchResult && !this.props.searchResult.count) {
      result = (
        <div className={classList.message}>Sorry, nothing was found. Please, try again.</div>
      );
    } else if (this.props.searchResult && this.props.searchResult.count) {
      result = this.props.searchResult.results.map((cardParams, idx) => (
        <ResultCard cardParams={cardParams} key={idx} id={idx} />
      ));
    }
    return result;
  }

  render() {
    return <div className={classList.searchResult}>{this.renderContent()}</div>;
  }
}
