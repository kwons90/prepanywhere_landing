import React from "react";
import small_group_instruction from "../images/small_group_instruction.svg"
import homework_help from "../images/homework_help.svg"
import after_school_tutoring from "../images/after_school_tutoring.svg"
import independent_learning from "../images/independent_learning.svg"

function AISection() {
  return (
    <section className="ai">
      <div className="ai_wrap">
        <div className="ai_header">
          <div className="ai_header_text">
            Goo Can Help With Math Anytime, Anywhere!
          </div>
        </div>
        <div className="ai_box_wrap">
          <div className="ai_box">
            <img src={small_group_instruction} alt="Small Group Instruction" />
            <div className="ai_text">
              Small Group Instruction
            </div>
          </div>
          <div className="ai_box">
            <img src={homework_help} alt="Homework Help" />
            <div className="ai_text">
              Homework Help
            </div>
          </div>
          <div className="ai_box">
            <img src={after_school_tutoring} alt="After-School Tutoring" />
            <div className="ai_text">
              After-School Tutoring
            </div>
          </div>
          <div className="ai_box">
            <img src={independent_learning} alt="Independent Learning" />
            <div className="ai_text">
              Independent Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;