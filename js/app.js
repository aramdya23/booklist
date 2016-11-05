/**
 * Created by aram on 11/5/16.
 */

var App ={
    Models : {},
    Views : {},
    Collections : {}


};

App.Models.BookModel = Backbone.Model.extend({

    defaults: {

        "id": 0,
        "title": "",
        "author": 0,
        "publisher": "",
        "date": 0,
        "isbn": 0,
        "language": "",
        "pages": 0,
        "barcode": 0,
        "series": "",
        "cover": "",
        "price": 0,
        "count": 0,
        "image": ""

    }

});


App.Views.BookListView = Backbone.View.extend({
    tagName: "li",

    render: function () {
        // this.$el.html(this.tagName);
        console.log(this.model);
    }

});


var m = new App.Models.BookModel;
var a = new App.Views.BookListView(m.defaults);
a.render();


