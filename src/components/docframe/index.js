import React, { Component } from 'react'

class DocFrame extends Component {
  componentDidMount () {
    this.intent = this.props.intent
      .start(this.target)
      .then(this.props.onSuccess)
      .catch(err => this.props.onError(err))
  }

  saveRef = ref => {
    this.target = ref
  }

  render () {
    return (
      <div>
        <div ref={this.saveRef} />
      </div>
    )
  }
}

export default DocFrame
