import { formJS, isKeyed } from 'immutable';

export default function accessImmutableObject(object, array) {
  return formJS(object, (key, value, array) => {
    console.log(key, value, array);
    return isKeyed(value) ? value.toOrderedMap() : value.toList();
  });
};
