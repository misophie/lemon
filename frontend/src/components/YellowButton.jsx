import { Button, Typography} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from 'prop-types';

export const YellowButton = ({text, handleClick}) => {
    const theme = useTheme();

    return(
        <Button
            onClick={handleClick}
            style={{ backgroundColor: theme.palette.buttonColor.default }}
            sx={{padding:"3% 10%", borderRadius: "20px"}}
            variant="contained"
          >
            <Typography variant="h6" sx={{color: "black"}}>
                {text}
            </Typography>
        </Button>
    )
}

YellowButton.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func

}