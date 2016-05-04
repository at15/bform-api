# bform-api
Swagger API for bform

# Usage

- `npm install`
- due to https://github.com/at15/bform-api/issues/1, change must be made to installed modules
> edit `node_modules/swagger/config/index.js` change `editorDir: path.resolve(config.nodeModules, 'swagger-editor'),` to `editorDir: path.dirname(require.resolve('swagger-editor'))`
- `npm run edit`
- `npm run start` and see `http://localhost:10010/docs/` for swagger UI

## Generate json

`node util/convert.js` will generate a swagger.json file in `util` folder. You can use it to generate
module and classes in other frameworks