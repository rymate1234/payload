import type { CollectionConfig } from '../../../../src/collections/config/types';
import { mediaSlug } from '../Media';

export const postsSlug = 'posts';

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      type: 'upload',
      relationTo: mediaSlug,
      access: {
        create: () => true,
        update: () => false,
      },
      hooks: {
        afterRead: [async ({ req }) => {
          // add 1s delay to simulate large request
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // should read GraphQL
          console.log('afterRead', req.payloadAPI);
        }],
      },
    },
  ],
};
