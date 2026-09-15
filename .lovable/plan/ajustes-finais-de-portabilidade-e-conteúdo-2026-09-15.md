# Ajustes finais de portabilidade e conteúdo

## Alterações
- Remover a declaração global problemática de tipos do `tsconfig.json` e adicionar a referência padrão do Vite em `src/vite-env.d.ts`.
- Manter Vite e TypeScript nas dependências de desenvolvimento já existentes e validar a instalação/build com o gerenciador configurado no projeto.
- Inverter somente a hierarquia das duas frases da primeira seção, preservando foto, fundo, identificação e botão.
- Adicionar “Nossas Unidades” ao rodapé com os três endereços em três colunas no desktop e em sequência no celular.
- Auditar referências a imagens, fontes e caminhos locais, garantindo que os arquivos permaneçam portáteis.

## Validação
- Conferir a página em desktop e celular, incluindo legibilidade da nova frase principal e organização dos endereços.
- Verificar erros de TypeScript e executar o build de produção.
- Confirmar que não há referências a caminhos locais do Windows nem imagens ausentes.

## Detalhes técnicos
- A declaração `/// <reference types="vite/client" />` ficará isolada em `src/vite-env.d.ts`, seguindo o padrão do Vite.
- Os assets continuarão importados a partir de `src/assets` e o favicon a partir de `public`.
