// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import Column from "../components/column/column";
import Header from "../components/header/header";

export function App() {
  return (
    <div>
      <Header/>
      <div>
        <Column>
          <a slot="item" href="/">about</a>
          <a slot="item" href="/projects">projects</a>
        </Column>
      </div>
    </div>
  );
}

export default App;


