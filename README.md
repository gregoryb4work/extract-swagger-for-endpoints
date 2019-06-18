Extract swagger/openapi spec with only required endpoint(s).

```
For Windows noob user :/

First, download node js on nodejs.org and install it. (By default on windows : c:\Programmes\nodejs).

Then, launch command line (with administrator right if needed) and execut each following command : 
	cd c:\Programmes\nodejs
	npm install extract-swagger-from-swaggers-to-html
	npm install -g commander
	npm install -g js-yaml
	npm install -g bootprint
	npm install -g bootprint-openapi
	npm install -g fs-extra
	npm install -g download-git-repo
	

Then,
	#create tmp directory in c:\Programmes\nodejs\node_modules\extract-swagger-from-swaggers-to-html
	#download "repo archi" in this "tmp" directory (FYI : you need "systems" directory in "tmp" directory")
	#clean 	duplicate service (exemple : same part and pro and authorization sys)

return to your command line tool : 
	cd node_modules\extract-swagger-from-swaggers-to-html
	#you can execute extraction like below
	node bin\extract-swagger --src tmp --dest target  "/someRestApi delete put" "/someOtherRestApi/{some-id}/elec-rest put"  "/toto/{titi-id}/news-stream get"
	#Below works too and give same results!
		node bin\extract-swagger --src ../tmp --dest target  "/someRestApi delete" "/someRestApi put" "/someOtherRestApi/{some-id}/elec-rest put"  "/toto/{titi-id}/news-stream get"

		
for information
* -h generate html
* --src directory of repo git archi with subdirectory systems (default tmp)
* not functionnal since repo need cleaning before use by this tool. -g downaload archi git repository (necessary to be already authentificated) and write in tmp directory
* if --g is not precised, you need to have repo git archi downloded in tmp directory


```

TODO:

1.  Fetch source yml from a url
1.  Add swagger schema verification step
1.  Remove unnecessay tags
