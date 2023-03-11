
const Helmet = ({children,title=''}) => {
    document.title = `Food Ordering App- ${title}`
  return (
    <div className="w-100">{children}</div>
  )
}

export default Helmet