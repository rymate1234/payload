// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { buildConfig } from '../buildConfig';
import { PostsCollection, postsSlug } from './collections/Posts';
import { MenuGlobal } from './globals/Menu';
import { devUser } from '../credentials';
import { MediaCollection } from './collections/Media';
import { MediaAltCollection } from './collections/MediaAlt';

export default buildConfig({
  // ...extend config here
  collections: [
    PostsCollection,
    MediaCollection,
    MediaAltCollection,
    // ...add more collections here
  ],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    });

    await payload.create({
      collection: postsSlug,
      data: {
        text: faker.lorem.sentences({ min: 1, max: 5 }),
      },
    });
  },
});
