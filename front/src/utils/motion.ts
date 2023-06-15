import { MotionStyle, MotionValue } from "framer-motion";

/**
 * Pour animer les variables CSS, il faut saisir les styles en tant que "any" dans Framer Motion.
 * Pour éviter de devoir ajouter des types partout dans le code, j'ai créé cette petite fonction qui effectue la conversion.
 * Cela permet de vérifier qu'on fournit soit une valeur de mouvement, soit une chaîne ressemblant à une variable CSS.
 * @see: https://www.framer.com/motion/component/#%23%23animating-css-variables
 */

type MotionStyleWithCssVar = {
    [K in keyof MotionStyle as K | `--${string}`]:
    | MotionStyle[K]
    | MotionValue<number>
    | MotionValue<string>
    | MotionValue<any>;
};

export const stylesWithCssVar = (styles: MotionStyleWithCssVar) =>
    styles as any;