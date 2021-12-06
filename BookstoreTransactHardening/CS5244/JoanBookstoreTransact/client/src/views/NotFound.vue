<template>
  <div>
    <h1>404</h1>
    <h3>Page Not Found!!</h3>
    <img src="@/assets/images/404_IMG.png" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
div {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 7em;
  margin: 1em 0 0.4em 0;
}

h3 {
  font-size: 1.8em;
  margin: 0.2em 0.4em 0.9em 0.4em;
}

img {
  max-width: 350px;
  margin: 0.9em 0.4em 0.9em 0.4em;
}
</style>
