<template>
  <section>
    <div class="container">
      <div class="row" id="banner">
        <div class="col-md-4 texto-escuro" id="perfil">
          <img alt="Vue logo" v-bind:src="info.avatar_url" />
          <br />27 anos
          <br />
          {{info.location}} - DF
          <br />

          <a class="texto-escuro" href="tel:61993907706">
            <i class="fa fa-phone fa-lg" id="phone"></i>61 99390-7706
          </a>
        </div>

        <div class="col-md-8">
          <div>
            <div>
              <h1 class="texto-claro">{{ info.name }}</h1>
            </div>
            <h5 class="texto-escuro">Desenvolvedor PHP</h5>
          </div>
          <div>
            <p
              class="texto-claro descricao"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos? Et at quasi quisquam. Quibusdam doloribus incidunt adipisci itaque libero, necessitatibus culpa quaerat iure delectus odio repellendus ipsa velit vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam possimus cum qui fuga iste consectetur laudantium non? Optio officiis culpa, excepturi fuga pariatur consequuntur delectus sunt voluptatum voluptate libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi qui obcaecati, aperiam assumenda officiis, illo eligendi nesciunt beatae natus minima iste, excepturi suscipit totam harum quis id vero aliquam facilis.</p>
            <div class="social row">
              <div class="col-3 col-lg-1">
                <a href="https://www.linkedin.com/in/thiagogaleno/" target="blank">
                  <i class="fa fa-linkedin-square fa-2x"></i>
                </a>
              </div>
              <div class="col-3 col-lg-1" title="Quantidade de repositórios públicos">
                <a v-bind:href="info.html_url" target="blank">
                  <i class="fa fa-github fa-2x"></i>
                </a>
                <span class="badge badge-light">{{info.public_repos}}</span>
              </div>
              <div class="col-3 col-lg-1">
                <a href="mailto:thiagogaleno1301@hotmail.com">
                  <i class="fa fa-envelope-square fa-2x"></i>
                </a>
              </div>
              <div class="col-3 col-lg-1">
                <a href="https://api.whatsapp.com/send?phone=5561993907706" target="blank">
                  <i class="fa fa-whatsapp fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: []
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/thigaleno")
      .then(response => {
        window.console.log(response.data);
        this.info = response.data;
      })
      .catch(err => {
        return err;
      });
  }
};
</script>

<style>
section {
  background-color: #35495e;
  padding: 50px 0 50px 0;
}
#perfil {
  display: block;
  margin: auto;
  text-align: center;
}

.texto-escuro {
  color: #ffffff75;
}
.texto-claro {
  color: #ffffffee;
}
.social a {
  color: #ffffff75;
}
.social a:hover {
  color: #ffffffaa;
}
#perfil a:hover {
  color: #ffffffaa;
}
#phone {
  padding: 10px;
}
.social {
  justify-content: center;
  text-align: center;
  padding-top: 4%;
}
#perfil img {
  border-radius: 100%;
  height: 220px;
  padding: 15px;
}
</style>
