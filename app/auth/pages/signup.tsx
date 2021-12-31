import { Heading } from "@chakra-ui/layout"
import { useRouter, BlitzPage, Routes } from "blitz"

import { SignupForm } from "app/auth/components/SignupForm"
import Layout from "app/core/layouts/Layout"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Heading>登録ページです!!!!!!!!!!!!!!</Heading>
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </div>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
