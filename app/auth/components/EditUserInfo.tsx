import { Box, Heading, Text } from "@chakra-ui/react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import React, { Suspense } from "react"

type EditUserInfoProps = {}
const UserInfo = () => {
  const CurrentUserInfo = useCurrentUser()
  if (CurrentUserInfo) {
    return (
      <>
        <div>
          <Text as="pre">{JSON.stringify(CurrentUserInfo)}</Text>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Heading>ログインしていません</Heading>
      </>
    )
  }
}
const EditUserInfo: React.VFC<EditUserInfoProps> = () => {
  return (
    <Box>
      <Suspense fallback={<Text>ロード中</Text>}>
        <UserInfo />
      </Suspense>
    </Box>
  )
}

export { EditUserInfo }
