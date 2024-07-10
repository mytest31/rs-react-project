import { Component } from 'react';
import SearchResult from '../components/searchResult/SearchResult';
import SearchPanel from '../components/searchPanel/SearchPanel';
import { ISearchResult } from '../util/interfaces';
import './MainPage.css';

const classList: { [key: string]: string } = {
  main: 'main',
};

export default class MainPage extends Component {
  state: { searchResult?: ISearchResult } = {};

  handleSearchResult(result: ISearchResult): void {
    this.setState({
      searchResult: result,
    });
  }

  render() {
    return (
      <div className={classList['main']}>
        <SearchPanel handleSearchResult={this.handleSearchResult.bind(this)} />
        <SearchResult searchResult={this.state.searchResult} />
      </div>
    );
  }
}
