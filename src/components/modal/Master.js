import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Master = () => {
    return (

        <div className="tab-content pl-3 pt-2 mt-3" id="nav-tabContent" style={{ overflowY: "hidden" }}>
            <div className="tab-pane fade active show in" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                <div className="card">
                    <div className="card-body card-block">
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="auctionname" className="form-control-label">Auction Name</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="auctioninventory" className="form-control-label">Auction Inventory</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="datepicker" className="form-control-label">Viewing Date</label>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <input type="text" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                            </div>
                            <div className="col-md-4">
                                <select style={{ width: "228px", height: "37px", border: "1px solid #ccc", borderRadius: "4px" }} >
                                    <option value="0">Please select</option>
                                    <option value="1">Certificate</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="datepicker" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="viewingtime" className="form-control-label">Viewing Time</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="startdate" className="form-control-label">Start Date</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="starttime" className="form-control-label">Start Time</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="viewingtime" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="startdate" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="starttime" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="enddate" className="form-control-label">End Date</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="endtime" className="form-control-label">End Time</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="defaultincrement" className="form-control-label">Default Bid Increment By</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="enddate" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="endtime" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="defaultincrement" className="form-control" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="aucresdate" className="form-control-label">Auction Result Date</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">

                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="aucresdate" className="form-control" style={{ border: "1px solid #ccc" }} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox1" className="form-check-label">
                                                    <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Hide Bulk Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox2" className="form-check-label">
                                                    <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow Proxy Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox3" className="form-check-label">
                                                    <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow PopCorn Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="seldeadlinetype" className="form-control-label">Extend Deadline within Type</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="exdeadlinevalue" className="form-control-label">Extend Deadline within Value</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label for="numberbidextend" className="form-control-label">No. of Times Bid Extend</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <select id="seldeadlinetype" className="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Minutes</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="exdeadlinevalue" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="numberbidextend" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 ">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label for="auctionmode" className="form-control-label">Auction Mode</label>
                                    <select className="mt-3" style={{ width: "88px", height: "30px", border: "1px solid #ccc", borderRadius: "4px" }} >
                                        <option value="0">View</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label for="recordstatus" className="form-control-label">Record Status</label>
                                    <select className="mt-3" style={{ width: "88px", height: "30px", border: "1px solid #ccc", borderRadius: "4px" }} >
                                        <option value="0">Active</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-8 ">
                                <div className="form-group">
                                    <label for="recordstatus" className="form-control-label">Description</label>
                                    <textarea id="numberbidextend" className="form-control mt-3 "></textarea>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="modal-footer d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div >



    )
}

export default Master