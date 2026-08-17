import { render } from '@testing-library/react';

import Disco from './disco';

describe('Disco', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<Disco />);
    expect(baseElement).toBeTruthy();
  });
  
});
