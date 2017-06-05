import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/styles';

const SyntaxHighlighterComponent = ({ children }) => {
  return (
    <SyntaxHighlighter
      style={ocean}
      language={'javascript'}
    >
      { children }
    </SyntaxHighlighter>
  )
};

export default SyntaxHighlighterComponent;
