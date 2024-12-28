import type { FC } from 'react'
import { css, cx } from '@emotion/css'
import { Meta } from 'frontend-essentials'

import pages from 'pages'
import Title from 'components/common/Title'

const { title } = pages['service-worker-registration']

const ServiceWorkerRegistration: FC<{}> = () => {
  return (
    <div>
      <Meta title={title} description={''} image={`${window.location.origin}/icons/og-icon.png`} />

      <Title>{title}</Title>
    </div>
  )
}

const style = {}

export default ServiceWorkerRegistration
