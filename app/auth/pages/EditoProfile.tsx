import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { EditUserInfo } from "app/auth/components/EditUserInfo"

const EditoUserProfile: BlitzPage = () => {
  return (
    <div>
      <EditUserInfo />
    </div>
  )
}

EditoUserProfile.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default EditoUserProfile
