
import { Navigate, Route, useNavigate, useLocation } from 'react-router-dom';

export default function Book({ Book }) {
    let navigate = useNavigate();
    const onBookClick = () => {
        console.log("clicked");
        navigate("/BookInfo", { replace: true });}
        return (

            <h1 onClick={onBookClick}>book</h1>
        )
    
}