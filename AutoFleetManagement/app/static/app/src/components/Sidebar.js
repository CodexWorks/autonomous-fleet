import React, { Component } from 'react'
import dashboardImage from "../assets/dashboard.png"
import accountingImage from "../assets/accounting.png"
import activeTrackingImage from "../assets/active_tracking.png"
import companyImage from "../assets/company.png"
import warehouseImage from "../assets/warehouse.png"
import auctionHouseImage from "../assets/auction_house.png"

class Sidebar extends Component {
    render(){
        return(
         <aside style={{position: 'absolute'}}>
         <div class="sidebar left ">
            <ul class="list-sidebar bg-default">
              <li>
                <a href="#" data-toggle="collapse" data-target="#dashboard" >
                    <img alt="Dashboard" className="sidebar-image" src={dashboardImage}/>
                    <span class="nav-label"> Dashboard </span>
                    <span class="fa fa-chevron-left pull-right"></span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Auction house" className="sidebar-image" src={auctionHouseImage}/>
                    <span class="nav-label">Auction house</span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Warehouse management" className="sidebar-image" src={warehouseImage}/>
                    <span class="nav-label">Warehouse management</span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Accounting" className="sidebar-image2" src={accountingImage}/>
                    <span class="nav-label">Accounting</span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Vendor management" className="sidebar-image" src={companyImage}/>
                    <span class="nav-label">Vendor management</span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Client management" className="sidebar-image" src={companyImage}/>
                    <span class="nav-label">Client management</span>
                </a>
              </li>
              <li>
                <a href="#">
                    <img alt="Active tracking" className="sidebar-image" src={activeTrackingImage}/>
                    <span class="nav-label">Active tracking</span>
                </a>
              </li>
            </ul>
    </div>
    </aside>
        )
    }

}

export default Sidebar