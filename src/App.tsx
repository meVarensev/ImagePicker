import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/home/home-page";
import {ViewAllPhoto} from "./pages/view-all-photo/view-all-photo";
import {PaymentProduct} from "./pages/payment-product/payment-product";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/allPhoto" element={<ViewAllPhoto/>}/>
                    <Route path="/payment" element={<PaymentProduct/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
