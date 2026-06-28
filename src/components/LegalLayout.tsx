import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ShieldCheck, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface LegalSection {
  title: string;
  body: React.ReactNode;
}

interface Props {
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: LegalSection[];
  accent?: string; // tailwind gradient e.g. "from-primary to-secondary"
}

const LegalLayout: React.FC<Props> = ({ icon: Icon, badge, title, subtitle, updatedAt, sections, accent = 'from-primary to-secondary' }) => (
  <div className="min-h-screen bg-gradient-sky py-12">
    <div className="container mx-auto px-4 max-w-4xl">
      <Button asChild variant="ghost" size="sm" className="mb-4">
        <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Voltar</Link>
      </Button>

      {/* Hero */}
      <Card className={`overflow-hidden border-2 border-primary/20 mb-8 bg-gradient-to-br from-card via-card to-primary/5`}>
        <div className={`h-2 bg-gradient-to-r ${accent}`} />
        <CardContent className="p-8 md:p-10">
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${accent} shadow-lg`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="border-primary/30 mb-2">{badge}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary" className="gap-1"><FileText className="h-3 w-3" /> Documento Oficial</Badge>
            <Badge variant="secondary" className="gap-1"><ShieldCheck className="h-3 w-3" /> Vigente</Badge>
            <span>Última atualização: <span className="font-medium text-foreground">{updatedAt}</span></span>
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((s, i) => (
          <Card key={s.title} className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white text-sm font-bold shadow`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
              {s.body}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contato */}
      <Card className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Dúvidas sobre este documento?</p>
              <p className="text-sm text-muted-foreground">Entre em contato com nossa equipe.</p>
            </div>
          </div>
          <Button asChild className={`bg-gradient-to-r ${accent} hover:opacity-90`}>
            <Link to="/contato">Falar com a equipe</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default LegalLayout;
