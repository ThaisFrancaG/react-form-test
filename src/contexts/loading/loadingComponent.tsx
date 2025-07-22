import React from 'react';
import '../../shared/styles/globalLoading.css';

export function GlobalLoading() {
  return (
    <div className="global-loading-overlay" role="status" aria-label="Carregando">
      <div className="spinner" />
    </div>
  );
}
