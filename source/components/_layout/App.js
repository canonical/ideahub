import React from 'react'

// components
import Modal from '../_layout/Modal'
import Main from '../_layout/Main'
import Routes from './Routes'

class App extends React.Component {

  componentWillUpdate(nextProps) {
    // when the page changes, save where we just were so we can render it behind a modal
    this.previousLocation = this.props.location
  }

  render() {

    var renderInModal = (this.props.location && this.props.location.state && this.props.location.state.modal)

    if (renderInModal) {
      var content =
        <div>
          <Modal goBack={this.props.history.goBack} />
          <Main location={this.previousLocation} />
        </div>
    } else {
      var content = <Main />
    }

    return(content)
  }
}

export default App