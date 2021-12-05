import { GraphQLClient } from 'graphql-request'
import { getSdk } from './graphql' // THIS FILE IS THE GENERATED FILE

async function main() {
    const client = new GraphQLClient('https://ininderprint-backend-nestjs.cloud-dev.ininderprint.tw/vendor-api/graphql')
    const sdk = getSdk(client)
    await sdk.

}