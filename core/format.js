// Price and Phone formatting utilities

export function formatNaira(amount) {
  if (amount === undefined || amount === null) return '₦0';
  const num = Number(amount);
  return '₦' + num.toLocaleString('en-NG');
}

export function formatPhone(phone) {
  if (!phone) return '+234 801 234 5678';
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '234' + cleaned.slice(1);
  }
  if (!cleaned.startsWith('234')) {
    cleaned = '234' + cleaned;
  }
  return '+' + cleaned.slice(0, 3) + ' ' + cleaned.slice(3, 6) + ' ' + cleaned.slice(6, 9) + ' ' + cleaned.slice(9);
}

export function cleanPhoneForWa(phone) {
  if (!phone) return '2348012345678';
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '234' + cleaned.slice(1);
  }
  return cleaned;
}
