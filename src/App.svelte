<script>
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./components/Navbar.svelte";
  import Cart from "./pages/Cart.svelte";
  import Error404 from "./pages/Error404.svelte";
  import Home from "./pages/Home.svelte";
  import Product from "./pages/Product.svelte";
</script>

<Router>
  <div class="p-4 bg-gray-200 w-full min-h-screen">
    <main class="max-w-5xl mx-auto">
      <Navbar />
      <div class="max-w-5xl rounded-box shadow-xl bg-base-200 p-6">
        <Route path="/" component={Home} />
        <Route path="/product/:slug" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={Error404} />
      </div>
    </main>
  </div>
</Router>
