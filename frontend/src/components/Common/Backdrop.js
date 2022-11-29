//backdrop to grey out the background when a modal is open

const Backdrop = (props) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-40"
            onClick={props.onClick}
        ></div>
    );
};

export default Backdrop;
