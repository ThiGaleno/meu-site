<template>
  <div class="container habilidades">
    <h1>Habilidades</h1>

    <div class="row">
      <div class="skills col-md-4 xs-12">
        <h5>Principais</h5>
        <ul>
          <li>
            <i class="principais fa fa-check"></i>PHP
          </li>
          <li>
            <i class="principais fa fa-check"></i>PHP
          </li>
          <li>
            <i class="principais fa fa-check"></i>PHP
          </li>
          <li>
            <i class="principais fa fa-check"></i>PHP
          </li>
        </ul>
      </div>

      <div class="skills col-md-4 xs-12">
        <h5>Secundárias</h5>
        <ul>
          <li>
            <i class="secundarias fa fa-check"></i>PHP
          </li>
          <li>
            <i class="secundarias fa fa-check"></i>PHP
          </li>
          <li>
            <i class="secundarias fa fa-check"></i>PHP
          </li>
          <li>
            <i class="secundarias fa fa-check"></i>PHP
          </li>
        </ul>
      </div>
      <div class="skills col-md-4 xs-12">
        <h5>Aprendendo</h5>
        <ul>
          <li>
            <i class="aprendendo fa fa-check"></i>PHP
          </li>
          <li>
            <i class="aprendendo fa fa-check"></i>PHP
          </li>
          <li>
            <i class="aprendendo fa fa-check"></i>PHP
          </li>
          <li>
            <i class="aprendendo fa fa-check"></i>PHP
          </li>
        </ul>
      </div>
    </div>
    <div class="row logo-skills">
      <div class="col">
        <span>
          <img src="../assets/logo-php.png" />
        </span>
        <span>
          <img src="../assets/logo-js.png" />
        </span>
        <span>
          <img src="../assets/logo-laravel.png" />
        </span>
        <span>
          <img src="../assets/logo-mysql.png" />
        </span>

        <span>
          <img src="../assets/logo-html.png" />
        </span>
        <span>
          <img src="../assets/logo-bootstrap.png" />
        </span>
        <span>
          <img src="../assets/logo-css.png" />
        </span>
        <span>
          <img src="../assets/logo-github.png" />
        </span>
        <span>
          <img src="../assets/logo-photoshop.png" />
        </span>
        <span>
          <img src="../assets/logo-vuejs.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
ul {
  list-style-type: none;
}

.fa-check {
  padding: 0 5% 0 0;
}
.principais {
  color: green;
}
.secundarias {
  color: orange;
}
.aprendendo {
  color: red;
}
.habilidades img {
  height: 200px;
  width: 200px;
  padding: 15px;
}
.logo-skills {
  text-align: center;
}
.habilidades li {
  text-align: center;
}
.habilidades h5 {
  text-align: center;
  padding-left: 50px;
}
</style>