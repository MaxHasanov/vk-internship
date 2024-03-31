import { View, Panel, Group, FormItem, Select, Header, FormLayoutGroup, RadioGroup, Radio, Switch, SimpleCell } from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

export function GroupFilters() {
  const { changeTypeGroup, acceptFilterGroups, changeAvatarColor, changeFriends } = useActions()
  const newGroups = useSelector((store) => store.filterGroups.newGroups)
  let [checked, setActiveChecked] = useState(false)

  const changeFilterTypeGroup = (e) => {
    let value = e.value
    changeTypeGroup(value)
    acceptFilterGroups()
  }

  const changeFilterColor = (e) => {
    let valueColor = e.value
    changeAvatarColor(valueColor)
    acceptFilterGroups()
  }

  const removeDuplicatesColors = (newGroups) => {
    const uniqueColors = []
    newGroups.forEach(color => {
      if (!uniqueColors.includes(color.avatar_color)) {
        uniqueColors.push(color.avatar_color)
      }
    })
    return uniqueColors
  }

  const changeFilterFriends = (value) => {
    changeFriends(value)
    acceptFilterGroups()
  }

  const uniqueAvatarColors = removeDuplicatesColors(newGroups)


  return (
    <>
      <View activePanel="panel"
        style={{ maxWidth: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}
      >
        <Panel
          id="panel">
          <Group
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            header={<Header>Фильтры групп</Header>}>
            <FormLayoutGroup mode="">
              <FormItem
                top="Цвет группы"
                htmlFor="filter-color"
                bottom="Для поиска по цвету, выберите нужный цвет из списка"
              >
                <Select
                  id="filter-color"
                  placeholder="Не выбрано"
                  allowClearButton={true}
                  options={uniqueAvatarColors.map((color) => ({
                    label: color,
                    value: color,
                  }
                  ))}
                  onChange={(e) => changeFilterColor(e.target)}
                />
              </FormItem>
              <SimpleCell Component="label" after={<Switch
                onChange={() => {
                  setActiveChecked(!checked)
                  changeFilterFriends(!checked)
                }
                } />}>
                Друзья в группе
              </SimpleCell>
            </FormLayoutGroup>
            <FormItem
              top="Тип группы"
            >
              <RadioGroup mode="horizontal">
                <Radio name="filterTypeGroups"
                  value="all"
                  defaultChecked
                  onChange={(e) => changeFilterTypeGroup(e.target)}
                >
                  Все
                </Radio>
                <Radio name="filterTypeGroups"
                  value="open"
                  onChange={(e) => changeFilterTypeGroup(e.target)}
                >
                  Открытые
                </Radio>
                <Radio name="filterTypeGroups"
                  value="closed"
                  onChange={(e) => changeFilterTypeGroup(e.target)}
                >
                  Закрытые
                </Radio>
              </RadioGroup>
            </FormItem>
          </Group>
        </Panel>
      </View>
    </>
  )
}