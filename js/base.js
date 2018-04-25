const myVue = new Vue({
    el:'#app',
    data:{
        time: null,
        totalTime:(25 * 60),
        resetButton:false
    },
    methods:{
        play:function(){

            this.time = setInterval(() => this.countdown(), 1000);
            this.resetButton = true

        },
        countdown:function(){

            return this.totalTime--;
        
        },
        stop:function(){

            clearInterval(this.time);
            this.time = null;
            this.resetButton = true

        },
        reset:function(){

            this.totalTime = (25 * 60);
            clearInterval(this.time);
            this.time = null;
            this.resetButton = false;
        }
    },
    computed:{
        minutes:function(){
            var menit = Math.floor(this.totalTime / 60);
            
            if(menit < 10){
                var format = '0'+ menit
                return format
            }else {
                return menit
            }
        },
        second:function(){
            var detik = this.totalTime - (this.minutes * 60);

            if(detik < 10){
                var format = '0' + detik
                return format
            } else{
                return detik
            }
        }
    }
});