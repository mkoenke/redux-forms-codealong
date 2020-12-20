import React, { Component } from "react"
import { connect } from "react-redux"

class CreateTodo extends Component {
  state = { text: "" }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      text: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input
              value={this.state.text}
              type="text"
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mdp = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  }
}

export default connect(null, mdp)(CreateTodo)
