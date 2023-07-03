export class Reservation {
    constructor(
        public userId?:number ,
        public filmId?: number,
        public seatNumber?: number,
    ) { }
}