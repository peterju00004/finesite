import { render } from '@testing-library/react';

import DigitalNarrative from './digital-narrative';

describe('DigitalNarrative', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<DigitalNarrative />);
    expect(baseElement).toBeTruthy();
  });
  
});
