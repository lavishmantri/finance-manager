import { ThemeProvider } from './oxygen/theme/ThemeProvider';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
