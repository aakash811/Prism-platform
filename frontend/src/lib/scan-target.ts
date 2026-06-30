import type { ScanType } from './types';

export function normalizeScanTarget(value: string): string {
  let normalized = value.trim();
  const schemeSep = normalized.indexOf('://');
  if (schemeSep !== -1) {
    const scheme = normalized.slice(0, schemeSep).toLowerCase();
    if (scheme === 'http' || scheme === 'https') {
      normalized = normalized.slice(schemeSep + 3);
    }
  }
  normalized = normalized.replace(/\/+$/, '');

  if (normalized.includes('@') && !normalized.startsWith('@')) return normalized.toLowerCase();
  if (normalized.includes('.') && !/\s/.test(normalized)) return normalized.toLowerCase();
  return normalized;
}

export function detectScanType(value: string): ScanType {
  const s = normalizeScanTarget(value);
  if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)) return 'email';
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(s) || /^[0-9a-fA-F:]+:[0-9a-fA-F:]+$/.test(s)) return 'ip';
  if (/^\+?[\d][\d\s().-]{6,}$/.test(s)) return 'phone';
  if (s.startsWith('@')) return 'username';
  if (s.includes('.') && !/\s/.test(s)) return 'domain';
  return 'username';
}
