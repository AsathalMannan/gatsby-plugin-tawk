import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, { tawkId, tawkKey }) => {
  const source = `https://embed.tawk.to/${tawkId}/${tawkKey}`;

  return setPostBodyComponents([
    <script key="gatsby-plugin-tawk.to" src={source} />
  ]);
};
