import { REQ } from "@configs/apiEndpoints"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchRequest } from "@utils/axios"

export const verifyUser = createAsyncThunk(REQ.AUTH.VERIFY, async () => {
  return await fetchRequest({ url: REQ.AUTH.VERIFY })
})
