<template>
    <main>
        <div class="flex flex-col items-center gap-2 relative max-w-3xl h-fit">
            <h1 class="text-foreground pb-2">Typing Test</h1>
            <div class="flex flex-col">
                <p class="text-xl text-center tracking-[-2px] select-none">
                    <span :id="letter" class="text-foreground text-opacity-40 border-r-[2px] border-white/40 relative animate-[typing_800ms_ease_infinite] !border-transparent" v-for="(letter, index) in typing_text?.split('')" :key="index">{{ letter }}</span>
                </p>
                <div class="pt-5 w-full flex flex-col items-center justify-center" :class="typing_text?.length == typed?.length ? '' : 'opacity-0 select-none'">
                    <div class="flex items-center w-full justify-center gap-5 text-foreground">
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-lg text-opacity-60 text-foreground">{{ time }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                            </svg>

                            <p class="text-lg text-opacity-60 text-foreground">{{ accuracy }}%</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <p class="text-lg text-opacity-60 text-foreground">{{ wpm }} WPM</p>
                        </div>
                    </div>
                    <button @click="resetTypingTest()" class="text-muted-foreground py-2.5 pb-5 pt-5">Generate new</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            dictations: [
                `J'aime mon quartier. On y trouve un parc, une banque et une école. Les rues de mon quartier sont toutes nommées en l'honneur de personnes célèbres. L'avenue où j'habite a été nommée en l'honneur d'un écrivain très connu. Mon ami, lui, habite sur une rue qui porte le nom d'un acteur qui est né dans notre ville.`,
                `Beaucoup de choses fonctionnent avec de l'énergie. Mais il y a des types d'énergie qui sont mauvais pour l'environnement. Ils produisent des gaz à effet de serre et polluent la planète. Pour protéger notre belle planète, il faut économiser l'énergie. On peut aussi utiliser d'autres sources d'énergie.`,
                `J'habite dans la capitale du pays. C'est une jolie ville, même si elle est grande. Le quartier où j'habite est situé juste au sud de l'aéroport. Ma maison est près d'un beau parc. Il porte le nom d'un explorateur. J'adore aller jouer dans ce parc avec mes amis.`,
                `Mamadou habite près du grand fleuve. Chaque matin, Mamadou et son frère vont chercher de l'eau au fleuve pour faire boire les animaux. Le soir, ils vont en chercher pour arroser le jardin. Ensuite, ils vont faire un tour de pirogue avec leur papa pour attraper quelques poissons.`,
                `Annie et ses amis ont adopté un cours d'eau. Chaque semaine, ils vont tous ensemble en faire le ménage. Ils apportent un grand sac et une poubelle pour les déchets qu'ils trouvent. Ils apportent aussi un bac pour tout ce qui est recyclable. Grâce à eux, le cours d'eau est moins pollué.`,
                `Ce soir, c'est la fête au village. J'ai hâte. Déjà les musiciens se préparent. Ils ont sorti leurs instruments. J'adore les écouter. Leur musique me donne envie de frapper des mains et de danser. Un jour, moi aussi je vais jouer du djembé et faire danser les gens du village.`,
                `Entends-tu le son du tambour ? C'est le griot qui arrive au village. J'aime l'écouter nous chanter l'histoire de notre pays. J'apprends beaucoup de choses à l'entendre. Parfois, aussi, il nous apporte des nouvelles du village voisin. Tiens ! Je le vois qui avance avec sa kora. Vite, allons voir ce qu'il a à nous raconter !`,
                `Dans sa classe, Philippe a fait un projet sur l'activité physique. Il a appris que celle-ci est excellente pour la santé. Elle aide le coeur à rester en forme et permet aux muscles de devenir plus forts. Elle peut même aider à prévenir certaines maladies.`,
                `L'école d'Abdou est spéciale. Depuis un an, elle fonctionne à l'énergie solaire. Avant, il n'y avait pas d'électricité à son école. Le professeur utilisait toujours le tableau noir. Maintenant, un système donne de l'électricité à partir du soleil. C'est fantastique ! Et c'est bon pour l'environnement. Abdou aime beaucoup aller à l'école. Sa maman aussi.`,
                `Je veux rester en santé, alors j'ai changé mes habitudes. Je me nourris toujours de bons aliments pour donner de l'énergie à mon corps. Je mange des produits laitiers, car ils sont excellents pour mes dents et mes os. Je bois beaucoup d'eau et chaque jour, je fais de l'activité physique pour garder mon coeur en forme.`,
                `Abu vient d'acheter une jolie maison dans sa nouvelle ville. Cette maison est très grande. Les murs sont faits de blocs de ciment et le toit, de tôle. Une jolie clôture entoure la cour. Mais ce qu'Abu aime le plus de sa maison, c'est qu'elle n'a aucun étage.`,
                `La maison où habite Abu n'est pas loin du marché. Abu aime bien y aller chaque jour pour faire des courses. Il achète des légumes et du poisson pour préparer son repas. Il achète aussi des fruits et parfois de la viande. Souvent, il va dire bonjour au marchand de vêtements, qui est devenu son ami.`
            ],
            typing_text: "",
            typed: [],
            errors: [],
            last_letter: null,
            pressed_key: null,
            startTime: null,
            time: null,
            accuracy: null,
            wpm: 0
        }
    },
    methods: {
        findSpansWithLetter(letter) {
            return document?.querySelectorAll("#" + (letter?.match(/[a-z]/i) ? letter : ("\\" + letter)))
        },
        getTimeAgo(endTime, startTime) {
            var timeDiff = endTime - startTime;

            var hours = Math.floor(timeDiff / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            var milliseconds = timeDiff % 1000;

            var elapsedTime = "";
            if (hours > 0) {
                elapsedTime += hours + "h" + ", ";
            }
            if (minutes > 0) {
                elapsedTime += minutes + "m" + ", ";
            }
            if (seconds > 0) {
                elapsedTime += seconds + "s"+ ", ";
            }
            elapsedTime += milliseconds + "ms";

            return elapsedTime;
        },
        resetTypingTest() {
            window.location.reload()
        }
    },
    mounted() {
        let random = Math.floor(Math.random() * this.dictations?.length)
        this.typing_text = this.dictations[random]
        console.log(this.dictations?.length, this.typing_text?.length, random)
        window.addEventListener('keydown', (e) => {
            if (this.last_letter == 'Dead' && ["o", "u", "e", "a"].includes(e.key)) {
                switch (e.key) {
                    case "o":
                        this.pressed_key = "ô"
                        break
                    case "u":
                        this.pressed_key = "û"
                        break
                    case "e":
                        this.pressed_key = "ê"
                        break
                    case "a":
                        this.pressed_key = "â"
                        break
                }
            } else
                this.pressed_key = e.key
            this.last_letter = e.key
        })
        window.addEventListener('keypress', (e) => {
            if (this.typed.length == 0) this.startTime = new Date().getTime()
            let key = this.pressed_key

            let all_spans = Array.prototype.slice.call(document?.querySelectorAll('span'))
            let found_spans = this.findSpansWithLetter(key)
            let specific_letter_typed = this.typed.filter(l => l == key)
            let letter_span = found_spans[specific_letter_typed.length]

            if (this.typing_text[this.typed.length] !== key || !letter_span) {
                return this.errors.push(e.key)
            }
            this.typed.push(key)

            let previous_letter = all_spans[all_spans.indexOf(letter_span) - 1]

            letter_span?.classList?.toggle('!text-green-400')
            letter_span?.classList?.toggle('!border-transparent')
            previous_letter?.classList?.toggle('!border-transparent')

            if (this.typing_text.length == this.typed.length) {
                this.time = this.getTimeAgo(new Date().getTime(), this.startTime)
                this.accuracy = Math.floor(100 - (this.errors.length / this.typed.length * 100))
                let words = this.typing_text.split(', ').join('\'').split('\'').join('. ').split('. ').join(' : ').split(' : ').join(' ! ').split(' ! ').join(' ? ').split(' ? ').join(' ').split(' ')
                let time_seconds = (new Date().getTime() - this.startTime) / 1000 / 60
                this.wpm = Math.floor((words.length / time_seconds))
            }
        })
    },
}
</script>

<style>

</style>