import { render } from '@testing-library/react';
import App from './App';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
}));

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}));

test('renders portfolio app without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});
