export default {
  home: {
    path: '/',
    title: 'Adina'
  },
  home: {
    path: '/about',
    title: 'About | Adina',
    data: [{ url: '/static-content/about', static: true }]
  },
  posts: {
    path: '/posts',
    title: 'Posts | Adina',
    data: [{ url: '/api/posts' }]
  },
  post: {
    path: '/posts/:id',
    data: [
      {
        url: ({ id }) => `/api/posts/${id}`,
        preconnect: ['https://storage.googleapis.com/bucket', 'https://bucket.s3.amazonaws.com']
      },
      { url: ({ id }) => `/api/posts/${id}/comments` }
    ]
  }
}
