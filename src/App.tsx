import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Index from "./pages/Index";
import AgoraPage from "./pages/AgoraPage";
import HojePage from "./pages/HojePage";
import AmanhãPage from "./pages/AmanhãPage";
import FimDeSemanaPage from "./pages/FimDeSemanaPage";
import QuinzeDiasPage from "./pages/QuinzeDiasPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
