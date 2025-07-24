import { render } from '@testing-library/react';

import CodingProjects from './coding-projects';

describe('CodingProjects', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<CodingProjects />);
    expect(baseElement).toBeTruthy();
  });
  
});
