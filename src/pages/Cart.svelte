<script>
  import {
    total,
    summ,
    cart,
    deleteFromCart,
    incrementQuantity,
    decrementQuantity,
  } from "../store";
  let totalValue,
    summValue,
    cartValue,
    modal = false,
    idToDelete = 0;

  total.subscribe((value) => (totalValue = value));
  summ.subscribe((value) => (summValue = value));
  cart.subscribe((value) => (cartValue = value));

  const openModal = (id) => {
    modal = true;
    idToDelete = id;
  };
  const closeModal = () => {
    modal = false;
    idToDelete = 0;
  };
  const closeModalAndDelete = () => {
    deleteFromCart(idToDelete);
    modal = false;
    idToDelete = 0;
  };
</script>

<div>
  <div class="text-4xl font-bold">Cart</div>
  <div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each cartValue as item}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={`/assets/products/${item.image}`}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{item.name}</div>
                    <div class="text-sm opacity-50">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </td>
              <td class="w-20">
                <div>
                  <button
                    class="btn btn-sm btn-secondary-content"
                    disabled={item.quantity === 1}
                    on:click={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span class="px-1">{item.quantity}</span>
                  <button
                    class="btn btn-sm btn-secondary-content"
                    disabled={item.stock <= item.quantity}
                    on:click={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="w-20">
                &times;
                {item.price.toFixed(2)}
                =
                {(item.quantity * item.price).toFixed(2)}
              </td>
              <th class="w-10">
                <button
                  class="btn btn-error btn-sm font-black"
                  on:click={() => openModal(item.id)}
                >
                  &times;
                </button>
              </th>
            </tr>
          {/each}
        </tbody>
      </table>
      <div
        class="modal "
        class:visible-dropdown={modal}
        on:click|self={closeModal}
      >
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete this item from cart?
          </h3>
          <div class="modal-action">
            <button class="btn btn-error" on:click={closeModal}>
              Cancel
            </button>
            <button class="btn btn-success" on:click={closeModalAndDelete}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
