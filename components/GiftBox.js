import React from 'react';
import Image from "next/image";

const GiftBox = () => {
    return (
        <>
          <div className="col-12 d-flex justify-content-center">
            <div className="box">
              <div className="box-body">
              <img className="img h-96" src="https://cdn.thetealmango.com/wp-content/uploads/2022/02/Yael-Shelbia.jpg" />
                <div className="box-lid">
                  <div className="box-bowtie"></div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default GiftBox;