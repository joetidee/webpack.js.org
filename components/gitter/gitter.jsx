import React from 'react';

export default class Gitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
  }

  render() {
    let { offset } = this.state;

    return (
      <span className="gitter">
        <div 
          className="gitter__button js-gitter-toggle-chat-button" 
          style={{
            marginBottom: offset
          }}>
          <i className="gitter__icon icon-gitter" />
        </div>
      </span>
    );
  }

  componentDidMount() {
    document.addEventListener(
      'scroll', 
      this._recalculate.bind(this)
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'scroll', 
      this._recalculate.bind(this)
    );
  }

  _recalculate(e) {
    let { scrollY, innerHeight } = window;
    let { scrollHeight } = document.body;
    let distToBottom = scrollHeight - scrollY - innerHeight;
    let footerHeight = document.querySelector('footer').offsetHeight;

    this.setState({
      offset: distToBottom < footerHeight ? footerHeight - distToBottom : 0
    });
  }
}