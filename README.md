
# URL Shortener

An url shortener who does the same thing every other does, but this one is open source. :cool:

It uses Express.js, GraphQL, Vue, and CouchDB to work.

You can check the code for the front-end of the application here: <https://github.com/HersonHN/shortener-gui>

## Install

Using npm, just install it as any other repo.

```bash
npm i
```

## Variables

To connect to the database, set on your environment the variable `SHORTENER_CONNECTION_STRING` with the connection string for CouchDB.

```bash
export SHORTENER_CONNECTION_STRING="http://username:password@my-couchdb-host:5984/database"
```

## Pre-Setup

Set the CouchDB indexes running the script `migrations/indexes.js`

```bash
node migrations/indexes.js
```

## Running The Server

After that you can run the server script.

```bash
npm run start
```