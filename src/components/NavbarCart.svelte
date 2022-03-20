<script>
  import { total } from "../store";
  let totalValue;

  total.subscribe((value) => (totalValue = value));
</script>

<div class="dropdown dropdown-end">
  <div tabindex="0" class="btn btn-ghost btn-circle">
    <i class="fa-duotone fa-cart-shopping" />
    <span class="badge">
      {totalValue}
    </span>
  </div>
  <ul
    tabindex="0"
    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <div>Products Name</div>
      <div>$10 x 1</div>
      <div>
        <button class="btn btn-error btn-sm text-white text-xl font-bold">
          &times;
        </button>
      </div>
    </li>
  </ul>
</div>
