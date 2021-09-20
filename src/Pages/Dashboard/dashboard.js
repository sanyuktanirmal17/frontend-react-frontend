import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
 import { User } from '../../service/user';
import Dialog from '@material-ui/core/Dialog';
import NoteIcon from '@material-ui/icons/Note';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// import {CardList} from '';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './dashboard.scss'

const user = new User();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function Dashboard() {
  let history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleClickOpen = () => {
    setOpenAdd(true);
  };
  const handleClose = () => {
    setOpenAdd(false);
    setOpenUpdate(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const [menuSelected, setMenuSelected] = useState("Notes");
  const primaryMenuItems = [
    { name: "Notes", icon: <NoteIcon /> },
];
  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };
/**
     * @description creating dashboard page
     */
  return (
    <Router>
    <div className="root">
      <CssBaseline />
      <AppBar position="absolute" 
      className={clsx(classes.appBar,
       open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" align="left" color="inherit" noWrap className={classes.title} data-testid="title">
            FundooNotes App
          </Typography>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
            data-testid="logout"
          >
            <ExitToAppIcon/>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        {/* <ListItem button key="List" data-testid="list">
            <ListItemIcon>{<ViewListIcon/>}</ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
        <ListItem button key="Add" onClick={handleClickOpen} data-testid="add" >
            <ListItemIcon>{<PersonAddIcon/>}</ListItemIcon>
            <ListItemText primary="Add" />
          </ListItem>
          <ListItem button key="Edit" data-testid="edit">
            <ListItemIcon>{<EditIcon/>}</ListItemIcon>
            <ListItemText primary="Edit Label" />
          </ListItem>
          <ListItem button key="Delete" data-testid="delete">
            <ListItemIcon>{<DeleteIcon/>}</ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem> */}
          {/* <List> */}
                    {primaryMenuItems.map((item) => (
                        <ListItem button key={item.name} onClick={item.action}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                 
            <ListItem button o>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary={"Reminders"} />
            </ListItem>

                  <ListItem button >
              <ListItemIcon>
                <EditOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Edit labels"} />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <ArchiveOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Archive"} />
            </ListItem>
            <ListItem button >
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Trash"} />
            </ListItem>
        </List>
        
      </Drawer>
        <Dialog open={openAdd} onClose={handleClose} margin="auto">
            
        </Dialog>   
        <Dialog open={openUpdate} onClose={handleClose} margin="auto">
             
        </Dialog>       
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container  className={classes.container}>
          <Grid container>
             
          </Grid>
        </Container>

        {/* <main className={classes.content}>
               <div className={classes.toolbar} />
                <CardList notes={notes}></CardList>
            </main> */}
      </main>
    </div>
    </Router>
  );
}


