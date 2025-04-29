import { init, i, id, InstaQLEntity } from '@instantdb/core';
// ID for app: instantdb
const APP_ID = '5b50c930-746e-4bd9-bdb0-05883a47619d';

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id: i.string(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});

const db = init({ appId: APP_ID, schema });

export { db, schema };
