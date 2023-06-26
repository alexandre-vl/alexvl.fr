<template>
    <main>
        <div class="flex flex-col items-center gap-2 relative max-w-6xl h-fit">
            <h1 class="text-foreground pb-2">Password Generator</h1>
            <Transition name="slide-up">
                <p v-if="copied" class="text-green-400 bg-input py-2.5 px-5 rounded-lg absolute -top-2 left-auto shadow-2xl select-none">Copied</p>
            </Transition>
            <input @focus="selectAndCopy" id="input-password" type="text" class="bg-card border-[1px] rounded-lg border-input py-2.5 px-5 text-foreground outline-none focus:ring-1 focus:ring-muted-foreground w-72 hover:shadow-xl transition-all overflow-hidden bg-opacity-40 backdrop-blur-2xl" :value="password" placeholder="Loading..." />
            <button @click="generatePassword(22)" class="text-muted-foreground py-2.5 pb-5 pt-2">Generate new</button>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            password: null,
            copied: false
        }
    },
    methods: {
        generatePassword(char) {
            let charset = "@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz"
            let pwd = ""
            for (let i = 0; i < char; i++) {
                pwd += charset[Math.floor(Math.random() * charset.length)]
            }
            this.password = pwd
            return pwd
        },
        selectAndCopy(event) {
            let input = event.target
            input.select()
            input.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(this.password)
            this.copied = true
            setTimeout(() => {
                this.copied = false
            }, 3000)
        }
    },
    mounted() {
        this.generatePassword(22)
    },
}
</script>