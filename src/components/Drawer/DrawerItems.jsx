import { Box, Drawer } from '@mui/material';
import React from 'react'

const DrawerItems = (props) => {
   const {openItems, toggleOpenItems} = props
  return (
    <>
          <Drawer open={openItems} onClose={toggleOpenItems(false)}>
            <Box sx={{width:"360px"}}>
                <h1 className='fw-bold'>Cart Items</h1>
            </Box>
          </Drawer>

    </>
  )
}

export default DrawerItems;