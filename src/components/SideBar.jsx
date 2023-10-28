import { useTheme } from '@emotion/react';
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const violentLogo = 'https://i.ibb.co/C6YwZGf/violentlogo.png';
const blackLogo = 'https://i.ibb.co/g3D8G4m/blacklogo.png';

const Categories = [
  { label: 'Popular', value: 'Popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

export default function SideBar({ setMobileOpen }) {
  const theme = useTheme();

  return (
    <>
      <Link
        to='/'
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10% 0',
        }}
      >
        <img
          style={{ width: '70%' }}
          src={theme.palette.mode === 'light' ? blackLogo : violentLogo}
          alt='logo'
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link
            key={value}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={violentLogo}
                  alt='category'
                  height={30}
                  style={{
                    filter:
                      theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
                  }}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link
            key={value}
            style={{
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={violentLogo}
                  alt='category'
                  height={30}
                  style={{
                    filter:
                      theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
                  }}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}
