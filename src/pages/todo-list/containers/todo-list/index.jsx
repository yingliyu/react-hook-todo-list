import { connect } from "react-redux";
import { ToJS } from "@/components/hoc/to-js";
import { todoListActionCreators } from "@/store/action-creators";
import TodoList from "@/pages/todo-list/components/todo-list";

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["todoList", "lists"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: () => dispatch(todoListActionCreators.getTodoListCreator()),
    deleteTask: (id) => dispatch(todoListActionCreators.delTodoListCreator(id)),
    completeTask: (id) =>
      dispatch(todoListActionCreators.completeTodoLIstCreator(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(TodoList));
