<script>
  import '../app.scss';
  import Box from '../components/box.svelte';
  import general from '../data/general';
  import Field from '../components/field.svelte';
</script>

<style lang="scss">
  .heading {
    display: var(--heading-display);
    grid-template-columns: 8rem 1fr;

    figure {
      width: 100%;
      text-align: center;
      img {
        width: var(--avatar-size);
      }
    }
    --heading-display: block;
    --avatar-size: 40%;
    @media (min-width: 40rem) {
      --heading-display: grid;
      --avatar-size: 100%;
    }
  }
  .page-content {
    padding: 1rem;
  }
</style>

<Box>
  <main class="heading">
    <figure>
      <img
        alt="avatar"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Sunglasses&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
    </figure>
    <div class="content">
      <h1>{general.name} {general.surname}</h1>
      {#each general.contacts as contact}
        <Field name={contact.name}>
          <a href={contact.link} target="_blank">{contact.value}</a>
        </Field>
      {/each}
    </div>
  </main>
</Box>
<section class="page-content">
  <slot />
</section>
