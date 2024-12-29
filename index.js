const {Facet} = require('@codemirror/state');
const {Language, LanguageSupport, defineLanguageFacet} = require('@codemirror/language');

function Parser() {
    console.log('Creating parser!');
}
Parser.prototype.createParse = function() {
    console.log('createParse()');
};
Parser.prototype.startParse = function() {
    console.log('startParse()');
};
Parser.prototype.parse = function() {
    console.log('parse()');
};

const data = 'my language data';
const myFacet = defineLanguageFacet(data);
const XP = new Language(myFacet, new Parser(), [], 'langname');
console.log('MyFacet:', myFacet);

function XPath(conf) {
    return new LanguageSupport(XP, []);
};

module.exports = {
    XPath: XPath
};