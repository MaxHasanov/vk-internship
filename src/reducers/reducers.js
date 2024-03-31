import { createSlice } from '@reduxjs/toolkit'
import { filterByOpenness } from '../utils/filterByOpenness'
import { filterByAvatarColor } from '../utils/filterByAvatarColor'
import { filterByFriends } from '../utils/filterByFriends'

const initialState = {
  filters: [],
  friends: 'all',
  avatarColor: 'all',
  groupType: 'all',
  newGroups: [],
}

const groupsSlice = createSlice({
  name: 'filterGroups',
  initialState,
  reducers: {
    changeTypeGroup(state = initialState, action) {
      state.groupType = action.payload
    },
    changeAvatarColor(state = initialState, action) {
      if (action.payload === '') {
        state.avatarColor = 'all'
      } else {
        state.avatarColor = action.payload
      }
    },
    changeFriends(state = initialState, action) {
      if (action.payload === false) {
        state.friends = 'all'
      } else {
        state.friends = action.payload
      }
    },
    addGroupsInFilterArray(state, action) {
      state.filters.push(...action.payload)
      state.newGroups.push(...action.payload)
    },
    acceptFilterGroups(state = initialState) {
      let result = state.newGroups
      result = filterByOpenness(result, state.groupType)
      result = filterByAvatarColor(result, state.avatarColor)
      result = filterByFriends(result, state.friends)
      state.filters = result
    },
  },
})

export const groupAction = groupsSlice.actions
export const groupReducer = groupsSlice.reducer
