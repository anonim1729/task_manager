const Footer = ({ length }) => {
    return (
        <footer className="bottom-0 fixed h-10 w-full flex justify-center text-xl bg-sky-700 text-white items-center">
            <p>{length} Task{length !== 1 ? 's' : ''}</p>
        </footer>
    )
}
export default Footer