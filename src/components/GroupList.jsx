import { useEffect } from 'react'
import { useGetGroupsVkQuery } from '../createApi/createApi'
import { GroupCard } from './GroupCard'
import { useActions } from '../hooks/useActions'
import { useSelector } from 'react-redux'
import { PanelHeader } from '@vkontakte/vkui'

export function GroupList() {

  const { data, error, isLoading } = useGetGroupsVkQuery()
  const { addGroupsInFilterArray, changeTypeGroup } = useActions()
  const state = useSelector((store) => store.filterGroups)

  useEffect(() => {
    if (data && state.newGroups.length === 0) {
      addGroupsInFilterArray(data, state)
      // console.log(data)
    }
  }, [data])



  return (
    <>
      {isLoading ? (
        <div>
          <h3>Загрузка…</h3>
        </div>
      ) : error ? (
        { error }
      ) : (
        state.filters.map((group) => (
          <GroupCard key={group.id} groups={group} />
        ))
      )}
    </>
  )
}