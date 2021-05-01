<script>
  export let name;
</script>

<style lang="scss">
  p {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    strong {
      color: var(--secondary-color);
    }
  }
</style>

<p>
  <strong>{name}.</strong><span><slot /></span>
</p>
