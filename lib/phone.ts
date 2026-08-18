// Nepal's country code. Numbers written locally carry a trunk '0' before the
// area code (061-456315); that 0 must be dropped once +977 is present, or the
// call fails when dialled from outside Nepal.
const NEPAL_COUNTRY_CODE = '977'

export function telHref(phone: string): string {
  const trimmed = phone.trim()
  const international = trimmed.startsWith('+')
  let digits = trimmed.replace(/\D/g, '')

  if (
    international &&
    digits.startsWith(NEPAL_COUNTRY_CODE) &&
    digits[NEPAL_COUNTRY_CODE.length] === '0'
  ) {
    digits = NEPAL_COUNTRY_CODE + digits.slice(NEPAL_COUNTRY_CODE.length + 1)
  }

  return `tel:${international ? '+' : ''}${digits}`
}
