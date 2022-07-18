import React from 'react';
import Image from "next/image";

const GiftBox = () => {
    return (
        <div className="container absolute top-[50%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 z-[10000]">
          <div className="row">
            <div className="col-12 mt-5 d-flex justify-content-center">
              <div className="box">
                <div className="box-body">
                  {/* <img className="img" src="https://via.placeholder.com/150" /> */}
                  <div className="box-lid">
                    <div className="box-bowtie"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default GiftBox;