<script>
  import { Link } from "svelte-navigator";
  import { total, summ, cart, deleteFromCart } from "../store";
  let totalValue, summValue, cartValue;

  total.subscribe((value) => (totalValue = value));
  summ.subscribe((value) => (summValue = value));
  cart.subscribe((value) => (cartValue = value));
</script>

<div class="dropdown dropdown-end">
  <button class="btn btn-ghost btn-circle relative">
    <i class="fa-duotone fa-cart-shopping text-xl" />
    <span
      class="badge badge-error absolute -top-[2px] -right-[2px] p-0 w-5 h-5 flex items-center justify-center font-black text-xs"
    >
      {totalValue}
    </span>
  </button>
  {#if totalValue > 0}
    <ul
      class="menu menu-compact dropdown-content mt-3 py-2 px-4 shadow bg-primary-focus rounded-box"
    >
      {#each cartValue as item}
        <li class="flex flex-row flex-nowrap items-center mb-1">
          <div class=" whitespace-nowrap px-2 rounded-md grow">
            {item.name}
          </div>
          <div class=" whitespace-nowrap px-2 rounded-md">
            ${item.price.toFixed(2)}
            &times;
            {item.quantity}
          </div>
          <button
            class="btn btn-error btn-sm text-white text-xl font-bold p-2 leading-3 rounded-full"
            on:click={() => deleteFromCart(item.id)}
          >
            &times;
          </button>
        </li>
      {/each}
      <div class="divider">summary</div>
      <div class="pb-4 flex flex-col gap-2">
        <div>
          Added products:
          <span class="font-black text-secondary">
            {totalValue}
          </span>
          <br />
          Total price:
          <span class="font-black text-secondary">${summValue}</span>
        </div>
        <Link to="/cart" class="btn btn-error btn-sm">Checkout</Link>
      </div>
    </ul>
  {/if}
</div>
