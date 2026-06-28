import React from 'react';
import LegalLayout from '@/components/LegalLayout';
import SEO from '@/components/SEO';
import { Lock } from 'lucide-react';

const PoliticaPrivacidadePage = () => (
  <>
    <SEO title="Política de Privacidade | Clima Tempo" description="Saiba como o Clima Tempo coleta, usa e protege seus dados pessoais em conformidade com a LGPD." path="/politica-privacidade" />
    <LegalLayout
      icon={Lock}
      badge="Privacidade"
      title="Política de Privacidade"
      subtitle="Como tratamos seus dados pessoais com transparência e segurança."
      updatedAt="28/06/2026"
      accent="from-blue-500 to-indigo-600"
      sections={[
        { title: 'Dados que coletamos', body: <p>Coletamos coordenadas geográficas (com seu consentimento via API nativa do navegador) e preferências armazenadas localmente no seu dispositivo. Não coletamos nome, e-mail ou documentos sem que você forneça espontaneamente em formulários.</p> },
        { title: 'Finalidade do tratamento', body: <p>Utilizamos os dados exclusivamente para exibir previsões e alertas relevantes à sua região, melhorar a experiência e gerar estatísticas agregadas e anônimas.</p> },
        { title: 'Compartilhamento', body: <p>Não vendemos seus dados. Compartilhamos apenas o necessário com APIs meteorológicas (OpenWeatherMap, NASA, USGS) para retornar informações solicitadas.</p> },
        { title: 'Base legal (LGPD)', body: <p>O tratamento é fundamentado no consentimento (Art. 7º, I) e no legítimo interesse (Art. 7º, IX) da Lei 13.709/2018 — Lei Geral de Proteção de Dados.</p> },
        { title: 'Seus direitos', body: <p>Você pode solicitar a qualquer momento confirmação, acesso, correção, anonimização, portabilidade, eliminação dos dados e revogação de consentimento. Basta entrar em contato.</p> },
        { title: 'Segurança', body: <p>Adotamos HTTPS, armazenamento local seguro e boas práticas para proteger seus dados contra acessos não autorizados.</p> },
        { title: 'Retenção', body: <p>Dados de localização não são persistidos em nossos servidores. Preferências ficam apenas no seu navegador (localStorage) e podem ser apagadas a qualquer momento.</p> },
        { title: 'Alterações nesta política', body: <p>Podemos atualizar esta política periodicamente. A data de atualização sempre será destacada no topo do documento.</p> },
      ]}
    />
  </>
);

export default PoliticaPrivacidadePage;
