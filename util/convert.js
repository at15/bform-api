/**
 * Created by at15 on 2016/4/20.
 *
 * Read the swagger yaml file and convert to json. Let PHP and Angular handle the json file by themselves.
 */

var yaml = require('js-yaml');
var fs = require('fs');

// TODO: should run swagger verify first
console.log('start transform swagger yaml to json');
try {
    var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/../api/swagger/swagger.yaml', 'utf8'));
    fs.writeFileSync(__dirname + '/swagger.json', JSON.stringify(doc,null,'  '));
    console.log('finish transform');
} catch (e) {
    console.log(e);
}