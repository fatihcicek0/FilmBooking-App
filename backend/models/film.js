const connection = require("../db/db");

module.exports = class Film {
    constructor(name,seatQuantity,price,img){
        this.name=name;
        this.seatQuantity=seatQuantity;
        this.price=price;
        this.img=img;
    }
    saveFilm(){
        return connection.query('INSERT INTO films(name,seatQuantity,price,img) values(?,?,?,?)',[this.name,this.seatQuantity,this.price,this.img]);
    }
    static getFilms(){
        return connection.query('SELECT * FROM films');
    }
    static getFilmById(id){
        return connection.query('SELECT * FROM films WHERE films.id=?',[id]);
    }
}