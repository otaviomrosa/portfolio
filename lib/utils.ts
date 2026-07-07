export function formatDate(dateStr: string): string {
  if (!dateStr) return '';

  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = isDateOnly
    ? new Date(Date.UTC(year, month - 1, day))
    : new Date(dateStr);

  if (Number.isNaN(d.getTime())) return dateStr;

  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
