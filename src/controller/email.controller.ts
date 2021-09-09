import { Request, Response } from 'express'
import { sendEmail } from '../service/email.service'

export async function sendEmailHandler(req: Request, res: Response) {
    try {
        let toCheckEmail = await sendEmail(req.body)
        res.status(200).send({ emailLink: toCheckEmail, Message: "Successfully send Email" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}