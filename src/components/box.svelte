<style type="text/scss">
  section {
    border-radius: var(--border-size);
    box-shadow: var(--white-border);
    padding: 1rem;
    width: 100%;
  }
</style>

<section class="box" {...$$restProps}>
  <slot name="header" />
  <slot />
  <slot name="footer" />
</section>
