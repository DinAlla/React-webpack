import { createSelector } from 'reselect';

const getTodos = state => state.items;
const getCurrentImportance = state => state.currentImportance;

export const getCurrentItems = createSelector(
  [getCurrentImportance, getTodos],
  (currentImportance, items) => {
    switch(currentImportance){
      case 4:
        return items
      default:
        return items.filter((el) => el.importance == currentImportance)
    }
  }
)
