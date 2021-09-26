import React from "react";
import clsx from "clsx";
import "./dashboard.scss";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import icon from "../../image/keep.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import SettingsSharpIcon from "@material-ui/icons/SettingsOutlined";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
// import InputBase from "@material-ui/core/InputBase";
import ListItem from "@material-ui/core/ListItem";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircle';
import { Switch } from "react-router-dom";
import ProtectedRoutes from "../../ProtectedRoutes.js";
import Notes from "../../component/CreateNote/notes";
//import ArchiveNotes from "../archiveNotes/archiveNotes";
// import TrashNotes from "../TrashNotes/trashNotes";
// import SearchField from "../SearchNotes/searchNotes"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffff",
    borderBottom: "lightgray solid 1px",
    boxShadow: "none",
  },
  topBar: {
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
  iconLogo: {
    width: "1.1em",
    height: "1.1em",
    [theme.breakpoints.down("xs")]: {
      width: "0.9em",
      height: "0.9em",
    },
  },
  appBarButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px 8px 8px 8px"
    },
  },
  drawer: {
    top: "70px",
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: "230px",
    borderRight: "lightgray solid 1px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    borderRight: "none",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  drawerButton: {
    borderTopRightRadius: "100px",
    borderBottomRightRadius: "100px",
  },
  profileIcon:{
    marginTop: "20px",
    border: "1px solid lightgray",
    borderRadius: "5px"
  },
  settingMenu: {
    marginTop: theme.spacing(4),
  },

  main: {
    marginTop: "80px",
    marginLeft: "100px",
    zIndex: "-1",
    minHeight: "100vh",
  },
  content: {
    width: "95%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  searchInput:{
    marginLeft: "10px", 
    width: "80%"
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [notes, setNotes] = React.useState(true);
  const [reminders, setReminders] = React.useState(false);
  const [editLabels, setEditLabels] = React.useState(false);
  const [achive, setAchive] = React.useState(false);
  const [trash, setTrash] = React.useState(false);
  const [search, setSearch] = React.useState();
 // const [searchTask, setSearchTask] = React.useState(false);

  const drawerOpen = () => {
    setOpen(true);
  };

  const nextPath = (path) => {
    props.history.push(path);
  };

  const settingHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const settingHandleClose = () => {
    setAnchorEl(null);
  };

  const profileHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const profileHandleClose = () => {
    setAnchorE2(null);
  };

  React.useEffect(() => {
    notesSelect();
  }, []);


//   const searchHandleClick = (event) => {
//     nextPath("../dashboard/search");
//   };

  const drawerClose = () => {
    setOpen(false);
  };

  const drawerOpenClose = () => {
    setOpen(!open);
  };

  const notesSelect = () => {
    setNotes(true);
    setReminders(false);
    setEditLabels(false);
    setAchive(false);
    setTrash(false);
    nextPath("../dashboard/notes");
  };

  const reminderSelect = () => {
    setNotes(false);
    setReminders(true);
    setEditLabels(false);
    setAchive(false);
    setTrash(false);
  };

  const editLabelSelect = () => {
    setNotes(false);
    setReminders(false);
    setEditLabels(true);
    setAchive(false);
    setTrash(false);
  };

  const achiveSelect = () => {
    setNotes(false);
    setReminders(false);
    setEditLabels(false);
    setAchive(true);
    setTrash(false);
    nextPath("../dashboard/archive");
  };

  const trashSelect = () => {
    setNotes(false);
    setReminders(false);
    setEditLabels(false);
    setAchive(false);
    setTrash(true);
    nextPath("../dashboard/trash");
  };

  const logOut = () => {
    localStorage.removeItem("fundooUserFName");
    localStorage.removeItem("fundooUserFName");
    localStorage.removeItem("fundooToken");
    localStorage.removeItem("fundooUserUserId");
    localStorage.removeItem("fundooUserEmail");
    nextPath("../login");
  };

  return (
    <div className="root" className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" position="fixed" className={classes.appBar}>
        <Toolbar className={classes.topBar}>
          <span className="leftOptions">
            <div className="startOptions">
              <div className="menuButton">
                <IconButton className={classes.appBarButton} onClick={drawerOpenClose} edge="start">
                  <MenuIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div>
                <img className="headerIcon" src={icon} />
              </div>
              <div className="headerTitle">FundooNotes
              </div>
            </div>

            <div className="search">
              <div className="searchIcon">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
              </div>
              {/* <InputBase 
                className={classes.searchInput}
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={searchHandleClick}
                classes={{
                  root: "inputRoot",
                  input: "inputInput",
                }}
                inputProps={{ "aria-label": "search" }}
              /> */}
            </div>
          </span>
          <span className="rightOptions">
            <div className="buttonContainer">
              <div className="searchedButton">
                <IconButton className={classes.appBarButton}>
                  <SearchIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div className="button">
                <IconButton className={classes.appBarButton}>
                  <ReplayOutlinedIcon className={classes.iconLogo} />
                </IconButton>
              </div>

              <div className="button">
                <IconButton className={classes.appBarButton}>
                  <DnsRoundedIcon className={classes.iconLogo} />
                </IconButton>
              </div>

              <div className="button">
                <IconButton className={classes.appBarButton} onClick={settingHandleClick}>
                  <SettingsSharpIcon className={classes.iconLogo} />
                </IconButton>
                <Paper>
                  <Menu
                    className={classes.settingMenu}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={settingHandleClose}
                  >
                    <MenuItem onClick={settingHandleClose}>Setting</MenuItem>
                    <MenuItem onClick={settingHandleClose}>
                      Enable dark Theam
                    </MenuItem>
                    <MenuItem onClick={settingHandleClose}>
                      Send Feedback
                    </MenuItem>
                    <MenuItem onClick={settingHandleClose}>Help</MenuItem>
                    <MenuItem onClick={settingHandleClose}>
                      App Downloads
                    </MenuItem>
                    <MenuItem onClick={settingHandleClose}>
                      Keyboard shortcuts
                    </MenuItem>
                  </Menu>
                </Paper>
              </div>
            </div>
            <div class="appsContainer">
              <div className="button">
                <IconButton className={classes.appBarButton}>
                  <AppsRoundedIcon className={classes.iconLogo} />
                </IconButton>
              </div>
              <div className="button">
                <IconButton
                className={classes.appBarButton}
                  onClick={profileHandleOpen}>
                  <AccountCircleOutlinedIcon className={classes.iconLogo} />
                </IconButton>
                <Paper>
                  <Menu
                    className={classes.settingMenu}
                    anchorEl={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={profileHandleClose}
                  >
                    <div className="MenuList">
                    <MenuItem>
                    <AccountCircleOutlinedIcon color="primary" style={{ fontSize: 65 }}/>
                    </MenuItem>
                    <MenuItem>
                      {localStorage.getItem("fundooUserFName")}{" "}
                      {localStorage.getItem("fundooUserLName")}
                    </MenuItem>
                    <MenuItem>
                      {localStorage.getItem("fundooUserEmail")}{" "}
                    </MenuItem>
                    <MenuItem onClick={logOut} className={classes.profileIcon} >
                      LogOut
                    </MenuItem>
                    </div>
                  </Menu>
                </Paper>
              </div>
            </div>
          </span>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer
          onMouseOver={drawerOpen}
          onMouseLeave={drawerClose}
          variant="permanent"
          color="transparent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className="drawerList">
            <List>
              <div className="drawerButton" onClick={notesSelect}>
                <ListItem
                  button
                  className="drawerListButton"
                  className={classes.drawerButton}
                  style={{ backgroundColor: notes ? "#ffe0b2" : "transparent" }}
                >
                  <ListItemIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Notes" />
                </ListItem>
              </div>

              <div className="drawerButton" onClick={reminderSelect}>
                <ListItem
                  button
                  className="drawerListButton"
                  className={classes.drawerButton}
                  style={{
                    backgroundColor: reminders ? "#ffe0b2" : "transparent",
                  }}
                >
                  <ListItemIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Reminders" />
                </ListItem>
              </div>

              <div className="drawerButton" onClick={editLabelSelect}>
                <ListItem
                  button
                  className="drawerListButton"
                  className={classes.drawerButton}
                  style={{
                    backgroundColor: editLabels ? "#ffe0b2" : "transparent",
                  }}
                >
                  <ListItemIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Edit Labels" />
                </ListItem>
              </div>

              <div className="drawerButton" onClick={achiveSelect}>
                <ListItem
                  button
                  className="drawerListButton"
                  className={classes.drawerButton}
                  style={{
                    backgroundColor: achive ? "#ffe0b2" : "transparent",
                  }}
                >
                  <ListItemIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Archive" />
                </ListItem>
              </div>

              <div className="drawerButton" onClick={trashSelect}>
                <ListItem
                  button
                  className="drawerListButton"
                  className={classes.drawerButton}
                  style={{ backgroundColor: trash ? "#ffe0b2" : "transparent" }}
                >
                  <ListItemIcon>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                      <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="trash" />
                </ListItem>
              </div>
            </List>
          </div>
        </Drawer>

        <main className={classes.main}>
          <div className={classes.content}>
            <Switch>
              <ProtectedRoutes path="/dashboard/notes">
                <Notes search={search} />
              </ProtectedRoutes>
              {/* <ProtectedRoutes path="/dashboard/archive">
                <ArchiveNotes />
              </ProtectedRoutes> */}
              {/* <ProtectedRoutes path="/dashboard/trash">
                <TrashNotes />
              </ProtectedRoutes>
              <ProtectedRoutes path="/dashboard/search">
                <SearchField search={search}/> 
              </ProtectedRoutes> */}
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
}



// vaishnavi code


// import React from "react";
// import Navbar from "../../component/Header/header";
// import Sidebar from '../../component/sideNavBar/sideNav'
// import Notes from "../../component/Create Note/createNote";
// import UserAPI from "../../service/UserAPI";

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: null,
//       drawerOpen: false,
//       allLabls: [],
//       lable: false,
//       profileImage: "",

//     };
//   }

//   handleDrawerOpen = () => {
//     this.setState({
//       drawerOpen: true,
//     });
//   };

//   handleDrawerClose = () => {
//     this.setState({
//       drawerOpen: false,
//     });
//   };


//   onclickdrawer = (value) => {
//     if (value === "Notes") {
//       this.setState({
//         reminderNote: "ab",
//         trashNote: false,
//         archiveNote
        
//         : false,
//         condition: true,
//       });
//     } else if (value === "Trash") {
//       this.setState({
//         reminderNote: "ab",
//         trashNote: true,
//         archiveNote: false,
//         condition: false,
//       });
//     } else if (value === "Archive") {
//       this.setState({
//         reminderNote: "ab",
//         archiveNote: true,
//         trashNote: false,
//         condition: false,
//       });
//     } else if (value === "Edit labels") {
//       this.setState({ lable: true }); 
//     } else if (value === "Reminders") {
//       this.setState({
//         reminderNote: null,
//         archiveNote: false,
//         condition: false,
//         trashNote: false,
//       });
//     } 
//     // else {
//     //   UserNoteServices.getNotesListByLabels(value, (res) => {
//     //     this.setState({
//     //       allNotes: res.data.data.data,
//     //       condition: false,
//     //       reminderNote: "ab",
//     //     });
//     //   });
//     // }
//   };


//   render() {
//     return (
//       <>
//         {this.state.condition === true ? (
//           <Notes
//             // note={this.componentWillMount}
//             allLabls={this.state.allLabls}
//             // update={this.componentWillMount}
//           ></Notes>
//         ) : (
//           ""
//         )}
//         <Sidebar
//           menuOpen={this.handleDrawerOpen}
//           menuClose={this.handleDrawerClose}
//           drawerOpen={this.state.drawerOpen}
//           drawerclick={this.onclickdrawer}
//           allLabls={this.state.allLabls}
//         ></Sidebar>
//         <Navbar
//           details={this.state.item}
//           menuOpen={this.handleDrawerOpen}
//           // update={this.componentWillMount}
//           searchValue={this.searchValue}
//           imageUrl={this.state.profileImage}
//           changeView={this.changeView}
//         ></Navbar>
//       </>
//     );
//   }
// };



// export default Dashboard;















// rekha code



// import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import NotesIcon from "@material-ui/icons/EmojiObjectsOutlined";
// import ReminderIcon from "@material-ui/icons/NotificationsOutlined";
// import EditIcon from "@material-ui/icons/EditOutlined";
// import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
// import TrashIcon from "@material-ui/icons/DeleteOutlined";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
// import RefreshIcon from "@material-ui/icons/RefreshOutlined";
// import ListViewIcon from "@material-ui/icons/DnsOutlined";
// import SettingsIcon from "@material-ui/icons/SettingsOutlined";
// import AppsIcon from "@material-ui/icons/AppsOutlined";
// import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
//  import KeepIcon from "../../image/keep.png" ;
// import Notes from "../../component/Notes/notes";
//  import Archive from "../../Archive/archive";
//  import Trash from "../../Trash/trash";
// import UserAPI from "../../service/UserAPI";
// import "../Dashboard/dashboard.scss";
// import { Route, Switch, useHistory } from "react-router";
// import { Button, Divider, Paper, Popper } from "@material-ui/core";
// import { useState } from "react";
//   import store from "../../store/store";
//  import { connect } from "react-redux";

// const drawerWidth = 200;
// const user = new UserAPI();
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
// }));

// function DashBoard(props) {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [openProfile, setProfile] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchDisplay, setsearch] = useState("none");
//   const [pageTitle, setTitle] = useState("Notes");
//   const [bgColor, setBg] = useState({
//     noteColor: "#feefc3",
//     remColor: "#fff",
//     labelColor: "#fff",
//     archColor: "#fff",
//     trashColor: "#fff",
//   });
//   const history = useHistory();

//   const handleDrawer = () => {
//     if (open) {
//       setOpen(false);
//     } else {
//       setOpen(true);
//     }
//   };

//   const handleProfile = (e) => {
//     setAnchorEl(e.currentTarget);
//     setProfile(!openProfile);
//   };

//   const handleLogout = () => {
//     user
//       .LogOut()
//       .then((res) => {
//         console.log("logged out successfully");
//         localStorage.removeItem("token");
//         history.push("/sign-in");
//       })
//       .catch((err) => {
//         console.log("logout", err);
//       });
//   };

//   const redirect = (e) => {
//     const url = e;
//     console.log(url);
//     if (url === "notes") {
//       props.dispatch({ type: "Notes" });
//       history.push("/dashboard");
//     } else if (url === "reminder") {
//       props.dispatch({ type: "Reminder" });
//       history.push("/dashboard/reminder");
//     } else if (url === "editlabel") {
//       props.dispatch({ type: "Label" });
//       history.push("/dashboard/editlabels");
//     } else if (url === "archive") {
//       props.dispatch({ type: "Archive" });
//       history.push("/dashboard/archive");
//     } else if (url === "trash") {
//       props.dispatch({ type: "Trash" });
//       history.push("/dashboard/trash");
//     }
//   };

//   const handleSearchBar = () => {
//     setsearch("flex");
//     document.getElementById("resp-search-icon").style.display = "none";
//     document.getElementById("keep-heading").style.display = "none";
//     document.getElementById("header-icons").style.width = "50%";
//   };

//   store.subscribe(() => {
//     console.log(props);
//     let title = store.getState().titleReducer.heading;
//     let active = store.getState().listColorReducer.active;
//     if (title === "Notes") {
//       setTitle(title);
//       setBg({
//         noteColor: active,
//         remColor: "#fff",
//         labelColor: "#fff",
//         archColor: "#fff",
//         trashColor: "#fff",
//       });
//     } else if (title === "Reminder") {
//       setTitle(title);
//       setBg({
//         noteColor: "#fff",
//         remColor: active,
//         labelColor: "#fff",
//         archColor: "#fff",
//         trashColor: "#fff",
//       });
//     } else if (title === "Label") {
//       setTitle(title);
//       setBg({
//         noteColor: "#fff",
//         remColor: "#fff",
//         labelColor: active,
//         archColor: "#fff",
//         trashColor: "#fff",
//       });
//     } else if (title === "Archive") {
//       setTitle(title);
//       setBg({
//         noteColor: "#fff",
//         remColor: "#fff",
//         labelColor: "#fff",
//         archColor: active,
//         trashColor: "#fff",
//       });
//     } else if (title === "Trash") {
//       setTitle(title);
//       setBg({
//         noteColor: "#fff",
//         remColor: "#fff",
//         labelColor: "#fff",
//         archColor: "#fff",
//         trashColor: active,
//       });
//     }
//   });

//   document.body.style.backgroundColor = "white";
//   document.title = "Dashboard";

//   return (
//     <div className="dashboard-container">
//       <CssBaseline />
//       <AppBar position="fixed" className={clsx(classes.appBar)} color="inherit">
//         <Toolbar className="tool-bar">
//           <IconButton
//             color="default"
//             aria-label="open drawer"
//             onClick={handleDrawer}
//             edge="start"
//             className="dashbd-menu-btn"
//           >
//             <MenuIcon fontSize="small" />
//           </IconButton>
//           <Typography className={classes.title} variant="h6">
//             <div className="dashbd-keep-icon" id="keep-heading">
//               <img src={KeepIcon} alt="keep-icon" className="keep-icon" />
//               <span>{pageTitle}</span>
//             </div>
//           </Typography>
//           <div className="dashbd-search">
//             <div className="dashbd-search-icon">
//               <SearchIcon />
//             </div>
//             <div className="search-bar">
//               <InputBase
//                 placeholder="Search…"
//                 className="dashbd-inputbase"
//                 style={{ paddingLeft: 30 + "px" }}
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </div>
//           </div>
//           <div style={{ display: searchDisplay }} className="resp-search-bar">
//             <div className="">
//               <SearchIcon fontSize="small" />
//             </div>
//             <div className="">
//               <InputBase
//                 placeholder="Search…"
//                 className="resp-search-input"
//                 style={{ paddingLeft: "5px" }}
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </div>
//           </div>
//           <div className="dashbd-header-icons" id="header-icons">
//             <span className="search-icon" id="resp-search-icon">
//               <SearchIcon
//                 style={{ marginTop: "2.5px" }}
//                 fontSize="small"
//                 onClick={handleSearchBar}
//               />
//             </span>
//             <RefreshIcon className="ref-icon icons" />
//             <ListViewIcon className="lis-icon icons" id="list-icon" />
//             <SettingsIcon className="set-icon icons" />
//             <div className="google-icons">
//               <AppsIcon className="app-icon icons" />
//               <AccountIcon className="acc-icon icons" onClick={handleProfile} />
//             </div>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         className={clsx(classes.drawer, {
//           [classes.drawerOpen]: open,
//           [classes.drawerClose]: !open,
//         })}
//         classes={{
//           paper: clsx({
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           }),
//         }}
//       >
//         <List className="dashbd-list">
//           <div
//             className="list-items"
//             name="notes"
//             onClick={() => redirect("notes")}
//             style={{
//               backgroundColor: bgColor.noteColor,
//               borderTopRightRadius: "100px",
//               borderBottomRightRadius: "100px",
//             }}
//           >
//             <NotesIcon />
//             <span className="list-name">Notes</span>
//           </div>
//           <div
//             className="list-items"
//             onClick={() => redirect("reminder")}
//             name="reminder"
//             style={{
//               backgroundColor: bgColor.remColor,
//               borderTopRightRadius: "100px",
//               borderBottomRightRadius: "100px",
//             }}
//           >
//             <ReminderIcon />
//             <span className="list-name">Reminder</span>
//           </div>
//           <div
//             className="list-items"
//             onClick={() => redirect("editlabel")}
//             name="label"
//             style={{
//               backgroundColor: bgColor.labelColor,
//               borderTopRightRadius: "100px",
//               borderBottomRightRadius: "100px",
//             }}
//           >
//             <EditIcon />
//             <span className="list-name">Edit Label</span>
//           </div>
//           <div
//             className="list-items"
//             onClick={() => redirect("archive")}
//             name="archive"
//             style={{
//               backgroundColor: bgColor.archColor,
//               borderTopRightRadius: "100px",
//               borderBottomRightRadius: "100px",
//             }}
//           >
//             <ArchiveIcon />
//             <span className="list-name">Archive</span>
//           </div>
//           <div
//             className="list-items"
//             onClick={() => redirect("trash")}
//             name="trash"
//             style={{
//               backgroundColor: bgColor.trashColor,
//               borderTopRightRadius: "100px",
//               borderBottomRightRadius: "100px",
//             }}
//           >
//             <TrashIcon />
//             <span className="list-name">Trash</span>
//           </div>
//         </List>
//       </Drawer>
//       <div className="content-container">
//         <Switch>
//           <Route exact path="/dashboard" component={Notes}></Route>
//           <Route exact path="/dashboard/archive" component={Archive}></Route>
//           <Route exact path="/dashboard/trash" component={Trash}></Route>
//         </Switch>
//       </div>

