'use strict';

const definitionHelper = require('./definition-helper');

function extractEndpoints(doc, endpoints) {
    const limitPaths = {};
    const limitDefinitions = {};
    var swagger = doc.paths;
    if (typeof swagger === "undefined") {   }
    else {
        endpoints.forEach((val, index, array) => {
            var chars = val.split(" ");
            var contenu = {};
            const endpoint = chars[0];

            if (doc.paths[endpoint]) {
                chars.shift();
                chars.forEach(verbeHTTP => {
                    console.log(`extracting path ${endpoint} for method ${verbeHTTP} ...`);
                    //contenu[verbeHTTP] = contenuEndpoint[verbeHTTP];
                    contenu[verbeHTTP] = doc.paths[endpoint][verbeHTTP];
                    console.log(contenu);
                    limitPaths[endpoint] = contenu;
                    console.log(`extracting definitions for ${endpoint} ...`);
                    const requiredPaths = definitionHelper.findDefinitions(doc, endpoint, verbeHTTP);
                    requiredPaths.forEach(v => {
                        console.log(`adding definition ${v} ...`);
                        limitDefinitions[v] = doc.definitions[v];
                    });
                });
            }
        });
    }
//    limitPaths.forEach((val) => {console.log(val)});
    return { limitPaths, limitDefinitions };
}


module.exports = extractEndpoints;
