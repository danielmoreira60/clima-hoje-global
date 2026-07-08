import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AgoraPage from "./pages/AgoraPage";
import HojePage from "./pages/HojePage";
import AmanhãPage from "./pages/AmanhãPage";
import FimDeSemanaPage from "./pages/FimDeSemanaPage";
import QuinzeDiasPage from "./pages/QuinzeDiasPage";
import ContatoPage from "./pages/ContatoPage";
import SitemapPage from "./pages/SitemapPage";
import PrevisaoSaoPauloPage from "./pages/PrevisaoSaoPauloPage";
import SobrePage from "./pages/SobrePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PoliticaPrivacidadePage from "./pages/PoliticaPrivacidadePage";
import TermosUsoPage from "./pages/TermosUsoPage";
import PoliticaCookiesPage from "./pages/PoliticaCookiesPage";
import PoliticaTransparenciaPage from "./pages/PoliticaTransparenciaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/agora" element={<AgoraPage />} />
              <Route path="/hoje" element={<HojePage />} />
              <Route path="/amanha" element={<AmanhãPage />} />
              <Route path="/fim-de-semana" element={<FimDeSemanaPage />} />
              <Route path="/15-dias" element={<QuinzeDiasPage />} />
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/previsao/sao-paulo" element={<PrevisaoSaoPauloPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
              <Route path="/termos-uso" element={<TermosUsoPage />} />
              <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
              <Route path="/politica-transparencia" element={<PoliticaTransparenciaPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
