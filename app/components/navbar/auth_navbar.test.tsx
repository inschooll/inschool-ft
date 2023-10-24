import links from '@/app/core/constants/links';
import { fireEvent, render, screen} from '@testing-library/react';
import AuthNavbar from './auth_navbar';

describe('AuthNavbar component ', () => {
  beforeAll(() => {});

  it(`should have logo that navigates to ${links.landingPage} `, () => {
    // Arrange
    render(<AuthNavbar />);
    // Act
    const logoButton = screen.getByTestId('logo-button');
    
    // Assert
    expect(logoButton).toBeInTheDocument;
    expect(logoButton).toHaveAttribute('href', links.landingPage);
  });

  it(`should have sign up button that navigates to ${links.signup} page`, () => {
    // arrange
    render(<AuthNavbar />);

    // act
    const signupButton = screen.getByTestId('signup-button');
    console.log(signupButton);

    // assert
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveAttribute('href', links.signup);
  }); 

  
  it(`should have log in button that navigates to ${links.login} page`, () => {
    // arrange
    render(<AuthNavbar />);

    // act
    const loginButton = screen.getByTestId('login-button');
    console.log(loginButton);

    // assert
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('href', links.login);
  }); 
});

