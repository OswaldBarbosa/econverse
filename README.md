# Econverse - Vitrine de Produtos

Projeto frontend de vitrine de produtos, desenvolvido com Next.js (App Router), TypeScript e SCSS Modules, com foco em componentização, responsividade, acessibilidade e performance.

## Projeto hospedado

[https://econverse-omega.vercel.app/](https://econverse-omega.vercel.app/)

## Tecnologias utilizadas

- Next.js 16 (App Router)
- React 19
- TypeScript
- SCSS Modules (Sass)
- ESLint
- `next/image` para otimização de imagens
- API interna do Next.js (`app/api`) para proxy de dados

## Funcionalidades atuais

- Header responsivo com categorias selecionáveis
- Banner principal (hero)
- Departamentos com cards clicaveis e estado ativo
- Lista de produtos em carrossel horizontal
- Skeleton loading durante carregamento de produtos
- Modal de produto (abre detalhes, fecha com overlay e tecla `ESC`)
- Seções complementares:
  - Parceiros
  - Marcas
  - Newsletter
  - Footer
- Estrutura de constantes centralizadas em `src/constants`

## Como rodar o projeto

### 1) Instalar dependências

```bash
npm install
```

### 2) Configurar variáveis de ambiente

Crie/ajuste o arquivo `.env` com:

```env
NEXT_PUBLIC_API_BASE_URL=https://app.econverse.com.br
NEXT_PUBLIC_PRODUCTS_ENDPOINT=/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

### 3) Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de produção
- `npm run start`: sobe a aplicação em modo produção
- `npm run lint`: executa validação com ESLint

## Estrutura principal

```text
src/
  app/
    api/
      products/
        route.ts
    layout.tsx
    page.tsx
  assets/
    icons/
  components/
    BrandsSection/
    DepartmentsSection/
    Footer/
    Header/
    Newsletter/
    PartnerBanners/
    ProductCard/
    ProductList/
    ProductModal/
    icons.tsx
  constants/
    index.ts
  hooks/
    useDepartmentsSelection.ts
    useHeaderCategories.ts
    useProducts.ts
  services/
    api.ts
  styles/
    globals.scss
  types/
    product.ts
```

## Arquitetura e decisões técnicas

- **Separação de responsabilidades**
  - UI em componentes (`src/components`)
  - regras de estado em hooks (`src/hooks`)
  - consumo/normalização de API em service (`src/services/api.ts`)
- **Proxy de API via Next.js**
  - cliente consome `GET /api/products`
  - rota interna busca dados da API remota e evita problemas de CORS no browser
- **Tipagem forte**
  - tipo `Product` centralizado em `src/types/product.ts`
- **Escalabilidade**
  - constantes compartilhadas em `src/constants/index.ts`
  - componentes reutilizáveis e modulares
- **Acessibilidade**
  - labels em campos e botões
  - navegação com semântica (`header`, `nav`, `section`)
  - modal com `aria-modal`, fechamento por `ESC` e overlay
- **Performance**
  - `next/image` para imagens
  - carregamento dinâmico de seções não críticas
  - skeleton para feedback visual durante fetch

## Observações de performance

Para avaliar Lighthouse com maior precisão, execute em modo produção:

```bash
npm run build
npm run start
```

Depois rode a auditoria em `http://localhost:3000` com o servidor em produção.

## Melhorias futuras (sugestoes)

- Adicionar testes (unitarios e integracao/e2e)
- Implementar filtros reais por categoria e busca
- Adicionar paginacao ou carregamento infinito
- Melhorar cobertura de acessibilidade com auditoria manual completa