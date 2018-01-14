<template>
  <div class="container is-widescreen">
      <div class="content">
        <app-header></app-header>
        <app-input></app-input>
        <app-footer></app-footer>
      </div>    
  </div>
</template>
<script>
import AppHeader from "./AppHeader"
import AppInput from "./AppInput"
import AppFooter from "./AppFooter"

export default{
    components:{
        "app-header" : AppHeader,
        "app-input": AppInput,
        "app-footer": AppFooter
    }
}
</script>
