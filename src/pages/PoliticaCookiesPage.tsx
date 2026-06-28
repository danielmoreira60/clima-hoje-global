import React from 'react';
import LegalLayout from '@/components/LegalLayout';
import SEO from '@/components/SEO';
import { Cookie } from 'lucide-react';

const PoliticaCookiesPage = () => (
  <>
    <SEO title="Política de Cookies | Clima Tempo" description="Entenda como o Clima Tempo utiliza cookies e tecnologias similares." path="/politica-cookies" />
    <LegalLayout
      icon={Cookie}
      badge="Cookies"
      title="Política de Cookies"
      subtitle="Como utilizamos cookies e armazenamento local."
      updatedAt="28/06/2026"
      accent="from-rose-500 to-pink-600"
      sections={[
        { title: 'O que são cookies', body: <p>Pequenos arquivos de texto armazenados em seu navegador que ajudam a personalizar e melhorar sua experiência de navegação.</p> },
        { title: 'Tipos utilizados', body: <p><strong>Essenciais:</strong> indispensáveis ao funcionamento (ex.: preferências de localização).<br /><strong>Funcionais:</strong> lembram suas escolhas (cidade favorita, unidade de temperatura).<br /><strong>Analíticos:</strong> métricas anônimas de uso para melhorias.</p> },
        { title: 'Armazenamento local', body: <p>Além de cookies, usamos <code>localStorage</code> para guardar coordenadas e configurações no seu dispositivo. Esses dados nunca saem do seu navegador.</p> },
        { title: 'Cookies de terceiros', body: <p>Bibliotecas de mapas (Leaflet, OpenStreetMap, CARTO, Esri) podem definir cookies próprios ao carregar tiles. Recomendamos consultar suas respectivas políticas.</p> },
        { title: 'Como gerenciar', body: <p>Você pode bloquear ou apagar cookies nas configurações do seu navegador. Atenção: desabilitar cookies essenciais pode afetar o funcionamento da plataforma.</p> },
        { title: 'Consentimento', body: <p>Ao continuar navegando, você consente com o uso de cookies conforme descrito nesta política.</p> },
      ]}
    />
  </>
);

export default PoliticaCookiesPage;
