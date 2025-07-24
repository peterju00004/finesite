import { render } from '@testing-library/react';

import ProjectDisplay from './project-display';

describe('ProjectDisplay', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectDisplay />);
    expect(baseElement).toBeTruthy();
  });
  
});