//       <Popper
//         name="more"
//         open={openProfile}
//         anchorEl={anchorEl}
//         placement="bottom"
//         transition
//         style={{ zIndex: 10, right: 0, width: "200px" }}
//       >
//         {
//           <Paper className="profile-popper">
//             <div>
//               <AccountIcon fontSize="large" />
//               {/* <h3>Babbur Vyshnavi</h3> */}
//             </div>
//             <Divider />
//             <Button
//               onClick={handleLogout}
//               style={{
//                 backgroundColor: "#1976d2",
//                 color: "#fff",
//                 padding: "5px 10px",
//                 fontWeight: "600",
//                 margin: "20px",
//               }}
//             >
//               Logout
//             </Button>
//           </Paper>
//         }
//       </Popper>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     state,
//   };
// }

// export default connect(mapStateToProps)(DashBoard);









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// single page

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles} from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import { Button } from '@material-ui/core';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import {useHistory} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
//  import { User } from '../../service/user';
// import Dialog from '@material-ui/core/Dialog';
// import NoteIcon from '@material-ui/icons/Note';
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
//  import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
// // import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
// import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// // import ProtectedRouter from "../../component/ProtectedRouter";
// // import {CardList} from '';
// // import NotesIcon from "@material-ui/icons/EmojiObjectsOutlined";
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import './dashboard.scss'

