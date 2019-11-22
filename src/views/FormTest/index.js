import React, {
  Component
} from "react"
import FormComponent from '../../components/FormTest'

class FormTest extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
      isSubmit: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {
      name,
      value,
      type,
      checked
    } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.isSubmit) {
      this.setState({
        isSubmit: !this.state.isSubmit
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="mt-100">
          <FormComponent
            isSubmit={this.state.isSubmit}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
        </div>
      </div>
    )
  }
}

export default FormTest