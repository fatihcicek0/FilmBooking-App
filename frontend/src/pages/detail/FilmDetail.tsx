import { FilmDispatch, Reservation } from "../../types/film";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReservation, getFilm } from "../../store/actions/filmActions";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import './detail.scss'
import Modal from '@mui/material/Modal';

const FilmDetail = () => {

  const dispatch: FilmDispatch = useDispatch();
  const { filmDetail, reservations } = useSelector((state: AppState) => state.film);
  const sequentialReservations=reservations.sort(function(a, b){return a.seatNumber - b.seatNumber});
  const { filmId } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<number>(0);
  const userId = Number(localStorage.getItem('userId'));
  const [data, setData] = useState<Reservation>({ userId: userId, seatNumber: selectedSeat, filmId: Number(filmId) })
  useEffect(() => {
    dispatch(getFilm(Number(filmId)));
  }, [])

  const getSeats = (): any => {
    let content: any[] = [];
    var j = 0;
    for (var i = 0; i < filmDetail.seatQuantity; i++) {
      content.push(
        <div id={`${i + 1}`}
          onClick={seatOnClick}
          className={"seat" + " " + (i + 1 === sequentialReservations[j]?.seatNumber ? "reserved" : "")} >
          {i + 1}
        </div>);

      if (i + 1 === reservations[j]?.seatNumber) {
        j++;
      }
    }
    return content;
  };

  const seatOnClick = (e: any) => {
    if (!reservations.find(s => s.seatNumber == e.target.id)) {
      setSelectedSeat(e.target.id);
      setOpen(true);
    }
  }
  useEffect(() => {
    setData({ ...data, seatNumber: Number(selectedSeat) });
  }, [selectedSeat])

  const payOnClick = () => {
    dispatch(addReservation(data));
    setOpen(false);
  }

  return (
    <div className="detail">
      <div className="container">
        <Modal
          open={open}
          onClose={() => { setOpen(false) }}
        >
          <div className="modal" style={modal}>
            <div>
              <h3>Ticket</h3>
              <div style={{ marginTop: 10 }}>Film Name :{filmDetail.name}</div>
              <div style={{ marginTop: 10 }}>Price :{filmDetail.price}</div>
              <div style={{ marginTop: 10 }}>Seat Number :{selectedSeat}</div>
            </div>
            <button onClick={payOnClick} style={{ marginTop: 10, padding: 5, backgroundColor: 'blue', color: 'white' }}>
              Pay
            </button>
          </div>
        </Modal>
        <div className="banner">
          <img src={filmDetail.img}></img>
        </div>
        <div className="container-seat">
          {getSeats()}
        </div>
      </div>
    </div>
  );
}
const modal: any = {
  width: 300,
  height: 200,
  backgroundColor: 'white',
  margin: '120px  auto',
  padding: '30px 50px',
  boxSizing: 'border-box',
  borderRadius: 10
};

export default FilmDetail;