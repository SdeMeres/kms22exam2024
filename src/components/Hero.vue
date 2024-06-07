<script setup lang="ts">
import { ref } from "vue";

defineEmits(["scrollToTarget"]);

const navExpanded = ref(false);

const expandNav = () => {
  navExpanded.value = !navExpanded.value;
};
</script>

<template>
  <section class="hero">
    <nav class="hero__nav">
      <div class="hero__nav__content">
        <img
          id="logo"
          src="/src/assets/shooting_lords_icon.svg"
          alt="Logo icon"
        />
        <ul>
          <li><a @click="$emit('scrollToTarget')" href="#">Team</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button @click="expandNav" class="hero__nav__content__button">
          <img
            id="admin"
            src="/src/assets/admin_icon.svg"
            alt="Circled person"
          />
        </button>
      </div>
      <aside v-if="navExpanded" id="nav-expand-container">
        <ul>
          <li><a href="#">Team</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Admin</a></li>
        </ul>
      </aside>
    </nav>

    <figure class="hero__content">
      <section class="hero__content__text">
        <h1>Shooting Lords</h1>
        <p>
          Join us in the e-sports arena.<br />Explore our victories, meet our
          elite team, and become part of our community.<br />Embrace the journey
          and shape the future of competitive gaming with us.
        </p>
        <button>Our Wares</button>
      </section>
    </figure>
  </section>
</template>

<style scoped>
a {
  color: rgb(var(--lords-silver));
  text-decoration: none;
}

#admin {
  width: 48px;
  height: 48px;
  margin: -0.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 948px;
  position: relative;
  color: rgb(var(--white));
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Space Grotesk", sans-serif;
}

h1 {
  font-family: "Cinzel Decorative";
  margin: 0;
}

.hero__content {
  margin: 0;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  background-image: url(/src/assets/Win.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(1, 8, 13, 0.4);
}

.hero__content__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__nav {
  background-color: rgb(var(--lords-green));
}

.hero__nav__content {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 88.75rem;
}

.hero__nav__content__button {
  border: 3px solid transparent;
  padding: 0rem;
  background-color: transparent;

  &:hover {
    border-color: rgb(var(--accent));
  }
}

li {
  margin: 0 2rem;
}

#logo {
  width: 48px;
  height: 40px;
  margin: 0.5rem;
}

ul {
  display: flex;
  font-size: 0.75rem;
  font-weight: 700;
  list-style-type: none;
}

#nav-expand-container ul {
  display: none;
}
@media (max-width: 900px) {
  a {
    color: rgb(var(--lords-purple));
  }

  #admin {
    content: url(/src/assets/burgermenu.svg);
  }

  p {
    font-size: 0.75rem;
  }

  h1 {
    font-size: 3rem;
  }

  .hero {
    min-height: 595px;
  }

  .hero__content__text {
    padding: 0 3.5rem;
  }

  .hero__nav__content {
    margin: 0 2rem;
    justify-content: space-between;
  }

  .hero__nav__content__button {
    border: 0;
    margin: 0;
    border-radius: 0px;
  }

  li {
    margin: 1rem 0;
    font-size: 1rem;
  }

  #nav-expand-container {
    position: absolute;
    width: 100%;
    background-color: rgb(var(--lords-beige));
  }

  #nav-expand-container ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__nav__content ul {
    display: none;
  }
}
</style>
