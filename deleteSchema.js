require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })

const logResponse = (data) => {
    console.log('Response from API', JSON.stringify(data, null, 1))
}

const deleteSchema = async () => {
    let response = await hubspotClient.crm.schemas.coreApi.archive( process.env.COLUMN_OBJECT_TYPE_ID );
    logResponse(response)
}

deleteSchema();
