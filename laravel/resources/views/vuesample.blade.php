<!DOCTYPE html>
<html lang="{{ config('app.locale')}}">
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="csrf-token" content="{{ csrf_token() }}">

   <title>Laravel Mix に挑戦！ 〜LaravelでVue.jsをうごかすまで〜</title>

   <link rel="stylesheet" href="{{ mix('css/app.css') }}">

 </head>

 <body>
     <div id="app">
         <!--デフォルトでappの要素中でvue.jsが有効になっている-->
         <example-component></example-component>

     </div>

 <!--vue.jsのコンポートなどをロードするので、app.jsは全てのコンポートのあとに追加する。-->
 <script src="{{ mix('js/app.js') }}" ></script>
 </body>

</html>