import React from 'react';
import LegalLayout from '@/components/LegalLayout';
import SEO from '@/components/SEO';
import { Scale } from 'lucide-react';

const TermosUsoPage = () => (
  <>
    <SEO title="Termos de Uso | Clima Tempo" description="Regras e condições para utilização da plataforma Clima Tempo." path="/termos-uso" />
    <LegalLayout
      icon={Scale}
      badge="Termos"
      title="Termos de Uso"
      subtitle="Condições gerais para uso da plataforma Clima Tempo."
      updatedAt="28/06/2026"
      accent="from-amber-500 to-orange-600"
      sections={[
        { title: 'Aceitação dos termos', body: <p>Ao acessar o Clima Tempo, você concorda integralmente com estes termos. Caso não concorde, recomendamos não utilizar o serviço.</p> },
        { title: 'Natureza informativa', body: <p>As informações exibidas são meramente informativas. Para decisões críticas (aviação, navegação, defesa civil), consulte sempre fontes oficiais como INMET, Marinha do Brasil e Defesa Civil.</p> },
        { title: 'Uso permitido', body: <p>Você pode consultar previsões, alertas e mapas para fins pessoais e educacionais. É vedado o uso automatizado (scraping) sem autorização prévia.</p> },
        { title: 'Propriedade intelectual', body: <p>Marca, layout, código e textos pertencem ao Clima Tempo. Dados meteorológicos pertencem às respectivas agências (NASA, NOAA, USGS, INPE).</p> },
        { title: 'Limitação de responsabilidade', body: <p>Não nos responsabilizamos por prejuízos decorrentes de imprecisões, indisponibilidade do serviço ou interpretações equivocadas das informações.</p> },
        { title: 'Conta e cadastro', body: <p>Atualmente o serviço não exige cadastro. Caso passemos a oferecer área logada, regras complementares serão adicionadas.</p> },
        { title: 'Suspensão e encerramento', body: <p>Podemos suspender o acesso de usuários que violem estes termos ou tentem comprometer a segurança/integridade do serviço.</p> },
        { title: 'Foro', body: <p>Fica eleito o foro da Comarca de domicílio do usuário para dirimir eventuais controvérsias.</p> },
      ]}
    />
  </>
);

export default TermosUsoPage;
