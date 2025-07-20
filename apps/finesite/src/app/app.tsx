import styles from './app.module.scss';
import Column from "../components/column/column";
import Header from "../components/header/header";
import ShiftingText from "../components/shifting-text/shifting-text";

export function App() {
  return (
    <div>
      <div className={styles.app}>
        <Header/>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '20%', margin: '0' }}>
            <Column>
              <a slot="item" href="/">about</a>
              <a slot="item" href="/projects">projects</a>
            </Column>
          </div>
          <div style={{ margin: 'none 1rem', padding: '1rem', width: '80%' }}>
            <ShiftingText rows={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


