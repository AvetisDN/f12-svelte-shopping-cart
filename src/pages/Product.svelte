<script>
  import { getProduct } from "../services/products";
  import { addToCart, cart } from "../store";
  import { onMount } from "svelte";

  export let slug = "";

  let product = null;
  let inCart = false;

  onMount(() => {
    product = getProduct(slug);
    cart.subscribe((value) => {
      inCart = value.findIndex((item) => item.id === product.id) !== -1;
    });
  });
</script>

<div>
  {#if product}
    <div class="flex gap-4 p-4">
      <img
        src={`/assets/products/${product.image}`}
        alt={product.name}
        class="max-h-80 md:max-h-80"
      />
      <div>
        <h2 class="text-4xl font-bold text-primary">
          {product.name}
        </h2>
        <p class="py-4">
          {product.description}
        </p>
        <div class="card-actions justify-between items-center">
          <div class="flex flex-col gap-1">
            {#if product.oldPrice}
              <span class="text-error line-through font-semibold">
                USD {product.oldPrice.toFixed(2)}
              </span>
            {/if}
            <span class="text-lg font-black">
              USD {product.price.toFixed(2)}
            </span>
          </div>
          {#if product.stock}
            <button
              class="btn btn-success gap-2"
              disabled={inCart}
              on:click={() => addToCart(product)}
            >
              {#if !inCart}
                To
              {:else}
                In
              {/if}
              Cart
            </button>
          {:else}
            <span>Out of stock</span>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
