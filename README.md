Extract swagger/openapi spec with only required endpoint(s).

```
download node js

npm i -g extract-swagger-from-swaggers-to-html

npm install commander

npm install js-yaml

npm install -g bootprint

npm install -g bootprint-openapi

npm install fs-extra

npm install download-git-repo

download "repo archi" in "tmp" directory

extract-swagger-from-swaggers-to-html --dest target  "/elec-activation-tasks delete put" "/sites/{site-id}/elec-tariff-callback-requests put"  "/sites/{site-id}/news-stream get"

for information
* -h generate html
* --src directory of repo git archi with subdirectory systems
* -g downaload gt archi (necessary to be already authentificated) and write in tmp directory
* if --g is not precised, you need to have repo git archi downloded in tmp directory


```

TODO:

1.  Fetch source yml from a url
1.  Add swagger schema verification step
1.  Remove unnecessay tags
