import { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Layout } from '~/next/shared/components/templates/Layout/styles'
import { Wrap } from './styles'

const LoginPage: FC = () => (
  <Layout>
    <Wrap maxWidth="sm">
      <Typography>Home</Typography>
    </Wrap>
  </Layout>
)

export default LoginPage
