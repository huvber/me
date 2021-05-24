<script context="module">
  export const load = async ({ page, fetch, session, context }) => {
    const url = `/articles/json`;
    const res = await fetch(url);

    if (res.ok) {
      const articles = await res.json();
      return {
        props: {
          articles
        }
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  };

</script>

<script lang="typescript">
  import type { Article } from '$lib/types';
  import { Dates } from '$lib/utils';
  export let articles: Article[];

</script>

<h1>Articles</h1>
<ul>
  {#each articles as article}
    <li>
      <!-- <a href={`/articles/${article.id}`}>-->{article.title}<!--</a>-->
      ({Dates.print(article.createdTime)})
    </li>
  {/each}
</ul>
