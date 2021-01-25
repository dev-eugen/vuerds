export default {
    data() {
        return {
            time: 20
        }
    },
    mounted() {
        setInterval(() => {
            this.time == 0 ? this.time = 9 : this.time--
        }
            , 1000)
    },
    methods: {
        restartTime() {
            this.time = 9
            
        }
    }
}