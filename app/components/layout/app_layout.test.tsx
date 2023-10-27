import { render, screen } from '@testing-library/react';
import AppLayout from './app_layout';
import { assert } from 'console';

describe('AppLayout layout component', () => {
  it('should have Navbar and renders children', () => {
    // arrange
    render(
      <AppLayout>
        <div data-testid="inside-content">Inside Content</div>
      </AppLayout>
    );
    
    // act
    const insideContent = screen.getByTestId('inside-content');
    const outsideContent = screen.getByTestId('logo-button');

    // assert
    expect(insideContent).toBeInTheDocument();
    expect(outsideContent).toBeInTheDocument();
  });
})