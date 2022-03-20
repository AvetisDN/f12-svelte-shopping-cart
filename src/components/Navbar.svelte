<script>
  import { Link } from "svelte-navigator";
  import NavbarCart from "./NavbarCart.svelte";
  import NavbarMenu from "./NavbarMenu.svelte";
</script>

<div class="navbar bg-primary text-primary-content mb-6 shadow-xl rounded-box">
  <div class="navbar-start">
    <NavbarMenu />
  </div>
  <div class="navbar-center">
    <Link to="/" class="btn btn-ghost normal-case text-xl font-black gap-2">
      <i class="fa-duotone fa-kiwi-bird text-2xl" />
      KiwiShop
    </Link>
  </div>
  <div class="navbar-end">
    <NavbarCart />
  </div>
</div>
