import './custom-button.scss';
export type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  label: string;
  onClick: () => void;
};
/**
 * Primary UI component for user interaction
 */
export const createButton = ({ primary = false, size = 'medium', backgroundColor, label, onClick }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-custom-button--primary' : 'storybook-custom-button--secondary';
  btn.className = ['storybook-custom-button', `storybook-button--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
