import { connect } from "react-redux";
import TodoInput from "@/pages/todo-list/components/todo-input";
import { todoListActionCreators } from "@/store/action-creators";
const mapStateToProps = (state) => {
  return {
    todoInput: state.getIn(["todoList", "todoInput"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    todoInputChange: (val) =>
      dispatch(todoListActionCreators.todoInputChangeCreator(val)),
    todoListAdd: () => dispatch(todoListActionCreators.addTodoListCreator()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
