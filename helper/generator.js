import { faker } from '@faker-js/faker';

function randomUserName() {
    return faker.internet.userName();
}

function randomPassword() {
    return faker.internet.password({length: 20});
}

function randomFirstName() {
    return faker.person.firstName();
}

function randomLastName() {
    return faker.person.lastName();
}

function randomEmail() {
    return faker.internet.email();
}

module.exports = {
    randomUserName: randomUserName,
    randomPassword: randomPassword,
    randomFirstName: randomFirstName,
    randomLastName: randomLastName,
    randomEmail: randomEmail
}