<script>
  import { Link } from "svelte-navigator";
  import { addToCart, cart } from "../store";

  export let product;
  let inCart = false;

  cart.subscribe((value) => {
    inCart = value.findIndex((item) => item.id === product.id) !== -1;
  });
</script>

<div class="card bg-base-100 shadow-md">
  <figure>
    <Link to={`/product/${product.slug}`}>
      <img
        src={`/assets/products/${product.image}`}
        alt={product.name}
        class="max-h-60 md:max-h-40"
      />
    </Link>
  </figure>
  <div class="card-body p-5">
    <Link to={`/product/${product.slug}`}>
      <h2 class="card-title">{product.name}</h2>
    </Link>
    <p>{product.description}</p>
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
