require('dotenv').config({ path: '.env' })

const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })

const logResponse = (data) => {
    console.log('Response from API', JSON.stringify(data, null, 1))
}

const createSchema = async () => {
    const schema = {
        name: 'ClassesExample',
        labels: {
          singular: 'ClassesExample',
          plural: 'ClassesExample',
        },
        searchableProperties: ["class_id"],
        primaryDisplayProperty: "class_id",
        properties: [
            {
                label: 'Created On',
                name: 'created_on',
                type: 'date',
                fieldType: 'date'
            },
            {
                label: 'Class Id',
                name: 'class_id',
                type: 'number',
                fieldType: 'number',
                isPrimaryDisplayLabel: true,
                hasUniqueValue: true
            },
            {
                label: 'Class Name',
                name: 'class_name',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Schedule Date',
                name: 'schedule_date',
                type: 'date',
                fieldType: 'date'
            },
            {
                label: 'Schedule Time',
                name: 'schedule_time',
                type: 'date',
                fieldType: 'date'
            },
            {
                label: 'Class URL',
                name: 'class_url',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Status',
                name: 'status',
                type: 'enumeration',
                fieldType: 'checkbox',
                options:[
                    {
                        label: "COMPLETED",
                        value: "COMPLETED"
                    }
                ]
            },
            {
                label: 'Instructor Id',
                name: 'instructor_id',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Instructor Name',
                name: 'instructor_name',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Capacity',
                name: 'capacity',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Paid',
                name: 'paid',
                type: 'enumeration',
                fieldType: 'booleancheckbox',
                options: [
                    {
                        label: "YES",
                        value: "YES"
                    },
                    {
                        label: "NO",
                        value: "NO"
                    }
                ]
            },
            {
                label: 'Cost Per Seat',
                name: 'cost_per_seat',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Sold',
                name: 'seats_sold',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Cancelled',
                name: 'seats_cancelled',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Tech Feedback',
                name: 'tech_feedback',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Class Feedback',
                name: 'class_feedback',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Class Type',
                name: 'class_type',
                type: 'enumeration',
                fieldType: 'checkbox',
                options: [
                    {
                        label: "IN_PERSON",
                        value: "IN_PERSON"
                    }
                ]
            },
            {
                label: 'Users Kicked Out',
                name: 'users_kicked_out',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Instructor Attended',
                name: 'instructor_attended',
                type: 'enumeration',
                fieldType: 'booleancheckbox',
                options: [
                    {
                        label: "YES",
                        value: "YES"
                    },
                    {
                        label: "NO",
                        value: "NO"
                    }
                ]
            },
            {
                label: 'Total Attendance',
                name: 'total_attendance',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Total Interactive Attendance',
                name: 'total_interactive_attendance',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Total View Only Attendance',
                name: 'total_view_only_attendance',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Order of Hosted Class',
                name: 'order_of_hosted_class',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Class Photo URL',
                name: 'class_photo_url',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Is Music Station Accessible',
                name: 'is_music_station_accessible',
                type: 'enumeration',
                fieldType: 'booleancheckbox',
                options: [
                    {
                        label: "YES",
                        value: "YES"
                    },
                    {
                        label: "NO",
                        value: "NO"
                    }
                ]
            },
            {
                label: 'Music Stations',
                name: 'music_stations',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Seats Booked Using Weekly',
                name: 'seats_booked_using_weekly',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Booked Using Monthly',
                name: 'seats_booked_using_monthly',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Attended With Weekly',
                name: 'seats_attended_with_weekly',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Attended With Monthly',
                name: 'seats_attended_with_monthly',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Categories',
                name: 'categories',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Is Featured',
                name: 'is_featured',
                type: 'enumeration',
                fieldType: 'booleancheckbox',
                options: [
                    {
                        label: "Yes",
                        value: "Yes"
                    },
                    {
                        label: "No",
                        value: "No"
                    }
                ]
            },
            {
                label: 'Owner Id',
                name: 'owner_id',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Owner Name',
                name: 'owner_name',
                type: 'string',
                fieldType: 'text'
            },
            {
                label: 'Seats Booked Using Moxie Pass',
                name: 'seats_booked_using_moxie_pass',
                type: 'number',
                fieldType: 'number'
            },
            {
                label: 'Seats Attended Using Moxie Pass',
                name: 'seats_attended_using_moxie_pass',
                type: 'number',
                fieldType: 'number'
            }
        ],
        associatedObjects: ['CONTACT']
      };

    let response = await hubspotClient.crm.schemas.coreApi.create(schema);
    logResponse(response)
    console.log('columnObjectTypeId = ' + response.body.objectTypeId)
}

createSchema();
