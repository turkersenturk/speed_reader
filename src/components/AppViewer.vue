<template>
  <div class="columns">
            <div class="column">
            </div>
            <div class="column is-four-fifths levels">
                <div v-html="textValue"></div>
                <div class="level-right">
                    {{percent}}
                </div>
            </div> 
            <div class="column">
            </div> 
        </div>
</template>
<script>
import {mapGetters} from "vuex"

export default{
    props:[
        "textInputPieces"
    ],
    data(){
        return {
            limit: 0,
            chunkedPieces: [],
            deneme: false,
        }
    },
    created(){
        this.chunkedPieces = _.chunk(this.$store.getters.textInputPieces, 2);
        this.limit = this.chunkedPieces.length;    
    },
    mounted(){
        this.$store.watch((state) => this.$store.getters['counter'], counter => {
            let currentIndex = this.$store.getters["counter"];
            let current = document.getElementById('piece_'+currentIndex);
            if(current !== null){
                current.classList.add("textcurrent");
                if(currentIndex > 1){
                    let previous = document.getElementById('piece_'+(currentIndex-1));
                    previous.classList.remove("textcurrent");
                }
            }
        });
    },
    computed:{
        percent(){
            this.$store.dispatch("increment", this.limit);
            let percent = Math.round(100 * (parseInt(this.$store.getters["counter"]) / this.limit));
            return percent + "%";
        },
        textValue(){
            let index = 1;
            let ad = this.chunkedPieces.map((item) => {
                return "<span class='textnoncurrent' id='piece_" + index++ + "'>" + item.join(" ") + "</span>";
            }).join(" ");
            return ad;
        }
    }
}
</script>

<style>
.textnoncurrent{
    color:darkgrey
}
.textcurrent{
    color:black !important;
}
</style>
