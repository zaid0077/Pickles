import * as chai from 'chai';
import chaiHttp = require('chai-http');
import request from 'supertest'
import 'mocha';
import app from '../app'

chai.use(chaiHttp);
const expect = chai.expect;

describe('Email', () => {
    describe('/sendEmail', () => {
        it('should send email', (done) => {
            request(app).post('/sendEmail')
            .set('content-type', 'application/json')
            .send({ email: "test@test.com",
            "subject": "This is a subject",
            "body": "This is a body"}).expect(200, done)
        })
    })
})
