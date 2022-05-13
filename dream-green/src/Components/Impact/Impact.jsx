import React from 'react';
import "./Impact.css"

function Impact() {
    return (
        <div className='impact-main_container' id='impact'>
            <h1>Environmental Benefits of Recycling Used Cooking Oil</h1>
            <div className='cardOne'>
                <p> <b> The rendering industry removes
                    4.7 million metric tons of greenhouse gases
                    from re-entering the environment annually.</b>
                </p>
            </div>
            <div className='cardTwo'>
                <p><b> Renewable diesel is a cleaner-burning fuel that has been proven to reduce greenhouse gas
                    emissions by up to 85 percent.</b> </p>
            </div>
            <a className='impact-citation' href='https://www.darpro-solutions.com/media/blog/environmental-benefits-recycling-uco'>DAR PRO Solutions</a>
        </div>
    );
}

export default Impact;