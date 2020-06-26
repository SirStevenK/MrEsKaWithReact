import { createContext } from "react";

export interface Props {
    article: ArticleAttributes
    setAttribute: (attribute: keyof ArticleAttributes, content: string) => void
}

export default createContext<Props>({
    article: null,
    setAttribute: null
})