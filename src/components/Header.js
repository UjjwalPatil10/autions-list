import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Master from './modal/Master';
import Details from './modal/Details';
import StockFile from './modal/StockFile';

import "../components/got.css"
const Header = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleNavigation = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <div >

            <div className="row m-0" style={{ backgroundColor: "gainsboro" }}>
                <div className="col-sm-4" style={{ position: "relative", left: "65px" }}>
                    <div className="page-header float-left">
                        <div className="page-title">
                            <p style={{ fontSize: "23px" }}>Dashboard</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 d-flex justify-content-end align-content-center  " style={{ position: "relative", right: "65px", alignItems: "center" }}>
                    <Button variant="primary" style={{ height: "39px" }} onClick={handleShow}>
                        Add Auction
                    </Button>
                    <div style={{ overflowY: "hidden" }}>
                        <Modal show={show} onHide={handleClose} className="modal-dialog modal-lg" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} >
                            <Modal.Header closeButton>
                                <Modal.Title>Add Auction details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="yup">
                                    <Link to="/master" className="border-0 bg-white text-black  text-decoration-none m-3 color bg-danger hover-effect">
                                        Master
                                    </Link>
                                    <Link to="/details" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect">
                                        Details
                                    </Link>
                                    <Link to="/stockfile" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect">
                                        Stock File Upload
                                    </Link>
                                </div>
                                <hr />
                                <div>
                                    <Routes>
                                        <Route path="/master" element={<Master />} />
                                        <Route path="/details" element={<Details />} />
                                        <Route path="/stockfile" element={<StockFile />} />
                                    </Routes>
                                    <div className="d-flex justify-content-end mt-3">
                                        < Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>

                                    </div>

                                </div>

                            </Modal.Body>

                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button> */}
                                {/*   */}
                            </Modal.Footer>
                            {/* Route components to conditionally render content */}

                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
