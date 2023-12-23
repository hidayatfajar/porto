<template>
  <div>
    <div>
        <div class="flex-1">
          <div class="max-w-3xl mx-auto px-6 lg:px-0">
            <div
              class="flex sm:items-center gap-x-16 my-10 sm:flex-row flex-col-reverse items-start gap-y-4"
            >
              <div class="flex-1 flex flex-col items-start">
                <p class="text-gray-800 dark:text-gray-100">Hallo, i'm</p>
                <h1
                  class="text-4xl md:text-5xl py-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  <span class="index-module_type__E-SaG">Fajar Nur Hidayat</span>
                </h1>
                <p
                  class="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-sm"
                >
                  I am a
                  <span class="font-medium text-gray-800 dark:text-gray-100"
                    >Developer </span
                  >who really interested in
                  <span class="font-medium text-gray-800 dark:text-gray-100"
                    >Frontend and Mobile Development.</span
                  >
                </p>
                <div class="flex gap-2 mt-4">
                  <a
                    class="px-8 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white text-sm font-medium flex justify-center items-center"
                    href="mailto:fajarnh67@gmail.com"
                    >Hire Me</a
                  ><a
                    target="_blank"
                    class="h-10 p-[1.5px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    href="#"
                    ><div
                      class="w-full h-full dark:hover:bg-transparent gap-1 dark:hover:bg-opacity-90 hover:bg-transparent hover:bg-opacity-90 hover:text-white transition dark:bg-gray-950 dark:text-white bg-white rounded-full px-8 flex justify-center items-center text-gray-800 text-sm font-medium"
                    >
                      Download Resume
                    </div></a
                  >
                </div>
              </div>
              <div
                class="w-24 sm:w-32 md:w-36 aspect-square relative rounded-full overflow-hidden transition-all duration-300"
              >
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  class="object-cover object-center"
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    color: transparent;
                  "
                  sizes="100vw"
                  srcset="https://source.boringavatars.com/beam"
                  src="https://source.boringavatars.com/beam"
                />
              </div>
            </div>
            <div class="mt-10">
              <div class="space-y-1 flex flex-col items-start">
                <div class="relative flex justify-start">
                  <h1
                    class="font-semibold text-3xl text-gray-800 z-10 dark:text-gray-100"
                  >
                    Featured Projects 🧑🏻‍💻
                  </h1>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Check out my featured projects to see some of my best work and
                  learn more about my skills and experience as a developer. Feel
                  free to explore it.
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
                <a class="group" href="#" v-for="i in 4" :key="i"
                  ><div
                    class="w-full aspect-[16/9] relative rounded-xl group-hover:scale-[1.05] transition ease-in-out shadow-sm dark:shadow-gray-800 overflow-hidden"
                  >
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      class="object-cover object-top transition-all duration-300"
                      style="
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        color: transparent;
                      "
                      sizes="100vw"
                      srcset="https://placehold.co/200x100"
                      src="https://placehold.co/200x100"
                    />
                  </div>
                  <div class="py-4 space-y-1">
                    <div class="flex items-center gap-x-2">
                      <h1
                        class="text-lg text-gray-800 dark:text-gray-100 font-medium"
                      >
                        Project Title
                      </h1>
                      <div
                        class="px-2 py-[2px] transition-all duration-300 rounded-sm bg-indigo-100"
                      >
                        <p
                          class="text-[10px] lowercase font-medium whitespace-nowrap text-indigo-500"
                        >
                          finish
                        </p>
                      </div>
                    </div>
                    <p
                      class="text-gray-500 dark:text-gray-400 line-clamp-2 text-sm"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, quam.
                    </p>
                  </div></a
                >
              </div>
              <div class="mt-4 flex justify-end w-full">
                <a
                  class="flex items-center text-sm text-slate-800 dark:text-slate-100 duration-100 transition-all hover:underline"
                  href="/showcase"
                  >Explore all projects in showcase<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevrons-right"
                  >
                    <path d="m6 17 5-5-5-5"></path>
                    <path d="m13 17 5-5-5-5"></path></svg
                ></a>
              </div>
            </div>
            <div class="mt-10">
              <div class="space-y-1 flex flex-col items-start">
                <div class="relative flex justify-start">
                  <h1
                    class="font-semibold text-3xl text-gray-800 z-10 dark:text-gray-100"
                  >
                    Latest Posts ✏️
                  </h1>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Discover my random posts, feel free to explore it.
                </p>
              </div>
              <div class="mt-4 flex flex-col divide-y dark:divide-gray-800">
                <div class="py-4 first-of-type:pt-0 last-of-type:pb-0">
                  <div class="w-full rounded-lg h-full">
                    <div
                      class="flex items-center gap-x-1 text-gray-500 text-sm dark:text-gray-400 mb-2"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                      <p>03 Oct, 2023</p>
                      <div
                        class="h-1 w-1 rounded-full bg-gray-800 mx-1 dark:bg-gray-100"
                      ></div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <p>
                        3<!-- -->
                        min read
                      </p>
                    </div>
                    <a
                      class="text-gray-800 text-2xl font-medium dark:text-gray-100"
                      href="/blog/how-to-center-a-div"
                      >How to Center a Div</a
                    >
                    <p
                      class="line-clamp-2 text-gray-500 dark:text-gray-400 text-sm"
                    >
                      Centering a div within a web page or container is a frequent
                      task in web development, and this article outlines three
                      fundamental methods for achieving this using HTML and CSS.
                      The first method involves using CSS margin: auto to center
                      the div horizontally within a larger container. The second
                      method employs CSS Flexbox, allowing for both horizontal and
                      vertical centering by setting properties like display: flex,
                      justify-content, and align-items. The third method utilizes
                      CSS Grid, offering powerful layout capabilities and
                      centering through display: grid and place-items: center. The
                      choice of method depends on specific design needs and
                      browser compatibility, providing developers with versatile
                      solutions for centered div elements in web layouts.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex justify-end w-full">
                <a
                  class="flex items-center text-sm text-slate-800 dark:text-slate-100 duration-100 transition-all hover:underline"
                  href="/showcase"
                  >Read all posts<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevrons-right"
                  >
                    <path d="m6 17 5-5-5-5"></path>
                    <path d="m13 17 5-5-5-5"></path></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
       
    </div>
  </div>
</template>

