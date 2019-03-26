'use strict';

const definitionHelper = require('./definition-helper');

function extractEndpoints(doc, endpoints,allFound) {
    const limitPaths = {};
    const limitDefinitions = {};
    var swagger = doc.paths;
    if (typeof swagger === "undefined") {   }
    else {
        endpoints.forEach((val, index, array) => {
            var chars = val.split(" ");
            var contenu = {};
            const endpoint = chars[0];
            if (limitPaths[endpoint] != undefined){
                contenu = limitPaths[endpoint];
            }
            if (doc.paths[endpoint]) {
                chars.shift();
                chars.forEach(verbeHTTP => {
                    console.log(`extracting path ${endpoint} for method ${verbeHTTP} ...`);
                    contenu[verbeHTTP] = doc.paths[endpoint][verbeHTTP];
                    //PATCH to manage program argument with multiple same endpoint but different verb in further argument
                    if (!contenu[verbeHTTP]){
                        console.error(`extracting path ${endpoint} for method ${verbeHTTP} not found`);
                    }
                    limitPaths[endpoint] = contenu;
                    allFound[verbeHTTP+" "+endpoint]+= 1;
                    console.log(`extracting definitions for ${endpoint} ...`);
                    const requiredPaths = definitionHelper.findDefinitions(doc, endpoint, verbeHTTP);
                    requiredPaths.forEach(v => {
                        console.log(`adding definition ${v} ...`);
                        limitDefinitions[v] = doc.definitions[v];
                        if (!limitDefinitions[v]){
                            console.error(`extracting definition for ${endpoint} for method ${verbeHTTP} not found`);
                        }
                    });
                });
            }
        });
    }
//    limitPaths.forEach((val) => {console.log(val)});
    //TODO ajouter la liste des endponts non trouvés
    return { limitPaths, limitDefinitions };
}


module.exports = extractEndpoints;
