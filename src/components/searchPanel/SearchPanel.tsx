import { Component } from 'react';
import fetchData from '../../api/fetchData';
import { ISearchResult } from '../../util/interfaces';
import './SearchPanel.css';

interface ComponentProps {
  handleSearchResult: (result: ISearchResult) => void;
}

const classList: { [key: string]: string } = {
  searchPanel: 'searchPanel',
  searchInput: 'searchInput',
  searchButton: 'searchButton',
};

export default class SearchPanel extends Component<ComponentProps> {
  state = {
    searchQuery: localStorage.getItem('searchQuery') || '',
  };

  handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  componentDidMount(): void {
    fetchData(this.props.handleSearchResult, this.state.searchQuery);
  }

  render() {
    return (
      <div className={classList['searchPanel']}>
        <input
          type="search"
          className={classList['searchInput']}
          onChange={(e) => this.handleSearchQuery(e)}
          value={this.state.searchQuery}
        />
        <button
          className={classList['searchButton']}
          onClick={() => {
            fetchData(this.props.handleSearchResult, this.state.searchQuery);
            localStorage.setItem('searchQuery', this.state.searchQuery);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}
