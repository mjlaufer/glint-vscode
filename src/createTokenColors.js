module.exports = (theme) => [
    {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Variable, Object-Literal Key, JSON Key, Built-In Constant, CSS Unit',
        scope: 'variable, meta.object-literal.key, source.json meta.structure.dictionary.json support.type.property-name.json',
        settings: {
            foreground: theme.fg1,
        },
    },
    {
        name: 'Braces, Punctuation, Misc',
        scope: 'meta.brace, punctuation, punctuation.definition.tag, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded, constant.other.color, keyword.other.template, keyword.other.substitution',
        settings: {
            foreground: theme.fg2,
        },
    },
    {
        name: 'Keyword',
        scope: 'keyword, constant.language',
        settings: {
            foreground: theme.fg2,
        },
    },
    {
        name: 'Operator',
        scope: 'keyword.operator',
        settings: {
            foreground: theme.magenta,
        },
    },
    {
        name: 'Template Literal Nesting Templates',
        scope: 'punctuation.definition.template-expression',
        settings: {
            foreground: theme.fg2,
        },
    },
    {
        name: 'Storage',
        scope: 'storage.type, storage.modifier',
        settings: {
            foreground: theme.fg2,
        },
    },
    {
        name: 'String',
        scope: 'string',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Number',
        scope: 'constant.numeric, keyword.other.unit',
        settings: {
            foreground: theme.magentaBright,
        },
    },
    {
        name: 'Regex, Escape Characters',
        scope: 'string.regexp, constant.character, constant.character.escape, support.constant',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Function, Special Method, Block Level',
        scope: 'entity.name.function, meta.function-call, variable.function, support.function, keyword.other.special-method, meta.block-level',
        settings: {
            foreground: theme.fg0,
        },
    },
    {
        name: 'Language methods, Sub-methods',
        scope: 'variable.language',
        settings: {
            foreground: theme.fg0,
        },
    },
    {
        name: 'Class, Inherited Class, Built-In Class',
        scope: 'entity.name.class, entity.name.type.class, entity.other.inherited-class, new.expr entity.name.type, support.class.builtin',
        settings: {
            foreground: theme.fg0,
        },
    },
    {
        name: 'Type',
        scope: 'entity.name.type, support.type',
        settings: {
            foreground: theme.cyan,
        },
    },
    {
        name: 'HTML/JSX Tag',
        scope: 'entity.name.tag, meta.tag.sgml',
        settings: {
            foreground: theme.fg2,
        },
    },
    {
        name: 'JSX Component Tag',
        scope: 'support.class.component',
        settings: {
            foreground: theme.fg0,
        },
    },
    {
        name: 'HTML/JSX Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
            foreground: theme.fg1,
        },
    },
    {
        name: 'CSS Attributes',
        scope: 'entity.other.attribute-name.id.css, entity.other.attribute-name.pseudo-element.css, entity.other.attribute-name.pseudo-class.css',
        settings: {
            foreground: theme.fg1,
        },
    },
    {
        name: 'JSX Children',
        scope: 'meta.jsx.children',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Other Variable, String Link',
        scope: 'support.other.variable, string.other.link',
        settings: {
            foreground: theme.fg1,
        },
    },
    {
        name: 'Symbols',
        scope: 'constant.other.symbol, constant.other.key, markup.heading',
        settings: {
            foreground: theme.fg1,
        },
    },
    {
        name: 'Markup Heading',
        scope: 'markup.heading',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Inserted',
        scope: 'markup.inserted, markup.inserted.git_gutter',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Changed',
        scope: 'markup.changed, markup.changed.git_gutter',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Deleted',
        scope: 'markup.deleted, markup.deleted.git_gutter',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'URL',
        scope: '*url*, *link*, *uri*',
        settings: {
            foreground: theme.blue,
            fontStyle: 'underline',
        },
    },
    {
        name: 'Search Results Nums',
        scope: 'constant.numeric.line-number.find-in-files - match',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Search Results Lines',
        scope: 'entity.name.filename.find-in-files',
        settings: {
            foreground: theme.green,
        },
    },
    {
        scope: 'token.info-token',
        settings: {
            foreground: theme.blueDiag,
        },
    },
    {
        scope: 'token.warn-token',
        settings: {
            foreground: theme.yellowDiag,
        },
    },
    {
        scope: 'token.error-token',
        settings: {
            foreground: theme.redDiag,
        },
    },
    {
        scope: 'token.debug-token',
        settings: {
            foreground: theme.magenta,
        },
    },
];
