# Invoicer
This is a simple project to practice and demonstrate my ReactJS knowledge.

## Functionality
There are two main pages:

### Invoice list
Here you can view all the invoices that are stored in the database. You can click through to view/edit the invoice, or remove it entirely.

<img width="936" alt="image" src="https://user-images.githubusercontent.com/97198969/233473892-97a0997a-9d66-4719-a6bb-50fdfc4cdfd3.png">

### Invoice detail
Here you can edit the billing information, add/remove line items using the dynamic table, and save your changes.

<img width="761" alt="image" src="https://user-images.githubusercontent.com/97198969/233473931-29fd671b-83a4-4b97-ac86-f53cd0e2727e.png">

## Next steps
The next features I plan to work on include:
- Allowing creation of new invoices
- Allowing editing of line items on existing invoices (i.e. to change the unit price or quantity)
- Transitioning the status of an invoice (i.e. transition state from 'pending' to 'paid')

## Installation
If you'd like to install this app for yourself and run it locally, please follow these instructions:

1. Clone the repo `git@github.com:naomiuziel/invoicer.git`
2. Install NPM dependencies `npm i`
3. Start the JSON server on port 8000 `npx json-server --watch db/data.json --port 8000`
4. Run `npm start`
