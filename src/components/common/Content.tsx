import { FC, HTMLAttributes } from 'react'

const Content: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: children as string }} {...props}></div>
)

export default Content
