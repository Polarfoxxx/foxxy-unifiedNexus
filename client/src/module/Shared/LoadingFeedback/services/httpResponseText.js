
import {
    faSpinner, faCircleCheck,
    faCommentSlash,
    faHand,
    faLock,
    faExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HTTPResponseText = {
    10: {
        text: "Loading",
        jsx: <FontAwesomeIcon icon={faSpinner} spinPulse size="xl" />
    },
    200: {
        text: "OK",
        jsx: <FontAwesomeIcon icon={faCircleCheck} bounce size="xl" />
    },
    201: {
        text: "Created",
        jsx: <FontAwesomeIcon icon={faCircleCheck} bounce size="xl" />
    },
    202: {
        text: "Accepted",
        jsx: <FontAwesomeIcon icon={faCircleCheck} bounce size="xl" />
    },
    204: {
        text: "No Content",
        jsx: <FontAwesomeIcon icon={faCommentSlash} bounce size="xl" />
    },
    400: {
        text: "Bad Request",
        jsx: <FontAwesomeIcon icon={faHand} bounce size="xl" />
    },
    401: {
        text: "Unauthorized",
        jsx: <FontAwesomeIcon icon={faLock} bounce size="xl" />
    },
    403: {
        text: "Forbidden",
        jsx: null
    },
    404: {
        text: "Not Found",
        jsx: null
    },
    405: {
        text: "Method Not Allowed",
        jsx: null
    },
    409: {
        text: "Conflict",
        jsx: null
    },
    500: {
        text: "Internal Server Error",
        jsx: <FontAwesomeIcon icon={faExclamation} bounce size="xl" />
    },
    503: {
        text: "Service Unavailable",
        jsx: null
    }
};
