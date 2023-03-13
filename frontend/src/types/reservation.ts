export interface Reservation{
    userId:number;
    filmId:number;
    seatNumber:number;
}
export interface ReservationState{
    reservations:Reservation[];
    loading:boolean;
    error:string;
}
