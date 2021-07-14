<template>
  <div class="flex flex-col 2xl:flex-row min-h-screen">
    <div class="flex flex-col 2xl:flex-row flex-1">
      <div
        class="
          max-w-5xl
          mx-auto
          w-full
          flex flex-col flex-1
          bg-white
          2xl:border-r
        "
      >
        <div
          class="
            bg-white
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-6
            h-20
            border-b
            top-0
            sticky
            z-10
          "
        >
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              InkStarter
            </h3>
            <p class="max-w-2xl text-sm text-gray-500">
              Crowdsourcing tattoo project.
            </p>
          </div>
          <p class="max-w-2xl text-xs text-gray-400 uppercase">Overview</p>
        </div>
        <div
          class="
            page-scroll
            max-w-5xl
            mx-auto
            w-full
            overflow-y-auto
            2xl:overflow-y-scroll
            xl:h-auto
          "
          style="height: calc(100vh - 5rem)"
        >
          <div class="flex items-center content-center aspect-w-16 aspect-h-9">
            <h1
              class="
                w-64
                h-auto
                top-2/4
                left-2/4
                bottom-auto
                right-0
                transform
                -translate-x-2/4 -translate-y-2/4
              "
            >
              <svg
                aria-label="InkStarter"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="54 167 720 460"
                class="w-full h-auto"
              >
                <path
                  class="fill-current text-purple-800"
                  fill="#000000"
                  d="M424 408.5c-8.4 2.4-15.4 8.5-23.4 29.7l-.3.6c.1.2-.9 1-.6.2 1.5-4.3 3.5-9.5 2.1-14.9-1.1-4.3-6-5.5-12.7-3.6-3.5 1-7.2 3.5-6.7 5.1.4 1.4 3.7.4 4.2 5.8.4 4.2-.9 13.2-3.9 25.6-5.7 16.1-17.7 45.7-32.4 50-3.4 1-4.8-1.8-5.3-3.7-.7-2.8.1-8.2.7-11.1 1-4.7 9.2-39.5 10.8-45.4 3.9-14.7 8.4-15 8.2-15.7-.7-2.5-5.5-4.1-11.9-2.3-4.3 1.2-8.8 4.8-11.8 12.6-3.4-4.2-9.1-6.5-16.1-4.5-24.3 7-42.1 45.8-41.8 72.2-5.9 11.2-13.3 21.1-21.4 23.5-2.6.7-4.5-1.4-5.3-4.2-.7-2.8-.5-7 1-13.4.4-1.9 6.4-28.5 12-52l14.1-4.1c6.6-1.9 9.9-6.8 9.4-14.6-.1-.5-.4-1.4-1-1.2-.7 1.7-3.9 3.4-9.5 5-5.4 1.3-8.4 2.2-9 2.4l-.6.2c2.4-9.1 3.5-14.4 3.8-15.9.8-3.7 1-6.7.3-9-.5-2-1.8-3.5-3.4-4.4 5.7.6 11.6-.1 16.4-1.5 66.9-19.3 65-123.4 76.9-162.7 7.1-23.1 18.4-38.5 16.9-44.2-1.5-5.7-3.7-7.8-5.2-7.4-1.1.3-5.8 12.8-17.8 16.5-10.8 3.4-35.3-.7-49 3.2-29.4 8.5-53.9 50.7-45.2 83.3 6.6 24.8 21.6 31.8 34 28.3 13.4-3.9 17-15.3 14.7-23.8-2-7.6-8.5-12.1-14.3-10.5-5.8 1.7-9.4 7.9-7.6 14.3.6 2.1 1.9 4.6 4.1 6.7.5.9.2 1.4-.3 1.6-7.9 2.3-15.9-5.5-18.9-16.6-5.1-19.1.5-56.5 35-66.5 13.2-3.8 25.4.6 38.4-3.2 10.2-3 14.1-7.3 14.1-7.3-.2-.7.8.5.2 1.7-12.5 17.5-23.6 39.7-28.7 67.7-8.1 45.9-9.2 95.2-51.4 107.3-13 3.7-20.8.3-22.8-7-.9-3.2.6-5.6 3.1-6.3 3.2-.9 5.1 3.7 3.3 6.5 3.6 2.4 13.2-2.8 10.6-12.7-2.1-7.8-9.1-11.5-17.8-9-6.8 2-14.2 12.2-11.1 23.7 2.5 9.5 9 14.5 16.4 16.7-1.3.1-2.6.3-4 .7-5.1 1.5-6.2 3.3-7.6 5.1-1.3 1.9 3.4.7 3.2 6.8-.1 1.5-2.3 14.7-4.2 23-15.2 4.1-17.5 5-19.3 11.3-.2.8-.9 3.5-1 4.7-.2 1 .3 2.9 2 1.4.7-.7 1.7-1.5 4-2.1 1.3-.4 10.9-2.9 10.9-2.9-17.1 58.6-15 68.2-14.3 70.9 2.4 9 9.8 11.8 17.5 9.5 11.6-3.4 21.9-13.6 30.2-26.6 3.1 8.6 10.3 14.7 21.1 11.6 7.7-2.2 15.5-9.9 20.7-18.8 1.9 7.1 7.7 10.9 16.9 8.2 11.8-3.4 22.3-14.1 30.7-27.6-.4 3.6-.4 6.9.4 9.8 1.1 4.1 5.2 7.7 10.9 6.1 6.3-1.8 10.1-5.1 11.1-6.4.5-.6.7-1.4.6-2.1-.1-.4-.4-.8-.9-.9-.7-.3-3.4-1-3.5-4.8-.7-20.4 17.2-67.5 27.9-76 2.4-1.9 3.8-.5 2.5 1.1-5.9 7 .5 14.6 6.5 14.3 6.5-.3 12.5-8.4 9.9-18.1-2.3-8.1-8.2-12.1-15.7-9.9zm-86.9 47.7c-1.7 8.2-6.1 26.8-7.8 34.4-3.4 16.3-14.3 24.7-17.9 25.7-5.1 1.5-8.6-1.2-10.6-8.8-4.1-15.1 10.9-58 25.3-62.2 5.1-1.5 9.7 1.9 10.9 6.5.4 1.4.4 2.9.1 4.4zm263.7-98.8c-8.4 2.4-15.4 8.5-23.4 29.7l-.3.6c.1.2-.9 1-.6.2 1.5-4.3 3.5-9.5 2.1-14.9-1.1-4.3-6-5.5-12.7-3.6-3.5 1-7.2 3.5-6.7 5.1.4 1.3 3.7.4 4.2 5.8.4 4.6-1.1 14.9-4.8 29-6.5 16.6-19.8 43.6-38.4 49-7.2 2.1-12.7-.3-14.9-8.3-1.4-5.3-1.2-9.8-.3-15.7 25.5-6.1 43.4-30.8 39.1-46.9-2.1-7.8-8.1-11.5-15.4-9.4-24.2 7-42.4 47.1-41.7 73.6-5.7 10.5-12.8 19.5-20.5 21.7-2.6.7-4.5-1.4-5.2-4.2-.7-2.8-.5-7 1-13.4.4-1.9 6.4-28.5 12-52l14.1-4.1c6.6-1.9 9.9-6.8 9.4-14.6-.1-.5-.4-1.4-1-1.2-.7 1.7-3.9 3.4-9.5 5-5.4 1.3-8.4 2.2-9 2.4l-.6.2c2.4-9.1 3.5-14.4 3.8-15.9.8-3.7 1-6.7.3-9-1.4-5.1-6.8-6.7-13.2-4.8-5.1 1.5-6.2 3.3-7.6 5.2-1.3 1.9 3.4.7 3.2 6.7-.1 1.5-2.2 14.7-4.2 23-15.2 4.1-17.5 5-19.3 11.3-.2.8-.9 3.5-1 4.7-.2 1 .3 2.9 2 1.4.7-.7 1.7-1.5 4-2.1 1.3-.4 10.9-2.9 10.9-2.9-17.1 58.6-15 68.2-14.3 70.9 2.4 9 9.8 11.8 17.5 9.5 11.3-3.3 21.3-13 29.5-25.5 4.1 10.7 13.3 13.2 23.2 10.3 16.1-4.7 29.1-16.6 38.9-31.4-.6 4.2-.6 8 .2 11.2 1.1 4.1 5.2 7.7 10.9 6.1 6.3-1.8 10.1-5.1 11.1-6.4.5-.6.7-1.4.6-2.1-.1-.4-.4-.8-.9-.9-.7-.3-3.4-1-3.5-4.8-.7-20.4 17.2-67.5 27.9-76 2.4-1.9 3.8-.5 2.5 1.1-5.9 7 .5 14.6 6.5 14.3 6.5-.3 12.5-8.4 9.9-18.1-2.3-8-8.3-11.9-15.8-9.8zm-71.1 29.4c3.8-1.1 6 1 6.8 4 2.2 8.3-11.6 28.6-29.5 33.8 3.1-12.6 13.1-35.1 22.7-37.8zM228.2 511.7c-8.2-30.8-51.5-38.8-59.1-67.3-4.9-18.4 7.4-38.5 33.2-45.9 17-4.9 30.5.8 33.7 12.5 2.4 9-1.5 14-3 14.5-.9.2-1.9-.2-1.9-.9 0-.8.1-1.5-.2-2.4-1.2-4.6-6.4-8.3-11.7-6.8-6.8 2-9.2 9.3-7.4 16 2.7 10.1 12.1 11.8 19.4 9.7 12.6-3.6 19.1-17.7 15.4-31.7-4.5-16.8-20.2-29.3-52.4-20s-48.7 42-42.1 66.6c8.9 33.3 50.4 37.2 58.6 67.9 4.2 15.6-6 39.1-33.8 47.1-24.9 7.2-39.3-3.7-42.6-15.9-2.1-8 1.2-16.9 6.5-18.5 2.6-.7 4.6.9 5.3 3.4.7 2.8-.4 6.3-2.7 7.9 2.7 3.2 5.5 4.1 8.9 3.1 6.6-1.9 10.3-11.4 8.2-19.2-2-7.6-9.9-13.7-19.7-10.9-17.9 5.2-21.3 25-18.4 35.8 7.2 26.9 33.8 32 54.9 25.9 35.7-10.2 58.7-41.8 50.9-70.9zm145-216c.4 1.4 3.8.4 4.3 5.9.4 5.1-2.3 17.2-6.8 33.6-1.9 7.5-4.3 16.3-5.7 22.4-1.8 7.7-2.8 14.4-1.4 19.7 1.1 4.1 5.3 7.9 11.1 6.2 6.4-1.9 10.3-5.2 11.3-6.5.5-.7.8-1.5.6-2.2-.1-.5-.5-.9-1-1-.8-.3-3.5-1-3.6-4.9-.8-20.8 12.8-64.3 30.5-69.4 3-.9 5.2.7 5.9 3 2.5 9.4-13.5 38-8.8 55.5 2 7.4 8.6 12.4 18.8 9.4 8.5-2.4 15.4-9.8 21-18.8v.2c-.1 1.5-.1 3 .2 4.1 1.4 5.1 5.8 7.2 13.1 5.1 4.7-1.4 10.3-5.4 9.8-7.3-.4-1.4-3.5-1-4.5-4.9-.4-1.6 0-5.9 1.2-11.7 5.2-20.8 17.2-34.4 17.4-35.2.1-.3.4-.1.5.1.6 3.8 1.5 9.2 3 14.7 3.9 14.7 16 31.3 28.3 27.7 23.5-6.8 36.1-58.9 39.2-67.2 1.2-3.3.2-8-.2-8.6-1.6-3.3-3.8-4.1-4.9-1.8-4.9 12.6-15.8 56.8-29.9 60.8-11.5 3.3-19.6-13.9-23.7-29.3-1.3-4.8-2.2-13.5-2.2-13.5 7.4-11.8 17.1-26.2 27.5-29.2.6-.2 1.1-.1 1.3.6.1.5-.2 1-.8 1.2-3.8 1.1-7.2 5.6-5.8 10.8 1.3 4.8 6.4 7.6 10.4 6.4 7.5-2.2 10.4-10.9 8.4-18.3-1.8-6.7-8.5-11.2-16.4-8.9-19.4 5.6-35.8 39.3-42.5 51.4-.3-.2-.3-.4-.5-.9 1.7-8.9 24.1-102 25.4-108.3 2.8-11.9-2.8-16.5-12.2-13.8-5.1 1.5-7.9 4-9.3 5.6-.5.6-.8 1.2-.7 1.7.5 1.8 6 .2 4.4 10.4-.6 3.4-15.3 65.6-26 111-6.2 18.7-16.8 47.5-25.9 50.2-4.9 1.4-6.9-.2-7.9-3.7-.2-.9-.3-2.1-.1-3.7 2.7-19.1 12.5-40.7 8.1-57.2-1.9-6.9-8.6-9.9-16.3-7.7-8.5 2.5-16.2 9.9-26.3 28.9l-.3.6c.1.2-.9 1-.6.2 1.6-4.4 3.6-9.7 2.1-15.2-1.2-4.4-6.1-5.7-12.9-3.7-3.4 1.4-7 3.9-6.6 5.5zM325.5 568l4.5-1.2v10.9l2.7-.7v-10.9l4.5-1.2v-2.7l-11.8 3.2v2.6zm30.3-5l-3.6-4.8-3.2.8 5.5 7.3v4.9l2.7-.7v-4.9l5.5-10.2-3.2.9-3.7 6.7zm-46.2 14.5l-8.4-5.7-.7.2v13.6l2.7-.7v-8l8.3 5.7.8-.2v-13.6l-2.7.7v8zm-83.4 28l10-2.7v-2.7l-7.3 1.9v-1.4l5.4-1.5v-2.7L229 598v-4.1l7.3-1.9v-2.7l-10 2.7v13.5zm165-55.1l4.5-1.2v10.9l2.7-.7v-10.9l4.5-1.2v-2.7l-11.8 3.2v2.6zm-114.8 41.7l10-2.7v-2.7l-7.3 1.9v-1.4l5.5-1.5V583l-5.5 1.5v-4.1l7.3-1.9v-2.7l-10 2.7v13.6zm-117.3 31.4l3.1-.8 1.2-2.6 7-1.9 1.3 1.9 3.1-.8-7.9-12.3-7.8 16.5zm5.8-6.5l2-4.2 2 3.2-4 1zm91.4-24.4l-4.8-7.4-3.1.8 7.4 11.6.8-.2 7.4-15.6-3.1.8-4.6 10zm-47.8 9.5c-.7.2-1.4-.3-1.4-1s.6-1.5 1.4-1.7c.7-.2 1.4.3 1.4 1l2.6-1.6c-.4-1.7-2-2.6-4-2.1-2.3.6-4.1 2.9-4.1 5.2 0 2.3 1.8 3.6 4.1 3 .7-.2 1.4.3 1.4 1s-.6 1.5-1.4 1.7c-.7.2-1.4-.3-1.4-1l-2.6 1.6c.4 1.7 2 2.6 4 2.1 2.3-.6 4.1-2.9 4.1-5.2 0-2.3-1.8-3.6-4.1-3zm447.9-122.7c1.3-.4 2.5 0 3.3.8l.3.3 2.2-2.2-.3-.3c-1.2-1.3-3.2-1.8-5.4-1.3-3.8 1-6.8 4.9-6.8 8.6 0 3.8 3.1 6 6.8 5 2.2-.6 4.2-2.2 5.4-4.2l.3-.4-2.2-1.1-.3.4c-.7 1.2-1.9 2.1-3.3 2.5-2.3.6-4.1-.7-4.1-3 0-2.2 1.8-4.5 4.1-5.1zm17.8-4.8l4.5-1.2v10.9l2.7-.7v-10.9l4.5-1.2v-2.7l-11.8 3.2.1 2.6zm-88.9 21.1c-3.8 1-6.8 4.9-6.8 8.6 0 3.8 3.1 6 6.8 5 3.8-1 6.8-4.9 6.8-8.6 0-3.8-3-6-6.8-5zm0 10.9c-2.3.6-4.1-.7-4.1-3s1.8-4.6 4.1-5.2c2.3-.6 4.1.7 4.1 3s-1.8 4.6-4.1 5.2zm-19.3-.7c0-2.8-2.2-4.4-5-3.7l-5 1.3v13.6l2.7-.7v-3.6l2.1-.6 2.4 3 3.2-.9-2.9-3.6c1.5-1.2 2.5-3 2.5-4.8zm-5 3.6l-2.3.6v-4.5l2.3-.6c1.3-.3 2.3.4 2.3 1.7-.1 1.2-1.1 2.4-2.3 2.8zm66-11.4l10-2.7v-2.7l-7.3 1.9v-1.4l5.5-1.5V489l-5.5 1.5v-4.1l7.3-1.9v-2.7l-10 2.7v13.6zm-17.1-.4c0 1.3-1 2.5-2.3 2.9-.7.2-1.4 0-1.8-.4l-.3-.3-2.2 2.2.3.3c.9.9 2.3 1.3 4 .9 2.8-.7 5-3.6 5-6.3v-8.6l-2.7.7v8.6zm-184.7 47.7l-6.4 1.7v-6.8l-2.7.7v13.6l2.7-.7v-4.1l6.4-1.7v4.1l2.7-.7v-13.6l-2.7.7v6.8zm112.7-37l-5 1.3v13.6l2.7-.7V519l2.3-.6c2.8-.7 5-3.6 5-6.3 0-2.8-2.3-4.4-5-3.7zm0 7.3l-2.3.6v-4.5l2.3-.6c1.3-.3 2.3.4 2.3 1.7-.1 1.1-1.1 2.4-2.3 2.8zm-85.5 20.6c0-2.8-2.2-4.4-5-3.7l-5 1.3v13.6l2.7-.7v-3.6l2.1-.6 2.4 3 3.3-.9-2.9-3.6c1.5-1.2 2.4-3 2.4-4.8zm-5 3.6l-2.3.6V536l2.3-.6c1.3-.3 2.3.4 2.3 1.7 0 1.2-1 2.5-2.3 2.8zm19 1.3l10-2.7v-2.7l-7.3 1.9v-1.4l5.5-1.5v-2.7l-5.5 1.5v-4.1l7.3-1.9v-2.7l-10 2.7v13.6zm24.1-6.5l10-2.7v-2.7l-7.3 1.9v-1.4l5.5-1.5v-2.7l-5.5 1.5V523l7.3-1.9v-2.7l-10 2.7v13.6zm273.4-233.6c-1-1-2.7-1-3.9-.1-.5.4-1 .7-1.5 1.1l-22.4-13c-2.9-3.9-6.3-7.1-9.8-9.7l11.8-3.2c.9-.2 1.4-1.1 1.2-2-.2-.9-1.1-1.4-2-1.2l-14.6 3.9c-.7-.4-1.4-.9-2-1.3-5.5-3.2-12.5-1.3-15.7 4.2-2.5 4.3-1.8 9.6 1.2 13.2l-14.3 24.8-19.4-11.2c-2.1-1.2-4.7-1.1-6.7.1l-.7-.4 2-3.4c.5-.8.2-1.8-.6-2.2-.8-.5-1.8-.2-2.3.6l-7.1 12.3c-.5.8-.2 1.8.6 2.2.8.5 1.8.2 2.2-.6l2.5-4.3.4.2c-.5 2.7.7 5.5 3.1 6.9l14.8 8.5-7.4 12.8-2.5-1.4c-.8-.5-1.8-.2-2.3.6L630.7 404c-.5.8-.2 1.8.6 2.2l2.5 1.4-5.4 9.3c-.3.3-5.6 18.4-5.6 18.4-.2.6-.1 1.2.2 1.7l-3.2 5.6 1.8 1 3.2-5.6c.6 0 1.1-.2 1.6-.7 0 0 13.1-13.7 13.2-14l5.4-9.3 2.5 1.4c.8.4 1.8.2 2.2-.6l37.8-65.5c.5-.8.2-1.8-.6-2.2l-2.5-1.4 7.4-12.8 36.7 21.2c3 1.7 6.7.8 8.6-1.9.1-.1.2-.1.2-.2l27.1-47c.8-1.2.6-2.9-.5-3.9zm-55.8 26.2l-14.5-8.4 14.1-24.4c.5.4.9.7 1.5 1.1 4 2.3 7.9 5.3 10.4 10.1 2.1 11.2-7 18.8-11.5 21.6zm36.1-19.8c-.9-4.6-2.4-8.8-4.4-12.4l15.5 9c-4.3 2.6-8 3.8-11.1 3.4zM582 259.1c1.2.6 2.3-.3 3.2-.8 2.2-1.3 44.2-27.8 44.2-27.8 3.1-2 5.5-.6 5.4 3.1 0 0-.1 3.6-.3 8.7-.1 2.2-.1 4.5 2.1 5.7 2 1.1 3.8.3 5.5-.9 8.4-5.8 56.4-42.2 56.4-42.2 2.9-2.2 2.7-2.5-.5-.7l-48.9 28.7c-3.1 1.9-5.6.4-5.4-3.3 0 0 .2-3.6.4-8.7.1-2.2.4-4.6-1.6-6.1-1.6-1.3-3.7-1.2-5.4-.1-4.2 2.8-46.7 34-46.7 34-2.9 2.2-5.3.9-5.2-2.7l.1-13c0-3.7-.4-3.7-1-.1 0 0-2.1 13.8-3.6 24 .1.9.5 1.8 1.3 2.2zm106.1-24.7c1.1 2.2 3.8 3.1 6 1.9 2.3-1.1 40.7-20.9 40.7-20.9 4.3-2.2 4.1-2.9-.6-1.4 0 0-42 13.3-44.2 14.4-2.1 1.1-3 3.8-1.9 6zM164 375.5c2.1.2 4 0 5.2-2 1.3-2.2.1-4.1-1.1-6-2.7-4.4-4.6-7.4-4.6-7.4-1.9-3.1-.5-5.5 3.1-5.4l52.2 2c1.1 0 2.5.2 3.2-.9.5-.7.4-1.7-.1-2.4-6.3-8.1-15.1-19-15.1-19-2.3-2.9-2.7-2.6-.8.6l6.6 11.2c1.9 3.1.5 5.4-3.2 4.9 0 0-52.4-5.9-57.5-6.1-2-.1-3.8.9-4.6 2.8-.9 2.3.5 4.2 1.7 6.1 2.7 4.3 4.7 7.3 4.7 7.3 2 3.1.6 5.5-3 5.5l-56.7-.4c-3.7 0-3.7.4-.1.8.1.1 59.9 7.5 70.1 8.4zm-50.9 7.7c-2.4.1-45.5 9.6-45.5 9.6-4.8 1.1-4.7 1.7.2 1.5 0 0 43.2-2 45.7-2.2 2.5-.2 4.4-2.2 4.2-4.7 0-2.4-2.1-4.3-4.6-4.2z"
                />
              </svg>
            </h1>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">About</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Crowdsourcing tattoo project where I tattooed myself with the 7
                most voted drawings chosen by <strong><i>you</i></strong
                >.
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Year</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2014
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Website</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                inkstarter.cc — Expired
              </dd>
            </div>
          </dl>
          <div class="flex items-center justify-between px-4 py-4 sm:px-6 h-20">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Audience
              </h3>
            </div>
          </div>
          <img
            src="~assets/images/world-map.svg"
            class="w-full h-auto"
            alt="World Map"
          />
          <div
            class="bg-white px-4 pb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <div class="flex items-center space-x-2 text-sm">
              <span>1</span>
              <div class="world-map-info flex w-8 h-4"></div>
              <span>25,443</span>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span>151 countries</span>
            </div>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Sessions</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                54,968
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Users</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                45,297
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Pageviews</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                95,431
              </dd>
            </div>
            <div
              class="flex items-center justify-between px-4 py-4 sm:px-6 h-20"
            >
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Top 10 countries
                </h3>
              </div>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Brazil</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                25,443 (46.29%)
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Russia</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                6,647 (12.09%)
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">United States</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                3,489 (6.35%)
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">India</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2,490 (4.53%)
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">France</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                1,630 (2.97%)
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">United Kingdom</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                1,106 (2.01%)
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Germany</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                1,013 (1.84%)
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">China</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                896 (1.63%)
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Italy</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                775 (1.41%)
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Canada</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                616 (1.12%)
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="
          max-w-5xl
          mx-auto
          w-full
          flex flex-col flex-1
          bg-white
          2xl:border-r
        "
      >
        <div
          class="
            bg-white
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-6
            h-20
            border-b
            top-0
            sticky
            z-10
          "
        >
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Website</h3>
            <p class="max-w-2xl text-sm text-gray-500">
              Contest platform and memorial page.
            </p>
          </div>
          <p class="max-w-2xl text-xs text-gray-400 uppercase">Versions</p>
        </div>
        <div
          class="page-scroll max-w-5xl mx-auto w-full overflow-y-auto xl:h-auto"
          style="height: calc(100vh - 5rem)"
        >
          <img
            src="~assets/images/inkstarter-01.jpg"
            class="w-full"
            alt="InkStarter 1.0"
          />
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Version</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                1.0 — Contest version
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Year</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2014 — April
              </dd>
            </div>
          </dl>
          <img
            src="~assets/images/inkstarter-02.jpg"
            class="w-full"
            alt="InkStarter 2.0"
          />
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Version</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2.0 — Memorial version
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Year</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2015 — 2020
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="flex flex-col 2xl:flex-row flex-1">
      <div
        class="
          max-w-5xl
          mx-auto
          w-full
          flex flex-col flex-1
          bg-white
          2xl:border-r
        "
      >
        <div
          class="
            bg-white
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-6
            h-20
            border-b
            top-0
            sticky
            z-10
          "
        >
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Contest</h3>
            <p class="max-w-2xl text-sm text-gray-500">
              Facebook posts and users submissions.
            </p>
          </div>
          <p class="max-w-2xl text-xs text-gray-400 uppercase">Contest</p>
        </div>
        <div
          class="
            flex flex-col
            page-scroll
            max-w-5xl
            mx-auto
            w-full
            overflow-y-auto
            xl:h-auto
          "
          style="height: calc(100vh - 5rem)"
        >
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Duration</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                30 days
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Facebook Posts</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://inkstarter.setetres.st/facebook"
                  class="
                    font-medium
                    text-indigo-600
                    hover:text-indigo-500
                    block
                    2xl:hidden
                  "
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View posts
                </a>
                67 posts (2 per day, +7 announcements)
              </dd>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">
                Users submissions
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://bit.ly/InkStarterSubmissions"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View submissions
                </a>
                <br />
                Disclaimer: contains NSFW.
              </dd>
            </div>
          </dl>
          <div class="2xl:flex flex-1 flex-col hidden">
            <iframe
              class="flex-1 w-full"
              src="https://inkstarter.setetres.st/facebook"
              title="InkStarter Facebook Posts"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="max-w-5xl mx-auto w-full flex flex-col flex-1 bg-white">
        <div
          class="
            bg-white
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-6
            h-20
            border-b
            top-0
            sticky
            z-10
          "
        >
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Legacy</h3>
            <p class="max-w-2xl text-sm text-gray-500">
              Tattoo sessions and broadcasts.
            </p>
          </div>
          <p class="max-w-2xl text-xs text-gray-400 uppercase">Results</p>
        </div>
        <div
          class="
            page-scroll
            max-w-5xl
            mx-auto
            w-full
            overflow-y-auto
            2xl:overflow-y-scroll
            xl:h-auto
          "
          style="height: calc(100vh - 5rem)"
        >
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/-lifSIr_dYg"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #00
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Not available
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/t8_Dclozre0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #01
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=nH0sfcim3pw"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/5dVHCu3IlTw"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #02
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=Rzxidi4MKAs"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/fuAGa7M5v5w"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #03
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=c5gdS8CirHw"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/1XEq7i45F7A"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #04
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=9JdF5kpz4uI"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/wgZtpF9d_Yk"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #05
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=8NEodwzbFiE"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
          <div class="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/6VOzRz6byOM"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <dl>
            <div
              class="
                bg-gray-50
                px-4
                py-5
                sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
              "
            >
              <dt class="text-sm font-medium text-gray-500">Session</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                #06
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Broadcast</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href="https://youtube.com/watch?v=CwRDikyo9ao"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  View live session
                </a>
              </dd>
            </div>
          </dl>
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

  head() {
    return {
      title: 'InkStarter',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
