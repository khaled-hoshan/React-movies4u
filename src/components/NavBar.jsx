import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useState } from 'react';
import SideBar from './SideBar';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const drawerWidth = 240;

  return (
    <>
      <AppBar position='fixed' color='white'>
        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            ml: '240px',
            [theme.breakpoints.down('sm')]: {
              ml: 0,
              flexWrap: 'wrap',
            },
          }}
        >
          {isMobile && (
            <IconButton
              color='inherit'
              edge='start'
              style={{ outline: 'none' }}
              sx={{
                mr: theme.spacing(2),
                [theme.breakpoints.up('sm')]: { display: 'none' },
              }}
              onClick={() => setMobileOpen((prevMobileOpen => !prevMobileOpen))}
            >
              <MenuIcon />
              <Menu />
            </IconButton>
          )}
          <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <Box>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color='inherit'
                component={Link}
                to={`/profile/:id`}
                sx={{
                  '&:hover': {
                    color: 'white !important',
                    textDecoration: 'none',
                  },
                }}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: '30' }}
                  alt='Profile'
                  src='https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
                />
              </Button>
            )}
          </Box>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>

      <Box>
        <Box
          sx={{
            [theme.breakpoints.up('sm')]: {
              width: drawerWidth,
              flexShrink: 0,
            },
          }}
        >
          {isMobile ? (
            <Drawer
              anchor='right'
              variant='temporary'
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              variant='permanent'
              open={true}
              sx={{
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </Box>
      </Box>
    </>
  );
}
