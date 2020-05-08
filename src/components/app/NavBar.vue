<template>
  <nav >
    <div class="wrapper">
      <div class="nav-wrapper">
        <a href="index.html" class="brand-logo">Budget's</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <div class="headerMenu">
          <ul class="right hide-on-med-and-down">
            <li><a href="bills.html">Счета</a></li>
            <li><a href="buyList.html">Список покупок</a></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="bills.html">Счета</a></l
            <li><a href="buyList.html">Список покупок</a></li>
          </ul>
        </div>

      </div>
    </div>

  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>