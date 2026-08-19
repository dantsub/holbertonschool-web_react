import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';

describe('Test BodySection.js', () => {
  it('Render without crashing', () => {
    render(<BodySection title="test" />);
  });

  it('render "h2" with text "test title" and "p" with text "test children node"', () => {
    const { container } = render(<BodySection title="test title"><p>test children node</p></BodySection>);
    expect(container.querySelector('h2')).toHaveTextContent('test title');
    expect(container.querySelector('p')).toHaveTextContent('test children node');
  });
});