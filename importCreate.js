require('dotenv').config({ path: '.env' })
const importFile = require('./import')

importFile.importFile('createimposrt.csv', process.env.COLUMN_OBJECT_TYPE_ID );
