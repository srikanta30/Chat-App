import { Avatar, Flex, useColorMode, Text, AvatarGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebaseConfig"
import { chatRoomProps } from "../../utils/types"

export default function ChatRooms({ data, id }: chatRoomProps) {
  const [user] = useAuthState(auth)
  const { colorMode } = useColorMode()
  const router = useRouter()
 // @ts-ignore
  const otherUsers = data.users?.filter(singleUser => user.email !== singleUser)
  // @ts-ignore
  const userAvatars = otherUsers?.map(singleUser => <Avatar key={Math.random()} name={singleUser} />)

  const handleClick = () => {
    router.push(`/rooms/${id}`)
  }

  return (
    <Flex
      align="center"
      p={4}
      cursor="pointer"
      _hover={{ bg: colorMode === 'light' ? 'gray.200' : 'gray.700' }}
      onClick={handleClick}
    >
      <AvatarGroup mr={4} size='md' max={2}>
        {userAvatars}
      </AvatarGroup>
      <Text>{data.roomName}</Text>
    </Flex>
  )
}
