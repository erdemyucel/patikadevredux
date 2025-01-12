import './App.css';
import Editor from './components/Editor';
import TextOutput from './components/TextOutput';
import HelpButton from './components/HelpButton';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-[1200px] h-screen">
      <HelpButton />
      <Header />

      <div className="mt-4 grid lg:grid-cols-2 gap-4 h-3/4">
        <Editor />
        <TextOutput />
      </div>
      <Footer />
    </div>
  );
}

export default App;
