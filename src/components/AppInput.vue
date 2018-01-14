<template>
    <div>
        <div class="columns">
            <div class="column">
            </div>
            <div class="column is-four-fifths has-text-centered">
                <textarea v-model="textInput" class="textarea is-primary is-medium" name="text_input" id="text_input" rows="6" placeholder="Paste text to read faster"></textarea>
            </div> 
            <div class="column">
            </div>  
        </div>
        <div class="columns">
            <div class="column">
            </div>
            <div class="column is-four-fifths levels">
                <div class="level-right">
                    <a class="level-item button is-info" @click="reset">Reset</a>
                    <a class="level-item button is-success" @click="start">Start</a>
                </div>
            </div> 
            <div class="column">
            </div>  
        </div>
        <app-viewer v-if="viewerIsActive"></app-viewer>
    </div>
</template>

<script>
import AppViewer from "./AppViewer.vue"
export default{
    name: "AppInput",
    components:{
        "app-viewer": AppViewer
    },
    data() {
        return {
            textInput: "",
            viewerIsActive: false,
            textInputPieces: []
        }
    },
    methods:{
        reset(){
            this.textInput = ""
            this.viewerIsActive = false;
            this.$store.dispatch('reset');
        },
        start(){
            this.viewerIsActive = false;
            setTimeout(() => {
                this.$store.dispatch('reset');
                let textInputPieces = this.textInput.split(" ");

                this.$store.dispatch('start', textInputPieces);
                this.viewerIsActive = true;
            },500);
           
        }
    }
}
</script>

