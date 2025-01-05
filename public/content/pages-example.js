export default {
  home: {
    path: '/',
    title: 'Adina'
  },
  posts: {
    path: '/posts',
    title: 'Posts | Adina',
    data: [{ url: '/api/posts' }]
  },
  post: {
    path: '/posts/:id',
    data: [{ url: ({ id }) => `/api/posts/${id}` }, { url: ({ id }) => `/api/posts/${id}/comments` }],
    preconnect: ['https://storage.googleapis.com/bucket', 'https://bucket.s3.amazonaws.com']
  }
}
