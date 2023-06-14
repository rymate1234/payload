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

    for (let i = 0; i < 60000; i += 1) {
      if (!process.env.CREATE_TEST_DATA && i !== 0) break;
      // eslint-disable-next-line no-await-in-loop
      await payload.create({
        collection: postsSlug,
        data: {
          text: `${faker.lorem.paragraphs({ min: 1, max: 5 })}`,
        },
      });
    }
  },
});
