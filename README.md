# Devoxx superset demo

## Start superset and database

Start superset
```
cd docker
docker-compose up
```

## Start the webapp

```
npm install
vercel dev --debug
```
## Populate the database

```
npx tsx server/utils/build.ts
 psql -h localhost -p 15432 -Upostgres -f server/utils/queries.sql # password: postgres
```

## Access the tools
webapp: http://localhost:3000
superset: http://localhost:8088
