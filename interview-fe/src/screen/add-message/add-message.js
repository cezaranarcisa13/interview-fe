import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {
    Card,
    TextField,
    Grid,
    Button,
    CardHeader,
    FormControl,
} from "@mui/material";
import { Dropdown } from "../../components";
import { UserContext } from "../../context/user-context";
import { sendMessage } from "../../api/messages";
import "./add-message.css";

const SendMessage = () => {
    const history=useNavigate();
    const { usersList } = useContext(UserContext);
    const [createForm, setCreateForm] = useState({
        user: "",
        userError: false,
        message: "",
        messageError: false,

    });
    const [error, setError] = useState(false);
    const checkForTrue = (object) => {
        var result = false;

        for (var i in object) {
            if (object[i] === true) {
                result = true;
            }
        }
        return result;
    };

    const checkFieldValue = () => {
        var values = {
            userError: false,
            messageError: false,
        };

        for (var i in createForm) {
            const field = i.includes("Error");
            if (!field && (createForm[i] === "" || createForm[i].length === 0)) {
                const errorField = i + "Error";
                values = { ...values, [errorField]: true };
            }
        }
        setCreateForm({ ...createForm, ...values });
        return checkForTrue(values);
    };

    const handleSubmit = () => {
        const { user, message } = createForm;
        let isError = false;
        const isValid = !checkForTrue(createForm) && !checkFieldValue() ;
        if (isValid) {
          sendMessage({ userId:user, message }).then((error) => {
            isError = error.isError;
            if (isError === undefined) {
              setError(false);
             history("/messages");
            }
            isError && setError(true);
          });
        }
    };

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        const valueError =
            value === "0" || value === "" || value === null ? true : false;
        setCreateForm({
            ...createForm,
            [name]: value,
            [name + "Error"]: valueError,
        });
    };

    return (
        <Grid
            container
            xs={12}
            className="send-container"
        >
            <Grid item xs={6}>
                <Card title="Login">
                    <Grid item container spacing={3} className="send-container" >
                        <Grid item xs={12}>
                            <CardHeader
                                title={"Send message to any user"}
                                className="login-header"
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <FormControl required className="form-control">
                                <Dropdown
                                    values={usersList}
                                    user={createForm.user}
                                    error={createForm.userError}
                                    handleChange={handleChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={7}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="Message"
                                variant="outlined"
                                type="text"
                                value={createForm.message}
                                onChange={handleChange("message")}
                                helperText={createForm.messageError ? "Required" : ""}
                                error={createForm.messageError}
                            />
                        </Grid>
                        <Grid item xs={7} className="button-css">
                            <Button
                                variant="outlined"
                                color="primary"
                                fullWidth
                                onClick={handleSubmit}
                            >
                                Send message
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SendMessage;