import React, { ReactNode } from 'react';
import CalculatorModule from '../modules/calculator';
import { ThemeToggleButton } from '../contexts/theme/themeButton';

export default function CalculatorPage(): ReactNode {
  return (
    <div>
      <ThemeToggleButton />
      <CalculatorModule />
    </div>
  );
}
