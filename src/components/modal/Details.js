import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const Details = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center ">
                <div className="col-md-4  d-flex justify-content-center">
                    <label>From Range</label>
                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <label>To Range</label>


                </div>
                <div className="col-md-4  d-flex justify-content-center">
                    <label>Increment Amount</label>

                </div>

            </div>
            <div className="row mt-3">
                <div className="col-md-4 d-flex justify-content-center">
                    <input type="text" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <input type="text" />

                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <input type="text" />

                </div>

            </div>

            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-3  d-flex justify-content-center">
                    <label>Increment Tag 1</label>
                </div>
                <div className="col-md-3  d-flex justify-content-center">
                    <label>Increment Tag 1</label>


                </div>
                <div className="col-md-3  d-flex justify-content-center">
                    <label>Increment Tag 3</label>

                </div>
                <div className="col-md-3  d-flex justify-content-center">
                    <label>Increment Tag 4</label>

                </div>

            </div>
            <div className="row mt-3">
                <div className="col-md-3 d-flex justify-content-center">
                    <input type="text" style={{ width: "160px" }} />
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <input type="text" style={{ width: "160px" }} />

                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <input type="text" style={{ width: "160px" }} />

                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <input type="text" style={{ width: "160px" }} />

                </div>
                <div>
                    <Button className="mt-4 float-end ">Add/Update</Button>

                </div>
                <hr className='mt-3' />
            </div>


        </div>
    )
}

export default Details