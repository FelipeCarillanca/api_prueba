
## Description
ejecutar siguiente script de base de datos:
  CREATE TABLE IF NOT EXISTS public.login
  (
      u_id integer NOT NULL DEFAULT nextval('login_u_id_seq'::regclass),
      email character varying(50) COLLATE pg_catalog."default" NOT NULL,
      u_password character varying(15) COLLATE pg_catalog."default" NOT NULL,
      CONSTRAINT login_pkey PRIMARY KEY (u_id)
)

insert INTO login (u_id,email,u_password) values(1,'felipe@gmail.com','123')

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
