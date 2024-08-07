import {
    Add,
    Menu,
    Close,
    MoreVert,
    Delete,
    Edit,
    RemoveRedEye,
    ChevronLeft,
    Help
  } from '@mui/icons-material'
  
  
  const icons = {
    add: <Add fontSize='small' />,
    menu: <Menu fontSize='small' />,
    close: <Close fontSize='small' />,
    moreVert: <MoreVert fontSize='small' />,
    delete: <Delete fontSize='small' />,
    edit: <Edit fontSize='small' />,
    show: <RemoveRedEye fontSize='small' />,
    chevronLeft: <ChevronLeft fontSize='small' />,
    help: <Help fontSize='small' />
  }
  
  type IconNamesProps =
    | 'add'
    | 'menu'
    | 'close'
    | 'moreVert'
    | 'delete'
    | 'edit'
    | 'show'
    | 'chevronLeft'
    | 'help'
  
  type Props = {
    name: IconNamesProps
  }
  
  function Icon({ name }: Props) {
    return icons[name]
  }

  export { IconNamesProps, Icon }