import { IconKeys } from "@/components/icons";

export const DEPARTMENTS = [
    { name: "Tecnologia", iconKey: "technologies" },
    { name: "Supermercado", iconKey: "supermarket" },
    { name: "Bebidas", iconKey: "drinks" },
    { name: "Ferramentas", iconKey: "tools" },
    { name: "Saúde", iconKey: "health" },
    { name: "Esportes e Fitness", iconKey: "sports" },
    { name: "Moda", iconKey: "fashion" },
] satisfies Array<{ name: string; iconKey: IconKeys }>;

export const HEADER_CATEGORIES = [
    { label: "Todas categorias" },
    { label: "Supermercado" },
    { label: "Livros" },
    { label: "Moda" },
    { label: "Lançamentos" },
    { label: "Ofertas do dia" },
    { label: "Assinatura", isCrown: true },
];

export const PRODUCT_TABS = ["CELULAR", "ACESSORIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"] as const;

export const FOOTER_LINKS = {
    Institucional: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
    Ajuda: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
    Termos: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"],
} as const;