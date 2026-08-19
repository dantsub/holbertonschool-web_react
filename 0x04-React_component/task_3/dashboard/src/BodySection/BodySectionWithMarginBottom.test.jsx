import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('Test BodySectionWithMarginBottom.js', () => {
  it('Render without crashing', () => {
    render(<BodySectionWithMarginBottom title="test title" />);
  });

  it('Test if render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title"><p>test children node</p></BodySectionWithMarginBottom>
    );
    const wrapper = container.querySelector('.bodySectionWithMargin');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.querySelector('.bodySection h2')).toHaveTextContent('test title');
    expect(wrapper.querySelector('.bodySection p')).toHaveTextContent('test children node');
  });
});