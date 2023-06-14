import type { CollectionConfig } from '../../../../src/collections/config/types';

export const mediaAltSlug = 'mediaAlt';

export const MediaAltCollection: CollectionConfig = {
  slug: mediaAltSlug,
  upload: true,
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [],
};
