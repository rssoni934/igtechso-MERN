import React, { useState } from "react";
import "./questionSection.css";
import { Col, Container, Row } from "react-bootstrap";
import minusImg from "../../image/minus.png";
import plusImg from "../../image/plus.png";

export default function QuestionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to conflict with riders emergency?",
      answer: `An FAQ is a list of frequently asked questions (FAQs) and answers on particular topics (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts and queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.`,
    },
    {
      question: "App installation failed, how to update system information?",
      answer: `An FAQ is a list of frequently asked questions (FAQs) and answers on particular topics (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts and queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.`,
    },
    {
      question: "Website response taking time, how to improve?",
      answer: `An FAQ is a list of frequently asked questions (FAQs) and answers on particular topics (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts and queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.`,
    },
    {
      question: "New update fixed all bug and issues",
      answer: `An FAQ is a list of frequently asked questions (FAQs) and answers on particular topics (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts and queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.`,
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="header">
        <h6 style={{ color: "orange" }}>Frequent Question</h6>
        <h3>Do you have any question</h3>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <div className="questionSection">
              {faqs.map((faq, index) => (
                <div key={index} style={{borderBottom: "1px solid gray", width: "100%", marginBottom: "10px"}}>
                  <div
                    onClick={() => toggleAnswer(index)}
                    style={{
                      cursor: "pointer",
                      paddingBottom: activeIndex === index ? "10px" : "0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="Play_img"
                        src={activeIndex === index ? minusImg : plusImg}
                        alt="img"
                        width={24}
                        height={24}
                      />
                      <h5 style={{ marginLeft: "10px", textAlign: "left" }}>{faq.question}</h5>
                    </div>
                    {activeIndex === index && (
                      <p style={{ marginTop: "10px", textAlign: "left" }}>{faq.answer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
}
