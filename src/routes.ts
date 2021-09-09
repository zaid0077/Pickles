import { Express } from "express"
import { sendEmailHandler } from './controller/email.controller'
import validateRequests  from './middleware/validateRequests'
import { emailSchema } from './schema/email.schema'


export default function createServer (app: Express) {
    app.post('/sendEmail', validateRequests(emailSchema), sendEmailHandler)
}