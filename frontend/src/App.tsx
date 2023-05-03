import MarkdownPage from './components/MarkDownPage/MarkdownPage';
import { AppProvider } from './components/MarkDownPage/AppContext';

export default function App() {
  return (
    <div>
      <AppProvider>
        <MarkdownPage />
      </AppProvider>
    </div>
  );
}