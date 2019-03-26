'use strict';

const extractEndpoints = require('../lib/extract-endpoints');

function listEndpoints(sourceDoc) {
  return Object.keys(sourceDoc.paths);
}

function extractSwagger(sourceDoc, endpoints, allFound) {
  const destDoc = sourceDoc;
  const { limitPaths, limitDefinitions } = extractEndpoints(
    sourceDoc,
    endpoints,
    allFound
  );
  destDoc.paths = limitPaths;
  destDoc.definitions = limitDefinitions;
  return destDoc;
}

module.exports = { extractSwagger, listEndpoints };
