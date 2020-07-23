/**
 * 组件模板
 */
const fullVueComp = (componentName) => {
  const dashComponentName = componentName.replace(/[A-Z]/g, function (val) {
    return `-${val.toLowerCase()}`;
  });
  const templateFile = `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>
<script>
//  常量声明
const value = {msg:"Hello World!"};

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: '${componentName}',
  mixins:[],
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World!")
    }
  },
  filters:{},
  created(){},
  mounted(){},
  destoryed(){}
}
</script>
<style scoped>
.${dashComponentName} {

}
</style>`;
  return templateFile;
};

module.exports = { fullVueComp };
