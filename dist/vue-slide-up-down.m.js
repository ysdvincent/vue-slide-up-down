export default{name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,isMounted:!1}},render:function(t){return t(this.tag,{style:this.style,ref:"container"},this.$slots.default)},mounted:function(){var t=this;window.addEventListener("resize",this.layout),this.layout(),this.$nextTick(function(){t.isMounted=!0})},destroyed:function(){window.removeEventListener("resize",this.layout)},computed:{style:function(){return{overflow:"hidden","transition-property":"height",height:this.isMounted?(this.active?this.scrollHeight:0)+"px":"auto","transition-duration":this.duration+"ms"}}},methods:{layout:function(){this.scrollHeight=this.$refs.container.scrollHeight}}};
//# sourceMappingURL=vue-slide-up-down.m.js.map
