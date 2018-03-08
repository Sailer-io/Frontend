<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form v-on:submit.prevent="login()">
        <div class="alert alert-danger" v-if="badCred"><i class="fa fa-times"></i> Bad credentials!</div>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="E-mail" v-model="email" required>
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="password" required>
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
          Facebook</a>
        <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
          Google+</a>
      </div>
      <!-- /.social-auth-links -->

      <a href="#">I forgot my password</a><br>
      <a href="register.html" class="text-center">Register a new membership</a>

    </div>
    <!-- /.login-box-body -->
  </div>
  <!-- /.login-box -->
</template>

<script>
export default {
  name: `login`,
  data () {
    return {
      email: ``,
      password: ``,
      badCred: false
    }
  },
  methods: {
    login () {
      this.badCred = false
      this.$auth.login({data: {email: this.email, password: this.password}}).then(() => {
        this.$router.push(`home`)
      }).catch(() => {
        this.badCred = true
      })
    }
  }
}
</script>

<style scoped>

</style>
