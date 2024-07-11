import { ISearchResult } from '../util/interfaces';
import createURL from './createURL';

const defaultValues = {
  page: '1',
};

export default function fetchData(
  handleSearchResult: (result: ISearchResult) => void,
  searchQuery: string | null,
  startSpinner?: () => void,
  endSpinner?: () => void,
  page: string = defaultValues.page,
): void {
  const URL = createURL(searchQuery, page);
  if (startSpinner) {
    startSpinner();
  }
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Response is not ok.');
      }
      return response.json();
    })
    .then((data: ISearchResult) => {
      handleSearchResult(data);
      if (endSpinner) {
        endSpinner();
      }
    })
    .catch((errorText: string) => {
      console.log(errorText);
    });
}
