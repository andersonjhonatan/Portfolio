# Anderson Jhonatan — CEO da K2 Tech

Portfólio pessoal de Anderson Jhonatan, CEO e fundador da K2 Tech. O site apresenta a visão, o processo de trabalho, projetos selecionados e um contato direto pelo WhatsApp.

## O que foi atualizado

- Reestruturação total da arquitetura e da apresentação visual.
- Posicionamento como CEO e fundador da K2 Tech, em vez de um currículo técnico genérico.
- Projetos reais organizados como portfólio de experiências digitais.
- Design responsivo com identidade preto/grafite, azul elétrico e detalhes dourados.
- Contato que inicia uma conversa no WhatsApp sem armazenar dados no site.
- SEO básico: metadados, ícone, manifesto, `robots.txt` e sitemap.
- Base técnica atualizada para Next.js 16 e React 19.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- CSS responsivo, sem dependências de interface desnecessárias

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para testar a versão de produção:

```bash
npm run build
npm run start
```

## Configuração de URL

Por padrão, o SEO usa `https://portfolio-seven-flax-47.vercel.app`. Ao configurar um domínio próprio, defina a variável de ambiente abaixo na Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## Contato

O formulário abre uma mensagem pronta no WhatsApp da K2 Tech. O número pode ser atualizado em `components/PortfolioSite.tsx` na constante `whatsappNumber`.
