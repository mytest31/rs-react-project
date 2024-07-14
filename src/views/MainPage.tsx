import { Component } from 'react';
import SearchResult from '../components/searchResult/SearchResult';
import SearchPanel from '../components/searchPanel/SearchPanel';
import { ISearchResult } from '../util/interfaces';
import CustomErrorBoundary from '../components/CustomErrorBoundary/CustomErrorBoundary';
import './MainPage.css';

const classList: { [key: string]: string } = {
  main: 'main',
  errorBoundary: 'errorBoundary',
};

export default class MainPage extends Component {
  state: { searchResult?: ISearchResult; customError: boolean; spinner: boolean } = {
    customError: false,
    spinner: false,
  };

  handleSearchResult(result: ISearchResult): void {
    this.setState({
      searchResult: result,
    });
  }

  throwCustomError() {
    this.setState({
      customError: true,
    });
  }

  startSpinner(): void {
    this.setState({ spinner: true });
  }

  endSpinner(): void {
    this.setState({ spinner: false });
  }

  render() {
    return (
      <div className={classList['main']}>
        <button
          className={classList['errorBoundary']}
          onClick={() => {
            this.throwCustomError();
          }}
        >
          Check Error Boundary
        </button>
        <SearchPanel
          handleSearchResult={this.handleSearchResult.bind(this)}
          startSpinner={this.startSpinner.bind(this)}
          endSpinner={this.endSpinner.bind(this)}
        />
        <CustomErrorBoundary>
          <SearchResult
            searchResult={this.state.searchResult}
            customError={this.state.customError}
            spinner={this.state.spinner}
          />
        </CustomErrorBoundary>
      </div>
    );
  }
}
