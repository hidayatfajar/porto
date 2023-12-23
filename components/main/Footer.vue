<template>
  <div>
    <div class="max-w-3xl mx-auto px-6 lg:px-0 mt-10 w-full">
      <hr
        class="border-gray-200 dark:border-gray-800 transition duration-300"
      />
      <footer class="py-10">
        <div
          class="flex flex-col md:flex-row gap-x-36 gap-y-8 md:gap-y-4 justify-between"
        >
          <div class="space-y-4">
            <a
              class="text-slate-800 dark:text-slate-50 font-bold text-lg flex w-7"
              href="/"
              ><div class="w-[22px] overflow-hidden inline-block h-[22px]">
                <div
                  class="h-8 bg-black dark:bg-white rotate-45 transform origin-top-right"
                ></div>
              </div>
              <div
                class="w-[22px] overflow-hidden inline-block -ml-4 -mt-[10px]"
              >
                <div
                  class="h-8 bg-black dark:bg-white rotate-45 transform origin-bottom-left"
                ></div></div
            ></a>
          </div>
          <div class="flex-1 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div class="space-y-2 flex-1">
              <h1 class="font-semibold">General</h1>
              <nav class="flex flex-col gap-y-2 items-start">
                <a
                  target=""
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  href="/"
                  >Home</a
                ><a
                  target=""
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  href="/about"
                  >About</a
                ><a
                  target=""
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  href="/showcase"
                  >Showcase</a
                ><a
                  target=""
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  href="/blog"
                  >Blog</a
                >
              </nav>
            </div>
            <div class="space-y-2 flex-1">
              <h1 class="font-semibold">Social</h1>
              <nav class="flex flex-col gap-y-2 items-start">
                <a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Facebook</a
                ><a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Instagram</a
                ><a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Github</a
                ><a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Linkedin</a
                ><a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Telegram</a
                ><a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  >Threads</a
                >
              </nav>
            </div>
            <div class="space-y-2 flex-1">
              <h1 class="font-semibold">Extra</h1>
              <nav class="flex flex-col gap-y-2 items-start">
                <a
                  target="_blank"
                  class="text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
                  href="https://github.com/hidayatfajar"
                  >Source Code</a
                >
              </nav>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center mt-10 justify-center">
          <p class="text-gray-800 dark:text-gray-100 text-sm">
            Made with ❤️ by Fajar Hidayat
          </p>
          <p class="text-gray-800 dark:text-gray-100 text-sm">
            Copyright © {{ new Date().getFullYear() }}. All right Reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
