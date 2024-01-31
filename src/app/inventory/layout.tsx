'use client'

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* ▼▼▼ ヘッダー ▼▼▼ */}
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1 }}
          >
            在庫管理システム
          </Typography>
          <Button
            variant='contained'
            startIcon={<LogoutIcon />}
          >
            ログアウト
          </Button>
        </Toolbar>
      </AppBar>
      {/* ▲▲▲ ヘッダー ▲▲▲ */}

      {/* ▼▼▼ サイドバー ▼▼▼ */}
      <Drawer anchor='left'>
        <Box sx={{ width: 240 }}>
          <Toolbar />
          <Divider />
          <List>
            <ListItem
              component='a'
              href='/inventory/products'
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary='商品一覧' />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              component='a'
              href='/inventory/import_sales'
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary='売上一括登録' />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      {/* ▲▲▲ サイドバー ▲▲▲ */}

      {/* ▼▼▼ メインコンテンツ ▼▼▼ */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          width: '100%',
          background: 'white',
        }}
      >
        {children}
      </Box>
      {/* ▲▲▲ メインコンテンツ ▲▲▲ */}

      {/* ▼▼▼ フッター ▼▼▼ */}
      <Box
        component='footer'
        sx={{
          width: '100%',
          position: 'fixed',
          textAlign: 'center',
          bottom: 0,
          background: '#1976d2',
        }}
      >
        <Typography variant='caption' color='white'>
          @2023 full stack web development
        </Typography>
      </Box>
      {/* ▲▲▲ フッター ▲▲▲ */}
    </Box>
  )
}
