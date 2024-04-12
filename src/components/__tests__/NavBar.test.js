import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar component', () => {
    test('renders logo and navigation links', () => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );
  
      // Kiểm tra xem logo có hiển thị không
      const logoElement = screen.getByAltText('motion-assists-logo');
      expect(logoElement).toBeInTheDocument();
  
      // Kiểm tra xem tiêu đề "Motion Assists" có hiển thị không
      const titleElement = screen.getByText('Motion Assists');
      expect(titleElement).toBeInTheDocument();
  
      // Kiểm tra xem có hai liên kết điều hướng đến "News" và "About" không
      const newsLink = screen.getByRole('link', { name: 'News' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
  
      expect(newsLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
    });
  
    test('navigation links have correct destinations', () => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );
  
      // Kiểm tra xem các liên kết có đúng đích đến không
      const newsLink = screen.getByRole('link', { name: 'News' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
  
      expect(newsLink).toHaveAttribute('href', '/news');
      expect(aboutLink).toHaveAttribute('href', '/about');
    })
});