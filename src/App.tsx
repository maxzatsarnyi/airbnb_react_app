import { Suspense } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Routes } from './routes/index';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
