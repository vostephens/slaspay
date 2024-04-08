import { addQuery, clearAllQuery, removeQuery } from "@store/slices/filterQuery.slice"
import { useAppDispatch, useAppSelector } from "./useStore"

export const useFilterQuery = () => {
  const dispatch = useAppDispatch()
  const filterQuery = useAppSelector((state) => state.filterQuery)

  const addQueryAction = (obj: any) => {
    dispatch(addQuery(obj))
  }

  const removeQueryAction = (key: string) => dispatch(removeQuery(key))

  const clearQueryAction = () => {
    dispatch(clearAllQuery())
  }

  return {
    query: filterQuery.query,
    addQuery: addQueryAction,
    removeQuery: removeQueryAction,
    clearAllQuery: clearQueryAction
  }
}
