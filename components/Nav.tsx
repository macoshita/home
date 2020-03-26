import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Link from "~/components/Link";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props): JSX.Element {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Nav = (): JSX.Element => (
  <>
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Link href="/" variant="h6" color="inherit">
            @macoshita
          </Link>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
  </>
);

export default Nav;
