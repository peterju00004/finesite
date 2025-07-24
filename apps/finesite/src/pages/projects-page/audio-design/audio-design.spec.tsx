import { render } from '@testing-library/react';

import AudioDesign from './audio-design';

describe('AudioDesign', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<AudioDesign />);
    expect(baseElement).toBeTruthy();
  });
  
});
