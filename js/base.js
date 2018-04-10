const myVue = new Vue({
    el:'#app',
    data:{
        waktu: null,
        totalTime:(25 * 60)
    },
    methods:{
        play:function(){
            setInterval(() => this.countdown(), 1000);
        },
        countdown:function(){
            return this.totalTime--;
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