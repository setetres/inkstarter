<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col flex-1 xl:min-h-screen items-center justify-center"
    >
      <header
        class="
          flex
          sticky
          top-0
          w-full
          p-8
          xl:p-16 xl:max-w-3xl
          mx-auto
          z-20
          select-none
        "
      >
        <div class="flex flex-1 bg-white rounded-full shadow-md">
          <h1 class="flex items-center justify-between p-4">
            <nuxt-link
              aria-label="Sete Três"
              to="/"
              exact
              class="
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-full
                ring-inset
                focus:outline-none
                focus:ring
                focus:ring-opacity-100
                focus:ring-gray-900
                hover:bg-gray-100
                select-none
              "
            >
              <svg
                class="w-8 h-8"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path
                  class="fill-current text-gray-900"
                  d="M2 13h2v2H2zM2 9h2v2H2zM2 5h2v2H2zM6 13h2v2H6zM6 9h2v2H6zM6 5h2v2H6zM12 13h2v2h-2zM12 9h2v2h-2zM12 5h2v2h-2zM2 1h2v2H2z"
                  fill="#2563eb"
                />
              </svg>
            </nuxt-link>
          </h1>
          <div
            class="
              flex flex-1
              items-center
              justify-start
              bg-gray-100
              font-semibold
              text-gray-600 text-xs
              sm:text-base
              leading-tight
              rounded-full
              my-4
              mr-4
              px-8
              py-2
            "
          >
            <h2 v-if="error.statusCode === 404">Not found</h2>
            <h2 v-else>An error occurred</h2>
          </div>
          <span
            class="
              self-center
              rounded-full
              text-2xl
              font-marker
              ml-2
              mr-8
              hidden
              sm:block
              text-gray-700
              select-none
            "
          >
            Archive
          </span>
        </div>
      </header>
      <svg
        viewBox="0 0 558.6 252.2"
        class="sttrs-svg -mt-8 absolute z-10 max-w-5xl hidden xl:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="stroke-current text-purple-400"
          d="M29.1,187.4 c0,0,20-14.6,29.2-56.9c5.4-24.9-23.5-31.2-10.5-8.9c7.5,12.8,67,48.9,54.9,86.2C89.3,249,10.8,254,10,218.7 c-0.6-28,83.3,39.9,131.1-6.1c32-30.9,87-263.3,57.4-181.5c-9.2,25.5-60,201.3-25.8,197.7C225.2,223.2,288-56.8,258.5,25 c-9.2,25.5-61.8,201.5-29.2,198c26.8-2.8,64.7-103.2,74.2-125c9.5-21.8-23.5-6.8-12.9,3.7s48.2,7.2,65.8-2.9c1.8-1,3.5,0.9,2.3,2.6 c-32.4,46.5-53.2,92.7-33.7,100.6c37.6,15.2,94-69.6,106.8-109.8c12.8-40.2-20.6-22.4-7.6-0.2c7.5,12.8,64.1,40.2,52,77.4 c-13.4,41.3-82.1,41.2-72.8,10.2c8.3-27.7,89.1,62.2,145.2-34.8"
        />
        <line
          class="stroke-current text-purple-400"
          x1="128.1"
          y1="71.4"
          x2="413.8"
          y2="26.4"
        />
      </svg>
      <div
        class="
          setetres setetres--loading
          grid-cols-8
          gap-12
          top-8
          xl:top-16
          right-8
          xl:right-16
          bottom-8
          xl:bottom-16
          left-8
          xl:left-16
          hidden
          xl:grid
        "
      >
        <div class="setetres__letter setetres__letter--s">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--t">
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--t">
          <div />
        </div>
        <div class="setetres__letter setetres__letter--r">
          <div />
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--s">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    setTimeout(function () {
      next()
    }, 500)
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: 'InkStarter — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {
      const setetres = document.querySelector('.setetres')

      setTimeout(function () {
        setetres.classList.remove('setetres--loading')
      }, 100)

      setTimeout(function () {
        setetres.classList.add('setetres--loaded')
      }, 3000)
    })
  },
}
</script>
