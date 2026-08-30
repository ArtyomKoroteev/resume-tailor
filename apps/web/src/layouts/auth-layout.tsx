import { Outlet } from 'react-router';
import { Header } from '../shared/ui/header';
import { Footer } from '../shared/ui/footer';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Resume Builder" />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
