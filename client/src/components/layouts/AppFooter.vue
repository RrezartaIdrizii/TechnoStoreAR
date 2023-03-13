<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Our Company</h5>
          <p class="grey-text text-lighten-4">Eu cupidatat enim tempor aliquip reprehenderit proident ut exercitation. Nostrud sit ipsum minim aute sint ullamco. Ad aliquip ea dolore ullamco. Eiusmod exercitation deserunt labore elit adipisicing.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <!-- Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a> -->
      </div>
    </div>
  </footer>
</template>

<script>

  import axios from "axios"
  import swal from "sweetalert2"
  import store from "../../vuex/store"

  export default {
    name: "AppFooter",

    data() {
      return {
        page: 0,
      }
    },

    computed: {

      user: function () {
        return store.getters.getUser
      },

      login: function () {
        return store.getters.getLogin
      }
    },
  }
</script>