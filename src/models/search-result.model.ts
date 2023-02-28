export class SearchResult {

  title: string;
  content: string;
  //highLight

  constructor(object?: any) {
     Object.assign(this, object);
  }
}