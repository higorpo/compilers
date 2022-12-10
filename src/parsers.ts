import GrammarParser from '../lib/ExprLexerParser.js';

interface Node {
    type: 'leaf' | 'tree';
    token: string;
    children?: Array<Node>;
}

export function parseStringTree(input: string) {
    // Split the input string into an array of tokens
    const tokens = input.split(/\s*(;|\(|\)|\s)\s*/).filter(token => token !== '' && token !== ' ');

    function parseTree(): Node {
        const token = tokens.shift();

        if (token === '(') {
            let nextToken = tokens.shift();

            while (nextToken === '(') {
                nextToken = tokens.shift();
            }

            const node = nextToken;
            const children = [];

            while (tokens[0] !== ')') {
                children.push(parseTree());
            }

            tokens.shift();
            return {
                type: 'tree',
                token: node!,
                children
            };
        } else {
            // Verifica se é um terminal
            const isTerminal = GrammarParser.ruleNames.some(rule => rule === token);

            return {
                type: 'leaf',
                token: token!,
            };
        }
    }

    return parseTree()
}

export function filterLeafs(arr: Node[]): Node[] {
    const leafs: Node[] = [];

    for (const node of arr) {
        if (node.type === 'leaf') {
            leafs.push(node);
        } else {
            leafs.push(...filterLeafs(node.children!));
        }
    }

    return leafs;
}
