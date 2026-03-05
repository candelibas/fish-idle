export function PL<T>(portraitValue: T, landscapeValue: T): T {
  return window.innerWidth > window.innerHeight ? landscapeValue : portraitValue;
}
