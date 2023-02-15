import AppHeader from './ui/header';
import AppFooter from './ui/footer';
import AppContent from './ui/content';
import PokerPage from '../pages/scrum/PokerPage';

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent>
        <PokerPage />
      </AppContent>
      <AppFooter />
    </div>
  );
}
