import { Reservation } from "../types/film";
import { useEffect } from "react";

interface UserReservationsProps {
    reservations: Reservation[],
    filmName: string;
    price: number;
}

const UserReservations = ({ reservations, filmName, price }: UserReservationsProps) => {
    const userId: any = localStorage.getItem('userId');
    useEffect(() => {
        reservations = reservations.filter(r => r.userId === userId);
    }, []);
    return (
        <>
            {reservations.length > 0 &&
                <div className="container-tickets">
                    <h2>Your Tickets</h2>
                    {reservations.map(r => {
                        return (
                            <div key={r.seatNumber}>
                                <h3>Ticket</h3>
                                <div style={{ marginTop: 10 }}>Film Name :{filmName}</div>
                                <div style={{ marginTop: 10 }}>Price :{price}</div>
                                <div style={{ marginTop: 10 }}>Seat Number :{r.seatNumber}</div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
}

export default UserReservations;