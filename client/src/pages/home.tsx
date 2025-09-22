import { Link } from 'wouter';
import { trackOutboundClick, trackContactClick, trackEvent } from '@/lib/analytics';
import { Truck, Snowflake, FileText, Zap, Shield, Settings, Clock, CheckCircle } from 'lucide-react';
import logoImage from '@assets/2025-09-11 13_39_15-og-home-1200_1758531781783.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <header className="hero bg-gradient-to-br from-sky-500 to-blue-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <img 
              src={logoImage} 
              alt="IGLO-BUS.RENT - Wynajem mroźni samochodowych" 
              className="mx-auto h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
              data-testid="img-logo"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Wynajem mroźni samochodowych – Śląsk i cała Polska
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl opacity-95 leading-relaxed">
            Profesjonalny wynajem aut mroźni i chłodni do –20°C. Flota Toyota ProAce z zabudowami mroźniczymi, rejestratorami temperatury i zasilaniem postojowym 230V.
          </p>
          
          <a 
            href="https://www.iglo-bus.rent/" 
            className="cta-button inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold py-6 px-12 rounded-2xl hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 border-4 border-white/30"
            data-testid="button-main-cta"
            aria-label="Sprawdź flotę na iglo-bus.rent"
            onClick={(e) => {
              e.preventDefault();
              trackOutboundClick('https://www.iglo-bus.rent/', 'Sprawdź flotę na iglo-bus.rent', 'Hero', () => {
                window.location.href = 'https://www.iglo-bus.rent/';
              });
            }}
          >
            🚚 Sprawdź flotę i ceny na iglo-bus.rent 🚚
          </a>
          
          <div className="features-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            <div className="feature glass-effect p-4 rounded-xl">
              <Truck className="feature-icon mx-auto floating-element" />
              <span className="text-sm md:text-base font-medium">Szybka dostępność</span>
            </div>
            <div className="feature glass-effect p-4 rounded-xl">
              <Snowflake className="feature-icon mx-auto floating-element" style={{ animationDelay: '1s' }} />
              <span className="text-sm md:text-base font-medium">Zakres –20°C do +20°C</span>
            </div>
            <div className="feature glass-effect p-4 rounded-xl">
              <FileText className="feature-icon mx-auto floating-element" style={{ animationDelay: '2s' }} />
              <span className="text-sm md:text-base font-medium">Rejestrator temperatur</span>
            </div>
            <div className="feature glass-effect p-4 rounded-xl">
              <Zap className="feature-icon mx-auto floating-element" style={{ animationDelay: '3s' }} />
              <span className="text-sm md:text-base font-medium">Zasilanie 230V (postojowe)</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="why-us py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              <span className="gradient-text">Dlaczego my</span>
            </h2>
            <p className="section-lead text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto text-slate-600">
              Profesjonalne rozwiązania transportowe z gwarancją najwyższej jakości obsługi.
            </p>
            
            <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="benefit p-6 rounded-xl">
                <Snowflake className="w-10 h-10 mb-4 text-blue-500" />
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Stabilna temperatura</h3>
                <p className="text-slate-600">Zabudowy mroźnicze o potwierdzonej izolacji i wydajnych agregatach.</p>
              </div>
              <div className="benefit p-6 rounded-xl">
                <Shield className="w-10 h-10 mb-4 text-blue-500" />
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Bezpieczeństwo ładunku</h3>
                <p className="text-slate-600">Rejestracja temperatury i opcje mocowania (listwy, drążek).</p>
              </div>
              <div className="benefit p-6 rounded-xl">
                <Settings className="w-10 h-10 mb-4 text-blue-500" />
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Elastyczne wynajmy</h3>
                <p className="text-slate-600">Na dni, tygodnie i dłużej – proste warunki.</p>
              </div>
              <div className="benefit p-6 rounded-xl">
                <Clock className="w-10 h-10 mb-4 text-blue-500" />
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Szybki start</h3>
                <p className="text-slate-600">Podstawienie auta i wsparcie w dokumentach.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="locations py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4 max-w-6xl relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              <span className="gradient-text">Lokalizacje i obszar działania</span>
            </h2>
            <p className="text-lg text-center mb-10 max-w-4xl mx-auto text-slate-600">
              Obsługujemy głównie region Śląska oraz całą Polskę z możliwością szybkiego podstawienia pojazdu.
            </p>
            
            <ul className="locations-list grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <li className="location-card p-4 rounded-lg text-center font-medium text-slate-900">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                Wynajem mroźni Gliwice
              </li>
              <li className="location-card p-4 rounded-lg text-center font-medium text-slate-900">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                Wynajem mroźni Katowice
              </li>
              <li className="location-card p-4 rounded-lg text-center font-medium text-slate-900">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                Wynajem mroźni Zabrze
              </li>
              <li className="location-card p-4 rounded-lg text-center font-medium text-slate-900">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                Wynajem mroźni Śląsk
              </li>
            </ul>
          </div>
        </section>

        <section className="gallery py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text">Nasza flota</span>
            </h2>
            
            <div className="gallery-grid grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="gallery-item">
                <img 
                  src="/images/mroznia_flota.JPG"
                  alt="Wynajem chlodnia mroźnia Śląsk"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/mroznia_wnetrze.JPG"
                  alt="Wnętrze zabudowy mroźniczej z izolacją"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/mroznia2.JPG"
                  alt="Chlodnia z rejestratorem temperatury wynajem"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="main-cta py-16 lg:py-20 bg-gradient-to-br from-sky-500 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 max-w-6xl text-center relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Szybki wynajem auto-mroźni
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Chcesz szybko wynająć auto-mroźnię? Wejdź na naszą stronę i sprawdź dostępność.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.iglo-bus.rent/" 
                className="cta-button cta-large inline-block bg-white text-blue-600 font-semibold py-5 px-10 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-xl shadow-lg hover:shadow-xl"
                data-testid="button-secondary-cta"
                aria-label="Przejdź do iglo-bus.rent"
                onClick={(e) => {
                  e.preventDefault();
                  trackOutboundClick('https://www.iglo-bus.rent/', 'Przejdź do iglo-bus.rent', 'Main CTA', () => {
                    window.location.href = 'https://www.iglo-bus.rent/';
                  });
                }}
              >
                Przejdź do iglo-bus.rent
              </a>
              
              <a 
                href="https://www.iglo-bus.rent/kontakt" 
                className="cta-button cta-large inline-block bg-white/10 text-white border border-white/20 font-semibold py-5 px-10 rounded-xl hover:bg-white/20 transition-colors duration-200 text-xl"
                data-testid="button-contact-cta"
                aria-label="Przejdź do formularza kontaktowego"
                onClick={(e) => {
                  e.preventDefault();
                  trackOutboundClick('https://www.iglo-bus.rent/kontakt', 'Formularz kontaktowy', 'Main CTA', () => {
                    window.location.href = 'https://www.iglo-bus.rent/kontakt';
                  });
                }}
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer bg-slate-800 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="footer-content max-w-4xl">
            <p className="text-gray-300 mb-8 leading-relaxed">
              Profesjonalny wynajem mroźni samochodowych i aut chłodni na terenie całej Polski. Nasza flota Toyota ProAce z zabudowami mroźniczymi zapewnia stabilną temperaturę od –20°C do +20°C z rejestracją temperatury. Specjalizujemy się w szybkim wynajmie aut chłodni dla firm transportowych, gastronomii i handlu detalicznego. Obsługujemy region Śląska oraz realizujemy podstawienia w całym kraju z profesjonalnym wsparciem technicznym.
            </p>
            
            <div className="contact-info grid md:grid-cols-3 gap-6 mb-8">
              {/* Podmień telefon tutaj: */}
              <div>
                <p className="font-semibold mb-2">Telefon:</p>
                <a href="tel:+48 530 410 504" className="text-blue-300 hover:text-blue-200 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  trackContactClick('phone', 'tel:+48530410504', () => {
                    window.location.href = 'tel:+48530410504';
                  });
                }}>
                  +48 530 410 504
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2">E-mail:</p>
                <a href="mailto:kontakt@iglo-bus.rent" className="text-blue-300 hover:text-blue-200 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  trackContactClick('email', 'mailto:kontakt@iglo-bus.rent', () => {
                    window.location.href = 'mailto:kontakt@iglo-bus.rent';
                  });
                }}>
                  kontakt@iglo-bus.rent
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2">Strona główna:</p>
                <a href="https://www.iglo-bus.rent/" className="text-blue-300 hover:text-blue-200 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  trackOutboundClick('https://www.iglo-bus.rent/', 'iglo-bus.rent', 'Footer', () => {
                    window.location.href = 'https://www.iglo-bus.rent/';
                  });
                }}>
                  iglo-bus.rent
                </a>
              </div>
            </div>
            
            <p className="footer-note text-gray-400 border-t border-gray-700 pt-6">
              Obsługa całej Polski z szybkim podstawieniem pojazdu w dogodnym dla Ciebie miejscu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
