// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Listing } = initSchema(schema);

export {
  Listing
};