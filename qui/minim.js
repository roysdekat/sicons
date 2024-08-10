// Example function to add prefixes to CSS property names
function addPrefixes(prefix, rules) {
    for (let rule of rules) {
        if (rule.type === 'rule') { // Assuming we're dealing with standard CSS rules
            for (let declaration of rule.declarations) {
                if (declaration.type === 'declaration') {
                    declaration.property = prefix + declaration.property;
                }
            }
        }
    }
}

// Example Abstract Syntax Tree (AST) structure for a stylesheet
const ast = {
    stylesheet: {
        rules: [
            {
                type: 'rule',
                selectors: ['.example'],
                declarations: [
                    { type: 'declaration', property: 'border-radius', value: '10px' },
                    { type: 'declaration', property: 'box-shadow', value: '0 4px 8px rgba(0,0,0,0.2)' }
                ]
            }
        ]
    }
};

// Prefix to add
const prefix = '-webkit-';

// Calling the function to add prefixes
addPrefixes(prefix, ast.stylesheet.rules);

// Output the modified AST
console.log(JSON.stringify(ast, null, 2));
