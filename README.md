# bform-api
Swagger API for bform

# Usage

- `npm install`
- due to https://github.com/at15/bform-api/issues/1, change must be made to installed modules
> edit `node_modules/swagger/config/index.js` change `editorDir: path.resolve(config.nodeModules, 'swagger-editor'),` to `editorDir: path.dirname(require.resolve('swagger-editor'))`
- `npm run edit`