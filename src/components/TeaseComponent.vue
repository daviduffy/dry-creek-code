<template>
  <div class="week">
    <div class="week__content">
      <h2 class="week__heading">
        <router-link
          class="week__heading link"
          :to="href"
        >
          {{ heading }}
        </router-link>
      </h2>
      <p class="week__tease">{{ tease }}</p>
      <ul class="week__topics">
        <li
          v-for="(topic, index) in topics"
          :key="index"
        >
          {{ topic }}
        </li>
      </ul>
    </div>
    <aside
      v-if="linksExist"
      class="week__aside"
    >
      <h3>Links</h3>
      <ul class="week__aside-links">
        <li
          v-for="({ url, text }, index) in links"
          class="week__aside-link"
        >
          <a
            :href="url"
            class="link"
          >
            {{ text }}
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

const props = defineProps<Props>();

const linksExist = computed(() => props.links?.length > 0);
</script>

<script lang="ts">
interface Link {
  url: string,
  text: string,
}
interface Props {
  heading: string,
  href: string,
  tease: string,
  topics: string[],
  links?: Link[],
}
</script>

<style lang="scss">
@mixin md-mq-up {
  @media (min-width: 768px) {
    @content;
  }
}

.week {
  max-width: 100%;
  display: grid;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid lightgray;
  margin-bottom: 2.4rem;
  &::last-of-type {
    border-bottom: none;
  }

  @include md-mq-up {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
}
.week__link {
  color: var(--blue);
}



// .jump {
//   max-height: 0px;
//   will-change: max-height;
//   transition: max-height 0.8s ease-in-out;
//   overflow: hidden;
// }

// .jump-container {
//   overflow: hidden;
//   max-height: 3.2rem;
//   will-change: max-height;
//   transition: max-height 0.2s ease-in-out;
// }

// .jump-container--collapsing {
//   max-height: 0px;
// }

// .jump-container .button--jump {
//   display: block;
//   margin: 0 auto;
// }

// .jump--expanding {
//   max-height: 700px;
// }

// .jump--expanded {
//   max-height: initial;
//   will-change: unset;
// }


// @media (min-width: 768px) {
//   .jump {
//     transition: max-height 0.4s ease-in-out;
//   }
//   .jump--expanding {
//     max-height: 300px;
//   }
//   .jump--expanded {
//     max-height: initial;
//     will-change: unset;
//   }
// }
</style>
