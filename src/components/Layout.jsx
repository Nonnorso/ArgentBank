import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import '../Styles/layout.css'


export default function Layout (){

    return (
    <div className="mainContainer">
        <div className="content">
            <Header/>        
            <Outlet/>
        </div>
        <Footer/>
    </div>
    );
}