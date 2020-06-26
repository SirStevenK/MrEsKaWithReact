const stringLitArray = <L extends string>(arr: L[]) => arr;

const filTypes = stringLitArray<FilTypes>(['All', 'AnalyseJV', 'Creation', 'DevJV', 'Tutorial'])
export function isFilType(x: any): x is FilTypes {
    return filTypes.includes(x);
}