// const user = new User();
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: 'none',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
// }));

// export default function Dashboard() {
//   let history = useHistory();
//   const classes = useStyles();

//   const [open, setOpen] = React.useState(false);
//   const [openAdd, setOpenAdd] = React.useState(false);
//   const [openUpdate, setOpenUpdate] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpenAdd(true);
//   };

//   // const handleNotesOpen = () => {
//   //   setOpen(open ? false : true);
//   //   props.dispatch({ type: "Notes" });
//   //   history.push("/fundooKeep/notes");
//   // };
//   const handleClose = () => {
//     setOpenAdd(false);
//     setOpenUpdate(false);
//   };

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   // const [menuSelected, setMenuSelected] = useState("Notes");
//   const primaryMenuItems = [
//     { name: "Notes", icon: <NoteIcon /> },
// ];

// // const handleNotesOpen = () => {
// //   setOpen(open ? false : true);
// //   props.dispatch({ type: "Notes" });
// //   history.push("/fundooKeep/notes");
// // };
//   const handleLogout = () => {
//     localStorage.clear();
//     history.push('/login');
//   };
// /**
//      * @description creating dashboard page
//      */
//   return (
//     <Router>
//     <div className="root">
//       <CssBaseline />
//       <AppBar position="absolute" 
//       className={clsx(classes.appBar,
//        open && classes.appBarShift)}>
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography component="h1" variant="h6" align="left" color="inherit" noWrap className={classes.title} data-testid="title">
//             FundooNotes App
//           </Typography>
//           <Button
//             className={classes.logoutButton}
//             color="inherit"
//             onClick={handleLogout}
//             data-testid="logout"
//           >
//             <ExitToAppIcon/>
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//             {primaryMenuItems.map((item) => (
//               <ListItem button key={item.name} onClick={item.action}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.name} />
//                      </ListItem>
//                ))}

