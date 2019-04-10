<template>
  <BlogLayout>
    <div class="body-top-margin">
      <ul>
        <li v-for="post in $page.posts.edges" :key="post.id">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </li>
      </ul>
    </div>
  </BlogLayout>
</template>

<page-query>
  query Posts {
    posts: allPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query/>

<script>
export default {
  metaInfo: {
    title: 'Wilder than the Wind - Blog'
  }
}
</script>

<style>

.body-top-margin {
  margin-top: 100px;
}

</style>