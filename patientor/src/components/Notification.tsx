import Alert from "@mui/material/Alert";

const Notification = ({
	message,
	state,
}: {
	message: string;
	state: string;
}) => {
	if (message === null) {
		return <></>;
	} else if (state === "success") {
		return <Alert severity="success">{message}</Alert>;
	} else if (state === "error") {
		return <Alert severity="error">{message}</Alert>;
	}
	return <></>;
};

export default Notification;