import { object, string } from "yup";

export const emailSchema = object({
    body: object({
        emailId: string().email("Must be a valid email").required("Email is required"),
        subject: string().required("Subject is required"),
        body: string().required("Body is required")
    })
})