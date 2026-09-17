# Versão estática (cPanel / HostGator)

Gerar a pasta final:

```bash
npm install
npm run build:static
```

Isso cria a pasta `static-site/`:

```
static-site/
├── index.html
├── favicon.png
├── robots.txt
└── assets/   (CSS, JS e imagens)
```

Publicação:

1. Abra o Gerenciador de Arquivos do cPanel.
2. Envie **o conteúdo** de `static-site/` para a pasta do domínio ou subdomínio
   (`public_html/` ou `public_html/subdominio/`).
3. O `index.html` deve ficar na raiz dessa pasta.

Detalhes:

- Todos os caminhos de CSS, JS e imagens são relativos (`./assets/...`),
  funcionando tanto na raiz do domínio quanto em subdomínio ou subpasta.
- Não há Node.js, SSR nem qualquer serviço em execução: apenas arquivos estáticos.
- O HTML já vem com todo o conteúdo da página renderizado, e o JavaScript
  apenas ativa animações, FAQ e carrossel de avaliações.
- O Google Tag Manager continua incluído no HTML.
