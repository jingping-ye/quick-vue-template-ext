/**
 * 组件模板
 */
const fullVueComp = (componentName) => {
  /**
   * 获取组件名称
   * @param {String} str 初始组件名称
   * @note 大驼峰法
   */
  const getNameComp = function (str) {
    return str.replace(str[0], function (val) {
      return val.toUpperCase();
    });
  };

  /***
   * 获取类名称
   * @note 连字符法
   */
  const getNameClass = function (str) {
    return str.replace(/[A-Z]/g, function (val, index) {
      if (index !== 0) {
        return `-${val.toLowerCase()}`;
      } else {
        return val.toLowerCase();
      }
    });
  };

  const compName = getNameComp(componentName);
  const className = getNameClass(componentName);

  const templateFile = `<template>
  <div class="${className}">
    ${componentName}组件
  </div>
</template>
<script>
//  常量声明
const value = {msg:"Hello World!"};

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: '${compName}',
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
<style lang="scss" scoped>
.${className} {

}
</style>`;
  return templateFile;
};

module.exports = { fullVueComp };
