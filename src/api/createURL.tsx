const httpOptions = {
  baseUrl: 'https://swapi.dev/api',
  resource: '/people/',
  searchParam: '?search=',
  andParam: '&',
  pageParam: 'page=',
};

export default function createURL(searchQuery: string | null, page: string) {
  return httpOptions.baseUrl
    .concat(httpOptions.resource)
    .concat(httpOptions.searchParam)
    .concat(searchQuery ?? '')
    .concat(httpOptions.andParam)
    .concat(httpOptions.pageParam)
    .concat(page);
}
