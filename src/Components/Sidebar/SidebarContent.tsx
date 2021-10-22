import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Loading from 'src/Components/Loading'
import StyledTreeItem from 'src/Components/Tree/StyledTreeItem'
import { Label } from '@mui/icons-material'
import SidebarIcon from './Sidebar.icon'
import { useHistory } from 'react-router-dom'
import dummyProducts from 'src/Dummy/dummyProducts'

const SideBarItem = (items: Array<any>) => {
  const history = useHistory();
  return items.map(
    (item) => 
    {
      const icon = SidebarIcon.find(s=> s.id === item.id);
      const labelIcon = icon ? icon.icon : Label;
      return item.is_active === true &&
      (item.children_data && item.children_data.length > 0 ? (
        <StyledTreeItem
          key={item.id}
          nodeId={`${item.id}`}
          labelText={item.name}
          labelIcon={labelIcon}
        >
          {SideBarItem(item.children_data)}
        </StyledTreeItem>
      ) : (
        <StyledTreeItem
          key={item.id}
          nodeId={`${item.id}`}
          labelText={item.name}
          labelIcon={labelIcon}
          labelInfo={`${countProduct(item.id)}`}
          onClick={() => history.push(`/category/${item.id}/products`)}
        />
      ))
      }

  )
}
const countProduct = (categoryId : number) => {
  const currentProduct = dummyProducts.filter(item => item.categoryId === categoryId);
  return currentProduct ? currentProduct.length : 0;
}

const SidebarContent = () => {
  const [category, setCategory] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const history = useHistory();
  useEffect(() => {
    axios
      .get<any>('rest/default/V1/categories')
      .then((res) => {
        if (res.data?.children_data) {
          setCategory(res.data?.children_data)
          setLoading(false)
        }
      })
      .catch((err) => console.log(err))
  }, [])
  return loading ? (
    <Loading />
  ) : (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: 800,
        flexGrow: 1,
        maxWidth: 400,
        overflowX: 'visible',
      }}
    >
      {category &&
        category.length > 0 &&
        category.map((item) => {
          const icon = SidebarIcon.find(s=> s.id === item.id);
          const labelIcon = icon ? icon.icon : Label;
          return (
            item.is_active === true &&
            (item.children_data && item.children_data.length > 0 ? (
              <StyledTreeItem
                key={item.id}
                nodeId={`${item.id}`}
                labelText={item.name}
                labelIcon={labelIcon}
              >
                {SideBarItem(item.children_data)}
              </StyledTreeItem>
            ) : (
              <StyledTreeItem
                key={item.id}
                nodeId={`${item.id}`}
                labelText={item.name}
                labelIcon={labelIcon}
                labelInfo={`${countProduct(item.id)}`}
                onClick={() => history.push(`/category/${item.id}/products`)}
              />
            ))
          )
        })}
    </TreeView>
  )
}

export default SidebarContent
