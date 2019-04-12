// このプロジェクト全てのJavaScriptの依存関係が読み込まむ（Vueや他のライブラリも）
require("./bootstrap");
window.Vue = require("vue");

// 新しくVueのインスタンスを作成＆ページに追加
// ビューに記載の<example-component></example-component>コンポーネントはここで作られてる
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue")
);

const app = new Vue({
    el: "#app"
});
