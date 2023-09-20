import { Store } from "../core/ghkdwngks";

interface State {
  photo: string;
  name: string;
  email: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "ghkdwngks / Han",
  email: "juhan10161016@gmail.com",
  github: "https://github.com/ghkdwngks",
  repository: "https://github.com/ghkdwngks/movie-app",
});
