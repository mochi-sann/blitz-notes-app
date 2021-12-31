import { useRouter, BlitzPage } from "blitz"

import { EditUserInfo } from "app/auth/components/EditUserInfo"
import Layout from "app/core/layouts/Layout"

const EditoUserProfile: BlitzPage = () => {
  return (
    <div>
      <EditUserInfo />
    </div>
  )
}

EditoUserProfile.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default EditoUserProfile
