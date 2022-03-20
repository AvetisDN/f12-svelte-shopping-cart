<script>
  import { Link } from "svelte-navigator";
</script>

<div class="dropdown">
  <div tabindex="0" class="btn btn-ghost btn-circle">
    <i class="fa-duotone fa-bars-sort" />
  </div>
  <ul
    tabindex="0"
    class="menu menu-compact bg-primary-focus text-base-100 dropdown-content mt-3 p-2 shadow rounded-box w-52"
  >
    <li>
      <Link to="/">Homepage</Link>
    </li>
    <li>
      <Link to="/product/some-slug">Product Page</Link>
    </li>
    <li>
      <Link to="/cart">Cart Page</Link>
    </li>
  </ul>
</div>
