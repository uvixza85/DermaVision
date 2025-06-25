import React from "react";
import "./Footer.css"

function Footer (){
    return(
        <div className="footer">
            <div className="footer-content">
<h3 className="footer-logo">DermaVision</h3>
        <p className="footermain">
          © {new Date().getFullYear()} My Health App. All rights reserved.
        </p>
        </div>
      </div>
    );

    
}
export default Footer