
interface IRouters{
  routes: any;
  init: (path: string) => void;
  route: (path: string, callback: () => void)=>void;
  go: (path: string) => void;
  _bindPopState: () => void;
}
export default class Routers implements IRouters {
  routes: any;
  constructor() {
    this.routes = {};
  }
  init(path: string) {
    history.replaceState({ path }, "", path);
    this.routes[path] && this.routes[path]();
  }
  route(path: string, callback: () => void) {
    this.routes[path] = callback || function () { };
  }
  go(path:string) {
    history.pushState({ path }, "", path);
  }
  _bindPopState() {
    window.addEventListener('popstate', ev => {
      const path = ev.state && ev.state.path;
      this.routes[path] && this.routes[path]();
    })
  }
}