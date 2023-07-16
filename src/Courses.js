import React from "react";
import Course from "./Course";
import "./Courses.css";

function Courses() {
  return (
    <div className="coursecontents">
      <h1>Course Content </h1>
      <div className="coursecards">
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course one"
        />
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course two"
        />
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course three"
        />
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course four"
        />
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course five"
        />
        <Course
          image="https://lms.sltc.ac.lk/pluginfile.php/3926/course/overviewfiles/2021%20August%20cover.png"
          semester="Semester 1"
          batch="7th Batch"
          title="Course six"
        />
      </div>
    </div>
  );
}

export default Courses;
