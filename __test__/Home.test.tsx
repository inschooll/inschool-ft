import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('should have main intro text', () => {
    render(<Home />) // ARRANGE
  
    const element = screen.getByText('Inschool is the connected workspace where schools and students can thrive together.'); // ACTION
  
    expect(element).toBeInTheDocument(); // ASSERT
  });  
})
