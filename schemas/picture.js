export default {
  name: 'picture',
  title: 'Pictures',
  type: 'document',
  fields: [
    {
      name: 'short_desc',
      title: 'Short Description',
      type: 'string'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'blockContent'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ]
}
