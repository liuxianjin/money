let id = parseInt(window.localStorage.getItem("maxId") || "0");
const createId = () => {
  id++;
  window.localStorage.setItem("maxId", id.toString());
  return id;
}

/*class Id {
  value: number;
  constructor() {
    this.value = ++id;
  }
}*/

export default createId;
