<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status
      }
    };
  }

</script>

<script>
  let error, status;

</script>

<h2>Sorry!</h2>
<p>Probably I still need to write this page or I didn't think about it</p>
<p><a href="/">Here</a> you can go back to the main page</p>
{@debug error, status}
