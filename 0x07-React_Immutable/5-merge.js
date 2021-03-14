import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  const list1, list2 = (List(page1), List(page2));
  return list1.concat(list2);
}

export const mergeElements = (page1, page2) => {
  const map1, map2 = (Map(page1), Map(page2));
  return map1.merge(map2);
}
