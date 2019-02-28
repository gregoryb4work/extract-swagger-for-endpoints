#!/usr/bin/env node
'use strict';

/* eslint-disable no-console */
/* crée un fichier destination du meme nom que le fichier source mais dans un répertoire donné en entrée*/
const yaml = require('js-yaml');
const fs = require('fs-extra');
const program = require('commander');
const swaggerToHTML = require('bootprint').load(require('bootprint-openapi'));
const download = require('download-git-repo');
const { extractSwagger, listEndpoints } = require('../');

program
    .version('0.1.0')
    .usage('[options] <endpoint> [<endpoint> ...]')
    .option('-s, --src <sourcefile>', 'Source swagger/openapi spec')
    .option('-d, --dest <destDirectory>', 'Generated swagger/openapi spec')
    .option('-l, --list-paths')
    .option('-h, --html')
    .parse(process.argv);

const sourceFile = program.src;
const destDirectory =  program.dest;
const destRelativeFile = sourceFile.substring(sourceFile.lastIndexOf("\\"),sourceFile.length);
const destFile =destDirectory+'\\'+destRelativeFile;
const tmpDirectory = "tmp";
console.log(`File destination would be : ${destFile}`);
//add control to not overwrite sourcefile
const gitlab= "direct:http://gitlab.edelia.net/architecture/architecture.git";

download('direct:http://gitlab.edelia.net/architecture/architecture.git', tmpDirectory, { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success')
});

/*download(gitlab, 'tmp', function (err) {
    console.log(err ? `Error de récucpération du repo git ${err}`  : 'Success clone architectcture repo')
})*/
