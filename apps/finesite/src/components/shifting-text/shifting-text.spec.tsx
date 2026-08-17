import { render } from '@testing-library/react';

import ShiftingText from './shifting-text';

describe('ShiftingText', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<ShiftingText />);
    expect(baseElement).toBeTruthy();
  });
  
});
