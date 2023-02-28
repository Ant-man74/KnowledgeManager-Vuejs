import { reactive } from 'vue'
import { SearchResult } from '../models/search-result.model';

export interface SearchStore {
  results: SearchResult[];
  // Filters

}

export const searchStore: SearchStore = reactive({
  results: [],
} as SearchStore)
