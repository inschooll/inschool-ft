import Navbar from '@/app/components/navbar/navbar';
import links from '@/app/core/constants/links';
import { fireEvent, render, screen} from '@testing-library/react';

describe('Navbar ', () => {
  it("should have logo that navigates to '/' home", () => {
    // Arrange
    render(<Navbar />); //i
    // Act
    const logoButton = screen.getByTestId('logo-button');
    
    // Assert
    expect(logoButton).toBeInTheDocument;
    expect(logoButton).toHaveAttribute('href', links.landingPage);
  });
});

