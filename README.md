# Fake Server

This project contains the apis fakes of my other projects.

This api is running on Heroku in https://ale-fake-server.herokuapp.com/

## Use it

To access the routes you can provide the Authorization header and the AUTH_<app> when start the server

### Start

Default Authorization for all apps:
```sh
$ AUTHORIZATION=<key> npm start
```

for an app
```sh
$ AUTH_<app>=<key> npm start
```

You can define for hus one app 

```sh
$ AUTHORIZATION=<key> AUTH_<app>=<key> npm start
```

### Apps

| url                  |      auth env      |
|----------------------|:-------------------|
| [feracode/look-after/](https://github.com/matheusAle/fake-server/tree/master/feracode) |  AUTH_FERACODE     |
| [vuttr/](https://github.com/matheusAle/fake-server/tree/master/vuttr)               |    AUT_VUTTR       |
