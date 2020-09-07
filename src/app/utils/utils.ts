export class Utils {
  static setItemToLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
  }

  static getItemFromLocalStorage(key) {
    return window.localStorage.getItem(key);
  }
}
