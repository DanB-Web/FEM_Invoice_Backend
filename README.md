# Frontend Mentor - Invoice app solution

This is the backend for my solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser

## My process

### Built with

- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [DigitalOcean](https://www.digitalocean.com/)

### What I learned

This Frontend Mentor challenge was supposed to only be a frontend app populated with a local JSON file, but I wanted to build it as a full stack MERN application, and include authentication.

The server is build with Express, and includes logging via Morgan. The endpoints are REST.

The MongoDB database is behind a Mongoose ODM. The database models include Mongoose methods for password checking and Mongoose hooks for encrypting the paswords via bcrypt.js before storing them in the cloud DB.

Authentication is via JWT, and all the routes are protected via auth middleware.

There is also a script `seeder.js` that can be used for various database operations:

- Empty the database locally
- Initiate the database locally from the supplied `data.json`
- Reset the database to `data.json` from the frontend if required via a REST endpoint

I included the last script incase anyone viewing the app needed to 'reset' it to its original state.

## Author

- Website - [Dan Bayford](https://bayford.dev/)
- Frontend Mentor - [@DanB-Web](https://www.frontendmentor.io/profile/DanB-Web)
