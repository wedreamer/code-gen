# generate GraphQL sdk

## start

```bash
# Using graphqurl https://hasura.io/docs/latest/graphql/core/guides/export-graphql-schema.html#using-graphqurl
npm install -g graphqurl
gq https://ininderprint-backend-nestjs.cloud-dev.ininderprint.tw/vendor-api/graphql --introspect > schema.graphql

get-graphql-schema https://ininderprint-backend-nestjs.cloud-dev.ininderprint.tw/vendor-api/graphql > schema.graphql
```