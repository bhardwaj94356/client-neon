import React from "react";
import "./iteminfo.css";
import {
  FcBullish,
  FcApproval,
  FcRefresh,
  FcHighPriority,
} from "react-icons/fc";

const Dashboard = () => {
  return (
    <div className="dashboardStyle">
      <div className="items design"  style={{backgroundColor:'lightgreen'}}>
        <FcBullish style={{ fontSize: 30 }}/>
        Total Order
      </div>
      <div className="items design" style={{backgroundColor:'lightblue'}}>
        <FcApproval style={{ fontSize: 30 }} />
        Order Received
      </div>
      <div className="items design" style={{backgroundColor:'yellow'}}>
        <FcRefresh style={{ fontSize: 30 }} />
        Order Pending
      </div>
      <div className="items design" style={{backgroundColor:'lightcoral'}}>
        <FcHighPriority style={{ fontSize: 30 }} />
        Order Cancelled
      </div>
    </div>
  );
};

export default Dashboard;
