<template>
  <div>
    <category-nav></category-nav>
    <category-book-list :books="books"></category-book-list>
  </div>
</template>

<script>
import CategoryNav from "@/components/CategoryNav";
import CategoryBookList from "@/components/CategoryBookList";

export default {
  name: "category",
  components: {
    CategoryNav,
    CategoryBookList,
  },
  data: function () {
    return {
      books: [
        {
          bookId: 2001,
          title:
            "The successful entrepreneur: A guide to research in entrepreneurship",
          imageFile: "book-7.png",
          author: "Liberty Chidziwa",
          price: 2800,
          isPublic: true,
        },
        {
          bookId: 2002,
          title: "Atomic Habits",
          imageFile: "book-4.png",
          author: "James Clear",
          price: 2241,
          isPublic: false,
        },
        {
          bookId: 2003,
          title: "The first Year as the CEO of a Company",
          imageFile: "book-5.png",
          author: "Aspatore Books Staff",
          price: 2800,
          isPublic: false,
        },
        {
          bookId: 2004,
          title: "Grit: the power of passion and perseverance",
          imageFile: "book-3.png",
          author: "Angela Duckworth",
          price: 3000,
          isPublic: true,
        },
        {
          bookId: 2005,
          title:
            "Startup Guide: 10 Proven Steps to Creating Your Successful Business",
          imageFile: "book-6.png",
          author: "Jerry Kershen",
          price: 2800,
          isPublic: false,
        },
        {
          bookId: 2006,
          title: "The Small Business Owner's Guide to Alternative Funding",
          imageFile: "book-8.png",
          author: "Karlene Sinclair-Robinson",
          price: 2495,
          isPublic: true,
        },
        {
          bookId: 2007,
          title:
            "The Pocket Small Business Owner's Guide to Building Your Business",
          imageFile: "book-9.png",
          author: "Kevine Devine",
          price: 4126,
          isPublic: false,
        },
        {
          bookId: 2008,
          title: "Frontiers in Entrepreneurship",
          imageFile: "book-10.png",
          author: "Boris Urban",
          price: 2495,
          isPublic: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
