import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './links/AppRouter';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from './components';
function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <AppRouter />
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
