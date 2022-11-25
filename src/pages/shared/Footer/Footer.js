import React from "react";
import { Link } from "react-router-dom";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./Footer.css";
const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <Link to="/" className="d-flex align-items-center p-0 text-dark">
              <img
                className="w-25"
                src="https://i.ibb.co/ngLPrdm/RESALE-ZONE-removed.png"
                alt="RESALE-ZONE-removed"
                border="0"
              />
            </Link>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Resale Zone
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink to="/">Resources</CDBFooterLink>
              <CDBFooterLink to="/">About Us</CDBFooterLink>
              <CDBFooterLink to="/">Contact</CDBFooterLink>
              <CDBFooterLink to="/blogs">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink to="/">Support</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Resale Zone, {new Date().getFullYear()}. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
