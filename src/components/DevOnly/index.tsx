export function DevOnly({ children }: { children: React.ReactNode }) {
  if (import.meta.env.MODE !== 'production') {
    return <>{children}</>
  }

  return null
}
