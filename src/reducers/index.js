import { combineReducers } from 'redux';
import items from './items';
import filterItems from './filterItems';

  const itemApp = combineReducers({
    items,
    filterItems,
  })

  export default itemApp