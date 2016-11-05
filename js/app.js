/**
 * Created by aram on 11/5/16.
 */

var App ={
    Models : {},
    Views : {},
    Collections : {}


};

App.Models.bookModel = Backbone.Model.extend({

    "title": "srst",
    "name" : 23

});

var Sidebar = Backbone.Model.extend({
    promptColor: function() {
        var cssColor = prompt("Пожалуйста, введите CSS-цвет:");
        this.set({color: cssColor});
    }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
    $('#sidebar').css({background: color});
});

sidebar.set({color: 'white'});

sidebar.promptColor();
