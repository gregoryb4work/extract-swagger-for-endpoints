Extract swagger/openapi spec with only required endpoint(s).

```
npm i -g extract-swagger-for-endpoints

npm install -g bootprint

npm install -g bootprint-openapi

npm install fs-extra

npm install download-git-repo

extract-swagger-for-endpoints --dest target  "/elec-activation-tasks delete put" "/sites/{site-id}/elec-tariff-callback-requests put"

-h generate html
--src directory of repo git archi with subdirectory systems
-g downaload gt archi (necessary to be already authentificated) and write in tmp directory
if --g is not precised, you need to have repo git archi downloded in tmp directory


```

TODO:

1.  Fetch source yml from a url
1.  Add swagger schema verification step
1.  Remove unnecessay tags
