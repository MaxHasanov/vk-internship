import { View, Panel, Group, SimpleCell, Header, ConfigProvider, PanelHeader, CellButton, Avatar } from "@vkontakte/vkui"
import '@vkontakte/vkui/dist/vkui.css';
import { useState } from "react"

export function GroupCard({ groups }) {
  let [activePanel, setActivePanel] = useState('listGroups')

  return (
    <>
      <div>
        <ConfigProvider transitionMotionEnabled={false}>
          <View
            style={{ maxWidth: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}
            activePanel={activePanel} id={groups.id}>
            <Panel id="listGroups">
              {/* <Group > */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Avatar
                  size={82}
                  gradientColor={groups.avatar_color}
                />
                <Group header={<Header>{groups.name}</Header>}>
                  <SimpleCell indicator={groups.closed ? 'Закрытая' : 'Открытая'}>
                    Тип приватности
                  </SimpleCell>
                  <SimpleCell
                    onClick={() => setActivePanel('listFriends')}
                    hasHover={true}
                    indicator={groups.friends === undefined ? '0' : groups.friends.length}
                  >
                    Кол-во друзей
                  </SimpleCell>
                </Group>
              </div>
              {/* </Group> */}
            </Panel>
            <Panel id="listFriends">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Group header={<Header>Список друзей</Header>}>
                  {groups.friends === undefined && <SimpleCell>
                    Нет друзей
                  </SimpleCell>}
                  {groups.friends?.map((friend) => (
                    <SimpleCell key={friend.first_name}>
                      {friend.first_name} {friend.last_name}
                    </SimpleCell>
                  ))}
                  <CellButton onClick={() => setActivePanel('listGroups')}>Назад</CellButton>
                </Group>
              </div>
            </Panel>
          </View>
        </ConfigProvider>
      </div >
    </>
  )
}