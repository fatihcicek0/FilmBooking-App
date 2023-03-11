const connection=require('../db/db');

module.exports=class Reservation{
        constructor(userId,filmId){
            this.userId=userId;
            this.filmId=filmId;
        }
    saveSeat(){
        return connection.query('INSERT INTO seats(userId,filmId) VALUES(?,?)',[this.userId,this.userId]);
    }    
    static getSeatsByFilmId(filmId){
        return connection.query('SELECT * FROM seats WHERE seats.filmId=?',[filmId]); 
    }
}