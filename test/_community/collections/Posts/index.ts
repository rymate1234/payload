import type { CollectionConfig } from '../../../../src/collections/config/types';
import { mediaSlug } from '../Media';
import { mediaAltSlug } from '../MediaAlt';

export const postsSlug = 'posts';

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'text',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      index: true,
    },
  ],
};
