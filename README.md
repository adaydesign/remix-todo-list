# Remix Todo App

## Setup Guide

1. install node modules

```
npm install
```

2. rename .env.example file to .env file
3. edit data url in .env file

```
mysql://username:password@localhost:3306/users_app
```

* make sure username and password of this account can Access and Excute Database
* don't need create a database (program automatically create database name, users_app)

4. migrate database
```
npx prisma migrate dev --name init
```

5. generate prima client
```
npx prisma generate
```

6. run test
```
npm run dev
```