// {/* <ListItem button key={text}>
//                 <ListItemIcon className={classes.icon}>
//                     <NotesIcon
//                       className="list-items"
//                       aria-label="open drawer"
//                       onClick={handleNotesOpen}
//                       edge="start"
//                     />
                  
//                </ListItemIcon>
//                </ListItem>  */}
              
//             <ListItem button >
//               <ListItemIcon>
//                 <NotificationsNoneIcon />
//               </ListItemIcon>
//               <ListItemText primary={"Reminders"} />
//             </ListItem>

//                   <ListItem button >
//               <ListItemIcon>
//                 <EditOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary={"Edit labels"} />
//             </ListItem>
//             <ListItem button >
//               <ListItemIcon>
//                 <ArchiveOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary={"Archive"} />
//             </ListItem>
//             <ListItem button >
//               <ListItemIcon>
//                 <DeleteOutlineOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary={"Trash"} />
//             </ListItem>
//         </List>
        
//       </Drawer>
//         <Dialog open={openAdd} onClose={handleClose} margin="auto">
            
//         </Dialog>   
//         <Dialog open={openUpdate} onClose={handleClose} margin="auto">
             
//         </Dialog>       
//         <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container  className={classes.container}>
//           <Grid container>
             
//           </Grid>
//         </Container>

//         {/* <main className={classes.content}>
//                <div className={classes.toolbar} />
//                 <CardList notes={notes}></CardList>
//             </main> */}
//       </main>
//     </div>
//     </Router>
//   );
// }


