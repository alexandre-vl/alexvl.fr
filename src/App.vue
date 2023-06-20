<template>
    <header class="h-full min-h-full lg:min-h-screen py-20 lg:pb-20 w-full flex items-center justify-center gap-2 px-5 z-10">
        <div class="w-fit flex flex-col gap-10">
            <div class="flex items-center justify-center flex-col gap-2">
                <RouterLink to="/" >
                    <img width="48" height="48" alt="Logo Alexandre Vargas Lopez" loading="lazy" src="@/assets/logo.webp" class="w-12 h-12 cursor-pointer hover:drop-shadow-md transition-all" />
                </RouterLink>
                <div class="flex items-center gap-2 justify-center">
                    <a aria-label="Github page alexandre vargas lopez" alt="Github page alexandre vargas lopez" href="https://github.com/alexandre-vl" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-muted-foreground hover:text-foreground transition-all w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.24669C6.475 2.24669 2 6.72169 2 12.2467C2 16.6717 4.8625 20.4092 8.8375 21.7342C9.3375 21.8217 9.525 21.5217 9.525 21.2592C9.525 21.0217 9.5125 20.2342 9.5125 19.3967C7 19.8592 6.35 18.7842 6.15 18.2217C6.0375 17.9342 5.55 17.0467 5.125 16.8092C4.775 16.6217 4.275 16.1592 5.1125 16.1467C5.9 16.1342 6.4625 16.8717 6.65 17.1717C7.55 18.6842 8.9875 18.2592 9.5625 17.9967C9.65 17.3467 9.9125 16.9092 10.2 16.6592C7.975 16.4092 5.65 15.5467 5.65 11.7217C5.65 10.6342 6.0375 9.73419 6.675 9.03419C6.575 8.78419 6.225 7.75919 6.775 6.38419C6.775 6.38419 7.6125 6.12169 9.525 7.40919C10.325 7.18419 11.175 7.07169 12.025 7.07169C12.875 7.07169 13.725 7.18419 14.525 7.40919C16.4375 6.10919 17.275 6.38419 17.275 6.38419C17.825 7.75919 17.475 8.78419 17.375 9.03419C18.0125 9.73419 18.4 10.6217 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.2 16.9717 14.5125 17.5717 14.5125 18.5092C14.5125 19.8467 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.1727 21.064 18.8977 19.7882 20.1198 18.0862C21.3419 16.3843 21.9995 14.3419 22 12.2467C22 6.72169 17.525 2.24669 12 2.24669Z"/>
                        </svg>

                    </a>
                    <a aria-label="Linkedin page alexandre vargas lopez" alt="Linkedin page alexandre vargas lopez" href="https://www.linkedin.com/in/alexandre-vargas-lopez-1b6450233/" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-muted-foreground hover:text-foreground transition-all w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"/>
                        </svg>
                    </a>
                    <a aria-label="Twitter page alexandre vargas lopez" alt="Twitter page alexandre vargas lopez" href="https://twitter.com/alexx_vrgs" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-muted-foreground hover:text-foreground transition-all w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9525 7.9201C19.9647 8.09642 19.9647 8.27273 19.9647 8.45067C19.9647 13.8726 15.8371 20.1257 8.28966 20.1257V20.1224C6.06013 20.1257 3.8769 19.487 2 18.2829C2.32419 18.3219 2.65001 18.3414 2.97664 18.3422C4.82429 18.3438 6.61913 17.7239 8.07272 16.5823C6.31688 16.549 4.77717 15.4042 4.23928 13.7328C4.85436 13.8514 5.48812 13.8271 6.09181 13.6621C4.17753 13.2754 2.80033 11.5935 2.80033 9.64019C2.80033 9.62232 2.80033 9.60525 2.80033 9.58819C3.37071 9.90588 4.00934 10.0822 4.6626 10.1017C2.85964 8.89674 2.30388 6.49821 3.39265 4.62293C5.47593 7.1864 8.54966 8.7448 11.8493 8.90974C11.5186 7.4846 11.9703 5.9912 13.0364 4.98937C14.689 3.43585 17.2882 3.51547 18.8418 5.16731C19.7607 4.98612 20.6415 4.64893 21.4475 4.17117C21.1412 5.121 20.5001 5.92782 19.6437 6.44052C20.457 6.34464 21.2517 6.12689 22 5.79457C21.4491 6.62008 20.7552 7.33916 19.9525 7.9201Z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <RouterView />
        </div>
    </header>

    <div class="flex items-center fixed z-[-1] top-0 left-0 justify-center h-screen w-full after:bg-[url('/grid.svg')] after:z-[1] after:h-full after:w-full after:absolute before:bg-gradient-radial before:from-transparent before:to-background before:h-full before:w-full before:z-[2] before:absolute">
        <div class="bg-blured z-[3]" />
    </div>
</template>

<style>
.bg-blured {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-feature-settings: normal;
    font-variation-settings: normal;
    line-height: inherit;
    --font-satoshi: "__satoshi_f46061","__satoshi_Fallback_f46061";
    --font-inter: "__Inter_0ec1f4","__Inter_Fallback_0ec1f4";
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59,130,246,.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    z-index: 3;
    max-width: 640px;
    background-image: radial-gradient(at 27% 37%,#3a8bfd 0,transparent 0),radial-gradient(at 97% 21%,#72fe7d 0,transparent 50%),radial-gradient(at 52% 99%,#fd3a4e 0,transparent 50%),radial-gradient(at 10% 29%,#855afc 0,transparent 50%),radial-gradient(at 97% 96%,#e4c795 0,transparent 50%),radial-gradient(at 33% 50%,#8ca8e8 0,transparent 50%),radial-gradient(at 79% 53%,#eea5ba 0,transparent 50%);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(150%);
    top: 80px;
    opacity: .15;
}
</style>