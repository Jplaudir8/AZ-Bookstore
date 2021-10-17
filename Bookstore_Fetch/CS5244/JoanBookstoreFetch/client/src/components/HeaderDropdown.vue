<template>
  <ul class="categories-list">
    <template v-for="category in categories">
      <router-link
        :key="category.categoryId"
        :to="'../category/' + category.name"
        tag="li"
      >
        {{ category.name }}
      </router-link>
    </template>
  </ul>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  name: "HeaderDropdownMenu",
  data: function () {
    return {
      categories: [],
    };
  },
  created: function () {
    console.log("Start fetchCategories");
    this.fetchCategories();
    console.log("Finish fetchCategories");
  },
  methods: {
    fetchCategories() {
      const vm = this; // vm stands for view model
      ApiService.fetchCategories()
        .then((data) => {
          console.log("Data: " + data);
          vm.categories = data;
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
  },
};
</script>

<style>
li {
  cursor: pointer;
}
</style>
