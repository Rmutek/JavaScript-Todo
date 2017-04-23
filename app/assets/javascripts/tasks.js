/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      list: 'To Do List',
      tasks: [
        'Do Yoga', 
        'Make a new app', 
        'Go to brunch with Kevin at Publican'
      ] 
    }
  });
});
