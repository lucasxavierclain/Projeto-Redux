import React from "react";
import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <>
      <div className="text-center lead mt-5 p-3 mb-2 bg-dark text-white rounded borda">
        <strong>Módulo: {activeModule.title}</strong>
        <br />
        <span className="display-4">Aula: {activeLesson.title}</span>
      </div><hr className="w-100 mx-auto" />
    </>

  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
