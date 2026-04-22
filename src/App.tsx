import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Legal } from './components/Legal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';

function App() {
    return (
        <Router>
            <main className="font-serif antialiased text-slate-800 bg-slate-50 selection:bg-secondary/30 selection:text-primary flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/official" element={<Home price="55,000" priceLabel="" paymentUrl="https://buy.stripe.com/aFa9AV7dY7fW7vLbyNbV605" />} />
                        <Route path="/legal" element={<Legal />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                    </Routes>
                </div>
                <Footer />
            </main>
        </Router>
    );
}

export default App;
