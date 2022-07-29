declare namespace globalThis {
  // 属性声明一定要用 var！否则不生效！
  var jsdom: any;
}
// 添加 .less 文件的类型定义
declare module "*.less" {
  const content: any;
  export default content;
}
