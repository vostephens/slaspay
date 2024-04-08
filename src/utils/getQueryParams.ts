export const getQueryParams = (searchString: string) => {
  const searchParams = new URLSearchParams(searchString)
  return {
    email: searchParams.get("email"),
    token: searchParams.get("token")
  }
}
