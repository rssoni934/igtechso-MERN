import React from "react";
import { Button } from "react-bootstrap";
import './readyToLearn.css'

export default function ReadyToLearn() {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Ready to learn design with Nia Matos</h2>
      <div style={{padding: "10px"}}>
        <Button className="startBtn">Start Learning Today</Button>
      </div>
    </div>
  );
}
