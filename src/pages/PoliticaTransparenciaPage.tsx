import React from 'react';
import LegalLayout from '@/components/LegalLayout';
import SEO from '@/components/SEO';
import { Eye } from 'lucide-react';

const PoliticaTransparenciaPage = () => (
  <>
    <SEO title="Política de Transparência | Clima Tempo" description="Compromisso do Clima Tempo com transparência de dados, fontes e metodologia." path="/politica-transparencia" />
    <LegalLayout
      icon={Eye}
      badge="Transparência"
      title="Política de Transparência"
      subtitle="Nosso compromisso com fontes abertas e metodologia clara."
      updatedAt="28/06/2026"
      accent="from-emerald-500 to-teal-600"
      sections={[
        { title: 'Fontes de dados', body: <p>Utilizamos exclusivamente fontes oficiais e abertas: OpenWeatherMap (meteorologia), USGS (sismologia), NASA EONET (eventos naturais), NOAA, INPE e Copernicus.</p> },
        { title: 'Metodologia', body: <p>Os dados são consumidos via APIs públicas, normalizados em nosso back-end (Supabase Edge Functions) e classificados por severidade (baixa, média, alta e extrema) antes da exibição.</p> },
        { title: 'Atualizações', body: <p>Mapas e alertas são atualizados em ciclos que variam de minutos (sísmica) a horas (previsão estendida). A frequência exata é informada em cada monitor.</p> },
        { title: 'Limitações conhecidas', body: <p>Previsões probabilísticas têm margem de erro inerente. Cobertura geográfica e disponibilidade podem variar conforme a fonte e a região.</p> },
        { title: 'Correções e retratações', body: <p>Caso seja identificado erro grave em conteúdo editorial, publicamos a correção com destaque e mantemos o histórico.</p> },
        { title: 'Conflitos de interesse', body: <p>Não recebemos financiamento de partidos, governos ou empresas que possam comprometer a isenção dos conteúdos.</p> },
        { title: 'Publicidade', body: <p>Eventuais anúncios são claramente identificados como tal e não influenciam a curadoria editorial ou os alertas.</p> },
        { title: 'Canal aberto', body: <p>Sugestões, críticas e correções podem ser enviadas pelo nosso canal de contato. Respondemos em até 5 dias úteis.</p> },
      ]}
    />
  </>
);

export default PoliticaTransparenciaPage;
