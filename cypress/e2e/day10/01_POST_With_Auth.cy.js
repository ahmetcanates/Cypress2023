/// <reference types="cypress" />

describe('POST With Auth',() => {

    it('TEST', () => {

        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'POST',
            auth: {
                "username" : "admin",
                "password" : "password123"
            },
            body: {
                "firstname" : "Ahmet",
                "lastname" : "Ates",
                "totalprice" : 366,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2023-06-17",
                    "checkout" : "2023-06-30"
                },
                "additionalneeds" : "Breakfast"
            },
                "token": 'abc123'
        }).then((response) => {
            console.log(response)

            expect(response.status).eq(200)
            expect(response.body.booking.firstname).eq('Ahmet')
            expect(response.body.booking.lastname).eq('Ates')
            expect(response.body.booking.totalprice).eq(366)
            expect(response.body.booking.depositpaid).eq(true)
            expect(response.body.booking.bookingdates.checkin).eq('2023-06-17')
            expect(response.body.booking.bookingdates.checkout).eq("2023-06-30")
            expect(response.body.booking.additionalneeds).eq('Breakfast')
        })

    })

 


})