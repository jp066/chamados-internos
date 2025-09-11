import { Header } from "./components/headerComponent";
import { Hero } from "./components/heroComponent";
import { Dashboard } from "./components/dashboardComponent";
//import { LoginComponent } from "./components/loginComponent";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Dashboard />
    </div>
  );
}