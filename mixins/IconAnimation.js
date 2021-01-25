export default {
    data: () => ({
        TargeticonAnimation: "spin",
        animations:[
            "tada",
            "flashing",
            "brust",
            "spin"
        ]
    }),
    mounted(){
        setInterval(() => {this.TargeticonAnimation = this.animations[Math.floor(Math.random() * Math.floor(4))]},2000);
    }
}