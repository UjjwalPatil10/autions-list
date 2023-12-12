import React from 'react'
import "../components/got.css"
const Auctions = () => {
    return (
        <>
            <div className='container-fluid mt-4' style={{ backgroundColor: "#e2e8eb", width: "1250px" }}>


                <div className="overflow-hidden " style={{ width: "1150px", margin: "auto" }} >
                    <div>
                        <h4>Auctions</h4>
                        <hr />
                    </div>
                    <div className="row ">

                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex ">
                                <p className="m-1">show</p>
                                <select className="m-1" style={{ width: "75px", height: "30px" }}>
                                    <option value="1">10</option>
                                    <option value="2">20</option>
                                    <option value="3">50</option>
                                    <option value="4">All</option>
                                </select>

                                <p className="m-1">entries</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                            <p className="m-1" style={{ fontSize: "19px" }}>Search: </p>
                            <input type="text" style={{ height: "30px", borderRadius: "5px", outline: "none", border: "1px solid gray" }} />


                        </div>
                    </div>

                    <div className="row"><div className="col-sm-12"><table id="bootstrap-data-table" className="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="bootstrap-data-table_info">
                        <thead>
                            <tr role="row">
                                <th className="sorting_asc" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: '64px' }}>Name</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="Mode: activate to sort column ascending" style={{ width: '45px' }}>Mode</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="Start Date: activate to sort column ascending" style={{ width: '71px' }}>Start Date</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="End Date: activate to sort column ascending" style={{ width: '71px' }}>End Date</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="PopCornBid: activate to sort column ascending" style={{ width: '94px' }}>PopCornBid</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="Result On: activate to sort column ascending" style={{ width: '67px' }}>Result On</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="No. of Stock: activate to sort column ascending" style={{ width: '59px' }}>No. of Stock</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="No. Of Bids: activate to sort column ascending" style={{ width: '50px' }}>No. Of Bids</th>
                                <th className="sorting" tabIndex="0" aria-controls="bootstrap-data-table" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{ width: '51px' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Airi Satou</td>
                                <td>Finished</td>
                                <td>11/13/2022, 12:16:00PM</td>
                                <td>11/30/2022, 01:00:00PM</td>
                                <td>Disabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="even">
                                <td className="sorting_1">Angelica Ramos</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="odd">
                                <td className="sorting_1">Ashton Cox</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="even">
                                <td className="sorting_1">Bradley Greer</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Disabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="odd">
                                <td className="sorting_1">Brenden Wagner</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Disabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="even">
                                <td className="sorting_1">Brielle Williamson</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="odd">
                                <td className="sorting_1">Caesar Vance</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Disabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="even">
                                <td className="sorting_1">Cedric Kelly</td>
                                <td>Finished</td>
                                <td>11/13/2022, 12:16:00PM</td>
                                <td>11/30/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="odd">
                                <td className="sorting_1">Charde Marshall</td>
                                <td>Finished</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr><tr role="row" className="even">
                                <td className="sorting_1">Colleen Hurst</td>
                                <td>Pending</td>
                                <td>11/12/2022, 12:16:00PM</td>
                                <td>11/14/2022, 01:00:00PM</td>
                                <td>Enabled</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>$170,750</td>
                                <td><i className="fa fa-circle fa-2xs" style={{ color: "#05a308" }} aria-hidden="true"></i> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                            </tr>
                        </tbody>
                    </table></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-5">
                            <div style={{ fontSize: "17px", position: "relative", left: "7px" }} class="dataTables_info" id="bootstrap-data-table_info" role="status" aria-live="polite">Showing 1 to 10 of 38 entries</div>
                        </div>
                        <div class="col-sm-12 col-md-7 d-flex justify-content-end">
                            <div style={{ position: "relative", right: "7px" }} className="dataTables_paginate paging_simple_numbers" id="bootstrap-data-table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="bootstrap-data-table_previous">
                                <a href="#" aria-controls="bootstrap-data-table" data-dt-idx="0" tabindex="0" className="page-link black">Previous</a>
                            </li>
                                <li className="paginate_button page-item active">
                                    <a href="#" aria-controls="bootstrap-data-table" data-dt-idx="1" tabindex="0" className="page-link bg-dark text-light  black">1</a>
                                </li>
                                <li className="paginate_button page-item ">
                                    <a href="#" aria-controls="bootstrap-data-table" data-dt-idx="2" tabindex="0" className="page-link black">2</a>
                                </li>
                                <li className="paginate_button page-item ">
                                    <a href="#" aria-controls="bootstrap-data-table" data-dt-idx="3" tabindex="0" className="page-link black">3</a></li>
                                <li className="paginate_button page-item "><a href="#" aria-controls="bootstrap-data-table" data-dt-idx="4" tabindex="0" className="page-link black">4</a>
                                </li>
                                <li className="paginate_button page-item next" id="bootstrap-data-table_next">
                                    <a href="#" aria-controls="bootstrap-data-table" data-dt-idx="5" tabindex="0" className="page-link black">Next</a>
                                </li></ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 bg-light" style={{ padding: "22px" }}>
                        <div className='col-md-6' style={{ position: "relative", left: "7px", color: "#78909C" }}>
                            <p>Copyright © 2023 Esamyak</p>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end' >
                            <p>Designed by Esamyak</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auctions