declare module "*.scss";

declare module NodeJS  {
    interface Global {
        url: string
    }
}

type FilTypes = 'All'|'Tutorial'|'DevJV'|'AnalyseJV'|'Creation';

interface ArticleAttributes {
    name: string,
    category: FilTypes,
    url: string,
    description: string,
    mainImageUrl: string,
    content: string
}

interface ImageAttributes {
    name: string,
    path: string,
    url: string
}