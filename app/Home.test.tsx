import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  push: (path: string) => {
    console.log(`Navigating to: ${path}`);
  },
}));

describe('Home Page', () => {
  it('should navigate to /signup when "start today" button is clicked', () => {});
  it('should navigate to /login when login is clicked', () => {});
})
