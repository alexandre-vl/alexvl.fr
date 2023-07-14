
<template>
    <main>
        <div class="flex gap-3 items-center flex-wrap justify-center w-screen h-fit px-5 md:px-0">
            <swiper class="w-full z-50 !py-20"
            :direction="'horizontal'"
            :pagination="{
                el: '.swiper-pag',
                type: 'progressbar',
            }"
            :slides-per-view="'auto'"
            :modules="modules"
            :centeredSlides="true"
            :mousewheel="true"
            :speed= "600"
            :space-between="20">
                <swiper-slide class="w-full md:!w-[28rem] group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#89a3f6] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" href="https://www.devolab.net" target="_blank" alt="DevoLab Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Devolab.net</h1>
                                <p class="text-muted-foreground">The web agency for the creation of your websites.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website DevoLab" loading="lazy" src="@/assets/screenshot/devolab.net.webp" class="w-full h-full object-cover object-top" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide class="w-full md:!w-[28rem] group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#12a3eb] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" href="https://upsky.io" target="_blank" alt="Upsky Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Upsky.io</h1>
                                <p class="text-muted-foreground">Trade and follow to make profit securely.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website Upsky" loading="lazy" src="@/assets/screenshot/upsky.io.webp" class="w-full h-full object-cover object-top" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide class="w-full md:!w-[28rem] group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#926DFB] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" href="https://vynter.app" target="_blank" alt="Vynter Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Vynter.app</h1>
                                <p class="text-muted-foreground">The best Vinted resell application.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website Vynter" loading="lazy" src="@/assets/screenshot/vynter.app.webp" class="w-full h-full object-cover object-top" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide class="w-full md:!w-[28rem] group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#d4ffb8] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" href="https://yaprof.fr" target="_blank" alt="Yaprof Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Yaprof.fr</h1>
                                <p class="text-muted-foreground">The Pronote student tool as a mobile application.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website Yaprof" loading="lazy" src="@/assets/screenshot/yaprof.webp" class="w-full h-full object-cover object-top scale-105" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide class="w-full md:!w-[28rem] relative group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#E14358] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" href="https://discord.gg/homeflix" target="_blank" alt="Homeflix Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Discord.gg/homeflix</h1>
                                <p class="text-muted-foreground">The Discord bot for streaming high-quality movies.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website Homeflix" loading="lazy" src="@/assets/screenshot/homeflix.webp" class=" h-full object-cover scale-105" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide class="w-full md:!w-[28rem] group">
                    <div class="h-10 w-full rounded-full absolute bottom-0 left-0 bg-[#E51E7C] group-hover:opacity-100 opacity-0 transition-all" />
                    <a v-if="loaded" alt="Playbot Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:border-secondary hover:shadow-2xl transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden bg-opacity-40 backdrop-blur-2xl">
                        <div class="flex gap-4 items-center">
                            <div class="flex flex-col">
                                <h1 class="text-white">Playbot</h1>
                                <p class="text-muted-foreground">The application will allow you to find gaming teammates.</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-96 h-full overflow-hidden rounded-t-lg">
                            <img width="382" height="222" alt="Website Playbot" loading="lazy" src="@/assets/screenshot/pb.webp" class="w-full h-full object-cover object-top" />
                        </div>
                    </a>
                </swiper-slide>
                <div class="w-full flex items-center justify-center pt-10 fixed bottom-0">
                    <div class="swiper-pag !relative !bottom-5 !left-0 !top-auto !w-1/3 rounded-md overflow-hidden">
                    </div>
                </div>
            </swiper>
        </div>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios'
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
          modules: [Pagination, Keyboard, Mousewheel],
      };
    },
    data() {
        return {
            discord_user: null,
            loaded: false
        }
    },
    methods: {
        async fetchDiscordUser(id) {
            console.log(this.token)
            let response = await axios.get(`https://discordapp.com/api/v9/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${this.token}`
                },
                /* proxy: {
                    protocol: 'http',
                    host: '2.56.119.93',
                    port: 5074,
                     auth: {
                        username: "bnzkqyqw",
                        password: "oveitvpw2det"
                    } 
                } */
            })
            return response
        }
    },
    async mounted() {
        this.loaded = true
    }

}
</script>

<style>
.swiper-pagination-progressbar-fill {
    background-color: #1D283A !important;
}
</style>