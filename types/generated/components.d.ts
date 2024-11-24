import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
    icon: 'cursor';
  };
  attributes: {
    blog_content: Schema.Attribute.Text;
    blog_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    blog_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog': BlogBlog;
    }
  }
}
