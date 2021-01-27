import React from "react";
import './index.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/action";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <div className='container container-fluid p-3 mb-2 bg-secondary text-white rounded borda'>
      <aside className="text-center lead">
        {modules.map((module) => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map((lesson) => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => toggleLesson(module, lesson)} className="btn btn-danger  m-3">
                    Selecionar
                </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside><hr className="w-100 mx-auto" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
