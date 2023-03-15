const connection=require('../db/db');

module.exports=class Reservation{
        constructor(userId,filmId,seatNumber){
            this.userId=userId;
            this.filmId=filmId;
            this.seatNumber=seatNumber;
        }
    saveSeat(){
        return connection.query('INSERT INTO reservations(userId,filmId,seatNumber) VALUES(?,?,?)',[this.userId,this.filmId,this.seatNumber]);
    }    
    static getSeatsByFilmId(filmId){
        return connection.query('SELECT * FROM reservations WHERE reservations.filmId=?',[filmId]); 
    }
    static getReservationsByUserId(userId){
        return connection.query('SELECT seatNumber FROM reservations WHERE reservations.userId=?',[userId]);
    } 
}