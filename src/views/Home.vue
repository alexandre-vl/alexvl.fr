
<template>
    <main>
        <div class="flex gap-3 items-center flex-wrap w-full justify-center max-w-6xl h-fit">
            <a href="https://www.devolab.net" target="_blank" alt="DevoLab Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:shadow-xl hover:border-secondary transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden">
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <h1 class="text-white">Devolab.net</h1>
                        <p class="text-muted-foreground">The web agency for the creation of your websites.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full">
                    <img width="382" height="222" alt="Website Github" loading="lazy" src="@/assets/screenshot/devolab.net.webp" class="w-96 h-full object-cover rounded-t-lg" />
                </div>
            </a>
            <a href="https://upsky.io" target="_blank" alt="Upsky Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:shadow-xl hover:border-secondary transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden">
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <h1 class="text-white">Upsky.io</h1>
                        <p class="text-muted-foreground">Trade and follow to make profit securely.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full">
                    <img width="382" height="222" alt="Website Github" loading="lazy" src="@/assets/screenshot/upsky.io.webp" class="w-96 h-full object-cover rounded-t-lg" />
                </div>
            </a>
            <a href="https://yaprof.fr" target="_blank" alt="Yaprof Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:shadow-xl hover:border-secondary transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden">
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <h1 class="text-white">Yaprof.fr</h1>
                        <p class="text-muted-foreground">The Pronote student tool as a mobile application.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full">
                    <img width="382" height="222" alt="Website Github" loading="lazy" src="@/assets/screenshot/yaprof.webp" class="w-96 h-full object-cover rounded-t-lg" />
                </div>
            </a>
            <a href="https://discord.gg/homeflix" target="_blank" alt="Homeflix Alexandre VARGAS LOPEZ" class="px-8 pt-5 rounded-lg border-[1px] border-input bg-card cursor-pointer hover:shadow-xl hover:border-secondary transition-all flex flex-col gap-8 h-80 w-full md:w-[28rem] overflow-hidden">
                <div class="flex gap-4 items-center">
                    <div class="flex flex-col">
                        <h1 class="text-white">Discord.gg/homeflix</h1>
                        <p class="text-muted-foreground">The Discord bot for streaming high-quality movies.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full">
                    <img width="382" height="222" alt="Website Github" loading="lazy" src="@/assets/screenshot/homeflix.webp" class="w-96 h-full object-cover rounded-t-lg" />
                </div>
            </a>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            discord_user: null
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

    }

}
</script>
