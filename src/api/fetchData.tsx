import { ISearchResult } from '../util/interfaces';
import createURL from './createURL';

const defaultValues = {
  page: '1',
};

export default function fetchData(
  handleSearchResult: (result: ISearchResult) => void,
  searchQuery: string | null,
  page: string = defaultValues.page,
): void {
  const URL = createURL(searchQuery, page);

  fetch(URL)
    .then((response) => response.json())
    .then((data) => handleSearchResult(data));
}
