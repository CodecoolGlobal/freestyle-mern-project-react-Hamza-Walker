import MarkdownPage from './components/MarkdownPage';
import { AppProvider } from './components/AppContext';

export default function App() {
  return (
    <div>
      <AppProvider>
        <MarkdownPage />
      </AppProvider>
    </div>
  );
}