import { render } from '@testing-library/react';

import Other from './other-projects';

describe('Other', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<Other />);
    expect(baseElement).toBeTruthy();
  });
  
});
