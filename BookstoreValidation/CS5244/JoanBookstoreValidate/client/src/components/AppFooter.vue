<template>
  <footer>
    <div class="level-1">
      <div class="footer-links-wrapper">
        <router-link to="/" class="footer-link">About</router-link>
        <router-link to="/" class="footer-link">Contact</router-link>
        <router-link to="/" class="footer-link">Locations</router-link>
      </div>
      <div class="footer-social">
        <p>Follow us:</p>
        <router-link to="/" class="footer-link">
          <i class="fab fa-facebook-square"></i>
        </router-link>
        <router-link to="/" class="footer-link"
          ><i class="fab fa-twitter"></i
        ></router-link>
        <router-link to="/" class="footer-link"
          ><i class="fab fa-instagram"></i
        ></router-link>
      </div>
    </div>
    <div class="level-2">
      <p>&copy; A-Z Bookshelf 2021</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  background-color: var(--primary-color-dark);
  padding: 1em 2.8em;
  font-family: var(--secondary-font-family);
  color: var(--secondary-background-color);
}

footer .level-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.9em 0 0.4em;
  font-size: 0.9rem;
}

footer .level-1 .footer-link {
  font-weight: bold;
  color: var(--secondary-background-color);
  padding: 0.3em 0;
}

footer .level-1 .footer-link:not(:first-child) {
  margin-left: 3em;
}

.footer .level-1 .footer-links-wrapper {
  padding: 0.2em;
}

footer .level-1 .footer-social {
  font-size: 1.5rem;
  padding: 0.2em;
}

footer .level-1 .footer-social p {
  font-size: 0.6em;
  vertical-align: middle;
  display: inline-block;
}

footer .level-1 .footer-social .footer-link:not(:first-child) {
  margin-left: 0.6em;
}

footer .level-2 {
  font-size: 0.7em;
  font-weight: bold;
  letter-spacing: 0.08em;
  padding: 0.1em 0 0.1em;
  text-align: center;
}

@media (max-width: 880px) {
  footer .level-1 {
    flex-direction: column;
  }

  footer .level-1 .footer-links-wrapper {
    padding: 0.5em;
  }

  footer .level-1 .footer-social {
    padding: 0.5em;
  }
}
</style>
