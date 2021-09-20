import { LOCAL_STORAGE_CONTACTS } from '../constants';

export const getContactsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS))
}
export const setContactsFromLocalStorage = (contacts) => {
  return window.localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(contacts))
}
