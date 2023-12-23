<template>
  <div>
        <div
          class="w-full sticky top-0 backdrop-blur-xl backdrop-filter z-50 duration-300 transition bg-white/75 dark:bg-gray-950/75 border-b border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <nav class="py-5">
            <div class="max-w-3xl mx-auto px-6 lg:px-0">
              <div class="flex justify-between items-center">
                <div class="flex-1 flex justify-start">
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
                <div class="hidden md:flex text-sm">
                  <a
                    class="dark:hover:text-gray-100 px-4 py-2 bg-transparent text-sm hover:text-gray-800 transition duration-100 text-gray-800 dark:text-gray-100 font-medium"
                    href="/"
                    >Home</a
                  ><a
                    class="text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 font-normal px-4 py-2 bg-transparent text-sm hover:text-gray-800 transition duration-100"
                    href="/about"
                    >About</a
                  ><a
                    class="text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 font-normal px-4 py-2 bg-transparent text-sm hover:text-gray-800 transition duration-100"
                    href="/showcase"
                    >Showcase</a
                  ><a
                    class="text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 font-normal px-4 py-2 bg-transparent text-sm hover:text-gray-800 transition duration-100"
                    href="/blog"
                    >Blog</a
                  >
                </div>
                <div class="flex-1 flex justify-end gap-x-1">
                  <button
                    aria-label="theme-toggle"
                    class="h-10 w-10 dark:hover:ring-gray- 700 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-100 active:outline-none flex justify-center items-center rounded-lg"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-950 dark:text-gray-50 rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0 absolute"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
                      <path
                        d="M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"
                      ></path></svg
                    ><svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-950 dark:text-gray-50 rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100 absolute"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="M20 12h2"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
                      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
                    </svg>
                  </button>
                  <div class="relative inline-block md:hidden text-left">
                    <button
                      aria-label="hamburger-menu"
                      class="h-10 w-10 rounded-lg md:hidden items-center justify-center text-gray-950 dark:text-gray-50 hover:bg-gray-100 hover:bg-opacity-90 transition duration-100 flex dark:hover:bg-gray-800"
                      id="headlessui-menu-button-:Rdmba:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5"
                      >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
    </div>
</template>

<script></script>
