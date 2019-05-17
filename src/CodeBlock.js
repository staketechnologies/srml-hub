import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestLight as markdownstyle } from 'react-syntax-highlighter/dist/styles/hljs';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={markdownstyle}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
