require('dotenv').config({ path: '.env' })

const fs = require('fs')
const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })

const logResponse = (data) => {
    console.log('Response from API', JSON.stringify(data, null, 1))
}

async function importFile(fileName, ObjectTypeId) {
    const importFileReadStream = {
        value: fs.readFileSync(fileName, "utf8"),
        options: {
            filename: fileName,
            contentType: 'text/csv',
        },
    }
    const importRequest = {
        name: 'import(' + fileName + ')',
        files: [
          {
            fileName: fileName,
            fileFormat: 'CSV',
            dateFormat: 'MONTH_DAY_YEAR',
            fileImportPage: {
              hasHeader: true,
              columnMappings: [
                {
                    columnName: 'created_on',
                    propertyName: 'created_on',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                  columnName: 'class_id',
                  propertyName: 'class_id',
                  columnObjectTypeId: ObjectTypeId,
                  idColumnType: "HUBSPOT_ALTERNATE_ID"
                },
                {
                  columnName: 'class_name',
                  propertyName: 'class_name',
                  columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'schedule_date',
                    propertyName: 'schedule_date',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'schedule_time',
                    propertyName: 'schedule_time',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'class_url',
                    propertyName: 'class_url',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'status',
                    propertyName: 'status',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'instructor_id',
                    propertyName: 'instructor_id',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'instructor_name',
                    propertyName: 'instructor_name',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'capacity',
                    propertyName: 'capacity',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'paid',
                    propertyName: 'paid',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'cost_per_seat',
                    propertyName: 'cost_per_seat',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'seats_sold',
                    propertyName: 'seats_sold',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'seats_cancelled',
                    propertyName: 'seats_cancelled',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'tech_feedback',
                    propertyName: 'tech_feedback',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'class_feedback',
                    propertyName: 'class_feedback',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'class_type',
                    propertyName: 'class_type',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'instructor_attended',
                    propertyName: 'instructor_attended',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'total_attendance',
                    propertyName: 'total_attendance',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'total_interactive_attendance',
                    propertyName: 'total_interactive_attendance',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'total_view_only_attendance',
                    propertyName: 'total_view_only_attendance',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'order_of_hosted_class',
                    propertyName: 'order_of_hosted_class',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'class_photo_url',
                    propertyName: 'class_photo_url',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'categories',
                    propertyName: 'categories',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'is_featured',
                    propertyName: 'is_featured',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'owner_id',
                    propertyName: 'owner_id',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'owner_name',
                    propertyName: 'owner_name',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'seats_booked_using_moxie_pass',
                    propertyName: 'seats_booked_using_moxie_pass',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                    columnName: 'seats_attended_using_moxie_pass',
                    propertyName: 'seats_attended_using_moxie_pass',
                    columnObjectTypeId: ObjectTypeId
                },
                {
                  columnName: 'email',
                  propertyName: 'email',
                  columnObjectType: 'CONTACT'
                }
              ]
            }
          }
        ]
    };

    const response = await  hubspotClient.crm.imports.coreApi.create(importFileReadStream, JSON.stringify(importRequest));

    logResponse(response)
}

module.exports = { importFile };
