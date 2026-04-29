# Econverse - Vitrine de Produtos

Projeto frontend de vitrine de produtos, desenvolvido com Next.js (App Router), TypeScript e SCSS Modules, com foco em componentizacao, responsividade, acessibilidade e performance.

## Tecnologias utilizadas

- Next.js 16 (App Router)
- React 19
- TypeScript
- SCSS Modules (Sass)
- ESLint
- `next/image` para otimizacao de imagens
- API interna do Next.js (`app/api`) para proxy de dados

## Funcionalidades atuais

- Header responsivo com categorias selecionaveis
- Banner principal (hero)
- Departamentos com cards clicaveis e estado ativo
- Lista de produtos em carrossel horizontal
- Skeleton loading durante carregamento de produtos
- Modal de produto (abre detalhes, fecha com overlay e tecla `ESC`)
- Secoes complementares:
  - Parceiros
  - Marcas
  - Newsletter
  - Footer
- Estrutura de constantes centralizadas em `src/constants`

## Como rodar o projeto

### 1) Instalar dependencias

```bash
npm install
```

### 2) Configurar variaveis de ambiente

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

## Scripts disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run start`: sobe a aplicacao em modo producao
- `npm run lint`: executa validacao com ESLint

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

## Arquitetura e decisoes tecnicas

- **Separacao de responsabilidades**
  - UI em componentes (`src/components`)
  - regras de estado em hooks (`src/hooks`)
  - consumo/normalizacao de API em service (`src/services/api.ts`)
- **Proxy de API via Next.js**
  - cliente consome `GET /api/products`
  - rota interna busca dados da API remota e evita problemas de CORS no browser
- **Tipagem forte**
  - tipo `Product` centralizado em `src/types/product.ts`
- **Escalabilidade**
  - constantes compartilhadas em `src/constants/index.ts`
  - componentes reutilizaveis e modulares
- **Acessibilidade**
  - labels em campos e botoes
  - navegacao com semantica (`header`, `nav`, `section`)
  - modal com `aria-modal`, fechamento por `ESC` e overlay
- **Performance**
  - `next/image` para imagens
  - carregamento dinamico de secoes nao criticas
  - skeleton para feedback visual durante fetch

## Observacoes de performance

Para avaliar Lighthouse com maior precisao, execute em modo producao:

```bash
npm run build
npm run start
```

Depois rode a auditoria em `http://localhost:3000` com o servidor em producao.

## Melhorias futuras (sugestoes)

- Adicionar testes (unitarios e integracao/e2e)
- Implementar filtros reais por categoria e busca
- Adicionar paginacao ou carregamento infinito
- Melhorar cobertura de acessibilidade com auditoria manual completa