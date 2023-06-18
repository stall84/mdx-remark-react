import * as React from 'react';
import './style.css';

// Component Imports
import Blog from './components/Blog';

// Data Imports
import { jsonString1 } from '../data/json/test1.js';
import * as test1Json from '../data/json/test1.json';

export default function App() {
  return (
    <>
      <h3>
        Below is what '@lekoarts' (and other Gatsby theme creators) are doing at
        their core component library level, in this case for a typical minimal
        blog post creation.{' '}
      </h3>

      <p>
        Raw JSON data is sourced from (in this case) markdown files, but could
        be from an external API as well. It's then <i>passed through</i> the
        lowest/base component (Blog here) and the relevant data object for
        Gatsby is pulled out of the upper data object (here that is allPosts)
        using a 'pre' preformatted-text tag.
      </p>
      <div style={{ backgroundColor: 'pink', width: '5700px' }}>
        <Blog jsonData={test1Json} />
      </div>
    </>
  );
}
