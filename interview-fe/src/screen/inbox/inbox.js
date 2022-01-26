import React, { useContext, useEffect, useState } from 'react';
import { propEq, prop, filter, length, pipe, propOr } from 'ramda';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import { getMessages } from "../../api/messages";
import { UserContext } from "../../context/user-context";

const MINUTE_MS = 60000;

const InboxItem = () => {
    const { user: localUser } = useContext(UserContext);
    const [count, setCount] = useState(0);
    const isCurentUser = ({ user }) => propEq("id", prop("id", localUser))(user);

    useEffect(() => {
        const interval = setInterval(() => {
            getMessages().then((res) => res.json())
                .then((res) => {
                    if (res.error) {
                        throw res.error;
                    }
                    const messagesCount = pipe(propOr([], 'messages'), filter(isCurentUser), length)(res);
                    setCount(messagesCount);
                    return res;
                })
        }, MINUTE_MS);

        return () => clearInterval(interval);
    }, [])

    return <Badge badgeContent={count} color="error">
        <Typography variant="h1" component="h2">
        <MailIcon />
        </Typography>
    </Badge>
}

export default InboxItem;