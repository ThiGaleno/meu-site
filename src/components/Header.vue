<template>
  <div id="header">
    <nav id="myNav" class="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
      <router-link to="/">
        <span class="navbar-brand">Thiago Galeno</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuNav">
        <ul class="navbar-nav ml-auto">
          <router-link to="/experiencia">
            <li class="nav-item">
              <span class="nav-link">Experiencia</span>
            </li>
          </router-link>
          <router-link to="/habilidades">
            <li class="nav-item">
              <span class="nav-link">Habilidades</span>
            </li>
          </router-link>
          <router-link to="/cursos">
            <li class="nav-item">
              <span class="nav-link">Cursos</span>
            </li>
          </router-link>
          <router-link to="/livros">
            <li class="nav-item">
              <span class="nav-link">Livros</span>
            </li>
          </router-link>
          <router-link to="#">
            <li class="nav-item">
              <span class="nav-link">
                <del>Pessoal</del>
              </span>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style>
nav#myNav {
  background-color: #41b883;
  text-transform: uppercase;
}

#header a {
  color: rgb(220, 255, 220);
}
#header a:hover {
  color: rgba(220, 255, 220, 0.75);
}
</style>
