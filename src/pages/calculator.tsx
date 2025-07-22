import React, { ReactNode } from 'react';
import CalculatorModule from '../modules/calculator';
import { ThemeToggleButton } from '../contexts/theme/themeButton';
import { PageWrapper } from '../test-utils/style/pageStyles';

export default function CalculatorPage(): ReactNode {
  return (
    <div>
      <PageWrapper>
        <ThemeToggleButton />
        <CalculatorModule />
      </PageWrapper>
    </div>
  );
}
