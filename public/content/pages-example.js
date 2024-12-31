export default {
  home: {
    path: '/'
  },
  posts: {
    path: '/posts',
    data: [{ url: '/api/posts' }]
  },
  post: {
    path: '/posts/:id',
    data: [{ url: ({ id }) => `/api/posts/${id}` }, { url: ({ id }) => `/api/posts/${id}/comments` }]
  }
}
