<script>
  import ProductCard from "../components/ProductCard.svelte";
  import { onMount } from "svelte";

  import { getProducts } from "../services/products";

  let products = [];

  onMount(() => {
    products = getProducts();
  });
</script>

<div>
  <h1 class="text-4xl font-bold">Products ({products.length})</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
    {#each products as product}
      <ProductCard {product} />
    {/each}
  </div>
</div>
