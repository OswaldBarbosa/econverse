import {
    DrinksIcon,
    FashionIcon,
    HealthIcon,
    SportsIcon,
    SupermarketIcon,
    TechnologiesIcon,
    ToolsIcon,
} from "@/assets/icons";

export type IconKeys = keyof typeof icons;

type IconsType = {
    [key in IconKeys]: React.ElementType;
};

const icons = {
    drinks: DrinksIcon,
    fashion: FashionIcon,
    health: HealthIcon,
    sports: SportsIcon,
    supermarket: SupermarketIcon,
    technologies: TechnologiesIcon,
    tools: ToolsIcon,
};

export const Icon: IconsType = icons;