import { makeStyles } from "@material-ui/core";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px) !important`,
    },

    page: {
      background: "#dff9fb",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
      //   "&. appbar": {
      //     width: `calc(100% - ${drawerWidth}px) !important`,
      //   },
    },
    active: {
      background: "#F8EFBA",
    },
    title: {
      padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <ToolBar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Hirak</Typography>
          <Avatar src="/avatar.png" className={classes.avatar} />
        </ToolBar>
      </AppBar>

      {/* sidebar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Taking Notes
          </Typography>
        </div>

        {/* List/Links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                history.push(item.path);
              }}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
