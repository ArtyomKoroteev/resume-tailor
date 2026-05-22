import { Header } from './shared/ui/header';
import { Footer } from './shared/ui/footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Preview" rightContent={<div>Right content</div>} />
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center align-middle">
          <h1 className="text-4xl font-bold">Welcome to the Resume Builder</h1>
          <p className="text-l text-gray-500">This is the main content of the app.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
