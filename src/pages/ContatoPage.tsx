import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
import SEO from '@/components/SEO';
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Globe,
  Shield
} from 'lucide-react';

const ContatoPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <SEO title="Contato | Clima Tempo" description="Entre em contato com a equipe do Clima Tempo. Tire dúvidas, envie sugestões ou reporte problemas." path="/contato" />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Tem dúvidas sobre nossas previsões? Quer reportar algum problema? 
            Estamos aqui para ajudar você a ter a melhor experiência meteorológica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span>Envie sua Mensagem</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input 
                      id="nome" 
                      placeholder="Seu nome completo"
                      required
                      className="transition-all duration-200 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="transition-all duration-200 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Input 
                    id="assunto" 
                    placeholder="Qual o motivo do seu contato?"
                    required
                    className="transition-all duration-200 focus:shadow-glow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="localizacao">Localização</Label>
                  <Input 
                    id="localizacao" 
                    placeholder="Cidade, Estado (opcional)"
                    className="transition-all duration-200 focus:shadow-glow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea 
                    id="mensagem"
                    placeholder="Descreva sua dúvida, sugestão ou problema..."
                    rows={5}
                    required
                    className="transition-all duration-200 focus:shadow-glow resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 hover:shadow-weather"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Informações de Contato</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground">contato@climahoje.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg">
                  <Phone className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">24 horas, 7 dias por semana</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <span>Perguntas Frequentes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Com que frequência os dados são atualizados?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nossos dados meteorológicos são atualizados a cada 15 minutos para fornecer as informações mais precisas.
                  </p>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Como posso reportar dados incorretos?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use o formulário ao lado informando sua localização e os dados que considera incorretos. Verificaremos em 24h.
                  </p>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Posso usar os dados comercialmente?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Para uso comercial, entre em contato conosco para discutir licenciamento e APIs especializadas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Sobre o Clima Hoje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Cobertura Nacional</p>
                    <p className="text-sm text-muted-foreground">
                      Previsões precisas para todo o território brasileiro
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Dados Confiáveis</p>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos múltiplas fontes meteorológicas para máxima precisão
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sempre Atualizado</p>
                    <p className="text-sm text-muted-foreground">
                      Tecnologia de ponta para previsões em tempo real
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;